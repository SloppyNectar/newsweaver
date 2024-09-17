const express = require('express');
const axios = require('axios');
const router = express.Router();

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: {
        country: 'us',
        apiKey: NEWS_API_KEY,
      },
    });

    const articles = response.data.articles.map((article, index) => ({
      id: index + 1,
      title: article.title,
      description: article.description,
      url: article.url,
    }));

    res.json(articles);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

module.exports = router;