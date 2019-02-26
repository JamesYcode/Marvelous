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
      pageNumber: 0
    }

    this.getData = this.getData.bind(this); /* Might not even need this */
    this.handleClick = this.handleClick.bind(this);
    this.selectPage = this.selectPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.resetCharacter = this.resetCharacter.bind(this);
  }


  componentDidMount() {
    this.getData(this.pageNumber);
}

  async getData(page) {
    const data = await fetchData(page * 100);
      this.setState({
        characters: data
    })
  }

  handleClick(ev) {
    ev.preventDefault();
    this.nextPage();
  }

  nextPage(e) {
    e.preventDefault();
    const nextPage = this.state.pageNumber + 1;
    this.getData(nextPage);
    this.setState({
      pageNumber: nextPage
    })
  }

  selectPage(page) {
    this.getData(page);
    this.setState({
      pageNumber: page
    })
  }


resetCharacter() {
  this.setState({
    characters: null
  })
}


  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Route exact path='/' render={Welcome} />
          <Route path='/characterList' render={(props) => (
            <Characters
              characters={this.state.characters} /* this is characters list */
              selectPage={this.selectPage}
              nextPage={this.nextPage}
              pageNumber={this.state.pageNumber}
              resetCharacter={this.resetCharacter}/>
          )} />
        </div>
      </div>
    );
  }
}

export default App;
