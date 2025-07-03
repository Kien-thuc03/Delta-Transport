const express = require('express');
const { searchController } = require('../controllers');

const router = express.Router();

/**
 * @swagger
 * /api/search:
 *   get:
 *     tags:
 *       - Search
 *     summary: Tìm kiếm tin tức
 *     description: Tìm kiếm tin tức theo từ khóa
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Từ khóa tìm kiếm
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 count:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.route('/')
    .get(searchController.searchNews);

/**
 * @swagger
 * /api/search/popular-tags:
 *   get:
 *     tags:
 *       - Search
 *     summary: Lấy các tags phổ biến
 *     description: Trả về danh sách các tags phổ biến
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 count:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       count:
 *                         type: integer
 */
router.route('/popular-tags')
    .get(searchController.getPopularTags);

module.exports = router;