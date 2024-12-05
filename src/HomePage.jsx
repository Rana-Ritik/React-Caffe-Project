import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import MainNavbar from './MainNavbar';

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of images for the slideshow
  const images = [
    'https://wallpaperaccess.com/full/10681255.jpg',
    'https://i.pinimg.com/originals/60/da/a0/60daa00036be13f1fc516581e4ea338d.jpg',
    'https://i.pinimg.com/originals/36/97/2d/36972d3aa3e5f541fceaf2dbe1b99300.jpg',
    'https://img.freepik.com/premium-photo/image-cozy-ambience-cafe_665569-2098.jpg',
  ];

  // Cycle through images every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
     <MainNavbar></MainNavbar>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-bold text-center mb-6">Welcome to Sip Bite Cafe</h2>
        <p className="text-lg text-center mb-4">
          Discover the best coffee and delicious food crafted just for you.
        </p>
        <p className="text-center">
          Join us for a wonderful culinary experience that will tantalize your taste buds!
        </p>
      </div>

      {/* Slideshow */}
      <div className="relative w-[70%] h-[350px] mt-12 ml-44 mr-8">
        <div className="absolute inset-0 flex justify-center items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      {/* Why We Are the Best Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Sip Bite Cafe is the Best</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quality 1: Delicious Coffee */}
          <div className="text-center p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4" // Coffee Image
              alt="Delicious Coffee"
              className="h-48 w-48 object-cover mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">Delicious Coffee</h3>
            <p className="text-gray-600">
              Our coffee is freshly brewed with the finest beans to give you the perfect cup every time.
            </p>
          </div>

          {/* Quality 2: Friendly Service */}
          <div className="text-center p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              src="https://www.thimble.com/wp-content/uploads/2021/10/Coffee-Shop-Insurance.jpg" // Updated Friendly Service Image
              alt="Friendly Service"
              className="h-48 w-48 object-cover mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">Friendly Service</h3>
            <p className="text-gray-600">
              Our team ensures you have a pleasant and welcoming experience every time you visit.
            </p>
          </div>

          {/* Quality 3: Cozy Ambience */}
          <div className="text-center p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              src="https://static.vecteezy.com/system/resources/previews/029/895/808/non_2x/image-of-cozy-ambience-of-cafe-free-photo.jpg" // Updated Cozy Ambience Image
              alt="Cozy Ambience"
              className="h-48 w-48 object-cover mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">Cozy Ambience</h3>
            <p className="text-gray-600">
              Enjoy a relaxing environment with comfortable seating and a cozy atmosphere.
            </p>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Find Us Here</h2>
        <div className="w-full h-[400px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.4122529576316!2d75.95883897391703!3d31.840995331234282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b117d838a9833%3A0x4791aa22e832d0c6!2sSip%26Bite!5e0!3m2!1sen!2sin!4v1730795490845!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
