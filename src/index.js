import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './store';
import Card from './Card';
const card = STORE.allCards.a;
ReactDOM.render(<Card title = {card.title} content = {card.content} />, document.getElementById('root'));