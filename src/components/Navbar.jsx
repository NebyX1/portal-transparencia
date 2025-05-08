import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800 hidden sm:block">TransparenciaUY</span>
              <span className="ml-2 text-sm font-medium text-blue-600 hidden sm:block">Lavalleja</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-6">
              <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:scale-105 transition-all font-medium">Inicio</Link>
              <Link to="/busqueda" className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:scale-105 transition-all font-medium">Búsqueda</Link>
              <Link to="/transparencia-financiera" className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:scale-105 transition-all font-medium">Transparencia Financiera</Link>
            </nav>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              id="mobile-menu-button" 
              onClick={toggleMobileMenu} 
              className="text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path id="menu-icon" className={isMobileMenuOpen ? 'hidden' : 'block'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                <path id="close-icon" className={isMobileMenuOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium" onClick={toggleMobileMenu}>Inicio</Link>
          <Link to="/busqueda" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium" onClick={toggleMobileMenu}>Búsqueda</Link>
          <Link to="/transparencia-financiera" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium" onClick={toggleMobileMenu}>Transparencia Financiera</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;