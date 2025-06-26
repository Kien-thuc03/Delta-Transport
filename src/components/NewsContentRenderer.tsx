import React from 'react';
import type { ContentBlock } from '../models/NewsTypes';

interface NewsContentRendererProps {
  content: ContentBlock[];
}

const NewsContentRenderer: React.FC<NewsContentRendererProps> = ({ content }) => {
  const renderBlock = (block: ContentBlock) => {
    switch (block.type) {
      case 'heading': {
        const level = block.metadata?.level || 2;
        const headingClasses = `font-bold text-gray-800 mb-4 ${
          level === 1 ? 'text-3xl' :
          level === 2 ? 'text-2xl' :
          level === 3 ? 'text-xl' :
          'text-lg'
        }`;
              
        if (level === 1) {
          return <h1 key={block.id} className={headingClasses}>{block.content}</h1>;
        } else if (level === 2) {
          return <h2 key={block.id} className={headingClasses}>{block.content}</h2>;
        } else if (level === 3) {
          return <h3 key={block.id} className={headingClasses}>{block.content}</h3>;
        } else if (level === 4) {
          return <h4 key={block.id} className={headingClasses}>{block.content}</h4>;
        } else if (level === 5) {
          return <h5 key={block.id} className={headingClasses}>{block.content}</h5>;
        } else {
          return <h6 key={block.id} className={headingClasses}>{block.content}</h6>;
        }
      }
      case 'text':
        return (
          <p 
            key={block.id} 
            className={`text-gray-700 leading-relaxed mb-4 ${
              block.metadata?.style === 'italic' ? 'italic' :
              block.metadata?.style === 'bold' ? 'font-bold' :
              ''
            }`}
            dangerouslySetInnerHTML={{ __html: block.content }}
          />
        );

      case 'image':
        return (
          <div key={block.id} className={`my-6 ${
            block.metadata?.align === 'center' ? 'text-center' :
            block.metadata?.align === 'right' ? 'text-right' :
            ''
          }`}>
            <img 
              src={block.content} 
              alt={block.metadata?.alt || ''} 
              className="max-w-full h-auto rounded-lg shadow-md inline-block"
            />
            {block.metadata?.caption && (
              <p className="text-sm text-gray-500 italic mt-2">
                {block.metadata.caption}
              </p>
            )}
          </div>
        );

      case 'list': {
        const ListTag = block.metadata?.listType === 'ordered' ? 'ol' : 'ul';
        return (
          <ListTag 
            key={block.id} 
            className={`mb-4 ml-6 ${
              block.metadata?.listType === 'ordered' ? 'list-decimal' : 'list-disc'
            }`}
          >
            {block.metadata?.items?.map((item, index) => (
              <li key={index} className="text-gray-700 leading-relaxed mb-2">
                {item}
              </li>
            ))}
          </ListTag>
        );
      }

      case 'quote':
        return (
          <blockquote 
            key={block.id} 
            className="border-l-4 border-[#ff5722] pl-4 py-2 my-6 bg-gray-50 italic text-gray-700"
          >
            {block.content}
          </blockquote>
        );

      case 'divider':
        return (
          <hr key={block.id} className="my-8 border-t border-gray-300" />
        );

      default:
        return null;
    }
  };

  return (
    <div className="prose max-w-none">
      {content.map(renderBlock)}
    </div>
  );
};

export default NewsContentRenderer;
