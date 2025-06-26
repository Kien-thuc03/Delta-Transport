import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-xs" />
              )}
              {item.href && !item.active ? (
                <Link 
                  to={item.href} 
                  className="text-gray-500 hover:text-[#ff5722] transition-colors flex items-center"
                >
                  {index === 0 && <FontAwesomeIcon icon={faHome} className="mr-1" />}
                  {item.label}
                </Link>
              ) : (
                <span className={`flex items-center ${item.active ? 'text-[#ff5722] font-medium' : 'text-gray-500'}`}>
                  {index === 0 && <FontAwesomeIcon icon={faHome} className="mr-1" />}
                  {item.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
