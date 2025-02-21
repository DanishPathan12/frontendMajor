import React from 'react';
import { MessageCircle } from 'lucide-react';

function Messages() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Conversations List */}
        <div className="md:col-span-1 border-r border-gray-200">
          <div className="space-y-4">
            {[1, 2, 3].map((conversation) => (
              <div
                key={conversation}
                className={`p-4 cursor-pointer hover:bg-gray-50 ${
                  conversation === 1 ? 'bg-gray-50' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&auto=format`}
                    alt="User avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">Web Development Project</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="md:col-span-2">
          <div className="h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="border-b border-gray-200 p-4">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&auto=format"
                  alt="User avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-500">Web Development Project</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                  <p>Hi, I'm interested in your web development services.</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-green-600 text-white rounded-lg p-3 max-w-[70%]">
                  <p>Hello! Thanks for reaching out. How can I help you today?</p>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;