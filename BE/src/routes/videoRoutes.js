const express = require('express');
const { videoController } = require('../controllers');

const router = express.Router();

/**
 * @swagger
 * /api/videos:
 *   get:
 *     summary: Lấy danh sách video
 *     description: Trả về danh sách video có phân trang
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Số trang
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Số lượng video mỗi trang
 *       - in: query
 *         name: featured
 *         schema:
 *           type: boolean
 *         description: Lọc theo featured
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
 *                     $ref: '#/components/schemas/Video'
 *   post:
 *     summary: Tạo video mới
 *     description: Tạo một video mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Video'
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.route('/')
    .get(videoController.getVideos)
    .post(videoController.createVideo);

/**
 * @swagger
 * /api/videos/{id}:
 *   get:
 *     summary: Lấy chi tiết video
 *     description: Trả về thông tin chi tiết của một video dựa trên ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của video
 *     responses:
 *       200:
 *         description: Thành công
 *       404:
 *         description: Không tìm thấy video
 *   put:
 *     summary: Cập nhật video
 *     description: Cập nhật thông tin của một video
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của video
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Video'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy video
 *   delete:
 *     summary: Xóa video
 *     description: Xóa một video
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của video
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       404:
 *         description: Không tìm thấy video
 */
router.route('/:id')
    .get(videoController.getVideoById)
    .put(videoController.updateVideo)
    .delete(videoController.deleteVideo);

module.exports = router;