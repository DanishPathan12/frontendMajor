import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find the perfect freelance services for your business
            </h1>
            <p className="text-xl mb-8">
              Millions of people use Freelancer to turn their ideas into reality.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/gigs"
                className="bg-white text-green-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Find Work
              </Link>
              <Link
                to="/register"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-700 transition"
              >
                Become a Seller
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Professional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Graphics & Design",
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3",
                link: "/gigs?cat=graphics"
              },
              {
                title: "Digital Marketing",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
                link: "/gigs?cat=digital"
              },
              {
                title: "Writing & Translation",
                image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3",
                link: "/gigs?cat=writing"
              }
            ].map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Freelancer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proof of Quality</h3>
              <p className="text-gray-600">
                Check any pro's work samples, client reviews, and identity verification.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Cost Until You Hire</h3>
              <p className="text-gray-600">
                Interview potential fits for your job, negotiate rates, and only pay for work you approve.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe and Secure</h3>
              <p className="text-gray-600">
                Focus on your work knowing we help protect your data and privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;