import React from 'react';

function Footer() {
  const columnStyle = {
    wordSpacing: '5px', 
  };

  return (
    <footer className="bg-black text-white p-6 pl-12"> 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
        {/* Column 1 */}
        <div className="col-span-1 md:col-span-1" style={columnStyle}>
          <h4 className="text-2xl font-serif font-bold mb-2">Warta</h4>
          <div className="text-left">
            <div>Free connection with Warta</div>
            <div>and subscription to our news</div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="col-span-1 md:col-span-1" style={columnStyle}>
          <h4 className="font-bold mb-2">MENU</h4>
          <div className="text-left">
            <div className="mb-4">Home</div> 
            <div className="mb-4">About</div> 
            <div className="mb-4">Services</div> 
          </div>
        </div>
        {/* Column 3 */}
        <div className="col-span-1 md:col-span-1" style={columnStyle}>
          <h4 className="font-bold mb-2">SERVICES</h4>
          <div className="text-left">
            <div className="mb-4">Newest</div> 
            <div className="mb-4">Advertising Product</div> 
            <div>Lifestyle</div>
          </div>
        </div>
        {/* Column 4 */}
        <div className="col-span-1 md:col-span-1" style={columnStyle}>
          <h4 className="font-bold mb-2">HELP AND ADVICE</h4>
          <div className="text-left">
            <div className="mb-4">How it works</div> 
            <div className="mb-4">Contact Support</div> 
            <div className="mb-4">Privacy Policy</div> 
            <div>FAQ</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
