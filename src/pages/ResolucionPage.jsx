import React from 'react';
import { useParams, Link } from 'react-router-dom';
import resoluciones from '../data/resoluciones.json';
import { formatDate } from '../utils/dateUtils';
import NotFound from './NotFound';

const ResolucionPage = () => {
  const { slug } = useParams();
  const resolution = resoluciones.find((r) => r.slug === slug);

  if (!resolution) {
    return <NotFound />;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-0">
      <article className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        {/* Breadcrumb navigation */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-blue-600">Inicio</Link> &raquo; 
          <Link to="/busqueda" className="hover:text-blue-600">Búsqueda</Link> &raquo; 
          <span className="text-gray-700">Resolución</span>
        </div>
        
        {/* Header section */}
        <header className="border-b border-gray-200 pb-5 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{resolution.title}</h1>
          <div className="flex flex-wrap items-center text-gray-600 gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(resolution.date)}
            </span>
            
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {resolution.type}
            </span>
            
            {resolution.number && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
                {resolution.number}
              </span>
            )}
          </div>
        </header>
        
        {/* Main content summary */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">{resolution.description}</p>
        </div>
        
        {/* Full resolution content */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Texto completo de la resolución</h2>
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg font-serif leading-relaxed whitespace-pre-line text-sm md:text-base">
            {resolution.content}
          </div>
        </div>
        
        {/* Footer actions */}
        <div className="border-t border-gray-200 pt-5 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/busqueda" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a Búsqueda
          </Link>
          
          <button 
            onClick={handlePrint} 
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md inline-flex items-center transition-colors w-full md:w-auto justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Descargar PDF
          </button>
        </div>
      </article>
    </div>
  );
};

export default ResolucionPage;