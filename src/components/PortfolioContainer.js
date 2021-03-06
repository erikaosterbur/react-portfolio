import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Tools from './pages/Tools';
import Resume from './pages/Resume';
import Header from './Header';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Tools') {
      return <Tools />;
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div id="main-container">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <Footer />
    </>
  );
}