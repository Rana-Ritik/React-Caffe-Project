import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component

// Sample pasta data (in real cases, this could come from a database or API)
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
      },//Add more pasta items as needed...
];

const PastaDetailPage = () => {
  const { pastaId } = useParams(); // Get the pasta ID from the URL
  const navigate = useNavigate(); // Initialize useNavigate to navigate to the OrderPage

  // Find the pasta based on the pastaId
  const pasta = pastaItems.find(item => item.id === parseInt(pastaId));

  if (!pasta) {
    return <div>Pasta not found</div>; // If no pasta found with the provided ID
  }

  const handleOrderClick = () => {
    // Navigate to the order page and pass the pasta data as state
    navigate('/order-pasta', { state: { selectedPasta: pasta } });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <div className="max-w-4xl mx-auto py-12">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <img
              src={pasta.image}
              alt={pasta.name}
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{pasta.name}</h2>
            <p className="text-lg text-gray-600 mb-6">{pasta.description}</p>
            <p className="text-2xl font-semibold text-gray-800 mb-4">&#8377;{pasta.price}</p>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">Ingredients:</h3>
            <ul className="list-disc pl-5 mb-6">
              {pasta.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))}
            </ul>

            <p className="text-gray-600">{pasta.moreInfo}</p>

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

export default PastaDetailPage;
