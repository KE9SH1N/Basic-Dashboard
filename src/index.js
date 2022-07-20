import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkModeContextProvider } from './Context/darkModeContext';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <DarkModeContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DarkModeContextProvider>
  );


