const express = require('express');
const axios = require('axios');
const router = express.Router();

const NEWS_API_KEY = '9ccdda8c2b094889902abf27127d87cc';
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';
const NEWS_API_SEARCH_URL = 'https://newsapi.org/v2/everything';

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
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
    }));

    res.json(articles);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    const response = await axios.get(NEWS_API_SEARCH_URL, {
      params: {
        q,
        apiKey: NEWS_API_KEY,
      },
    });

    const articles = response.data.articles.map((article, index) => ({
      id: index + 1,
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
    }));

    res.json(articles);
  } catch (error) {
    console.error('Error searching news:', error);
    res.status(500).json({ error: 'Failed to search news' });
  }
});

module.exports = router;
