import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import RandomTaco from './RandomTaco'
import App from './App'

class TacoGenerator extends Component {
    constructor (){
      super()
      this.state = {
        taco: {
          base_layer: "",
        }
      }
      this.handleClick = this.handleClick.bind(this)
    }

  async componentDidMount(){
    const res = await fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
    const json = await res.json()

    this.setState({ taco: json })
    console.log(this.state.taco.base_layer.name)
    console.log(this.state.taco.base)

  }


  handleClick(){

    console.log("CLICK")
  }

  render() {
    // console.log(this.state.taco.recipe)
    return (
      <Router>
        <div className="App">
          <button onClick={this.handleClick} className="button">
            <Link
              style={{display: 'block', height: '100%'}}
              to="/randomtaco">RANDOM TACO
            </Link>
          </button>
         <Route exact path="/" component={App} />
         <Route path="/randomtaco" component={RandomTaco} />
         {/* <Route path="/topics" component={Topics} /> */}
        </div>
      </Router>
      )
    }
  }

export default TacoGenerator
