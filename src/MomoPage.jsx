import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate to the momo detail page
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component

const MomoPage = () => {
  // List of momos with name, description, price (in INR), and image
  const momoItems = [
    {
        id: 1,
        category:'momo',
        name: 'Steamed Veg Momos',
        description: 'Delicious steamed momos filled with fresh vegetables.',
        price: 199,
        ingredients: ['Tomatoes', 'Cabbage', 'Carrot', 'Onion', 'Ginger', 'Garlic'],
        moreInfo: 'A healthy option for momo lovers who prefer a light and fresh filling.',
        image: 'https://www.rasoirani.com/wp-content/uploads/2020/10/veg-paneer-momos.jpg', // Steamed Veg momo image
      },
      {
        id: 2,
        category:'momo',
        name: 'Fried Veg Momos',
        description: 'Crispy fried momos with a spicy filling.',
        price: 249,
        ingredients: ['Cabbage', 'Carrot', 'Onion', 'Chili', 'Garlic', 'Soy Sauce'],
        moreInfo: 'Crunchy on the outside with a spicy veggie filling inside.',
        image: 'https://i.pinimg.com/originals/14/9b/94/149b94c31b1a489e842e6d3af90fc218.jpg', // Fried Veg momo image
      },
      {
        id: 3,
        category:'momo',
        name: 'Chicken Momos',
        description: 'Juicy chicken-filled momos, steamed to perfection.',
        price: 299,
        ingredients: ['Chicken', 'Ginger', 'Garlic', 'Onions', 'Coriander'],
        moreInfo: 'Delicious steamed chicken momos, a perfect meal for chicken lovers.',
        image: 'https://tastyjevan.files.wordpress.com/2020/12/thumbnail_nt2-4.jpg', // Chicken momo image
      },
      {
        id: 4,
        category:'momo',
        name: 'Prawn Momos',
        description: 'Delicate momos stuffed with prawns and seasoned spices.',
        price: 349,
        ingredients: ['Prawns', 'Ginger', 'Garlic', 'Chili', 'Onion'],
        moreInfo: 'Fresh prawns wrapped in soft dough, seasoned with aromatic spices.',
        image: 'https://i.ytimg.com/vi/jfJ-ji_O9sw/maxresdefault.jpg', // Prawn momo image
      },
      {
        id: 5,
        category:'momo',
        name: 'Tandoori Momos',
        description: 'Smoked momos cooked in a tandoor, giving them a unique flavor.',
        price: 399,
        ingredients: ['Chicken', 'Ginger', 'Garlic', 'Chili', 'Yogurt', 'Coriander'],
        moreInfo: 'Smoky, spicy, and charred to perfection, these momos are packed with flavor.',
        image: 'http://curlytales.com/wp-content/uploads/2017/07/Wow-Momo.jpg', // Tandoori momo image
      },
      {
        id: 6,
        category:'momo',
        name: 'Cheese Momos',
        description: 'Momos filled with gooey cheese, perfect for cheese lovers.',
        price: 349,
        ingredients: ['Cheese', 'Garlic', 'Onions', 'Herbs'],
        moreInfo: 'These cheese-filled momos are an indulgent treat for cheese lovers.',
        image: 'https://www.theskburger.com/wp-content/uploads/2022/08/baked-cheesy-momos-veg-single.617c39d51807f9d00741440687693691.1.jpg', // Cheese momo image
      },
    // Add other momos...
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <h2 className="text-4xl font-bold text-center my-8">Our Momos</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {momoItems.map(item => (
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

            <Link to={`/momo/${item.id}`}>
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

export default MomoPage;
