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

    this.getData = this.getData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selectPage = this.selectPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
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

  selectPage(e) {
    e.preventDefault();
    const page = parseInt(e.target.value);
    // debugger;
    this.setState({
      pageNumber: page
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
              characters={this.state.characters}
              selectPage={this.selectPage}
              nextPage={this.nextPage}
              getData={this.getData}
              pageNumber={this.state.pageNumber}/>
          )} />
        </div>
      </div>
    );
  }
}

export default App;
