import React from 'react';
import List from './List';
import './app.css';

function App(props) {
  const { lists, allCards } = props.store;
  
  const allLists = lists.map(list => {
    const cards = list.cardIds.map(card => {
      return allCards[card];
    })
    
    return (
      <List 
        key={list.id} 
        header={list.header} 
        cards={cards}/>
    )
  })

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {allLists}
      </div>
    </main>
  );
}

export default App;
