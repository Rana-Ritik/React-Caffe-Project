import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate to the fries detail page
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component

const FriesPage = () => {
  // List of fries with name, description, price (in INR), and image
  const friesItems = [
    {
      id: 1,
      category:'fries',
      name: 'Classic Fries',
      description: 'Crispy and golden fries, a timeless classic.',
      price: 99,
      ingredients: ['Potatoes', 'Salt', 'Oil'],
      moreInfo: 'Simple, crispy fries that go perfectly with any dipping sauce.',
      image: 'https://images.squarespace-cdn.com/content/v1/6074c8b9fbc2a82002fa7ad2/1619009843069-1VVSNNZD4SRK9WBZ30Z3/Classic+Fries.jpg', // Replace with an actual image URL
    },
    {
      id: 2,
      category:'fries',
      name: 'Cheese Fries',
      description: 'Fries topped with gooey melted cheese.',
      price: 149,
      ingredients: ['Potatoes', 'Cheese', 'Salt', 'Oil'],
      moreInfo: 'Crispy fries smothered in rich melted cheese, perfect for cheese lovers.',
      image: 'https://www.acouplecooks.com/wp-content/uploads/2022/06/Cheese-Fries-005.jpg', // Replace with an actual image URL
    },
    {
      id: 3,
      category:'fries',
      name: 'Spicy Fries',
      description: 'Fries with a spicy kick and seasoning.',
      price: 129,
      ingredients: ['Potatoes', 'Chili Powder', 'Salt', 'Oil'],
      moreInfo: 'Crunchy fries with a spicy seasoning that gives you a fiery kick.',
      image: 'https://cullyskitchen.com/wp-content/uploads/2022/07/Untitled-design-53-3.png', // Replace with an actual image URL
    },
    {
      id: 4,
      category:'fries',
      name: 'Garlic Fries',
      description: 'Fries seasoned with garlic and herbs for an aromatic experience.',
      price: 139,
      ingredients: ['Potatoes', 'Garlic', 'Herbs', 'Oil'],
      moreInfo: 'Fries tossed in fragrant garlic and herbs, perfect for garlic lovers.',
      image: 'http://assets3.thrillist.com/v1/image/1495583/size/tmg-facebook_share', // Replace with an actual image URL
    },
    {
      id: 5,
      category:'fries',
      name: 'Loaded Fries',
      description: 'Fries topped with bacon, cheese, and sour cream.',
      price: 199,
      ingredients: ['Potatoes', 'Bacon', 'Cheese', 'Sour Cream'],
      moreInfo: 'Fries loaded with all your favorite toppings — bacon, cheese, and sour cream.',
      image: 'http://images6.fanpop.com/image/photos/35300000/French-Fries-french-fries-35339479-3872-2592.jpg', // Replace with an actual image URL
    },
    {
      id: 6,
      category:'fries',
      name: 'Sweet Potato Fries',
      description: 'A healthier alternative, sweet potato fries with a slight sweetness.',
      price: 179,
      ingredients: ['Sweet Potatoes', 'Salt', 'Oil'],
      moreInfo: 'Crispy sweet potato fries, perfect for those looking for a healthier option.',
      image: 'https://tastesbetterfromscratch.com/wp-content/uploads/2020/07/Sweet-Potato-Fries-10.jpg', // Replace with an actual image URL
    },
    // Add more fries as needed...
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <h2 className="text-4xl font-bold text-center my-8">Our Fries</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {friesItems.map(item => (
          <div
            key={item.id}
            className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="relative mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-lg font-semibold text-gray-800 mb-4">&#8377;{item.price}</p>

            <Link to={`/fries/${item.id}`}>
              <button
                className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default FriesPage;
