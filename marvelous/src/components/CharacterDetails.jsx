import React from 'react';
import { Link, Route } from 'react-router-dom';
import Characters from './Characters';


function CharacterDetails(props) {
  return(
    <div>
      {parseInt(props.match.params.characterdetail) === props.character.id && (
        <div>
          <p>{props.character.description}</p>
        </div>
      )}
    </div>
  )
}

export default CharacterDetails;
