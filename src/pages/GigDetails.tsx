import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, RefreshCw, MessageCircle } from 'lucide-react';

function GigDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">
            I will create a professional website for your business
          </h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&auto=format"
              alt="Seller"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">John Doe</p>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm">4.9 (128 reviews)</span>
              </div>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Gig preview"
            className="w-full rounded-lg mb-8"
          />

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4">About This Gig</h2>
              <p className="text-gray-600">
                I will design and develop a modern, responsive website tailored to your business needs. 
                With over 5 years of experience in web development, I ensure high-quality work and 
                excellent communication throughout the project.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">What's Included</h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Source Code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>SEO Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Order Card */}
        <div className="lg:col-span-1">
          <div className="border border-gray-200 rounded-lg p-6 sticky top-8">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Basic Package</span>
              <span className="text-2xl font-bold">$99</span>
            </div>
            
            <p className="text-gray-600 mb-6">
              Complete website development with all basic features
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <span>7 Days Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-5 h-5 text-gray-400" />
                <span>3 Revisions</span>
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Continue ($99)
            </button>

            <button className="w-full mt-4 border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Contact Seller</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GigDetails;