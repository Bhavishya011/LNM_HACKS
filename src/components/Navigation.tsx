import React from 'react';
import { Search, Wallet, Menu } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="border-b border-gray-800 backdrop-blur-md bg-black/30 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              THATA
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search collections and creators"
                className="w-96 px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
            
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Connect Wallet
            </button>
          </div>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}