import React from 'react';
import Card from './Card.js';
import STORE from './store.js';

function List (props) {
  const header = props.header;
  const cards = props.cards;
  let cardListKey = Object.keys(STORE.allCards)
  console.log(cardListKey);
  let cardListValue = [];
  

  for(let i =0; i < cardListKey.length; i++){
    cardListValue.push(STORE.allCards[cardListKey[i]]);
  }
  console.log(cardListValue);
  
  
  let cardValue =cardListValue.map(card => {
    return <Card title={card.title} content={card.content}/>
  })
console.log(cardValue);

  return (
    <section className="List">
      <header>{header}</header>
      <div className="List-cards">
        {cardValue}
      </div>
    </section>
  )
}

export default List

