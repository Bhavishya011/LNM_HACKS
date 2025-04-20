import React from 'react';
import { Users } from 'lucide-react';

const sellers = [
  {
    id: 1,
    name: "Alex Rivers",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
    sales: "2.5M",
    items: 124
  },
  {
    id: 2,
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
    sales: "1.8M",
    items: 89
  },
  {
    id: 3,
    name: "Mike Thompson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
    sales: "950K",
    items: 67
  }
];

export function TopSellers() {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <Users className="h-8 w-8 text-purple-500" />
          <h2 className="text-3xl font-bold">Top Sellers</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sellers.map((seller) => (
            <div key={seller.id} className="flex items-center gap-6 bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/50 transition-colors">
              <img
                src={seller.avatar}
                alt={seller.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{seller.name}</h3>
                <p className="text-gray-400">Total Sales: <span className="text-white font-semibold">${seller.sales}</span></p>
                <p className="text-gray-400">Items: <span className="text-white font-semibold">{seller.items}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}