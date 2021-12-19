import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Work from './pages/Work/Work';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './pages/Footer/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <Home />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}

    <Footer />

    </div>
  );
}