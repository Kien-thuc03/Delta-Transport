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
    <div className="w-full bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm overflow-hidden">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <FontAwesomeIcon icon={faChevronRight} className="text-gray-400 text-xs flex-shrink-0" />
              )}
              {item.href && !item.active ? (
                <Link 
                  to={item.href} 
                  className="text-gray-500 hover:text-[#ff5722] transition-colors flex items-center flex-shrink-0"
                >
                  {index === 0 && <FontAwesomeIcon icon={faHome} className="mr-1" />}
                  <span className="truncate max-w-[200px]" title={item.label}>
                    {item.label}
                  </span>
                </Link>
              ) : (
                <span className={`flex items-center ${item.active ? 'text-[#ff5722] font-medium' : 'text-gray-500'} ${item.active ? 'min-w-0 flex-1' : 'flex-shrink-0'}`}>
                  {index === 0 && <FontAwesomeIcon icon={faHome} className="mr-1 flex-shrink-0" />}
                  <span 
                    className={`${item.active ? 'truncate' : 'truncate max-w-[200px]'}`} 
                    title={item.label}
                  >
                    {item.label}
                  </span>
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
