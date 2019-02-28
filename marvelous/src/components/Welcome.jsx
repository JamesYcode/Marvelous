import React from 'react';
import { Link, Route } from 'react-router-dom';


function Welcome(props) {
  return(
    <div className='main-welcome'>
      <h2>Marvel Characters</h2>
      <p>Marvelous is a friendly search engine for Marvels Characters</p>
      <p>Search Your favorite character and see their Origins, Powers and abilities, and more!</p>
      {props.characterName.map(info => (
        <div key={info.id}>
          <h1>{info.name}</h1>
          <img src={info.thumbnail.path + '/standard_fantastic.jpg'} alt='Images Not Available' />
          <p>{info.description}</p>
          <p>Comics Available: {info.comics.available}</p>
        </div>
      ))}
    </div>
  )
}


export default Welcome;
