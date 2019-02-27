import React from 'react';
import { Link, Route } from 'react-router-dom';


function Welcome(props) {
  return(
    <div className='main-welcome'>
      <h2>Marvel Characters</h2>
      <p>Marvelous is a friendly search engine for Marvels Characters</p>
      <p>Search Your favorite character and see their Origins, Powers and abilities, and more!</p>
      <form onSubmit={props.handleSubmit}>
        <input type='text' placeholder='Type Characters Here' value={props.name} name='userInput' onChange={props.handleChange}/>
        <button id='main-button'>Enter</button>
      </form>
      {props.test.map(any => (
        <div key={any.id}>
          <h1>{any.name}</h1>
          <img src={any.thumbnail.path + '/standard_fantastic.jpg'} alt='Images Not Available' />
          <p>{any.description}</p>
        </div>
      ))}
    </div>
  )
}


export default Welcome;
