import React from 'react';
import { Link } from 'react-router-dom';
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component

const ThankYouPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Thank You for Your Order!</h2>
        <p className="text-lg text-gray-600 mb-8">Your order has been placed successfully. We'll notify you once it's ready!</p>
        <Link to="/menu" className="text-red-500 hover:text-red-700">Back to Home</Link>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
