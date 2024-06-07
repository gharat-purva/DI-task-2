import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import NewsToday from './components/NewsToday';
import Trending from './components/Trending';
import Blog from './components/Blog';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gray-900 text-white font-sans">
      <Header />
      <MainContent />
      <NewsToday />
      <Trending />
      <Blog />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
