import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';

function Orders() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      <div className="space-y-4">
        {[1, 2, 3].map((order) => (
          <div key={order} className="border border-gray-200 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=100&h=100&fit=crop&auto=format"
                  alt="Order thumbnail"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold">Professional Web Development</h3>
                  <p className="text-sm text-gray-600">Order #{order}0001</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-bold">$99</p>
                </div>
                {order === 1 ? (
                  <div className="flex items-center text-yellow-600">
                    <Clock className="w-5 h-5 mr-1" />
                    <span>In Progress</span>
                  </div>
                ) : (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-1" />
                    <span>Completed</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;