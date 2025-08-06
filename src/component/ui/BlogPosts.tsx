import React from 'react';
import type { Post } from '../data/posts';

interface BlogPostProps {
  post: Post;
  showFullDate?: boolean;
  onPostClick: (post: Post) => void; 
}

export const BlogPost: React.FC<BlogPostProps> = ({ post, showFullDate = false, onPostClick }) => (
  <div className="group cursor-pointer" onClick={() => onPostClick(post)}>
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xl font-normal text-white group-hover:text-blue-400 transition-colors duration-200 flex-grow pr-4">
        {post.title}
      </h3>
      <div className="text-gray-400 text-sm whitespace-nowrap">
        {showFullDate ? post.date : post.shortDate}
      </div>
    </div>
    <p className="text-gray-400 text-base leading-relaxed "> 
      {post.description}
    </p>
  </div>
);

