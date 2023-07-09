let controller = {};
const models = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

controller.show = async (req, res) => {
  let countFilter = 0;
  // Get query data
  let queryCategory = 0;
  if (!isNaN(req.query.category)) {
    countFilter += 1;
    queryCategory = parseInt(req.query.category);
  }

  let queryTag = 0;
  if (!isNaN(req.query.tag)) {
    countFilter += 1;
    queryTag = parseInt(req.query.tag);
  }

  let querySearch = '';
  if (req.query.search && req.query.search !== '') {
    countFilter += 1;
    querySearch = req.query.search;
  }

  let queryType = 'default';
  if (['latest', 'feature', 'premium'].includes(req.query.type)) {
    countFilter += 1;
    queryType = req.query.type;
  }

  const queryPage = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));

  const tags = await models.Tag.findAll();
  res.locals.tags = tags;

  // Headline
  //// Headline for Category
  if (queryCategory > 0) {
    const categoryHeadline = {
      main: null,
      subs: [],
    };

    const queriedCategory = await models.Category.findByPk(queryCategory);

    if (queriedCategory === null) {
      res.locals.newsListMessage = 'Không tìm thấy chuyên mục';
    } else {
      categoryHeadline.main =
        queriedCategory.parent_category_id !== null
          ? await models.Category.findByPk(queriedCategory.parent_category_id)
          : queriedCategory;
      categoryHeadline.subs = await models.Category.findAll({
        where: { parent_category_id: categoryHeadline.main.id },
      });
      categoryHeadline.subs?.forEach((sub) => {
        if (sub.id == queryCategory) {
          sub.isChosen = true;
        }
      });
      res.locals.categoryHeadline = categoryHeadline;
    }
  }

  //// Headline for Tag
  if (queryTag > 0) {
    const tagHeadline = await models.Tag.findByPk(queryTag);
    if (tagHeadline === null) {
      res.locals.newsListMessage = 'Không tìm thấy nhãn';
    } else {
      res.locals.tagHeadline = tagHeadline;
    }
  }

  //// Headline for Search
  // if (querySearch !== "") {
  //   res.locals.searchHeadline = querySearch;
  // }

  if (countFilter > 1) {
    res.locals.newsListMessage =
      'Đang sử dụng nhiều bộ lọc.<br>Vui lòng chỉ chọn một trong các bộ lọc:<ul><li>Chuyên mục</li><li>Nhãn</li><li>Từ khoá</li><li>Mới nhất</li><li>Xem nhiều</li><li>Premium</li></ul>';
  }

  if (res.locals.newsListMessage) {
    res.render('news-list-page');
    return;
  }

  // Filter option with query data
  const options = {
    attributes: ['id', 'title', 'avatar_link', 'summary', 'content', 'published_time', 'is_premium', 'status'],
    include: [
      {
        model: models.Category,
        as: 'main_category',
      },
    ],
    where: [
      {
        status: 'Publish',
        published_time: {
          [Op.lte]: new Date(),
        },
      },
    ],
    order: [['is_premium', 'DESC']],
  };

  // Query category
  if (queryCategory > 0) {
    options.where[0][Op.or] = [{ category_id: queryCategory }, { main_category_id: queryCategory }];
  }

  // Query tag
  if (queryTag > 0) {
    const postIds = [];
    await models.PostTag.findAll({
      where: { tag_id: queryTag },
      attributes: ['post_id'],
    }).then((posts) => {
      posts.forEach((post) => postIds.push(post.post_id));
    });

    options.where[0].id = { [Op.in]: postIds };
  }

  if (querySearch !== '') {
    res.locals.searchHeadline = querySearch;

    const searchFilter = req.query.filter;

    if (['title', 'content', 'summary'].includes(searchFilter)) {
      options.where.push(
        sequelize.literal(`to_tsvector('english', ${searchFilter}) @@ phraseto_tsquery('english', :query)`),
      );
    } else {
      options.where.push(sequelize.literal(`to_tsvector('english', title) @@ phraseto_tsquery('english', :query)`));
    }

    options.replacements = {
      query: querySearch,
    };
  }

  const user = req.user;
  const now = new Date();
  let premiumOptions;
  if (!user || (user.role_id == 1 && user.premiumTime < now)) {
    premiumOptions = ['false'];
  } else {
    premiumOptions = ['false', 'true'];
  }

  if (queryType === 'premium') {
    let premiumMessage;
    if (!user) {
      premiumMessage = 'Vui lòng đăng nhập để theo dõi những bài viết Premium';
      res.render('premium-user-page', { premiumMessage: premiumMessage });
      return;
    } else if (user.role_id == 1 && user.premiumTime < now) {
      premiumMessage = 'Hãy gia hạn để theo dõi những bài viết Premium';
      res.render('premium-user-page', { premiumMessage: premiumMessage });
      return;
    }
  }

  options.where[0].is_premium = { [Op.in]: premiumOptions };

  let headline = '';
  switch (queryType) {
    case 'premium':
      headline = 'Premium';
      options.where[0].is_premium = { [Op.in]: [true] };
      break;
    case 'feature':
      headline = 'Xem nhiều';
      options.order = [['view_count', 'DESC']];
      break;
    case 'latest':
      headline = 'Mới nhất';
      options.order = [['published_time', 'DESC']];
      break;
    case 'default':
      options.order.push(['published_time', 'DESC']);
  }
  res.locals.headline = headline;

  // Get originalUrl for headline link
  res.locals.originalUrl = removeParam('page', req.originalUrl);
  if (Object.keys(req.query).length == 0) {
    res.locals.originalUrl = res.locals.originalUrl + '?';
  }

  // Pagination
  const postLimit = 6;
  options.limit = postLimit;
  options.offset = postLimit * (queryPage - 1);

  const { rows, count } = await models.Post.findAndCountAll(options);

  res.locals.pagination = {
    page: queryPage,
    limit: postLimit,
    totalRows: count,
    queryParams: req.query,
  };

  res.locals.posts = rows;

  res.render('news-list-page');
};

