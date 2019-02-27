import React from 'react';
import { Link, Route } from 'react-router-dom';
import Welcome from './Welcome';

function Header(props) {
  return(
    <div>
      <header className='main-header'>
        <h1>Marvelous Database</h1>
        <nav className='main-nav'>
          <Link to='/'>Home</Link>
          <Link to='/characterList' onClick={() => {
            props.nextPage(0);
          }} >Characters</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>
    </div>
  )
}


export default Header;
