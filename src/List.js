import React from 'react';
import Card from './Card.js';

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
      <header>{header}</header>
      <div className="List-cards">
        {cardValue}
      </div>
    </section>
  )
}

export default List;

