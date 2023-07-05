'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const expressHandlebars = require('express-handlebars');

const { createPagination } = require('express-handlebars-paginate');
const { createFooterForNewsItem, geHandlebars, equalString } = require('./controllers/handlebarsHelper');

const session = require('express-session');
const passport = require('./controllers/passport');
const flash = require('connect-flash');

const headerDataController = require('./controllers/headerDataController');

// app.use(express.static(__dirname + "/source"));
const path = require('path');
app.use(express.static(path.join(__dirname + '/source')));

// config for express-handlebars
app.engine(
  'hbs',
  expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
    },
    helpers: {
      // createStarList,
      createFooterForNewsItem,
      geHandlebars,
      equalString,
      createPagination,
    },
  }),
);
app.set('view engine', 'hbs');

// Setup HTTP post
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup session
app.use(
  session({
    secret: 'process.env.SESSION_SECRET',
    // store: new redisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 20 * 60 * 1000, // 20 minutes
    },
  }),
);

// Setup passport for login
app.use(passport.initialize());
app.use(passport.session());

// Setup connect-flash for session error warning
app.use(flash());

app.use('/', require('./routes/createTablesRouter'));

// Setup init middleware
app.use(async (req, res, next) => {
  res.locals.isLoggedIn = req.isAuthenticated();
  await headerDataController.getHeaderData(req, res);
  next();
});

// Routes
app.use('/', require('./routes/indexRouter'));
app.use('/posts', require('./routes/postsRouter'));
app.use('/users', require('./routes/authRouter'));
app.use('/users', require('./routes/usersRouter'));

app.use(async (req, res, next) => {
  res.status(404).render('error', {
    message: 'Không tìm thấy trang',
  });
});

app.use(async (error, req, res, next) => {
  console.error(error);
  res.status(500).render('error', {
    message: 'Lỗi hệ thống',
  });
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
