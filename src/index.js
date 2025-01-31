import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { Provider } from 'react-redux';
import store from './store';
import { AdsProvider } from './AdsContext'; // Import the AdsProvider
import { LanguageProvider } from './LanguageContext'; // Import LanguageProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <AdsProvider>
          <LanguageProvider> {/* Wrap the app with LanguageProvider */}
            <App />
          </LanguageProvider>
        </AdsProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
