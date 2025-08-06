import React from 'react';
import { Vortex } from '../ui/vortex';

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a]">
        <Vortex />
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-8 py-20">
          {children}
        </div>
      </div>
    </div>
  );
};