import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MainNavbar from './MainNavbar';
import Footer from './Footer';
import axios from 'axios';
import { UserContext } from './UserContext';  // Assuming you have a UserContext to get the logged-in user

const OrderPage = () => {
  const { selectedPizza } = useLocation().state || {};  // Get selected pizza from location state
  const { user } = useContext(UserContext);  // Retrieve user from context
  const navigate = useNavigate();

  if (!selectedPizza) {
    return <div>No pizza selected</div>;
  }

  // Initialize state for customer details
  const [customerDetails, setCustomerDetails] = useState({
    username: user ? user.name : '',  // Pre-fill with user data if logged in
    phone: '',
    address: '',
    email: user ? user.email : '',  // Pre-fill with user email if logged in
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission to place the order
  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    // Ensure all required fields are filled
    if (!customerDetails.username || !customerDetails.phone || !customerDetails.address || !customerDetails.email) {
      alert('Please fill in all fields');
      return;
    }

    // Prepare the order data
    const orderData = {
      userId: user._id,  // Assuming user context contains user ID
      username: customerDetails.username,
      userphone: customerDetails.phone,
      useremail: customerDetails.email,
      useraddress: customerDetails.address,
      productId: selectedPizza.id,
      productCategory: 'pizza',
      productImage: selectedPizza.image,
      productname: selectedPizza.name,
      productprice: parseFloat(selectedPizza.price),
      productdescription: selectedPizza.description,
    };

    try {
      // Optionally save the order to localStorage or directly send it to your server
      const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
      savedOrders.push(orderData);
      localStorage.setItem('orders', JSON.stringify(savedOrders));

      // Send the order data to the backend
      await axios.post("http://localhost:5000/order/create", orderData);
      alert(`Order placed successfully for ${selectedPizza.name}`);
      navigate('/thank-you');  // Redirect to a Thank You page
    } catch (error) {
      console.error("Error placing order:", error);
      alert("There was an error placing your order. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <MainNavbar />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Order Your Pizza</h2>

        {/* Pizza Details Section */}
        <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mb-8">
          <div className="md:w-1/2">
            <img
              src={selectedPizza.image}
              alt={selectedPizza.name}
              className="w-full h-full object-cover rounded-lg"
              style={{ maxHeight: '300px', objectPosition: 'center' }}
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-3xl font-semibold text-gray-800">{selectedPizza.name}</h3>
            <p className="text-xl text-gray-600">{selectedPizza.price}</p>
            <p className="text-lg text-gray-600 mt-4">{selectedPizza.description}</p>
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
              id="username"
              name="username"
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

export default OrderPage;
