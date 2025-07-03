const express = require('express');
const { newsController } = require('../controllers');

const router = express.Router();

/**
 * @swagger
 * /api/news:
 *   get:
 *     summary: Lấy danh sách tin tức
 *     description: Trả về danh sách tin tức có phân trang
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
 *                 totalPages:
 *                   type: integer
 *                 currentPage:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/News'
 *   post:
 *     summary: Tạo tin tức mới
 *     description: Tạo một bài viết tin tức mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.route('/')
    .get(newsController.getNews)
    .post(newsController.createNews);

/**
 * @swagger
 * /api/news/categories:
 *   get:
 *     summary: Lấy tất cả danh mục tin tức
 *     description: Trả về danh sách các danh mục tin tức
 *     responses:
 *       200:
 *         description: Thành công
 */
router.route('/categories')
    .get(newsController.getCategories);

/**
 * @swagger
 * /api/news/tags:
 *   get:
 *     summary: Lấy tất cả tags tin tức
 *     description: Trả về danh sách các tags của tin tức
 *     responses:
 *       200:
 *         description: Thành công
 */
router.route('/tags')
    .get(newsController.getTags);

/**
 * @swagger
 * /api/news/migrate-comments:
 *   put:
 *     summary: Di chuyển dữ liệu bình luận cũ
 *     description: Chuyển đổi trường avatar thành email cho các bình luận cũ
 *     responses:
 *       200:
 *         description: Thành công
 */
router.route('/migrate-comments')
    .put(newsController.migrateComments);

/**
 * @swagger
 * /api/news/detail/{slug}:
 *   get:
 *     summary: Lấy chi tiết tin tức theo slug
 *     description: Trả về thông tin chi tiết của một tin tức dựa trên slug
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Slug của tin tức
 *     responses:
 *       200:
 *         description: Thành công
 *       404:
 *         description: Không tìm thấy tin tức
 */
router.route('/detail/:slug')
    .get(newsController.getNewsBySlug);

/**
 * @swagger
 * /api/news/{slug}/comments:
 *   post:
 *     summary: Thêm bình luận vào tin tức
 *     description: Thêm một bình luận mới vào tin tức
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Slug của tin tức
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               author:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               content:
 *                 type: string
 *             required:
 *               - author
 *               - email
 *               - content
 *     responses:
 *       201:
 *         description: Thêm bình luận thành công
 *       404:
 *         description: Không tìm thấy tin tức
 */
router.route('/:slug/comments')
    .post(newsController.addComment);

/**
 * @swagger
 * /api/news/{id}:
 *   put:
 *     summary: Cập nhật tin tức
 *     description: Cập nhật thông tin của một tin tức
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của tin tức
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy tin tức
 *   delete:
 *     summary: Xóa tin tức
 *     description: Xóa một tin tức
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của tin tức
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       404:
 *         description: Không tìm thấy tin tức
 */
router.route('/:id')
    .put(newsController.updateNews)
    .delete(newsController.deleteNews);

module.exports = router;