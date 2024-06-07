import React from 'react';

function Blog() {
  return (
    <section className="p-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="bg-[#c4c4c4] p-4 rounded h-48 flex items-center justify-center">
          <p className="text-gray-900">Blog Post 1</p>
        </div>
        <div className="bg-[#c4c4c4] p-4 rounded h-48 flex items-center justify-center">
          <p className="text-gray-900">Blog Post 2</p>
        </div>
        <div className="bg-[#c4c4c4] p-4 rounded h-48 flex items-center justify-center">
          <p className="text-gray-900">Blog Post 3</p>
        </div>
        <div className="bg-[#c4c4c4] p-4 rounded h-48 flex items-center justify-center">
          <p className="text-gray-900">Blog Post 4</p>
        </div>
      </div>
    </section>
  );
}

export default Blog;
