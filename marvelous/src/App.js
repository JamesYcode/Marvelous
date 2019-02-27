import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import { fetchData, fetchName } from './services/api';
import Header from './components/Header';
import Characters from './components/Characters';
import Welcome from './components/Welcome';
import CharacterDetails from './components/CharacterDetails';
import Details from './components/Details';

class App extends Component {

  constructor() {
    super();
    this.state = {
      characters: [],
      pageNumber: 0,
      userInput: '',
      name: []
    }

    this.selectPage = this.selectPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.resetCharacter = this.resetCharacter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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


  nextPage(nextPage) {
    this.getData(nextPage);
    this.setState({
      pageNumber: nextPage
    })
  }

  prevPage(prevPage) {
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

async handleSubmit(ev) {
 ev.preventDefault();
 const singleName = this.state.userInput;
 const names = await fetchName(singleName);
 console.log(names);
 this.setState({
   name: names
 })
}


  render() {
    return (
      <div className="App">
        <Header nextPage={this.nextPage}/>
        <div>
          <Route exact path='/' render={(props) => (
            <Welcome
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            test={this.state.name} />
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
        <Details test={this.state.name} />
      </div>
    );
  }
}

export default App;
