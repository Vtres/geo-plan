import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Rota from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
      <Rota />
  </React.StrictMode>,
  document.getElementById('root')
);