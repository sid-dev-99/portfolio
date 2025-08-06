import  { useState } from 'react';
import { PageLayout } from './layout/PageLayout';
import { Navigation } from './sections/Navigation';
import { HomeContent } from './sections/HomeContent';
import { BlogContent } from './sections/BlogContent';
import { BookmarksContent } from './sections/BookmarksContent';
import FullPostView from './sections/FullPostView';
import type { Post } from './data/posts'; 
import { NotesContent } from './sections/Notescontent';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  const handleNavClick = (tab: string) => {
    setSelectedPost(null);
    setActiveTab(tab);
  };

 
  const renderContent = () => {
    if (selectedPost) {
      return <FullPostView post={selectedPost} onBackClick={handleBackClick} />;
    }

    switch (activeTab) {
      case 'blog':
        return <BlogContent onPostClick={handlePostClick} />;
      case 'notes':
        return <NotesContent />;
      case 'bookmarks':
        return <BookmarksContent />;
      default:
        return <HomeContent setActiveTab={setActiveTab} onPostClick={handlePostClick} />;
    }
  };

  return (
    <PageLayout>
      <Navigation activeTab={activeTab} setActiveTab={handleNavClick} />
      <main>
        {renderContent()}
      </main>
    </PageLayout>
  );
};

export default Blog;