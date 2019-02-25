import React from 'react';

function Characters(props) {
  return(
    <div>
      <h1>Hello</h1>
      {props.characters.map(list => (
        <div key={list.id}>
          <h2>{list.name}</h2>
        </div>
      ))}
    </div>
  )
}


export default Characters;
