import React from 'react';
import { Rocket } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Discover, Collect, & Sell
            </span>
            <br />
            Extraordinary NFTs
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity text-lg font-semibold flex items-center gap-2">
              <Rocket className="h-5 w-5" />
              Explore
            </button>
            <button className="px-8 py-4 rounded-lg border border-purple-500 hover:bg-purple-500/10 transition-colors text-lg font-semibold">
              Create
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4F46E5,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#7E22CE,_transparent_50%)]" />
      </div>
    </div>
  );
}