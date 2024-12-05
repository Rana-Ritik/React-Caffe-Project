import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component

const shakeItems = [
    {
        id: 1,
        category:'shake',
        name: 'Chocolate Shake',
        description: 'A creamy chocolate shake made with rich chocolate and vanilla ice cream.',
        price: 249,
        image: 'http://www.willcookforfriends.com/wp-content/uploads/2017/01/Decadent-Chocolate-Milkshake-Youd-Never-Know-Is-Healthy-hi-res-web-1B.jpg', // Chocolate shake image
      },
      {
        id: 2,
        category:'shake',
        name: 'Strawberry Shake',
        description: 'A refreshing strawberry shake with real strawberries and vanilla ice cream.',
        price: 249,
        image: 'https://www.rawblend.com.au/wp-content/uploads/2020/11/Healthy-Strawberry-Milkshake1920x1080.jpg', // Strawberry shake image
      },
      {
        id: 3,
        category:'shake',
        name: 'Vanilla Shake',
        description: 'Classic vanilla shake made with pure vanilla and creamy ice cream.',
        price: 199,
        image: 'https://i.pinimg.com/originals/5b/5b/13/5b5b131ac445089e38c5903370d38244.png', // Vanilla shake image
      },
      {
        id: 4,
        category:'shake',
        name: 'Mango Shake',
        description: 'A tropical mango shake made with fresh mangoes and ice cream.',
        price: 299,
        image: 'https://www.funfoodfrolic.com/wp-content/uploads/2021/05/Mango-Shake-1-585x878.jpg', // Mango shake image
      },
      {
        id: 5,
        category:'shake',
        name: 'Banana Shake',
        description: 'A smooth banana shake made with ripe bananas and milk.',
        price: 249,
        image: 'https://mocktail.net/wp-content/uploads/2022/02/Banana-Milkshake-Recipe_1ig.jpg', // Banana shake image
      },
      {
        id: 6,
        category:'shake',
        name: 'Oreo Shake',
        description: 'A delicious Oreo milkshake with crushed Oreo cookies and vanilla ice cream.',
        price: 299,
        image: 'https://savoredsips.com/wp-content/uploads/2021/06/oreo-milkshake-featured.jpg', // Oreo shake image
      },
      {
        id: 7,
        category:'shake',
        name: 'Coffee Shake',
        description: 'A rich and creamy coffee milkshake with a hint of chocolate.',
        price: 279,
        image: 'https://wallpapercave.com/wp/wp3216103.jpg', // Coffee shake image
      },
      {
        id: 8,
        category:'shake',
        name: 'Blueberry Shake',
        description: 'A refreshing blueberry shake made with fresh blueberries and ice cream.',
        price: 279,
        image: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/05/blueberry-smoothie-5.jpg', // Blueberry shake image
      },
  // List of shake items (same as defined in ShakesPage)
];

const ShakeDetailPage = () => {
  const { shakeId } = useParams(); // Get the shakeId from the URL
  const navigate = useNavigate(); 
  // Find the shake based on the shakeId
  const shake = shakeItems.find(item => item.id === parseInt(shakeId));

  const handleOrderClick = () => {
    // Navigate to the order page and pass the pizza data as state
    navigate('/ordershake', { state: { selectedShake: shake } });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <div className="max-w-4xl mx-auto py-12">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <img
              src={shake.image}
              alt={shake.name}
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{shake.name}</h2>
            <p className="text-lg text-gray-600 mb-6">{shake.description}</p>
            <p className="text-2xl font-semibold text-gray-800 mb-4">&#8377;{shake.price}</p>

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

export default ShakeDetailPage;
