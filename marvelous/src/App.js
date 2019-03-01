import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import { fetchData, fetchName } from './services/api';
import Header from './components/Header';
import Characters from './components/Characters';
import Welcome from './components/Welcome';
import CharacterDetails from './components/CharacterDetails';
import Footer from './components/Footer';
import SingleCharacter from './components/SingleCharacter';

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

  prevPage(e) {
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

async handleSubmit() {
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
        <Header nextPage={this.nextPage}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />
        <div className='main-background'>
          <div>
            <Route exact path='/' render={(props) => (
              <Welcome/>
            )} />
            <Route path='/character' render={(props) => (
              <SingleCharacter characterName={this.state.name} />
            )} />
          </div>

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
        <Footer/>
      </div>
    )
  }
}

export default App;
