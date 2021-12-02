import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import RouteApp from './containerRoutes/RouteApp';

ReactDOM.render(
  <React.StrictMode>
    <RouteApp />
  </React.StrictMode>,
  document.getElementById('root')
)
