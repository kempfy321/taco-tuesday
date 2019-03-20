import React, {Component} from 'react'
import { Link } from "react-router-dom"

class LinkGenerator extends Component {
    constructor (){
      super()
      this.handleClick = this.handleClick.bind(this)
    }

  handleClick(){
    return(
      console.log("click")
    )
  }

  render() {
    // console.log(this.state.taco.recipe)
    return (
      <div className="App">
        <button className="button">
          <Link
            style={{display: 'block', height: '100%'}}
            to="/">REFRESH
          </Link>
        </button>
        <button className="button">
          <Link
            style={{display: 'block', height: '100%'}}
            to="/randomtaco">RANDOM TACO
          </Link>
        </button>
        <button onClick={this.handleClick} className="button">
          <Link
            style={{display: 'block', height: '100%'}}
            to="/randomdrink">RANDOM DRINK
          </Link>
        </button>
      </div>
      )
    }
  }

export default LinkGenerator
