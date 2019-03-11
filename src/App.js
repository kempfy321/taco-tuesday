import React, { Component } from 'react'
import taco_making from './taco_making.gif'
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import RandomTaco from "./RandomTaco"


class App extends Component {
    constructor (){
      super()
      this.state = {
        taco: []
      }
    }

  async componentDidMount(){
    const res = await fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
    const json = await res.json()

    this.setState({ taco: json })
  }


  dayOfWeek = () => {
    let today = new Date()
    let thisDay = today.getDay()
    let myDays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    return myDays[thisDay]
  }

  render() {
    console.log(this.state.taco)
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={taco_making} className="App-logo" alt="logo" />
            <h3>Taco {this.dayOfWeek()}</h3>



            <button className="button">  <Link
                style={{display: 'block', height: '100%'}}
                to="/randomtaco">RANDOM TACO</Link>
            </button>

          </header>
         {/* <Route exact path="/" component={App} /> */}
         <Route path="/randomtaco" component={RandomTaco} />
         {/* <Route path="/topics" component={Topics} /> */}
        </div>
      </Router>
      )
    }
  }

export default App
