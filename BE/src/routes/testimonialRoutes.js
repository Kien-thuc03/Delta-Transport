const express = require('express');
const { testimonialController } = require('../controllers');

const router = express.Router();

/**
 * @swagger
 * /api/testimonials:
 *   get:
 *     tags:
 *       - Testimonials
 *     summary: Lấy danh sách đánh giá khách hàng
 *     description: Trả về danh sách đánh giá khách hàng có phân trang
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
 *         description: Số lượng đánh giá mỗi trang
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
 *                     $ref: '#/components/schemas/Testimonial'
 *   post:
 *     tags:
 *       - Testimonials
 *     summary: Tạo đánh giá mới
 *     description: Tạo một đánh giá khách hàng mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Testimonial'
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.route('/')
    .get(testimonialController.getTestimonials)
    .post(testimonialController.createTestimonial);

/**
 * @swagger
 * /api/testimonials/{id}:
 *   get:
 *     tags:
 *       - Testimonials
 *     summary: Lấy chi tiết đánh giá
 *     description: Trả về thông tin chi tiết của một đánh giá dựa trên ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của đánh giá
 *     responses:
 *       200:
 *         description: Thành công
 *       404:
 *         description: Không tìm thấy đánh giá
 *   put:
 *     tags:
 *       - Testimonials
 *     summary: Cập nhật đánh giá
 *     description: Cập nhật thông tin của một đánh giá
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của đánh giá
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Testimonial'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy đánh giá
 *   delete:
 *     tags:
 *       - Testimonials
 *     summary: Xóa đánh giá
 *     description: Xóa một đánh giá
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của đánh giá
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       404:
 *         description: Không tìm thấy đánh giá
 */
router.route('/:id')
    .get(testimonialController.getTestimonial)
    .put(testimonialController.updateTestimonial)
    .delete(testimonialController.deleteTestimonial);

module.exports = router;