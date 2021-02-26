const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f922ca0768fd4ef99591092145e2b75b');

newsapi.v2.sources({
    category: 'tecnologia',
    language: 'br',
    country: 'br'
  }).then(response => {
    console.log(response);
});