"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/public/logo.avif';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-2 fixed top-0 right-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white flex items-center gap-5 font-bold text-xl">
          <Image src={logo} alt="logo" width={70} className="rounded-full" />
          <h1 className="text-yellow-500 md:text-2xl">SHAPE-UP</h1>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden lg:flex items-center font-bold space-x-[3rem] mr-10">
          <a href="#home" className="text-white hover:text-yellow-500">Home</a>
          <a href="#about" className="text-white  hover:text-yellow-500">About</a>
          <a href="#services" className="text-white  hover:text-yellow-500">Program</a>
          <a href="#trainer" className="text-white  hover:text-yellow-500">Our Trainer</a>
          <a href="#contact" className="bg-transparent border border-white text-white font-semibold py-3 px-8 rounded hover:bg-white hover:text-black transition duration-200">
            Get in touch
          </a>
        </div>

        {/* Hamburger Button for smaller screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Drawer Menu for smaller screens */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-black transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-20 lg:hidden`}
      >
        <div className="flex flex-col h-full p-6 space-y-4 text-white font-semibold">
          <a href="#home" className="py-2 px-4 hover:bg-yellow-500 rounded transition duration-200" onClick={toggleMenu}>Home</a>
          <a href="#about" className="py-2 px-4 hover:bg-yellow-500 rounded transition duration-200" onClick={toggleMenu}>About</a>
          <a href="#services" className="py-2 px-4 hover:bg-yellow-500 rounded transition duration-200" onClick={toggleMenu}>Program</a>
          <a href="#trainer" className="py-2 px-4 hover:bg-yellow-500 rounded transition duration-200" onClick={toggleMenu}>Our Trainer</a>
          <a href="#contact" className="bg-white text-black font-semibold py-3 px-8 rounded transition duration-200 hover:bg-gray-200" onClick={toggleMenu}>
            Get in touch
          </a>
        </div>
      </div>

      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
