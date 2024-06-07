import React from 'react';

function Trending() {
  return (
    <section className="py-16 h-screen bg-gray-800 text-white"> 
      <h2 className="text-3xl font-bold mb-6 text-center">Trending</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="bg-placeholder p-4 rounded h-64 flex items-center justify-center">
          <p className="text-gray-900">Trending 1</p>
        </div>
        <div className="bg-placeholder p-4 rounded h-64 flex items-center justify-center">
          <p className="text-gray-900">Trending 2</p>
        </div>
      </div>
    </section>
  );
}

export default Trending;
