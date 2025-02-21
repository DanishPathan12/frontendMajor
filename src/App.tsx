import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gigs from './pages/Gigs';
import GigDetails from './pages/GigDetails';
import Orders from './pages/Orders';
import Messages from './pages/Messages';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gigs" element={<Gigs />} />
            <Route path="/gigs/:id" element={<GigDetails />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;