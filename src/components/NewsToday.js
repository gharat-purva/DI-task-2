import React from 'react';

function NewsToday() {
  return (
    <section className="py-16 h-screen bg-gray-900 text-white"> 
      <h2 className="text-3xl font-bold mb-6 text-center">News Today</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="bg-placeholder p-4 rounded h-48 flex items-center justify-center">
          <p className="text-gray-900">News 1</p>
        </div>
        <div className="bg-placeholder p-4 rounded h-48 flex items-center justify-center">
          <p className="text-gray-900">News 2</p>
        </div>
        <div className="bg-placeholder p-4 rounded h-48 flex items-center justify-center">
          <p className="text-gray-900">News 3</p>
        </div>
        <div className="bg-placeholder p-4 rounded h-48 flex items-center justify-center">
          <p className="text-gray-900">News 4</p>
        </div>
      </div>
    </section>
  );
}

export default NewsToday;
