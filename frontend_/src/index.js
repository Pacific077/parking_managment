import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CatStateProvider from './context/CatStateProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CatStateProvider>

    <App />
    </CatStateProvider>
  </React.StrictMode>
);

