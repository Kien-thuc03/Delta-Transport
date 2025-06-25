import { useState } from 'react';

interface VideoModalState {
  isOpen: boolean;
  videoUrl: string;
}

// Hook để quản lý trạng thái của modal video
export const useVideoModal = () => {
  const [modalState, setModalState] = useState<VideoModalState>({
    isOpen: false,
    videoUrl: '',
  });

  // Mở modal và hiển thị video
  const openVideoModal = (videoUrl: string) => {
    setModalState({
      isOpen: true,
      videoUrl,
    });
    // Thêm class để ngăn cuộn trang khi modal hiển thị
    document.body.classList.add('modal-open');
  };

  // Đóng modal
  const closeVideoModal = () => {
    setModalState({
      ...modalState,
      isOpen: false,
    });
    // Xóa class để cho phép cuộn trang trở lại
    document.body.classList.remove('modal-open');
  };

  return {
    modalState,
    openVideoModal,
    closeVideoModal,
  };
}; 