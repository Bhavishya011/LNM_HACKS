import React from 'react';
import { Twitter, Instagram, Disc as Discord } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              THATA
            </h3>
            <p className="text-gray-400">
              The world's first and largest digital marketplace for crypto collectibles and NFTs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Marketplace</h4>
            <ul className="space-y-2 text-gray-400">
              <li>All NFTs</li>
              <li>Art</li>
              <li>Music</li>
              <li>Domain Names</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Partners</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <div className="flex gap-4">
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              <Discord className="h-6 w-6 text-gray-400 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 THATA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}