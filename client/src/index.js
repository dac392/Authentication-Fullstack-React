import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';
import './styles/new.css';

import { Provider } from './Context';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
