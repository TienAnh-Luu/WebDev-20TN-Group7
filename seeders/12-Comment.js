"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        content:
          "Bài viết rất cung cấp và đáng tin cậy. Tôi cảm thấy yên tâm khi đọc và dựa vào thông tin được trình bày để nắm bắt vấn đề.",
        post_id: 60,
        author_id: 16,
        stars: 5,
      },
      {
        content:
          "Bài viết rất cung cấp và đáng tin cậy. Tôi cảm thấy yên tâm khi đọc và dựa vào thông tin được trình bày để nắm bắt vấn đề.",
        post_id: 16,
        author_id: 18,
        stars: 3,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 14,
        author_id: 19,
        stars: 2,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 58,
        author_id: 15,
        stars: 3,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 7,
        author_id: 17,
        stars: 5,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 37,
        author_id: 17,
        stars: 4,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 71,
        author_id: 17,
        stars: 1,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 5,
        author_id: 16,
        stars: 2,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 13,
        author_id: 15,
        stars: 5,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 9,
        author_id: 15,
        stars: 4,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 23,
        author_id: 17,
        stars: 5,
      },
      {
        content:
          "Tôi cảm thấy được truyền cảm hứng từ bài viết này. Nó khơi gợi niềm đam mê và khát khao để tìm hiểu thêm về chủ đề.",
        post_id: 2,
        author_id: 16,
        stars: 1,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 62,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 34,
        author_id: 15,
        stars: 1,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 80,
        author_id: 18,
        stars: 2,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 75,
        author_id: 15,
        stars: 4,
      },
      {
        content:
          "Tôi cảm thấy được truyền cảm hứng từ bài viết này. Nó khơi gợi niềm đam mê và khát khao để tìm hiểu thêm về chủ đề.",
        post_id: 58,
        author_id: 18,
        stars: 5,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 61,
        author_id: 19,
        stars: 5,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 27,
        author_id: 19,
        stars: 3,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 12,
        author_id: 16,
        stars: 5,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 70,
        author_id: 18,
        stars: 4,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 62,
        author_id: 15,
        stars: 4,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 54,
        author_id: 19,
        stars: 3,
      },
      {
        content:
          "Tôi cảm thấy được truyền cảm hứng từ bài viết này. Nó khơi gợi niềm đam mê và khát khao để tìm hiểu thêm về chủ đề.",
        post_id: 86,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 46,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 74,
        author_id: 16,
        stars: 1,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 34,
        author_id: 19,
        stars: 5,
      },
      {
        content:
          "Bài viết rất cung cấp và đáng tin cậy. Tôi cảm thấy yên tâm khi đọc và dựa vào thông tin được trình bày để nắm bắt vấn đề.",
        post_id: 32,
        author_id: 18,
        stars: 3,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 50,
        author_id: 16,
        stars: 5,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 53,
        author_id: 18,
        stars: 4,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 36,
        author_id: 18,
        stars: 1,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 60,
        author_id: 16,
        stars: 4,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 72,
        author_id: 19,
        stars: 1,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 65,
        author_id: 17,
        stars: 5,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 37,
        author_id: 17,
        stars: 3,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 19,
        author_id: 19,
        stars: 1,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 14,
        author_id: 19,
        stars: 3,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 10,
        author_id: 15,
        stars: 5,
      },
      {
        content:
          "Tôi cảm thấy được truyền cảm hứng từ bài viết này. Nó khơi gợi niềm đam mê và khát khao để tìm hiểu thêm về chủ đề.",
        post_id: 30,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 8,
        author_id: 16,
        stars: 2,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 52,
        author_id: 17,
        stars: 1,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 7,
        author_id: 17,
        stars: 3,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 57,
        author_id: 17,
        stars: 1,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 17,
        author_id: 17,
        stars: 1,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 56,
        author_id: 19,
        stars: 3,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 78,
        author_id: 16,
        stars: 1,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 61,
        author_id: 16,
        stars: 4,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 18,
        author_id: 17,
        stars: 1,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 72,
        author_id: 16,
        stars: 2,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 46,
        author_id: 18,
        stars: 3,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 69,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 6,
        author_id: 19,
        stars: 3,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 69,
        author_id: 15,
        stars: 4,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 44,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 86,
        author_id: 19,
        stars: 3,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 14,
        author_id: 19,
        stars: 5,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 26,
        author_id: 15,
        stars: 3,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 9,
        author_id: 19,
        stars: 5,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 54,
        author_id: 15,
        stars: 5,
      },
      {
        content:
          "Bài viết rất cung cấp và đáng tin cậy. Tôi cảm thấy yên tâm khi đọc và dựa vào thông tin được trình bày để nắm bắt vấn đề.",
        post_id: 49,
        author_id: 17,
        stars: 4,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 24,
        author_id: 18,
        stars: 5,
      },
      {
        content:
          "Bài viết rất cung cấp và đáng tin cậy. Tôi cảm thấy yên tâm khi đọc và dựa vào thông tin được trình bày để nắm bắt vấn đề.",
        post_id: 69,
        author_id: 16,
        stars: 4,
      },
      {
        content:
          "Bài viết rất cung cấp và đáng tin cậy. Tôi cảm thấy yên tâm khi đọc và dựa vào thông tin được trình bày để nắm bắt vấn đề.",
        post_id: 87,
        author_id: 17,
        stars: 3,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 2,
        author_id: 16,
        stars: 3,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 7,
        author_id: 18,
        stars: 2,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 78,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 24,
        author_id: 15,
        stars: 3,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 80,
        author_id: 18,
        stars: 1,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 60,
        author_id: 18,
        stars: 4,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 10,
        author_id: 18,
        stars: 5,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 16,
        author_id: 17,
        stars: 5,
      },
      {
        content:
          "Tôi cảm thấy được truyền cảm hứng từ bài viết này. Nó khơi gợi niềm đam mê và khát khao để tìm hiểu thêm về chủ đề.",
        post_id: 12,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 2,
        author_id: 15,
        stars: 5,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 27,
        author_id: 19,
        stars: 1,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 50,
        author_id: 16,
        stars: 4,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 28,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 48,
        author_id: 18,
        stars: 2,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 24,
        author_id: 16,
        stars: 1,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 69,
        author_id: 19,
        stars: 1,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 13,
        author_id: 17,
        stars: 5,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 75,
        author_id: 16,
        stars: 3,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 61,
        author_id: 18,
        stars: 1,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 61,
        author_id: 16,
        stars: 4,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 34,
        author_id: 19,
        stars: 1,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 69,
        author_id: 19,
        stars: 2,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 11,
        author_id: 18,
        stars: 3,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 32,
        author_id: 16,
        stars: 4,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 26,
        author_id: 15,
        stars: 5,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 46,
        author_id: 17,
        stars: 2,
      },
      {
        content:
          "Tôi cảm thấy được truyền cảm hứng từ bài viết này. Nó khơi gợi niềm đam mê và khát khao để tìm hiểu thêm về chủ đề.",
        post_id: 27,
        author_id: 16,
        stars: 2,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 74,
        author_id: 18,
        stars: 1,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 27,
        author_id: 16,
        stars: 2,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 9,
        author_id: 19,
        stars: 3,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 30,
        author_id: 19,
        stars: 2,
      },
      {
        content:
          "Tôi cảm thấy được truyền cảm hứng từ bài viết này. Nó khơi gợi niềm đam mê và khát khao để tìm hiểu thêm về chủ đề.",
        post_id: 26,
        author_id: 19,
        stars: 2,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 2,
        author_id: 17,
        stars: 2,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 23,
        author_id: 18,
        stars: 3,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 56,
        author_id: 16,
        stars: 3,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 88,
        author_id: 17,
        stars: 5,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 88,
        author_id: 15,
        stars: 1,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 47,
        author_id: 15,
        stars: 1,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 36,
        author_id: 19,
        stars: 2,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 83,
        author_id: 16,
        stars: 2,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 86,
        author_id: 17,
        stars: 4,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 52,
        author_id: 17,
        stars: 5,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 58,
        author_id: 17,
        stars: 5,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 20,
        author_id: 18,
        stars: 5,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 72,
        author_id: 19,
        stars: 2,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 79,
        author_id: 18,
        stars: 5,
      },
      {
        content:
          "Bài viết rất cung cấp và đáng tin cậy. Tôi cảm thấy yên tâm khi đọc và dựa vào thông tin được trình bày để nắm bắt vấn đề.",
        post_id: 58,
        author_id: 18,
        stars: 2,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 9,
        author_id: 17,
        stars: 1,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 42,
        author_id: 17,
        stars: 1,
      },
      {
        content:
          "Tôi cảm thấy được truyền cảm hứng từ bài viết này. Nó khơi gợi niềm đam mê và khát khao để tìm hiểu thêm về chủ đề.",
        post_id: 3,
        author_id: 18,
        stars: 5,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 57,
        author_id: 19,
        stars: 1,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 21,
        author_id: 18,
        stars: 4,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 67,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 68,
        author_id: 16,
        stars: 5,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 70,
        author_id: 15,
        stars: 4,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 7,
        author_id: 18,
        stars: 5,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 64,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 35,
        author_id: 16,
        stars: 1,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 28,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 25,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 77,
        author_id: 17,
        stars: 2,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 1,
        author_id: 19,
        stars: 3,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 71,
        author_id: 16,
        stars: 1,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 31,
        author_id: 15,
        stars: 3,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 87,
        author_id: 15,
        stars: 4,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 22,
        author_id: 15,
        stars: 1,
      },
      {
        content:
          "Tôi cảm thấy được truyền cảm hứng từ bài viết này. Nó khơi gợi niềm đam mê và khát khao để tìm hiểu thêm về chủ đề.",
        post_id: 78,
        author_id: 15,
        stars: 5,
      },
      {
        content:
          "Tôi cảm thấy được truyền cảm hứng từ bài viết này. Nó khơi gợi niềm đam mê và khát khao để tìm hiểu thêm về chủ đề.",
        post_id: 53,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 37,
        author_id: 17,
        stars: 4,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 12,
        author_id: 16,
        stars: 5,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 77,
        author_id: 16,
        stars: 4,
      },
      {
        content:
          "Bài viết rất cung cấp và đáng tin cậy. Tôi cảm thấy yên tâm khi đọc và dựa vào thông tin được trình bày để nắm bắt vấn đề.",
        post_id: 72,
        author_id: 17,
        stars: 3,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 29,
        author_id: 19,
        stars: 5,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 53,
        author_id: 17,
        stars: 3,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 64,
        author_id: 15,
        stars: 4,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 44,
        author_id: 18,
        stars: 3,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 77,
        author_id: 18,
        stars: 5,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 67,
        author_id: 18,
        stars: 3,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 49,
        author_id: 17,
        stars: 5,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 32,
        author_id: 18,
        stars: 2,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 13,
        author_id: 17,
        stars: 1,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 28,
        author_id: 16,
        stars: 2,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 58,
        author_id: 18,
        stars: 3,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 61,
        author_id: 15,
        stars: 1,
      },
      {
        content:
          "Tôi cảm thấy được truyền cảm hứng từ bài viết này. Nó khơi gợi niềm đam mê và khát khao để tìm hiểu thêm về chủ đề.",
        post_id: 33,
        author_id: 18,
        stars: 3,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 30,
        author_id: 16,
        stars: 3,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 75,
        author_id: 15,
        stars: 1,
      },
      {
        content:
          "Bài viết rất thú vị và hữu ích. Tôi đã tìm được nhiều thông tin mới và bổ ích từ bài viết này.",
        post_id: 1,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Tác giả đã trình bày một cách rõ ràng và logic. Tôi rất đánh giá cao sự nỗ lực và kiến thức chuyên môn của họ.",
        post_id: 1,
        author_id: 17,
        stars: 5,
      },
      {
        content:
          "Bài viết rất có cấu trúc và dễ hiểu. Điều này giúp tôi tiếp thu nội dung một cách dễ dàng và nhanh chóng.",
        post_id: 1,
        author_id: 19,
        stars: 4,
      },
      {
        content:
          "Tôi thích cách tác giả thể hiện quan điểm cá nhân và hỗ trợ bằng các tài liệu và ví dụ cụ thể.",
        post_id: 1,
        author_id: 19,
        stars: 3,
      },
      {
        content:
          "Bài viết chứa những thông tin mới mẻ và sáng tạo. Điều này giúp tôi mở rộng hiểu biết và có góc nhìn đa chiều về chủ đề.",
        post_id: 1,
        author_id: 19,
        stars: 1,
      },
      {
        content:
          "Tác giả đã nắm vững vấn đề và truyền đạt nội dung một cách rõ ràng và chính xác.",
        post_id: 1,
        author_id: 17,
        stars: 1,
      },
      {
        content:
          "Bài viết rất cung cấp và đáng tin cậy. Tôi cảm thấy yên tâm khi đọc và dựa vào thông tin được trình bày để nắm bắt vấn đề.",
        post_id: 1,
        author_id: 16,
        stars: 1,
      },
      {
        content:
          "Tôi cảm thấy được truyền cảm hứng từ bài viết này. Nó khơi gợi niềm đam mê và khát khao để tìm hiểu thêm về chủ đề.",
        post_id: 1,
        author_id: 17,
        stars: 2,
      },
      {
        content:
          "Tôi thấy bài viết rất khách quan và có cân nhắc đa chiều về các khía cạnh của vấn đề.",
        post_id: 1,
        author_id: 17,
        stars: 2,
      },
      {
        content:
          "Tôi rất hài lòng với bài viết này. Nó cung cấp cho tôi một cái nhìn tổng quan về chủ đề và giúp tôi hiểu rõ hơn về nó.",
        post_id: 1,
        author_id: 17,
        stars: 3,
      },
    ];

    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Comments", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
