import React from 'react';

function Subscription() {
  return (
    <section className="p-10 bg-gray-800 flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Subscription to our News</h2>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Email here..."
            className="p-2 rounded-full bg-white border-none text-gray-800 mr-2"
          />
          <button className="p-2 bg-black rounded-full text-white">Send</button>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
