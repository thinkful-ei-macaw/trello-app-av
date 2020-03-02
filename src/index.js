import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './store';
import Card from './Card';
import List from './List.js';
const card = STORE.allCards.a;

ReactDOM.render(<List />, document.getElementById('root'));