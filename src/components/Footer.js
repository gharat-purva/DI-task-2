import React from 'react';

function Footer() {
  const columnStyle = {
    wordSpacing: '5px', // Adjust the spacing value as needed
  };

  return (
    <footer className="bg-black text-white p-4 pl-12"> {/* Increased left padding to pl-12 */}
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
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
          </div>
        </div>
        {/* Column 3 */}
        <div className="col-span-1 md:col-span-1" style={columnStyle}>
          <h4 className="font-bold mb-2">SERVICES</h4>
          <div className="text-left">
            <div>Newest</div>
            <div>Advertising Product</div>
            <div>Lifestyle</div>
          </div>
        </div>
        {/* Column 4 */}
        <div className="col-span-1 md:col-span-1" style={columnStyle}>
          <h4 className="font-bold mb-2">HELP AND ADVICE</h4>
          <div className="text-left">
            <div>How it works</div>
            <div>Contact Support</div>
            <div>Privacy Policy</div>
            <div>FAQ</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
