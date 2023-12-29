import React, { useState } from 'react';
import Logo from '../assets/HangryBrandLogo.svg';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-[20px] lg:px-[165px]">
        <div className="flex items-center justify-between py-6">
          {/* Brand Logo - Left alignment for small screens, centered for large screens */}
          <div className="flex items-center">
            <img src={Logo} alt="Your Brand Logo" className="h-100%" />
          </div>

          {/* Links - Hidden on small screens */}
          <div className="hidden lg:flex space-x-[48px]">
            <a href="/" className="text-black hover:text-rose-800">
              Tentang Kami
            </a>
            <a href="/" className="text-black hover:text-rose-800">
              Semua Outlet
            </a>
            <a href="/" className="text-black hover:text-rose-800">
              Promo
            </a>
            <a href="/" className="text-black hover:text-rose-800">
              Karier
            </a>
            <a href="/" className="text-rose-800 font-bold hover:text-black">
              Download App
            </a>
          </div>

          {/* Menu icon visible only on small screens */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <AiOutlineMenu
                size={25}
                className={`transition-transform duration-300 ease-in-out ${
                  menu ? 'transform rotate-180' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Links displayed below navbar when menu is toggled */}
      {menu && (
        <div
          className={`lg:hidden py-4 px-[20px] transition-opacity duration-300 ease-out ${
            menu ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ height: menu ? 'auto' : '0px' }}
        >          <a href="/" className="block text-black mb-2 hover:text-rose-800">
            Tentang Kami
          </a>
          <a href="/" className="block text-black mb-2 hover:text-rose-800">
            Semua Outlet
          </a>
          <a href="/" className="block text-black mb-2 hover:text-rose-800">
            Promo
          </a>
          <a href="/" className="block text-black mb-2 hover:text-rose-800">
            Karier
          </a>
          <a href="/" className="block text-rose-800 font-bold hover:text-black">
            Download App
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
