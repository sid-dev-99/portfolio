import React from 'react';
import { blogPosts } from '../data/posts';
import { projects } from '../data/projects';
import { BlogPost } from '../ui/BlogPosts';
import { Project } from '../ui/Project';
import { Hero } from './Hero';



interface HomeContentProps {
  setActiveTab: (tab: string) => void;
    onPostClick: (post: any) => void; 

}

export const HomeContent: React.FC<HomeContentProps> = ({ setActiveTab,onPostClick }) => (
  <div className="space-y-20">
    <Hero />
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-normal text-gray-400">Writing</h2>
        <button onClick={() => setActiveTab('blog')} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
          View all posts
        </button>
      </div>
      <div className="space-y-12">
        {blogPosts.slice(0, 3).map((post) => ( <BlogPost key={post.id} post={post} onPostClick={onPostClick}/> ))}
      </div>
    </div>
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-normal text-gray-400">Projects</h2>
        <button className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
          View all projects
        </button>
      </div>
      <div className="space-y-12">
        {projects.map((project) => ( <Project key={project.id} project={project} /> ))}
      </div>
    </div>
  </div>
);