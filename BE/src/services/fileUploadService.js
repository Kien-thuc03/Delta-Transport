const fs = require('fs');
const path = require('path');
const { ApiError } = require('../utils');

// Kiểm tra nếu thư mục tồn tại, nếu không thì tạo mới
const ensureDirectoryExists = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

/**
 * Lưu file từ base64 string
 * @param {String} base64String - Chuỗi base64 của file
 * @param {String} folder - Thư mục lưu file (news, testimonials, etc.)
 * @returns {String} Đường dẫn đến file đã lưu
 */
exports.saveFileFromBase64 = (base64String, folder = 'uploads') => {
    try {
        // Loại bỏ header của base64 (data:image/jpeg;base64,)
        const matches = base64String.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

        if (!matches || matches.length !== 3) {
            throw new ApiError(400, 'Định dạng base64 không hợp lệ');
        }

        const fileType = matches[1];
        const base64Data = matches[2];
        const fileExtension = fileType.split('/')[1];

        // Kiểm tra định dạng file
        const allowedExtensions = ['png', 'jpg', 'jpeg', 'gif', 'webp'];
        if (!allowedExtensions.includes(fileExtension)) {
            throw new ApiError(400, 'Định dạng file không được hỗ trợ');
        }

        // Tạo tên file với timestamp để tránh trùng lặp
        const fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}.${fileExtension}`;

        // Đường dẫn thư mục lưu file
        const uploadDir = path.join(__dirname, '../../public/uploads', folder);

        // Đảm bảo thư mục tồn tại
        ensureDirectoryExists(uploadDir);

        // Đường dẫn đầy đủ của file
        const filePath = path.join(uploadDir, fileName);

        // Lưu file
        fs.writeFileSync(filePath, base64Data, { encoding: 'base64' });

        // Trả về đường dẫn tương đối để lưu vào database
        return `/uploads/${folder}/${fileName}`;
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(500, 'Lỗi khi xử lý file: ' + error.message);
    }
};