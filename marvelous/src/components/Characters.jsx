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
        <div>
          <h1>Loading...</h1>
        </div>
      }
      <Pages
        selectPage={props.selectPage}
        nextPage={props.nextPage}
        prevPage={props.prevPage}
        pageNumber={props.pageNumber}
        resetCharacter={props.resetCharacter}/>
    </div>
  )
}


export default Characters;
