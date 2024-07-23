import React from 'react';
import TopNavbar from './components/TopNavbar';
import MainContent from './components/MainContent';
import './App.css';
import Footer from './components/Footer';
import ProductionLinks from './components/ProductionLinks';
import Notice from './components/Notice';

const App = () => {
  return (
    <div className="App">
      <TopNavbar />
      <ProductionLinks/>
      <Notice text="This is an important notice. Please read it carefully." />
      <MainContent />
      <Footer/>
    </div>
  );
};

export default App;
