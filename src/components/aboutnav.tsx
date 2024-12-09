import React from 'react'

const Aboutnav = () => {
  return (
    <>
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Bandage</div>
      <ul className="hidden md:flex space-x-8">
        <li>
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="#product" className="hover:text-blue-500">
            Product
          </a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-blue-500">
            Pricing
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>
      <div className="hidden md:flex space-x-4">
        <button className="text-blue-500 hover:underline">Login</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Become a member
        </button>
      </div>
      <div className="md:hidden">
      <button className="text-white">☰</button>
      </div>
    </nav>
 </>
  )}
export default Aboutnav