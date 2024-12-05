import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // Ensure you create this CSS file for custom styles
import Navbar from './Navbar';
import Footer from './Footer';

const MainPage = () => {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 3000); // Show main content after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen"> {/* Apply background color here */}
      {!showMain ? (
        <div className="delivery-scooter-container">
          <img
            src="https://thumbs.dreamstime.com/b/delivery-man-chef-cook-uniform-hat-delivering-pizza-retro-scooter-motor-moped-trunk-case-box-flat-vector-159179086.jpg"
            alt="Delivery Scooter"
            className="scooter-image"
          />
          <div className="hover-text">Hi, this is Sip Bite Cafe!</div>
        </div>
      ) : (
        <div className="main-content">
          <Navbar></Navbar>

          <div className="h-[400px] w-[100%] mt-32 flex">
            {/* Static Image Section */}
            <div className="h-[300px] w-[40%] my-12 ml-4 relative">
              <img
                src="https://live.staticflickr.com/65535/48448014892_2fec23d6b3.jpg" // Replace with your static image URL
                alt="Cafe Image"
                className="h-full w-full object-contain rounded-lg shadow-lg" // Adjusted image size and fit
              />
            </div>

            {/* About Us Section */}
            <div className="h-[400px] w-[40%] ml-36">
              <div className="bg-gray-800 text-white py-12 px-8 rounded-lg shadow-lg mt-16">
                <h2 className="text-4xl font-bold text-center mb-6 text-white">About Us</h2>
                <p className="text-lg text-center mb-6 text-gray-300">
                  Welcome to Sip Bite Cafe! We are dedicated to providing the best coffee and culinary experiences in
                  town. Our passionate team carefully sources the finest ingredients to craft delicious dishes and drinks
                  that delight your senses.
                </p>
                <h3 className="text-2xl font-semibold text-center mt-4 mb-2 text-white">Our Mission</h3>
                <p className="text-md text-center text-gray-300">
                  At Sip Bite Cafe, our mission is to create a welcoming atmosphere where everyone can enjoy high-quality
                  food and beverages while building a community that fosters connections and friendships.
                </p>
                <div className="mt-8 text-center">
                  <Link
                    to="/home"
                    className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default MainPage;
