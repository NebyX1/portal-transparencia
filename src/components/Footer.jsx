import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">TransparenciaUY</h3>
            <p className="text-gray-400">Portal oficial de transparencia de la Intendencia de Lavalleja</p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/busqueda" className="text-gray-400 hover:text-white transition-colors">Búsqueda</Link></li>
              <li><Link to="/transparencia-financiera" className="text-gray-400 hover:text-white transition-colors">Transparencia Financiera</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Contacto</h3>
            <p className="text-gray-400">Intendencia de Lavalleja</p>
            <p className="text-gray-400">transparencia@lavalleja.gub.uy</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Intendencia de Lavalleja. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">
            Desarrollado por el Equipo de Daniel Ximénez — <span className="font-semibold text-white">No ponemos excusas, a nosotros sí nos dio el tiempo</span> 😉
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;