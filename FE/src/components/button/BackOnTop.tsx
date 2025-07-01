import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BackToTopButton: React.FC = () => {
  return (
    <div className="sm:hidden">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-[#ff5722] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-[#e64a19] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:ring-opacity-50"
        aria-label="Cuộn lên đầu trang"
        >
        <FontAwesomeIcon icon={faArrowUp} className="w-6 h-6" />
        </button>
    </div>
  );
};

export default BackToTopButton;
