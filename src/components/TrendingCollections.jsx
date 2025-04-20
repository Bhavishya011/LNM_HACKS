import React from 'react';
import { TrendingUp } from 'lucide-react';

const collections = [
  {
    id: 1,
    name: "Bored Ape Yacht Club",
    image: "https://images.unsplash.com/photo-1614812513172-567d2fe96a75?w=800&auto=format&fit=crop&q=60",
    floorPrice: "32.5",
    volume: "1,250"
  },
  {
    id: 2,
    name: "CryptoPunks",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=60",
    floorPrice: "65.2",
    volume: "892"
  },
  {
    id: 3,
    name: "Doodles",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
    floorPrice: "8.1",
    volume: "456"
  }
];

export function TrendingCollections() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <TrendingUp className="h-8 w-8 text-purple-500" />
          <h2 className="text-3xl font-bold">Trending Collections</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="bg-gray-800/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{collection.name}</h3>
                <div className="flex justify-between text-gray-400">
                  <div>
                    <p className="text-sm">Floor Price</p>
                    <p className="text-white font-semibold">{collection.floorPrice} ETH</p>
                  </div>
                  <div>
                    <p className="text-sm">Volume</p>
                    <p className="text-white font-semibold">{collection.volume} ETH</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}