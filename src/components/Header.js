import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-serif font-bold">WARTA</div>
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
