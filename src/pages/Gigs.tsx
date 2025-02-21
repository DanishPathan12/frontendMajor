import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sliders } from 'lucide-react';

function Gigs() {
  const [category, setCategory] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search for gigs..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center gap-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="graphics">Graphics & Design</option>
              <option value="digital">Digital Marketing</option>
              <option value="writing">Writing & Translation</option>
              <option value="video">Video & Animation</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Sliders className="h-5 w-5" />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Gigs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Gig Cards - Replace with actual data */}
        {[1, 2, 3, 4, 5, 6].map((gig) => (
          <Link key={gig} to={`/gigs/${gig}`} className="group">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={`https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`}
                alt="Gig thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600">
                  Professional Web Development
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  I will create a modern and responsive website for your business
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600">4.9 (128)</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Starting at</p>
                    <p className="text-lg font-bold text-gray-900">$99</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gigs;