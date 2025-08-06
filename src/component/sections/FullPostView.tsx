import React from 'react';
import type { Post } from '../data/posts';

import styles from './FullPostView.module.css';

interface FullPostViewProps {
  post: Post;
  onBackClick: () => void;
}

export const FullPostView: React.FC<FullPostViewProps> = ({ post, onBackClick }) => (
  <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8 backdrop-blur-sm animate-fade-in">
    

    <button onClick={onBackClick} className="text-blue-400 hover:text-blue-300 transition-colors mb-8">
      &larr; Back to all posts
    </button>
    
    <div className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
      <p className="text-gray-400">{post.date}</p>
    </div>

    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: post.content }}
    />
  </div>
);

export default FullPostView;