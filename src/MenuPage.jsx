import React, { useState } from 'react';
import MainNavbar from './MainNavbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const MenuPage = () => {
  // List of menu items with images
  const menuItems = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Delicious cheese pizza with your choice of toppings.',
      image: 'https://images7.alphacoders.com/858/858236.jpg', // Pizza specific image
    },
    {
      id: 2,
      name: 'Shake',
      description: 'Creamy shakes in various flavors like vanilla, chocolate, and strawberry.',
      image: 'https://wallpapercave.com/wp/wp6637320.jpg', // Shakes specific image
    },
    {
      id: 3,
      name: 'Coffee',
      description: 'Freshly brewed coffee with rich flavor and aroma.',
      image: 'http://wallup.net/wp-content/uploads/2017/11/17/239445-coffee-coffee_beans-cup.jpg', // Coffee specific image
    },
    {
      id: 4,
      name: 'Burger',
      description: 'Juicy burgers with crispy patties and fresh veggies.',
      image: 'https://wallpaperaccess.com/full/1312802.jpg', // Burger specific image
    },
    {
      id: 5,
      name: 'Momos',
      description: 'Steamed dumplings with a spicy dip, filled with vegetables or meat.',
      image: 'https://img.freepik.com/premium-photo/veg-fried-momos-with-red-chutney-black-background-generative-ai_802140-414.jpg', // Momos specific image
    },
    {
      id: 6,
      name: 'Fries',
      description: 'Golden and crispy fries, the perfect side snack to enjoy with any meal.',
      image: 'https://wallpaperaccess.com/full/1306229.jpg', // Fries specific image
    },
    {
      id: 7,
      name: 'Pasta',
      description: 'Creamy pasta made with fresh ingredients and savory sauce.',
      image: 'https://images5.alphacoders.com/423/thumb-1920-423321.jpg', // Pasta specific image
    },
    {
      id: 8,
      name: 'Smoothies',
      description: 'Refreshing fruit smoothies, perfect for a healthy snack.',
      image: 'https://images7.alphacoders.com/108/thumb-1920-1084354.jpg', // Smoothies specific image
    },
  ];

  const [showAllItems, setShowAllItems] = useState(false); // State to toggle showing all items

  const handleExploreMoreClick = () => {
    setShowAllItems(true); // Toggle to show all items when the button is clicked
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <h2 className="text-4xl font-bold text-center mb-8">Our Menu</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Show only 3 items initially */}
        {(showAllItems ? menuItems : menuItems.slice(0, 3)).map(item => (
          <div
            key={item.id}
            className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105" // Added hover effects here
          >
            <div className="relative mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div> {/* Optional overlay */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <Link to={`/${item.name.toLowerCase()}`}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Explore All
            </Link>
          </div>
        ))}
      </div>

      {/* Show 'Explore More' button only if there are more items */}
      {!showAllItems && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleExploreMoreClick}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Explore More Items
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MenuPage;
