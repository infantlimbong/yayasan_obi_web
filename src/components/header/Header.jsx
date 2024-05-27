import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  let lastScrollY = window.scrollY;
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsScrolledUp(false);
      } else {
        setIsScrolledUp(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`bg-red-600 px-4 md:px-24 h-14 md:h-16 flex items-center fixed w-full z-10 transition-transform duration-300 ${isScrolledUp ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My App</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none flex flex-col gap-1">
            <div className={`w-6 h-0.5 bg-white rounded transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-white rounded transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
        <ul className={`flex flex-col md:flex-row md:space-x-4 fixed md:static top-14 md:top-0 left-0 h-screen md:h-full w-64 md:w-auto bg-red-600 p-4 md:p-0 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <li>
            <Link to="/" className={`text-white hover:text-gray-200 block md:inline-block ${location.pathname === '/' ? 'underline' : ''}`} onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/articles" className={`text-white hover:text-gray-200 block md:inline-block ${location.pathname === '/articles' ? 'underline' : ''}`} onClick={toggleMenu}>Articles</Link>
          </li>
          <li>
            <Link to="/about" className={`text-white hover:text-gray-200 block md:inline-block ${location.pathname === '/about' ? 'underline' : ''}`} onClick={toggleMenu}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
