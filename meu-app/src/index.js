import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import Treino from './Treino';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Treino />
  </React.StrictMode>
);
reportWebVitals();
