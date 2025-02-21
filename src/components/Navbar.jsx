import React from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import { Menu, Search, User } from 'lucide-react';

function Navbar() {
  const { user, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-green-600">
              Freelancer
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/gigs" className="text-gray-700 hover:text-green-600 px-3 py-2">
                Find Work
              </Link>
              {user?.isSeller && (
                <Link to="/gigs/create" className="text-gray-700 hover:text-green-600 px-3 py-2">
                  Post a Gig
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-shrink-0">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link to="/messages" className="text-gray-700 hover:text-green-600">
                    Messages
                  </Link>
                  <Link to="/orders" className="text-gray-700 hover:text-green-600">
                    Orders
                  </Link>
                  <button
                    onClick={logout}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-x-4">
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-green-600 px-3 py-2"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  >
                    Join
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;