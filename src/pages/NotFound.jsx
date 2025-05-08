import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 text-center">
      {/* Código 404 */}
      <div className="mb-8">
        <span className="text-8xl font-bold text-blue-600">404</span>
      </div>

      {/* Título principal */}
      <h1 className="text-4xl font-bold mb-4">Página no encontrada</h1>

      {/* Texto burlón */}
      <div className="max-w-md mb-8">
        <p className="text-gray-600 mb-6">
          La página que buscas no existe… igual que el <span className="font-semibold text-blue-700">parque acuático de Mario</span>,
          las <span className="font-semibold text-blue-700">letras millonarias de Minas</span> o los
          <span className="font-semibold text-blue-700">jueguitos carísimos del Parque Rodó</span>.
          ¡Pero seguí navegando: acá sí vas a encontrar transparencia!
        </p>

        {/* Emoji “cara sorprendida” */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 mx-auto text-gray-400 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        {/* Botón volver al inicio */}
        <div className="space-y-3">
          <Link
            to="/"
            className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-14 0l2 2m0 0l7 7 7-7" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Línea de contacto */}
      <div className="border-t border-gray-200 pt-6 mt-4 w-full max-w-md">
        <p className="text-gray-500 text-sm">
          ¿Necesitas ayuda? Contáctanos en{' '}
          <a href="mailto:transparencia@lavalleja.gub.uy" className="text-blue-600 hover:underline">
            transparencia@lavalleja.gub.uy
          </a>
        </p>
      </div>
    </section>
  );
};

export default NotFound;