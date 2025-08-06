import React from 'react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => (
  <nav className="flex space-x-8 mb-20">
    {[
      { key: 'home', label: 'Home' },
      { key: 'blog', label: 'Blog' },
      { key: 'notes', label: 'Notes' },
      { key: 'bookmarks', label: 'Bookmarks' }
    ].map(({ key, label }) => (
      <button
        key={key}
        onClick={() => setActiveTab(key)}
        className={`text-base font-normal transition-colors duration-200 hover:text-white ${
          activeTab === key
            ? 'text-white border-b-2 border-blue-400 pb-1'
            : 'text-gray-400'
        }`}
      >
        {label}
      </button>
    ))}
  </nav>
);