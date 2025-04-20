import React, { useState, useMemo } from 'react';
import { Compass } from 'lucide-react';

const nfts = [
  {
    id: 1,
    name: "Cosmic Dreamer #123",
    image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=800&auto=format&fit=crop&q=60",
    price: 0.85,
    creator: "CryptoArtist",
    createdAt: "2024-03-10"
  },
  {
    id: 2,
    name: "Digital Wave #456",
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&auto=format&fit=crop&q=60",
    price: 1.2,
    creator: "PixelMaster",
    createdAt: "2024-03-12"
  },
  {
    id: 3,
    name: "Abstract Mind #789",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    price: 2.4,
    creator: "ArtBlock",
    createdAt: "2024-03-08"
  },
  {
    id: 4,
    name: "Future Vision #101",
    image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&auto=format&fit=crop&q=60",
    price: 1.8,
    creator: "NFTCreator",
    createdAt: "2024-03-11"
  }
];

export function ExploreNFTs() {
  const [sortBy, setSortBy] = useState('recent');

  const sortedNFTs = useMemo(() => {
    const nftsCopy = [...nfts];
    
    switch (sortBy) {
      case 'recent':
        return nftsCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case 'price-low':
        return nftsCopy.sort((a, b) => a.price - b.price);
      case 'price-high':
        return nftsCopy.sort((a, b) => b.price - a.price);
      case 'popular':
        // For demo purposes, we'll use a random sort for popularity
        return nftsCopy.sort(() => Math.random() - 0.5);
      default:
        return nftsCopy;
    }
  }, [sortBy]);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Compass className="h-8 w-8 text-purple-500" />
            <h2 className="text-3xl font-bold">Explore NFTs</h2>
          </div>
          <div className="flex gap-4">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 hover:bg-gray-700 cursor-pointer"
            >
              <option value="recent">Recently Added</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedNFTs.map((nft) => (
            <div 
              key={nft.id} 
              className="group bg-gray-800/30 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-purple-400">{nft.name}</h3>
                <p className="text-gray-400 text-sm mb-4">by {nft.creator}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-400">Current Price</p>
                    <p className="text-xl font-bold">{nft.price} ETH</p>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 active:scale-95">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}