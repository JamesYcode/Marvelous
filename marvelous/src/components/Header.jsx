import React, { Component } from 'react';
import { withRouter, Link, Route } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e){
    e.preventDefault();
    this.props.history.push('/character');
    this.props.handleSubmit();
  }

  render() {
    return(
    <div className='main-nav-form-container'>
      <header className='main-header'>
        <div id='main-logo'>
          <img id='logo' src='https://66.media.tumblr.com/3b2b790a7fa5601c643871e57ad3851b/tumblr_p5abebOejb1u9mjoso1_400.gif' alt='test' />
        </div>

        <div>
          <h1>Marvelous Database</h1>
          <small id='small-text'>Search Your favorite character's origins, powers and abilities, and more!</small>
        </div>

        <nav className='main-nav'>
          <Link to='/'>Home</Link>
          <Link to='/characterList'>Characters</Link>
        </nav>
        <div>
          <form onSubmit={this.submitForm}>
            <input id='main-input' type='text' placeholder='Type Characters Here' value={this.props.name} name='userInput' onChange={this.props.handleChange}/>
            <button id='main-button'>Enter</button>
          </form>
        </div>
      </header>
    </div>
  )}
}

{/*onClick={() => {
  props.nextPage(0);
}}

the code above allows the app to reset the characters to default.
It calls the api again.
*/}


export default withRouter(Header);
