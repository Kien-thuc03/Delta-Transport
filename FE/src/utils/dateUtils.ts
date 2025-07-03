/**
 * Định dạng ngày thành chuỗi dd/mm/yyyy
 * @param date - Ngày cần định dạng (Date object, string hoặc timestamp)
 * @returns Chuỗi ngày định dạng dd/mm/yyyy
 */
export const formatDate = (date: Date | string | number): string => {
  const dateObj = new Date(date);
  
  // Kiểm tra ngày hợp lệ
  if (isNaN(dateObj.getTime())) {
    return '';
  }
  
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();
  
  return `${day}/${month}/${year}`;
};

/**
 * Định dạng ngày giờ thành chuỗi hh:mm dd/mm/yyyy
 * @param date - Ngày cần định dạng (Date object, string hoặc timestamp)
 * @returns Chuỗi ngày giờ định dạng hh:mm dd/mm/yyyy
 */
export const formatDateTime = (date: Date | string | number): string => {
  const dateObj = new Date(date);
  
  // Kiểm tra ngày hợp lệ
  if (isNaN(dateObj.getTime())) {
    return '';
  }
  
  const hours = dateObj.getHours().toString().padStart(2, '0');
  const minutes = dateObj.getMinutes().toString().padStart(2, '0');
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear();
  
  return `${hours}:${minutes} ${day}/${month}/${year}`;
};

/**
 * Định dạng ngày theo locale Việt Nam
 * @param date - Ngày cần định dạng
 * @returns Chuỗi ngày định dạng theo locale Việt Nam
 */
export const formatDateVN = (date: Date | string | number): string => {
  const dateObj = new Date(date);
  
  // Kiểm tra ngày hợp lệ
  if (isNaN(dateObj.getTime())) {
    return '';
  }
  
  return dateObj.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

/**
 * Định dạng ngày giờ theo locale Việt Nam
 * @param date - Ngày cần định dạng
 * @returns Chuỗi ngày giờ định dạng theo locale Việt Nam
 */
export const formatDateTimeVN = (date: Date | string | number): string => {
  const dateObj = new Date(date);
  
  // Kiểm tra ngày hợp lệ
  if (isNaN(dateObj.getTime())) {
    return '';
  }
  
  return dateObj.toLocaleString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour12: false
  });
};

/**
 * Kiểm tra xem ngày có hợp lệ không
 * @param date - Ngày cần kiểm tra
 * @returns true nếu ngày hợp lệ, false nếu không
 */
export const isValidDate = (date: Date | string | number): boolean => {
  const dateObj = new Date(date);
  return !isNaN(dateObj.getTime());
};

/**
 * Chuyển đổi chuỗi ngày dd/mm/yyyy thành Date object
 * @param dateString - Chuỗi ngày định dạng dd/mm/yyyy
 * @returns Date object hoặc null nếu không hợp lệ
 */
export const parseDate = (dateString: string): Date | null => {
  const parts = dateString.split('/');
  if (parts.length !== 3) {
    return null;
  }
  
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
  const year = parseInt(parts[2], 10);
  
  const date = new Date(year, month, day);
  
  // Kiểm tra xem ngày có hợp lệ không
  if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
    return null;
  }
  
  return date;
};

/**
 * Tính toán khoảng thời gian từ ngày cụ thể đến hiện tại
 * @param date - Ngày cần tính
 * @returns Chuỗi mô tả khoảng thời gian (ví dụ: "2 ngày trước", "1 tuần trước")
 */
export const getTimeAgo = (date: Date | string | number): string => {
  const dateObj = new Date(date);
  const now = new Date();
  const diffInMs = now.getTime() - dateObj.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);
  
  if (diffInYears > 0) {
    return `${diffInYears} năm trước`;
  } else if (diffInMonths > 0) {
    return `${diffInMonths} tháng trước`;
  } else if (diffInWeeks > 0) {
    return `${diffInWeeks} tuần trước`;
  } else if (diffInDays > 0) {
    return `${diffInDays} ngày trước`;
  } else if (diffInHours > 0) {
    return `${diffInHours} giờ trước`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} phút trước`;
  } else {
    return 'Vừa xong';
  }
};