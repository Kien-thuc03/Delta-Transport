/**
 * @swagger
 * components:
 *   schemas:
 *     # Common schemas
 *     ContentBlock:
 *       type: object
 *       description: Khối nội dung đa dạng cho bài viết
 *       properties:
 *         type:
 *           type: string
 *           enum: [text, image, heading, list, quote, divider]
 *           description: Loại nội dung
 *         content:
 *           type: string
 *           description: Nội dung khối
 *         metadata:
 *           type: object
 *           properties:
 *             level:
 *               type: integer
 *               description: Cấp độ heading (1-6)
 *             alt:
 *               type: string
 *               description: Alt text cho hình ảnh
 *             caption:
 *               type: string
 *               description: Chú thích cho hình ảnh
 *             style:
 *               type: string
 *               enum: [italic, bold, normal]
 *               description: Kiểu text
 *             listType:
 *               type: string
 *               enum: [ordered, unordered]
 *               description: Kiểu danh sách
 *             items:
 *               type: array
 *               items:
 *                 type: string
 *               description: Các mục trong danh sách
 *             align:
 *               type: string
 *               enum: [left, center, right]
 *               description: Căn lề
 *
 *     Comment:
 *       type: object
 *       description: Bình luận của người dùng
 *       properties:
 *         author:
 *           type: string
 *           description: Tên người bình luận
 *         avatar:
 *           type: string
 *           description: Đường dẫn avatar
 *         content:
 *           type: string
 *           description: Nội dung bình luận
 *         date:
 *           type: string
 *           format: date-time
 *           description: Thời gian bình luận
 *
 *     # News schemas
 *     News:
 *       type: object
 *       description: Bài viết tin tức
 *       required:
 *         - title
 *         - slug
 *         - image
 *         - excerpt
 *       properties:
 *         title:
 *           type: string
 *           description: Tiêu đề tin tức
 *         slug:
 *           type: string
 *           description: Đường dẫn tin tức
 *         image:
 *           type: string
 *           description: Hình ảnh đại diện
 *         date:
 *           type: string
 *           format: date-time
 *           description: Ngày đăng
 *         author:
 *           type: string
 *           description: Tác giả
 *         excerpt:
 *           type: string
 *           description: Tóm tắt nội dung
 *         content:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/ContentBlock'
 *           description: Nội dung chi tiết
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Các thẻ
 *         category:
 *           type: string
 *           description: Danh mục
 *         comments:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Comment'
 *           description: Danh sách bình luận
 *         commentCount:
 *           type: integer
 *           description: Số lượng bình luận
 *
 *     # Testimonial schemas
 *     Testimonial:
 *       type: object
 *       description: Đánh giá từ khách hàng
 *       required:
 *         - name
 *         - content
 *       properties:
 *         name:
 *           type: string
 *           description: Tên khách hàng
 *         avatar:
 *           type: string
 *           description: Đường dẫn avatar
 *         content:
 *           type: string
 *           description: Nội dung đánh giá
 *         rating:
 *           type: number
 *           minimum: 1
 *           maximum: 5
 *           description: Đánh giá (1-5 sao)
 *         isActive:
 *           type: boolean
 *           description: Trạng thái hiển thị
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Thời gian tạo
 *
 *     # Recruitment schemas
 *     Recruitment:
 *       type: object
 *       description: Thông tin tuyển dụng
 *       required:
 *         - title
 *         - location
 *         - type
 *         - deadline
 *         - description
 *         - requirements
 *         - benefits
 *       properties:
 *         title:
 *           type: string
 *           description: Tiêu đề công việc
 *         location:
 *           type: string
 *           description: Địa điểm làm việc
 *         type:
 *           type: string
 *           enum: [Toàn thời gian, Bán thời gian, Thời vụ, Thực tập]
 *           description: Loại hình công việc
 *         deadline:
 *           type: string
 *           format: date-time
 *           description: Hạn nộp hồ sơ
 *         description:
 *           type: string
 *           description: Mô tả công việc
 *         requirements:
 *           type: array
 *           items:
 *             type: string
 *           description: Yêu cầu công việc
 *         benefits:
 *           type: array
 *           items:
 *             type: string
 *           description: Quyền lợi
 *         isActive:
 *           type: boolean
 *           description: Trạng thái hiển thị
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Thời gian tạo
 */

// File này chỉ chứa Swagger schemas
module.exports = {};