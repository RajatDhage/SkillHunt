import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Ensure this is a default import
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // toast ki css file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
