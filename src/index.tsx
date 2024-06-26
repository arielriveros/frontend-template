import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import '@/styles/global.css';

if (module.hot) {
  module.hot.accept();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);