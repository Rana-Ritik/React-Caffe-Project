import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component

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

const BurgerItemPage = () => {
  const { burgerId } = useParams();
  const navigate = useNavigate();

  const burger = burgerItems.find(item => item.id === parseInt(burgerId));

  if (!burger) {
    return <div>Item not found</div>;
  }

  const handleOrderClick = () => {
    navigate('/orderburger', { state: { selectedBurger: burger } });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold mb-6">{burger.name}</h2>
        
        {/* Adjusted image size */}
        <div className="relative mb-6">
          <img
            src={burger.image}
            alt={burger.name}
            className="w-full max-w-xs h-64 object-contain mx-auto rounded-lg"  // Adjusting the image size
          />
        </div>
        
        <p className="text-lg text-gray-700 mb-4">{burger.description}</p>
        <p className="text-xl font-semibold text-gray-800 mb-6">&#8377;{burger.price}</p>

        <button
          onClick={handleOrderClick}
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Order Now
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default BurgerItemPage;
