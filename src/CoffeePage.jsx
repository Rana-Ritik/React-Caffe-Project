import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate to the coffee detail page
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component

const CoffeePage = () => {
  // List of coffee items with name, description, price (in INR), and image
  const coffeeItems = [
    {
      id: 1,
      category:'coffee',
      name: 'Espresso',
      description: 'A strong and bold shot of pure coffee made with finely ground beans.',
      price: 149,
      image: 'https://www.milesteaandcoffee.com/userfiles/files/Espresso.jpg',
    },
    {
      id: 2,
      category:'coffee',
      name: 'Latte',
      description: 'A smooth coffee with espresso and steamed milk, topped with a thin layer of foam.',
      price: 199,
      image: 'https://coffeeaffection.com/wp-content/uploads/2020/01/how-to-make-a-latte-at-home.jpg',
    },
    {
      id: 3,
      category:'coffee',
      name: 'Cappuccino',
      description: 'A creamy coffee with espresso, steamed milk, and a rich layer of foam on top.',
      price: 229,
      image: 'https://topicimages.mrowl.com/large/prithvi_c/coffee/espressodrinks/cappuccino_1.jpg',
    },
    {
      id: 4,
      category:'coffee',
      name: 'Mocha',
      description: 'A delicious blend of espresso, steamed milk, and chocolate syrup topped with whipped cream.',
      price: 249,
      image: 'http://www.caffecoffea.com/wp-content/uploads/2015/02/Espresso-Mocha-2.jpg',
    },
    {
      id: 5,
      category:'coffee',
      name: 'Americano',
      description: 'A simple black coffee made by diluting espresso with hot water.',
      price: 179,
      image: 'https://www.coffeecityusa.com/wp-content/uploads/2018/01/3-americano-768x768.jpg',
    },
    {
      id: 6,
      category:'coffee',
      name: 'Iced Coffee',
      description: 'A refreshing iced coffee, made with cold brew coffee and ice cubes.',
      price: 219,
      image: 'https://wallpaperaccess.com/full/2186546.jpg',
    },
    {
      id: 7,
      category:'coffee',
      name: 'Flat White',
      description: 'A creamy coffee with a velvety texture, made with espresso and steamed milk.',
      price: 219,
      image: 'https://cbtl-images.s3.us-west-1.amazonaws.com/Production/Drupal/s3fs-public/styles/cafe_menu_item/public/cafe-menu/Flat_White_Hazelnut.jpg?itok=SFApZcve',
    },
    {
      id: 8,
      category:'coffee',
      name: 'Caramel Macchiato',
      description: 'A sweet coffee with espresso, steamed milk, and a caramel drizzle on top.',
      price: 269,
      image: 'https://thumbs.dreamstime.com/b/glass-hot-caramel-macchiato-coffee-wooden-vintage-table-morning-light-82805260.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <h2 className="text-4xl font-bold text-center my-8">Our Coffees</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {coffeeItems.map(item => (
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

            <Link to={`/coffee/${item.id}`}>
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

export default CoffeePage;
