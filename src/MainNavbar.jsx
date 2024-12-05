import React, { useContext } from 'react'
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  const { user, makeUser } = useContext(UserContext);
  

  const handleLogout = () => {
    makeUser(null);
    localStorage.removeItem("token");
  };
  return (
    <div>
       <nav className="bg-gray-800 p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/originals/e0/98/b0/e098b0159d00e6257f1864fe8a1f41e4.jpg" // Replace with your logo URL
              alt="Sip Bite Logo"
              className="h-10 w-auto"
            />
            <h1 className="text-white text-2xl ml-2">Sip Bite Cafe</h1>
          </div>
          <div className="flex space-x-4">
            <Link to='/home' className="text-white hover:underline">Home</Link>
            <Link to='/menu' className="text-white hover:underline">Menu</Link>
            <Link to='/myorders' className="text-white hover:underline">My Orders</Link>
            <Link to='/feedback' className="text-white hover:underline">Feedback</Link>
            <Link to='/contact' className="text-white hover:underline">Contact Us</Link>
             {/* Conditional Rendering for Logout or Login/Register */}
             {user ? (
                    <button onClick={handleLogout} className="text-white hover:underline">Log Out</button>
                  ) : (
                    <>
                      <Link to='/login' className="text-white hover:underline">Login</Link>
                      <Link to='/register' className="text-white hover:underline">Register</Link>
                    </>
                  )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MainNavbar