controller.showDetails = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  const post = await models.Post.findOne({
    attributes: [
      'id',
      'title',
      'avatar_link',
      'background_image_link',
      'content',
      'is_premium',
      'published_time',
      'main_category_id',
      'category_id',
      'status',
      'view_count',
    ],
    where: { id: queryId },
    include: [
      {
        model: models.Writer,
        attributes: ['nickname'],
      },
    ],
  });

  const now = new Date();
  if (post.status != 'Publish' || post.published_time > now) {
    return res.status(404).render('error', {
      message: 'Không tìm thấy trang',
    });
  }

  // Increase 1 view
  await models.Post.update(
    {
      view_count: parseInt(post.view_count, 10) + 1,
    },
    {
      where: { id: queryId },
    },
  );

  // Headline
  const categoryHeadline = {};
  categoryHeadline.main = await models.Category.findByPk(post.main_category_id);
  if (post.main_category_id != post.category_id)
    categoryHeadline.subs = [await models.Category.findByPk(post.category_id)];
  res.locals.categoryHeadline = categoryHeadline;

  // Comment
  post.comments = await models.Comment.findAll({
    attributes: ['id', 'content', 'createdAt'],
    include: [
      {
        model: models.User,
        attributes: ['name', 'avatar_link'],
        include: [
          {
            model: models.Role,
            attributes: ['name'],
          },
        ],
      },
    ],
    where: {
      post_id: queryId,
    },
    order: [['createdAt', 'DESC']],
  });

  // Tag
  const tagIds = [];
  await models.PostTag.findAll({
    where: { post_id: queryId },
    attributes: ['tag_id'],
  }).then((tags) => {
    tags.forEach((tag) => tagIds.push(tag.tag_id));
  });

  post.tags = await models.Tag.findAll({
    where: {
      id: { [Op.in]: tagIds },
    },
  });

  res.locals.post = post;

  const user = req.user;
  let premiumOptions;
  if (!user || (user.role_id == 1 && user.premiumTime < now)) {
    premiumOptions = ['false'];
  } else {
    premiumOptions = ['false', 'true'];
  }

  // Related Posts
  const relatedPosts = await models.Post.findAll({
    attributes: ['id', 'title', 'avatar_link', 'summary', 'is_premium', 'published_time'],
    include: [
      {
        model: models.Category,
        as: 'main_category',
        attributes: ['id', 'name'],
      },
    ],
    where: {
      main_category_id: categoryHeadline.main.id,
      status: 'Publish',
      published_time: {
        [Op.lte]: new Date(),
      },
      id: {
        [Op.ne]: queryId,
      },
      is_premium: {
        [Op.in]: premiumOptions,
      },
    },
  });

  // Shuffle the relatedPosts array randomly
  const shuffledPosts = relatedPosts.sort(() => 0.5 - Math.random());

  // Retrieve only the first 5 shuffled posts
  const randomRelatedPosts = shuffledPosts.slice(0, 5);

  res.locals.relatedPosts = randomRelatedPosts;

  res.render('news-detail-page');
};

controller.showPreview = async (req, res) => {
  const queryId = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
  const post = await models.Post.findOne({
    attributes: [
      'id',
      'title',
      'avatar_link',
      'background_image_link',
      'content',
      'is_premium',
      'published_time',
      'main_category_id',
      'category_id',
      'updatedAt',
    ],
    where: { id: queryId },
    include: [
      {
        model: models.Writer,
        attributes: ['nickname'],
      },
    ],
  });

  // Headline
  const categoryHeadline = {};
  categoryHeadline.main = await models.Category.findByPk(post.main_category_id);
  if (post.main_category_id != post.category_id)
    categoryHeadline.subs = [await models.Category.findByPk(post.category_id)];
  res.locals.categoryHeadline = categoryHeadline;

  // Tag
  const tagIds = [];
  await models.PostTag.findAll({
    where: { post_id: queryId },
    attributes: ['tag_id'],
  }).then((tags) => {
    tags.forEach((tag) => tagIds.push(tag.tag_id));
  });

  post.tags = await models.Tag.findAll({
    where: {
      id: { [Op.in]: tagIds },
    },
  });

  res.locals.post = post;

  res.render('news-preview-page');
};

function removeParam(key, sourceURL) {
  var rtn = sourceURL.split('?')[0],
    param,
    params_arr = [],
    queryString = sourceURL.indexOf('?') !== -1 ? sourceURL.split('?')[1] : '';
  if (queryString !== '') {
    params_arr = queryString.split('&');
    for (var i = params_arr.length - 1; i >= 0; i -= 1) {
      param = params_arr[i].split('=')[0];
      if (param === key) {
        params_arr.splice(i, 1);
      }
    }
    if (params_arr.length) rtn = rtn + '?' + params_arr.join('&');
  }
  return rtn;
}

module.exports = controller;
