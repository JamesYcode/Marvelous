import React from 'react';
import Pages from './Pages';

function Characters(props) {
  return(
    <div>
      {props.characters
        ?
        <div>
          {props.characters.map(list => (
            <div key={list.id}>
              <h2>{list.name}</h2>
              <p>{list.description}</p>
            </div>
          ))}
        </div>
        :
        <div>Loading...</div>
      }
      <Pages
        selectPage={props.selectPage}
        nextPage={props.nextPage}
        pageNumber={props.pageNumber}
        resetCharacter={props.resetCharacter}/>
    </div>
  )
}


export default Characters;
