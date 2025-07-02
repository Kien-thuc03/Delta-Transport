const express = require('express');
const { recruitmentController } = require('../controllers');

const router = express.Router();

/**
 * @swagger
 * /api/recruitment:
 *   get:
 *     summary: Lấy danh sách tin tuyển dụng
 *     description: Trả về danh sách tin tuyển dụng có phân trang
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
 *         description: Số lượng tin tuyển dụng mỗi trang
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         description: Lọc theo địa điểm
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Lọc theo loại hình công việc
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
 *                     $ref: '#/components/schemas/Recruitment'
 *   post:
 *     summary: Tạo tin tuyển dụng mới
 *     description: Tạo một tin tuyển dụng mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Recruitment'
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.route('/')
    .get(recruitmentController.getRecruitments)
    .post(recruitmentController.createRecruitment);

/**
 * @swagger
 * /api/recruitment/locations:
 *   get:
 *     summary: Lấy danh sách địa điểm làm việc
 *     description: Trả về danh sách các địa điểm làm việc
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
 *                     type: string
 */
router.route('/locations')
    .get(recruitmentController.getLocations);

/**
 * @swagger
 * /api/recruitment/{id}:
 *   get:
 *     summary: Lấy chi tiết tin tuyển dụng
 *     description: Trả về thông tin chi tiết của một tin tuyển dụng dựa trên ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của tin tuyển dụng
 *     responses:
 *       200:
 *         description: Thành công
 *       404:
 *         description: Không tìm thấy tin tuyển dụng
 *   put:
 *     summary: Cập nhật tin tuyển dụng
 *     description: Cập nhật thông tin của một tin tuyển dụng
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của tin tuyển dụng
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Recruitment'
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy tin tuyển dụng
 *   delete:
 *     summary: Xóa tin tuyển dụng
 *     description: Xóa một tin tuyển dụng
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của tin tuyển dụng
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       404:
 *         description: Không tìm thấy tin tuyển dụng
 */
router.route('/:id')
    .get(recruitmentController.getRecruitmentById)
    .put(recruitmentController.updateRecruitment)
    .delete(recruitmentController.deleteRecruitment);

module.exports = router;