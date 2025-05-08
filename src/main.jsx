import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/Router' // Import the AppRouter
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter /> {/* Replace App with AppRouter */}
  </React.StrictMode>,
)
