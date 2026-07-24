import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreContext from './context/StoreContext';
import { ThemeProvider } from './context/ThemeContext';
import rootStore from './stores/RootStore';
import "./i18n";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={rootStore}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreContext.Provider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

