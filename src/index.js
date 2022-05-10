import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardList from './CardList'
import 'tachyons';
import {robots} from './Robots'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList robots={robots}/>
  </React.StrictMode>
);

