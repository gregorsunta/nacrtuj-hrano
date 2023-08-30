import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { StoreContext } from './contexts/StoreContext.ts';
import * as stores from './stores/';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={stores}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
);
