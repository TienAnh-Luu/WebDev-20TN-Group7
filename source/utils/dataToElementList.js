import NewsItem from '../../source/components/NewsItem.js';

export const dataToNewsItemList = (data) => data.map((d) => NewsItem(d));
