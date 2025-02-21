import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/gigs?cat=graphics" className="hover:text-green-400">Graphics & Design</Link></li>
              <li><Link to="/gigs?cat=digital" className="hover:text-green-400">Digital Marketing</Link></li>
              <li><Link to="/gigs?cat=writing" className="hover:text-green-400">Writing & Translation</Link></li>
              <li><Link to="/gigs?cat=video" className="hover:text-green-400">Video & Animation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-green-400">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-green-400">Careers</Link></li>
              <li><Link to="/press" className="hover:text-green-400">Press & News</Link></li>
              <li><Link to="/partnerships" className="hover:text-green-400">Partnerships</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-green-400">Help & Support</Link></li>
              <li><Link to="/trust" className="hover:text-green-400">Trust & Safety</Link></li>
              <li><Link to="/selling" className="hover:text-green-400">Selling on Freelancer</Link></li>
              <li><Link to="/buying" className="hover:text-green-400">Buying on Freelancer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link to="/events" className="hover:text-green-400">Events</Link></li>
              <li><Link to="/blog" className="hover:text-green-400">Blog</Link></li>
              <li><Link to="/forum" className="hover:text-green-400">Forum</Link></li>
              <li><Link to="/podcast" className="hover:text-green-400">Podcast</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Freelancer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;