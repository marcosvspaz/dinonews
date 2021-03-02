var request = require('request');
request('https://newsapi.org/v2/top-headlines?country=br&apiKey=f922ca0768fd4ef99591092145e2b75b', function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
});