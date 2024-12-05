import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate to the pasta detail page
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component

const PastaPage = () => {
  // List of pasta items with name, description, price (in INR), and image
  const pastaItems = [
    {
      id: 1,
      category:'pasta',
      name: 'Spaghetti Carbonara',
      description: 'Classic Italian pasta with creamy sauce, pancetta, and parmesan.',
      price: 249,
      ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan', 'Black Pepper'],
      moreInfo: 'A delicious creamy pasta with smoky pancetta and a rich egg-based sauce.',
      image: 'https://www.errenskitchen.com/wp-content/uploads/2021/01/spaghetti-Carbonara-square.jpg', // Replace with an actual image URL
    },
    {
      id: 2,
      category:'pasta',
      name: 'Penne Arrabbiata',
      description: 'Penne pasta in a spicy tomato sauce with garlic and red chili flakes.',
      price: 199,
      ingredients: ['Penne', 'Tomato Sauce', 'Garlic', 'Chili Flakes', 'Olive Oil'],
      moreInfo: 'A spicy and tangy pasta dish with a garlic and tomato-based sauce.',
      image: 'https://cravinghomecooked.com/wp-content/uploads/2019/08/penne-arrabbiata-1-12-750x938.jpg', // Replace with an actual image URL
    },
    {
      id: 3,
      category:'pasta',
      name: 'Fettuccine Alfredo',
      description: 'Fettuccine pasta in a rich and creamy Alfredo sauce.',
      price: 279,
      ingredients: ['Fettuccine', 'Heavy Cream', 'Butter', 'Garlic', 'Parmesan'],
      moreInfo: 'A creamy pasta dish with a luscious Alfredo sauce made from butter, cream, and Parmesan.',
      image: 'https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg', // Replace with an actual image URL
    },
    {
      id: 4,
      category:'pasta',
      name: 'Pasta Primavera',
      description: 'Pasta with fresh seasonal vegetables and a light garlic sauce.',
      price: 229,
      ingredients: ['Pasta', 'Bell Peppers', 'Zucchini', 'Tomatoes', 'Olive Oil', 'Garlic'],
      moreInfo: 'A light and fresh pasta dish filled with colorful seasonal vegetables and olive oil.',
      image: 'https://www.cookingclassy.com/wp-content/uploads/2018/09/pasta-primavera-2.jpg', // Replace with an actual image URL
    },
    {
      id: 5,
      category:'pasta',
      name: 'Lasagna',
      description: 'Classic Italian lasagna with layers of pasta, cheese, and rich meat sauce.',
      price: 349,
      ingredients: ['Lasagna Sheets', 'Ground Beef', 'Tomato Sauce', 'Mozzarella', 'Ricotta'],
      moreInfo: 'Layers of pasta filled with a hearty meat sauce and topped with melty mozzarella and ricotta.',
      image: 'https://usercontent2.hubstatic.com/5938639_f520.jpg', // Replace with an actual image URL
    },
    {
      id: 6,
      category:'pasta',
      name: 'Pesto Pasta',
      description: 'Pasta tossed in a fragrant basil pesto sauce.',
      price: 219,
      ingredients: ['Pasta', 'Basil', 'Olive Oil', 'Garlic', 'Pine Nuts', 'Parmesan'],
      moreInfo: 'Pasta tossed in a vibrant pesto sauce made from fresh basil, garlic, and pine nuts.',
      image: 'https://theflavoursofkitchen.com/wp-content/uploads/2023/03/Pesto-Pasta-Salad-2-scaled.jpg', // Replace with an actual image URL
    },
    // Add more pasta items as needed...
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <h2 className="text-4xl font-bold text-center my-8">Our Pastas</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {pastaItems.map(item => (
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

            <Link to={`/pasta/${item.id}`}>
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

export default PastaPage;
