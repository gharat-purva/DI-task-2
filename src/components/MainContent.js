import React from 'react';

function MainContent() {
  return (
    <section className="p-10 bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="w-full md:w-1/3 mb-10 md:mb-0 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4">Discover new world news and follow developments</h1>
        <p className="mb-6">Follow the development of world news which is very hot so that we don't fall behind and know what is happening in this world.</p>
        <div className="flex items-center bg-white rounded-lg overflow-hidden mx-auto md:mx-0 w-4/5 md:w-full">
          <input type="text" placeholder="Search News..." className="p-2 w-full text-gray-800 focus:outline-none" />
          <button className="bg-[#57caeb] text-white px-4 py-2">Search</button>
        </div>
      </div>
      <div className="md:w-1/2 bg-[#c4c4c4] p-4 rounded-lg h-64 flex items-center justify-center relative md:ml-20 mt-10 md:mt-0">
        <div className="absolute top-0 right-0 bg-yellow-400 p-2"></div>
        <div className="absolute bottom-0 left-0 bg-teal-400 p-2 transform rotate-45"></div>
        <p className="text-gray-900">Main content image placeholder</p>
      </div>
    </section>
  );
}

export default MainContent;
