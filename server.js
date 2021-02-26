const express = require('express');
const NewsAPI = require('newsapi');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const newsapi = new NewsAPI('f922ca0768fd4ef99591092145e2b75b');
