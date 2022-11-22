import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
const appNode = document.querySelector('#app');

if (appNode) {
  const root = createRoot(appNode);
  root.render(<App />);
}
