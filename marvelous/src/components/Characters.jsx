import React from 'react';
import Pages from './Pages';
import { Link, Route } from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

function Characters(props) {
  return(
    <div>
      {props.characters
        ?
        <div className='characters'>
          {props.characters.map(list => (
            <div className='main-character' key={list.id}>
              <h2>{list.name}</h2>
              <div>
                <img src={list.thumbnail.path + '/portrait_fantastic.jpg'} alt='Images Not Available' />
              </div>
              <Link to={`/characterlist/details/${list.id}`}>Detail</Link>
              <Route path='/characterlist/details/:characterdetail' render={(props) => (
                <CharacterDetails {...props} character={list} />
              )} />
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

{/* Work on previous page loading screen and next page loading screen.
  Make sure the character page refreshes when from character page to home to characters
  have previous buttons.
  */}


export default Characters;
