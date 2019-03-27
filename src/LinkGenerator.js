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
            to="/">Home
          </Link>
        </button>

        <button onClick={this.handleClick} className="button">
          <Link
            style={{display: 'block', height: '100%'}}
            to="/randomdrink">Random Drink
          </Link>
        </button>
        <button onClick={this.handleClick} className="button">
          <Link
            style={{display: 'block', height: '100%'}}
            to="/drinkbyname">Drink By Name
          </Link>
        </button>
        <button onClick={this.handleClick} className="button">
          <Link
            style={{display: 'block', height: '100%'}}
            to="/drinkbyalcohol">Drink By Alcohol
          </Link>
        </button>
      </div>
      )
    }
  }

export default LinkGenerator
