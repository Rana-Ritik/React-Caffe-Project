import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component


// Sample pizza data (in real cases, this could come from a database or API)
const pizzaItems = [
    {
        id: 1,
        category:'pizza',
        name: 'Margherita Pizza',
        description: 'Classic cheese pizza with fresh tomatoes, basil, and mozzarella.',
        price: 999,
        ingredients: ['Tomatoes', 'Mozzarella', 'Basil', 'Olive oil'],
        moreInfo: 'A classic pizza for those who love simplicity and fresh ingredients.',
        image: 'https://img.freepik.com/premium-photo/pizza-margherita-dark-wooden-background-top-view_709963-1145.jpg', // Margherita pizza image
      },
      {
        id: 2,
        category:'pizza',
        name: 'Pepperoni Pizza',
        description: 'A delicious pizza topped with pepperoni and melted mozzarella cheese.',
        price: 799,
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    moreInfo: 'A favorite among meat lovers, topped with spicy pepperoni for an extra kick.',
        image: 'https://img.freepik.com/premium-photo/pepperoni-pizza-black-background-hot-pepperoni-pizza-top-view-banner-generative-ai_446633-8397.jpg', // Pepperoni pizza image
      },
      {
        id: 3,
        category:'pizza',
        name: 'BBQ Chicken Pizza',
        description: 'Grilled chicken, BBQ sauce, red onions, and cheese.',
        price: 899,
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    moreInfo: 'A favorite among meat lovers, topped with spicy pepperoni for an extra kick.',
        image: 'https://img.freepik.com/premium-photo/bbq-chicken-pizza_729149-10829.jpg', // BBQ Chicken pizza image
      },
      {
        id: 4,
        category:'pizza',
        name: 'Vegetarian Pizza',
        description: 'Fresh vegetables including bell peppers, onions, mushrooms, and olives.',
        price: 749,
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    moreInfo: 'A favorite among meat lovers, topped with spicy pepperoni for an extra kick.',
        image: 'http://www.archanaskitchen.com/images/archanaskitchen/1-Author/Waagmi_Soni/Gralic_Crust_Veggie_Pizza.jpg', // Veg pizza image
      },
      {
        id: 5,
        category:'pizza',
        name: 'Hawaiian Pizza',
        description: 'Ham, pineapple, and cheese with a sweet and savory flavor.',
        price: 849,
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    moreInfo: 'A favorite among meat lovers, topped with spicy pepperoni for an extra kick.',
        image: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Quick-Hawaiian-Pizza_EXPS_HCK17_61320_B09_13_4b.jpg', // Hawaiian pizza image
      },
      {
        id: 6,
        category:'pizza',
        name: 'Four Cheese Pizza',
        description: 'A rich blend of mozzarella, cheddar, parmesan, and blue cheese.',
        price: 999,
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    moreInfo: 'A favorite among meat lovers, topped with spicy pepperoni for an extra kick.',
        image: 'https://thumbs.dreamstime.com/b/four-cheese-pizza-close-up-generative-ai-high-quality-illustration-276399084.jpg', // Four cheese pizza image
      },
      {
        id: 7,
        category:'pizza',
        name: 'Seafood Pizza',
        description: 'A delicious mix of seafood like prawns, squid, and clams, with cheese and sauce.',
        price: 1099,
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    moreInfo: 'A favorite among meat lovers, topped with spicy pepperoni for an extra kick.',
        image: 'https://www.thetotallifediet.com/wp-content/uploads/2017/08/seafood-pizza_inner.jpg', // Seafood pizza image
      },
      {
        id: 8,
        category:'pizza',
        name: 'Chicken Tikka Pizza',
        description: 'A spicy pizza with tender chicken tikka, mozzarella, and fresh cilantro.',
        price: 899,
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    moreInfo: 'A favorite among meat lovers, topped with spicy pepperoni for an extra kick.',
        image: 'https://static.vecteezy.com/system/resources/previews/024/905/277/non_2x/freshly-baked-homemade-pizza-on-rustic-wood-table-generated-by-ai-free-photo.jpg', // Chicken Tikka pizza image
      },
      {
        id: 9,
        category:'pizza',
        name: 'Prawn Pizza',
        description: 'Pizza topped with succulent prawns, cheese, and a tangy tomato base.',
        price: 1099,
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    moreInfo: 'A favorite among meat lovers, topped with spicy pepperoni for an extra kick.',
        image: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/11/shrimp-pizza-1.jpg', // Prawn pizza image
      },
      {
        id: 10,
        category:'pizza',
        name: 'Mushroom Pizza',
        description: 'A savory pizza topped with fresh mushrooms, cheese, and herbs.',
        price: 749,
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    moreInfo: 'A favorite among meat lovers, topped with spicy pepperoni for an extra kick.',
        image: 'https://data2.1freewallpapers.com/download/pizza-mushrooms-olives.jpg', // Mushroom pizza image
      },
      {
        id: 11,
        category:'pizza',
        name: 'Beef Pizza',
        description: 'A hearty pizza topped with seasoned beef, cheese, and onions.',
        price: 999,
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    moreInfo: 'A favorite among meat lovers, topped with spicy pepperoni for an extra kick.',
        image: 'https://orderonline.drakesbrookhotel.com.au/img/uploads/products/20210825090318.jpg', // Beef pizza image
      },
      {
        id: 12,
        category:'pizza',
        name: 'Cheese Burst Pizza',
        description: 'Mozzarella cheese stuffed inside the crust, with cheese spread on top.',
        price: 1099,
        ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    moreInfo: 'A favorite among meat lovers, topped with spicy pepperoni for an extra kick.',
        image: 'https://c4.wallpaperflare.com/wallpaper/165/200/910/food-pizza-cheese-wallpaper-preview.jpg', // Cheese Burst pizza image
      },
  // Add other pizza data...
];



const PizzaDetailPage = () => {
    const { pizzaId } = useParams(); // Get the pizza ID from the URL
    const navigate = useNavigate(); // Initialize useNavigate to navigate to the OrderPage
  
    // Find the pizza based on the pizzaId
    const pizza = pizzaItems.find(item => item.id === parseInt(pizzaId));
  
    if (!pizza) {
      return <div>Pizza not found</div>; // If no pizza found with the provided ID
    }
  
    const handleOrderClick = () => {
      // Navigate to the order page and pass the pizza data as state
      navigate('/order', { state: { selectedPizza: pizza } });
    };
  

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <div className="max-w-4xl mx-auto py-12">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <img
              src={pizza.image}
              alt={pizza.name}
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{pizza.name}</h2>
            <p className="text-lg text-gray-600 mb-6">{pizza.description}</p>
            <p className="text-2xl font-semibold text-gray-800 mb-4">&#8377;{pizza.price}</p>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">Ingredients:</h3>
            <ul className="list-disc pl-5 mb-6">
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))}
            </ul>

            <p className="text-gray-600">{pizza.moreInfo}</p>

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

export default PizzaDetailPage;
