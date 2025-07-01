const express = require('express');
const { searchController } = require('../controllers');

const router = express.Router();

router.route('/')
    .get(searchController.searchNews);

router.route('/popular-tags')
    .get(searchController.getPopularTags);

module.exports = router;