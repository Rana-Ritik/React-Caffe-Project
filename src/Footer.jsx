import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white text-center p-4 mt-64">
            <p>&copy; {new Date().getFullYear()} Sip Bite Cafe. All rights reserved.</p>
            <p>
              <span role="img" aria-label="location">
                📍
              </span>{' '}
              Address: V.P.O. Bhavnour, Teh- Mukerian, Distt- Hoshiarpur, Punjab
            </p>
            <p>
              <span role="img" aria-label="phone">
                📞
              </span>{' '}
              Phone: <a href="tel:+916283162104" className="text-blue-400">6283162104</a>
            </p>
          </footer>
    </div>
  )
}

export default Footer
