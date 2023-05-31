import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ProviderMovies from './context/ProviderMovies';
import ProviderFavorits from './context/ProviderFavorits';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProviderFavorits>
    <ProviderMovies>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderMovies>
  </ProviderFavorits>,

);
