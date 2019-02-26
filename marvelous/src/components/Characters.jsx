import React from 'react';
import Pages from './Pages';

function Characters(props) {
  return(
    <div>
      {props.characters.map(list => (
        <div key={list.id}>
          <h2>{list.name}</h2>
        </div>
      ))}
      <Pages
        selectPage={props.selectPage}
        nextPage={props.nextPage}
        pageNumber={props.pageNumber}/>
    </div>
  )
}


export default Characters;
