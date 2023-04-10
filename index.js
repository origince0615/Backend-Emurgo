const express = require("express");
const request = require("request");
const apicache = require("apicache");
const { response } = require("express");

// Set up the environment variables from the .env file
require("dotenv").config();

const app = express();

//Set the PORT if env.PORT exists, default 3000
const PORT = process.env.PORT || 3000;

// Set up the API key from the env file
const API_KEY = process.env.GNEWS_API_KEY;

//configure apicache
let cache = apicache.middleware;

//caching all routes for 5 minutes
app.use(cache("5 minutes"));

//Get the data using API_URL
const getData = (res, API_URL) => {
  request.get(API_URL, (error, response, body) => {
    if (error) {
      res.status(500).send(error);
    } else {
      const data = JSON.parse(body);
      res.send(data);
    }
  });
};

//get the data by articles (number and keyword) - parameters
app.get("/fetch-articles", (req, res) => {
  const query_numOfArticles = req.query.num; // number of articles to fetch
  const query_keyword = req.query.keyword; // keyword to search articles

  // Category to search for. Options (breaking-news, world, nation, business, technology, entertainment, sports, science and health).
  const query_category = req.query.category;
  const API_URL = `https://gnews.io/api/v4/top-headlines?topic=${query_category}&token=${API_KEY}&max=${query_numOfArticles}&lan=en&country=us`;
  getData(res, API_URL);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
