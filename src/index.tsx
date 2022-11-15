import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// import store from './store';

import './styles/index.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
