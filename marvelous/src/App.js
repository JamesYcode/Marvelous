import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import { fetchData, fetchName } from './services/api';
import Header from './components/Header';
import Characters from './components/Characters';
import Welcome from './components/Welcome';
import CharacterDetails from './components/CharacterDetails';

class App extends Component {

  constructor() {
    super();
    this.state = {
      characters: [],
      pageNumber: 0,
      name: [],
      userInput: ''
    }

    this.selectPage = this.selectPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.resetCharacter = this.resetCharacter.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  async getName() {
    const names = await fetchName(this.state.userInput);
    this.setState({
      name: names
    })
  }


  nextPage(nextPage) {
    this.getData(nextPage);
    this.setState({
      pageNumber: nextPage
    })
  }

  prevPage(e) {
    e.preventDefault();
    const prevPage = this.state.pageNumber - 1;
    this.getData(prevPage);
    this.setState({
      pageNumber: prevPage
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

handleChange(ev) {
  const { name , value } = ev.target;
  this.setState({
    [name]: value
  });
}


  render() {
    return (
      <div className="App">
        <Header nextPage={this.nextPage}/>
        <div>
          <Route exact path='/' render={(props) => (
            <Welcome
            handleChange={this.handleChange} />
          )} />
          <Route path='/characterlist' render={(props) => (
            <Characters
              characters={this.state.characters} /* this is characters list */
              selectPage={this.selectPage}
              nextPage={this.nextPage}
              prevPage={this.prevPage}
              pageNumber={this.state.pageNumber}
              resetCharacter={this.resetCharacter} />
          )} />
        </div>
      </div>
    );
  }
}

export default App;
