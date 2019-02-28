import React from 'react';
import { Link, Route } from 'react-router-dom';


function Header(props) {
  return(
    <div className='main-nav-form-container'>
      <header className='main-header'>
        <div id='main-logo'>
          <img id='logo' src='https://66.media.tumblr.com/3b2b790a7fa5601c643871e57ad3851b/tumblr_p5abebOejb1u9mjoso1_400.gif' alt='test' />
        </div>
        <h1>Marvelous Database</h1>
        <nav className='main-nav'>
          <Link to='/'>Home</Link>
          <Link to='/characterList'>Characters</Link>
          <Link to='/about'>About</Link>
        </nav>
        <div>
          <form onSubmit={props.handleSubmit}>
            <input id='main-input' type='text' placeholder='Type Characters Here' value={props.name} name='userInput' onChange={props.handleChange}/>
            <button id='main-button'>Enter</button>
          </form>
        </div>
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
