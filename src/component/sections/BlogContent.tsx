import React from 'react';
import { blogPosts} from '../data/posts'; 
import type { Post } from '../data/posts';

import { BlogPost } from '../ui/BlogPosts'; 

interface BlogContentProps {
  onPostClick: (post: Post) => void; 
}

export const BlogContent: React.FC<BlogContentProps> = ({ onPostClick }) => (
  <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8 backdrop-blur-sm">
    <div className="mb-16">
      <h1 className="text-5xl font-normal text-white mb-4">Blog</h1>
      <p className="text-gray-400 text-base">Read my latest blog posts</p>
    </div>
    <div className="space-y-12">
      {blogPosts.map((post) => (
        
        <BlogPost
          key={post.id}
          post={post}
          showFullDate={true}
          onPostClick={onPostClick}
        />
      ))}
    </div>
  </div>
);