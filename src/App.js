import React from 'react';
import TopNavbar from './components/TopNavbar';
import MainContent from './components/MainContent';
import './App.css';
import Footer from './components/Footer';
import ProductionLinks from './components/ProductionLinks';

const App = () => {
  return (
    <div className="App">
      <TopNavbar />
      <ProductionLinks/>
      <MainContent />
      <Footer/>
    </div>
  );
};

export default App;
