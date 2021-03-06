import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Header() {

  const [currentPage, setCurrentPage] = useState('about');

  const RenderPage = () => {
    switch(currentPage) {
      case "about":
        return <About />
      case "portfolio":
        return <Portfolio />
      case "contact":
        return <Contact />
      case "resume":
        return <Resume />
      default: 
        return <About />
    }
  };

  return (
    <>
      <header className='container-fluid text-center'>
        <h1 className='mx-auto'>david halladay</h1>
        <Navigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Navigation>
      </header>
      <main>
        <RenderPage />
      </main>
    </>
  );
}

export default Header;