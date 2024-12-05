import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://i.pinimg.com/originals/e0/98/b0/e098b0159d00e6257f1864fe8a1f41e4.jpg" // Replace with your logo URL
                  alt="Sip Bite Logo"
                  className="h-10 w-auto"
                />
                <h1 className="text-white text-2xl ml-2">Sip Bite Cafe</h1>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar
