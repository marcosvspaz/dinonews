const express = require('express') 
const app = express() 


var app = require('require');
request('https://newsapi.org/v2/top-headlines?country=br&apiKey=f922ca0768fd4ef99591092145e2b75b', function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
});

app.get('/notices', function (req, res) {
    res.send('Notícias')
  })
  app.listen(3000) 

app.get('/notices', function (req, res) {
    res.send(alunos)
  })