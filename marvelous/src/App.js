import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import fetchdata from './services/api';

class App extends Component {

  constructor() {
    super();
    this.state = {
      characters: []
    }
  }


  async componentDidMount() {
  const test = await fetchdata();
    this.setState({
      characters: test
  })
}


  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
