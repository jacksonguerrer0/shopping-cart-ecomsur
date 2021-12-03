import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import RouteApp from './containerRoutes/RouteApp';
import { Provider } from 'react-redux'
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouteApp />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
