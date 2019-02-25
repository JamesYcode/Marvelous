import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import fetchData from './services/api';
import Header from './components/Header';
import Characters from './components/Characters';
import Welcome from './components/Welcome';

class App extends Component {

  constructor() {
    super();
    this.state = {
      characters: [],
      userCharacter: []
    }
  }


  async componentDidMount() {
  const test = await fetchData();
    this.setState({
      characters: test
  })
}



  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Route exact path='/' render={Welcome} />
          <Route path='/characterList' render={(props) => (
            <Characters characters={this.state.characters} />
          )} />
        </div>
      </div>
    );
  }
}

export default App;
