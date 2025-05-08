import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import resolucionesData from '../data/resoluciones.json';
import { formatDate } from '../utils/dateUtils';

const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

// Helper to sort and slice data for initial state
const getInitialResolutions = () => {
  return [...resolucionesData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);
};

const BusquedaPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedType, setSelectedType] = useState('');
  // Initialize with the 5 latest resolutions
  const [filteredResoluciones, setFilteredResoluciones] = useState(getInitialResolutions());

  const [availableYears, setAvailableYears] = useState([]);
  const [availableTypes, setAvailableTypes] = useState([]);

  useEffect(() => {
    const years = [...new Set(resolucionesData.map(res => new Date(res.date).getFullYear()))].sort((a, b) => b - a);
    const types = [...new Set(resolucionesData.map(res => res.type))].sort();
    setAvailableYears(years);
    setAvailableTypes(types);
  }, []);

  useEffect(() => {
    let results = [...resolucionesData]; // Start with a fresh copy of all data

    if (selectedYear) {
      results = results.filter(res => new Date(res.date).getFullYear() === parseInt(selectedYear));
    }

    if (selectedMonth && selectedMonth !== '') { // ensure selectedMonth is not empty
      results = results.filter(res => new Date(res.date).getMonth() === parseInt(selectedMonth));
    }

    if (selectedType && selectedType !== '') { // ensure selectedType is not empty
      results = results.filter(res => res.type === selectedType);
    }

    if (searchTerm) {
      results = results.filter(res => 
        res.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        res.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (res.number && res.number.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort the filtered results by date in descending order
    results.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Slice to get the latest 5 of the filtered and sorted results
    const finalResults = results.slice(0, 5);

    setFilteredResoluciones(finalResults);
  }, [searchTerm, selectedYear, selectedMonth, selectedType]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedYear('');
    setSelectedMonth('');
    setSelectedType('');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Búsqueda de Resoluciones</h1>
        
        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <div>
            <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 mb-1">Año:</label>
            <select 
              id="year-filter"
              value={selectedYear}
              onChange={handleYearChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Todos los años</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="month-filter" className="block text-sm font-medium text-gray-700 mb-1">Mes:</label>
            <select 
              id="month-filter"
              value={selectedMonth}
              onChange={handleMonthChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Todos los meses</option>
              {monthNames.map((name, index) => (
                <option key={index} value={index}>{name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Resolución:</label>
            <select 
              id="type-filter"
              value={selectedType}
              onChange={handleTypeChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Todos los tipos</option>
              {availableTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Term Input */}
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Buscar por título, descripción o número dentro de los filtros seleccionados..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <button 
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 mb-6"
        >
            Limpiar todos los filtros
        </button>
      </header>

      {filteredResoluciones.length > 0 ? (
        <div className="space-y-6">
          <p className="text-sm text-gray-600 mb-4">Mostrando las últimas {filteredResoluciones.length} resoluciones (hasta 5) según los filtros aplicados.</p>
          {filteredResoluciones.map((res) => (
            <article key={res.slug} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <Link to={`/resolucion/${res.slug}`} className="block">
                <h2 className="text-xl font-semibold text-blue-700 hover:text-blue-800 mb-2">{res.title}</h2>
              </Link>
              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-4 gap-y-1 mb-3">
                <span className="inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {formatDate(res.date)}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-medium">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  {res.type}
                </span>
                {res.number && (
                  <span className="inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
                    {res.number}
                  </span>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed line-clamp-3">{res.description}</p>
              <Link to={`/resolucion/${res.slug}`} className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium transition-colors">
                Ver más &rarr;
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 14h6" />
          </svg>
          <p className="text-xl text-gray-500">No se encontraron resoluciones que coincidan con los filtros seleccionados.</p>
          <p className="text-gray-400 mt-2">Intente ajustar los filtros o revise el término de búsqueda.</p>
        </div>
      )}
    </div>
  );
};

export default BusquedaPage;