import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import store from './store';

import './styles/index.scss';

ReactDOM.render(
  <StrictMode>
    <MoralisProvider appId="xxxxxxxx" serverUrl="xxxxxxxx">
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </MoralisProvider>
  </StrictMode>,
  document.getElementById('root')
);
