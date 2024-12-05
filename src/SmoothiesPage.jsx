import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate to the smoothie detail page
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component

const SmoothiesPage = () => {
  // List of smoothies with name, description, price (in INR), and image
  const smoothieItems = [
    {
      id: 1,
      category:'smoothie',
      name: 'Mango Smoothie',
      description: 'A refreshing smoothie made with ripe mangoes and a touch of honey.',
      price: 299,
      image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/04/Mango-Smoothie-2-1017x1536.jpg',
    },
    {
      id: 2,
      category:'smoothie',
      name: 'Strawberry Banana Smoothie',
      description: 'A delicious mix of strawberries, bananas, and yogurt for a creamy texture.',
      price: 249,
      image: 'https://www.spendwithpennies.com/wp-content/uploads/2014/01/SpendWithPennies-2-Strawberry-Banana-Smoothie-23.jpg',
    },
    {
      id: 3,
      category:'smoothie',
      name: 'Blueberry Smoothie',
      description: 'Packed with antioxidants, this smoothie combines blueberries and yogurt.',
      price: 299,
      image: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2023/06/Blueberry-Smoothie-14-1024x1536.jpg',
    },
    {
      id: 4,
      category:'smoothie',
      name: 'Green Smoothie',
      description: 'A healthy smoothie made with spinach, kale, bananas, and apple juice.',
      price: 349,
      image: 'http://www.thexpatdietitian.com/wp-content/uploads/2018/04/IMG_2059.jpg',
    },
    {
      id: 5,
      category:'smoothie',
      name: 'Tropical Smoothie',
      description: 'A sweet and tangy smoothie made with pineapple, mango, and coconut milk.',
      price: 349,
      image: 'https://www.halfbakedharvest.com/wp-content/uploads/2014/06/Tropical-Fruit-Breakfast-Smoothie.-7.jpg',
    },
    {
      id: 6,
      category:'smoothie',
      name: 'Peach Smoothie',
      description: 'A delicious and creamy smoothie made with fresh peaches and yogurt.',
      price: 279,
      image: 'https://www.alphafoodie.com/wp-content/uploads/2022/03/Peach-Smoothie-Main1-768x1152.jpeg',
    },
    {
      id: 7,
      category:'smoothie',
      name: 'Avocado Smoothie',
      description: 'A creamy smoothie made with avocado, banana, and honey.',
      price: 399,
      image: 'https://cdn.loveandlemons.com/wp-content/uploads/2017/08/avocado-smoothie-recipe.jpg',
    },
    {
      id: 8,
      category:'smoothie',
      name: 'Chocolate Smoothie',
      description: 'A rich and creamy smoothie made with cocoa powder, bananas, and almond milk.',
      price: 399,
      image: 'https://www.asaucykitchen.com/wp-content/uploads/2016/06/Chocolate-Coffee-Smoothie_-3.jpg',
    },
    {
      id: 9,
      category:'smoothie',
      name: 'Pineapple Coconut Smoothie',
      description: 'A tropical smoothie made with pineapple, coconut milk, and a hint of lime.',
      price: 349,
      image: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2016/04/Pineapple-Coconut-Smoothie-4.jpg',
    },
    {
      id: 10,
      category:'smoothie',
      name: 'Dragon Fruit Smoothie',
      description: 'A vibrant smoothie made with fresh dragon fruit, banana, and coconut water.',
      price: 399,
      image: 'https://kaleforniakravings.com/wp-content/uploads/2021/03/Dragon-fruit-smoothie-8-1229x1536.jpg',
    },
    {
      id: 11,
      category:'smoothie',
      name: 'Kiwi Smoothie',
      description: 'A refreshing smoothie made with fresh kiwi, yogurt, and honey.',
      price: 279,
      image: 'https://www.spendwithpennies.com/wp-content/uploads/2021/07/Kiwi-Smoothie-SpendWithPennies-5.jpg',
    },
    {
      id: 12,
      category:'smoothie',
      name: 'Apple Cinnamon Smoothie',
      description: 'A warming smoothie made with apples, cinnamon, and almond milk.',
      price: 299,
      image: 'https://reciperunner.com/wp-content/uploads/2013/09/Apple-Cinnamon-Smoothie-Photograph.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <h2 className="text-4xl font-bold text-center my-8">Our Smoothies</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {smoothieItems.map(item => (
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

            <Link to={`/smoothie/${item.id}`}>
              <button
                className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
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

export default SmoothiesPage;
