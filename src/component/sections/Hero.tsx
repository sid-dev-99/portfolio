import React from 'react';
import profile from '../../assets/profile.jpeg';
export const Hero = () => (
    <div>
        <div className="flex mt-4 mb-8 items-center">
            <img
                src={profile}
                alt="Profile"
                className="w-30 h-32 rounded-xl mb-6 object-cover border-2 border-gray-600 grayscale"
            />
        </div>
        <h1 className="text-5xl font-normal text-white mb-4">Siddharth</h1>
        <h2 className="text-xl text-gray-400 mb-8">
            Software Engineer & Curious Tinkerer
        </h2>
        <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-2xl">
            A coder, observer, and student of occultism, observational astronomy, philosophy, and metaphysics.
        </p>
        <div className="flex space-x-6">
            <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
            >
                GitHub
            </a>
            <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
            >
                Twitter
            </a>
        </div>
    </div>
);