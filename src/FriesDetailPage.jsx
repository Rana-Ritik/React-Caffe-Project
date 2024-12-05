import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component

// Sample fries data (in real cases, this could come from a database or API)
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
  // Add more fries data as needed
];

const FriesDetailPage = () => {
  const { friesId } = useParams(); // Get the fries ID from the URL
  const navigate = useNavigate(); // Initialize useNavigate to navigate to the OrderPage

  // Find the fries based on the friesId
  const fries = friesItems.find(item => item.id === parseInt(friesId));

  if (!fries) {
    return <div>Fries not found</div>; // If no fries found with the provided ID
  }

  const handleOrderClick = () => {
    // Navigate to the order page and pass the fries data as state
    navigate('/order-fries', { state: { selectedFries: fries } });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <div className="max-w-4xl mx-auto py-12">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <img
              src={fries.image}
              alt={fries.name}
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{fries.name}</h2>
            <p className="text-lg text-gray-600 mb-6">{fries.description}</p>
            <p className="text-2xl font-semibold text-gray-800 mb-4">&#8377;{fries.price}</p>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">Ingredients:</h3>
            <ul className="list-disc pl-5 mb-6">
              {fries.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))}
            </ul>

            <p className="text-gray-600">{fries.moreInfo}</p>

            <button
              onClick={handleOrderClick}
              className="mt-6 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FriesDetailPage;
