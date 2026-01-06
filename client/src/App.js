
import "./App.css"
import React, { useState, useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <ToastContainer/>
      <PortfolioContainer/>
      <div className={`back-to-top ${showBackToTop ? 'show' : ''}`} onClick={scrollToTop}>
        <i className="fa fa-arrow-up"></i>
      </div>
    </div>
  );
}

export default App;
