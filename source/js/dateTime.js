'use strict';

const helper = {};

helper.formatDateTime = (dateTime) => {
  const vietnameseLocale = 'vi-VN';
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  return dateTime.toLocaleString(vietnameseLocale, options);
};

module.exports = helper;
