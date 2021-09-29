import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/styles.css';
import App from './App';

import { PortfolioContextProvider } from './components/Context/index';

ReactDOM.render(
    <PortfolioContextProvider>
      <App />
    </PortfolioContextProvider>,
  document.getElementById('root')
);
