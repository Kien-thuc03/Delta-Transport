const express = require('express');
const { newsController } = require('../controllers');

const router = express.Router();

router.route('/')
    .get(newsController.getNews)
    .post(newsController.createNews);

router.route('/categories')
    .get(newsController.getCategories);

router.route('/tags')
    .get(newsController.getTags);

router.route('/detail/:slug')
    .get(newsController.getNewsBySlug);

router.route('/:id/comments')
    .post(newsController.addComment);

router.route('/:id')
    .put(newsController.updateNews)
    .delete(newsController.deleteNews);

module.exports = router;