import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate to the burger order page
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component

const BurgerPage = () => {
  const burgerItems = [
    {
      id: 1,
      category:'burger',
      name: 'Classic Burger',
      description: 'A juicy beef patty with lettuce, tomato, cheese, and our special sauce.',
      price: 199,
      image: 'https://brookrest.com/wp-content/uploads/2020/05/AdobeStock_282247995-scaled.jpeg',
    },
    {
      id: 2,
      category:'burger',
      name: 'Cheese Burger',
      description: 'A delicious beef patty with melted cheese, pickles, and onions.',
      price: 249,
      image: 'https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-wide-FS-and-foodporn-55.jpg',
    },
    {
      id: 3,
      category:'burger',
      name: 'Chicken Burger',
      description: 'A crispy chicken patty with lettuce, tomato, and mayo.',
      price: 229,
      image: 'https://www.chicken.ca/wp-content/uploads/2020/09/Moist-Chicken-Burgers.jpg',
    },
    {
      id: 4,
      category:'burger',
      name: 'Veggie Burger',
      description: 'A wholesome veggie patty with avocado, lettuce, tomato, and sauce.',
      price: 179,
      image: 'https://www.foodandwine.com/thmb/nfLq4BlAQNSaDlA8b7O5_yGE430=/2000x1334/filters:fill(auto,1)/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg',
    },
    {
      id: 5,
      category:'burger',
      name: 'BBQ Burger',
      description: 'A tender beef patty with BBQ sauce, cheddar cheese, and caramelized onions.',
      price: 269,
      image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS.jpg',
    },
    {
      id: 6,
      category:'burger',
      name: 'Spicy Burger',
      description: 'A spicy beef patty with jalapenos, spicy mayo, and crispy bacon.',
      price: 249,
      image: 'https://flawlessfood.co.uk/wp-content/uploads/2020/02/blog-200225-Spicy-Chicken-Burger-14686.jpg',
    },
    {
      id: 7,
      category:'burger',
      name: 'Double Burger',
      description: 'Two beef patties stacked with cheese, lettuce, and pickles.',
      price: 299,
      image: 'https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-wide-FS-and-foodporn-55.jpg',
    },
    {
      id: 8,
      category:'burger',
      name: 'Fish Burger',
      description: 'A crispy fish fillet with tartar sauce, lettuce, and tomato.',
      price: 239,
      image: 'https://vjcooks.com/wp-content/uploads/2020/11/Vjcooks_fishburger3.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <h2 className="text-4xl font-bold text-center my-8">Our Burger Menu</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {burgerItems.map(item => (
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

            <Link to={`/burger/${item.id}`}>
              <button
                className="bg-brown-500 text-white py-2 px-6 rounded-lg hover:bg-brown-700 transition-colors duration-300"
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

export default BurgerPage;
