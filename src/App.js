import React, { Component } from 'react';
import taco_making from './taco_making.gif'
import './App.css';
import {Route, HashRouter } from 'react-router-dom'

class App extends Component {
    constructor (){
      super();
      this.state = {
        taco: []
        // search: '',
        // selectedTaco: null
      };
      console.log(this.state.taco)
    }

  async componentDidMount(){
    const initialTacoResults = await fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
    const tacoResultsJSON = await initialTacoResults.json()
    // console.log(json.name)
    this.setState({ tacoName: tacoResultsJSON.name })
  }

// {this.state.tacoName}  calls random taco

  dayOfWeek = () => {
    let today = new Date();
    let thisDay = today.getDay();
    let myDays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    return myDays[thisDay]
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={taco_making} className="App-logo" alt="logo" />
          <h3>Taco {this.dayOfWeek()}</h3>
          <input className="button" type="button" value="Random Taco" onClick="" />
          <br />
          <input className="button" type="button" value="Build a Taco" onClick="" />
        </header>
      </div>
    );
  }
}

export default App;
