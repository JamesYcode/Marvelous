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
          <Link to='/characterList'>Characters</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>
    </div>
  )
}

{/*onClick={() => {
  props.nextPage(0);
}}

the code above allows the app to reset the characters to default.
It calls the api again.
*/}


export default Header;
