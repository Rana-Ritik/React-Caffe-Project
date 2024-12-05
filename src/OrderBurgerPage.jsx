import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MainNavbar from './MainNavbar'; // Assuming you have a navbar component
import Footer from './Footer'; // Assuming you have a footer component
import axios from 'axios';
import { UserContext } from './UserContext';

const OrderBurgerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the selected burger from the location state
  const { selectedBurger } = location.state || {};
  const { user } = useContext(UserContext);
  if (!selectedBurger) {
    return <div>No burger selected</div>;
  }

  // Customer details state
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    address: '',
    email: '', // Added email field
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle order submission
  const handleSubmitOrder = (e) => {
    e.preventDefault();

    // Ensure customer details are filled
    if (!customerDetails.name || !customerDetails.phone || !customerDetails.address || !customerDetails.email) {
      alert('Please fill in all fields');
      return;
    }

    // Create order data including customer and product details
    const orderData = {
      userId: user._id, 
      username: customerDetails.name,
      userphone: customerDetails.phone,
      useremail: customerDetails.email,
      useraddress: customerDetails.address,
      productCategory: 'burger',
      productname: selectedBurger.name,
      productprice: parseFloat(selectedBurger.price), // Ensure price is a number
      productdescription: selectedBurger.description,
      productimage: selectedBurger.image, // Adding image URL if needed
    };

   try{
     // Optionally save the order to localStorage or directly send it to your server
     const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
     savedOrders.push(orderData);
     localStorage.setItem('orders', JSON.stringify(savedOrders));
   // Send the order data to the backend
      axios
      .post("http://localhost:5000/order/create", orderData)
 
   alert(`Your burger order has been placed successfully for for ${selectedBurger.name}`);
   navigate('/thank-you'); // Redirect to a Thank You page after successful order
 
   }
      catch(err) {
        console.error('Error placing order:', err);
        alert('There was an error placing your order. Please try again.');
      };
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Order Your Burger</h2>

        {/* Burger Details Section */}
        <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="md:w-1/2">
            <img
              src={selectedBurger.image}
              alt={selectedBurger.name}
              className="w-full h-full object-contain rounded-lg"
              style={{ maxHeight: '350px' }} // Adjust max height to fit your design
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-3xl font-semibold text-gray-800">{selectedBurger.name}</h3>
            <p className="text-xl text-gray-600">{selectedBurger.price}</p>
            <p className="text-lg text-gray-600 mt-4">{selectedBurger.description}</p>
          </div>
        </div>

        {/* Customer Details Form */}
        <form onSubmit={handleSubmitOrder} className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Enter Your Details</h3>
          
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={customerDetails.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={customerDetails.userphone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-6">
            <label htmlFor="address" className="block text-lg font-medium text-gray-700 mb-2">Address</label>
            <textarea
              id="address"
              name="address"
              value={customerDetails.useraddress}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={customerDetails.useremail}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default OrderBurgerPage;
