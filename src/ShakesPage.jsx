import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate to the shake order page
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component

const ShakesPage = () => {
  const shakeItems = [
    {
      id: 1,
      category:'shake',
      name: 'Chocolate Shake',
      description: 'A creamy chocolate shake made with rich chocolate and vanilla ice cream.',
      price: 249,
      image: 'https://www.sugarandsoul.co/wp-content/uploads/2021/04/chocolate-milkshake-8-750x1125.jpg',
    },
    {
      id: 2,
      category:'shake',
      name: 'Strawberry Shake',
      description: 'A refreshing strawberry shake with real strawberries and vanilla ice cream.',
      price: 249,
      image: 'https://www.unicornsinthekitchen.com/wp-content/uploads/2018/08/Strawberry-Milkshake-square.jpg',
    },
    {
      id: 3,
      category:'shake',
      name: 'Vanilla Shake',
      description: 'Classic vanilla shake made with pure vanilla and creamy ice cream.',
      price: 199,
      image: 'https://i2.wp.com/www.unicornsinthekitchen.com/wp-content/uploads/2018/06/Classic-Vanilla-Milkshake-3-700px.jpg?resize=610%2C915&ssl=1',
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
    // Add more shake items...
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <h2 className="text-4xl font-bold text-center my-8">Our Shakes</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {shakeItems.map(item => (
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

            <Link to={`/shake/${item.id}`}>
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

export default ShakesPage;
