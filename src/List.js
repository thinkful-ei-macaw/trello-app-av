import React from 'react';
import Card from './Card.js';
import './list.css';

function List (props) {
  const { header, cards } = props;
  
  let cardValue = cards.map(card => {
    return (
      <Card 
        key={card.id} 
        title={card.title} 
        content={card.content}/>
    )
  })

  return (
    <section className="List">
      <header className="List-header"><h2>{header}</h2></header>
      <div className="List-cards">
        {cardValue}
      </div>
    </section>
  )
}

export default List;

