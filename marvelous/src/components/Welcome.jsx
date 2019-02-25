import React from 'react';
import { Link, Route } from 'react-router-dom';

function Welcome() {
  return(
    <div className='main-welcome'>
      <h2>Marvel Characters</h2>
      <p>Marvelous is a friendly search engine for Marvels Characters</p>
      <p>Search Your favorite character and see their Origins, Powers and abilities, and more!</p>
      <form>
        <input type='text'  placeholder='Type Characters Here'/>
        <button id='main-button'>Enter</button>
      </form>
    </div>
  )
}


export default Welcome;
