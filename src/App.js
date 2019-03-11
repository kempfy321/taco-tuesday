import React, { Component } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import RandomTaco from './RandomTaco'
import Header from './Header'


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
    console.log(json.base_layer.name)
  }


  clickHandler(){
    
    console.log("CLICK")
  }

  render() {
    //console.log(this.state.taco.base_layer)
    return (
      <Router>
        <div className="App">
          <Header />
          <button onClick={this.clickHandler} className="button">
            <Link
              style={{display: 'block', height: '100%'}}
              to="/randomtaco">RANDOM TACO
            </Link>
          </button>
         {/* <Route exact path="/" component={Home} />  */}
         <Route path="/randomtaco" component={RandomTaco} />
         {/* <Route path="/topics" component={Topics} /> */}
        </div>
      </Router>
      )
    }
  }

export default App
