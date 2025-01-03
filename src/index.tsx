import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Ensure global styles are applied

// Ensure this root element ID matches the one in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
