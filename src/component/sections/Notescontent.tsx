import { ArrowRight, CircleDot, Radio } from 'lucide-react';
import React from 'react';

export const NotesContent = () => (
  <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8 backdrop-blur-sm">
    <div className="mb-1">
      <h1 className="text-5xl font-normal text-white mb-4">Notes</h1>
      <p className="text-gray-400 text-base mb-4">Quick thoughts and discoveries</p>
    </div>
    <div className="text-gray-400">
      <div className='flex'>
        <ArrowRight />
      <div className='ml-2 pr-8'>will be watching F1: Drive to survive
        </div>
      </div>
       
      <div className='flex'>
        <ArrowRight />
      <div className='ml-2 pr-8'>will be reading hitchhhiker's guide to the galaxy
        </div>
      </div>

      <div className='flex'>
        <ArrowRight />
      <div className='ml-2 pr-8'>will be trying out the new Go features
        </div>
      </div>


      <div className='flex'>
        <ArrowRight />
      <div className='ml-2 pr-8'>will be exploring the latest advancements in AI
        </div>
      </div>

  </div>
  </div>
);

