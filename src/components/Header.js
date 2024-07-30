import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logoDesktop from '../assets/logoDesktop.png';
import logoMobile from '../assets/logoMobile.png';

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-serif font-bold">WARTA</div>
      {isMobile ? (
        <img src={logoMobile} alt="Logo" style={{ width: '25px' }} />
      ) : (
        <img src={logoDesktop} alt="Logo" style={{ width: '150px' }} />
      )}
      <nav className="flex space-x-8">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#news" className="hover:text-gray-400">News</a>
        <a href="#lifestyle" className="hover:text-gray-400">Lifestyle</a>
        <a href="#blog" className="hover:text-gray-400">Blog</a>
      </nav>
    </header>
  );
}

export default Header;
