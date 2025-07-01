import React, { useEffect, useState } from 'react';
import '../../styles/chatButton.css';

const ChatButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hiển thị nút chat sau 3 giây
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openFacebookChat = () => {
    const fanpageId = '385745673746860';
    window.open(`https://m.me/${fanpageId}`, '_blank');
  };

  return (
    <div 
      className={`fb-chat-button ${isVisible ? 'slide-up-animation' : ''}`}
      onClick={openFacebookChat}
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <img 
        src="https://bizweb.dktcdn.net/100/494/472/files/messenger-icon.png?v=1705730138380" 
        alt="Facebook Chat Icon" 
        className="w-6 h-6 m-auto"
      />
      <span className="bounce">
        Xin chào! <br />
        Mình có thể giúp gì bạn
      </span>
    </div>
  );
};

export default ChatButton; 