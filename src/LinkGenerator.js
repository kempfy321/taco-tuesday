import React from 'react'
import { Link } from "react-router-dom"


function LinkGenerator () {
  return (
    <div className="App">
      <button className="button">
        <Link
          style={{display: 'block', height: '100%'}}
          to="/">Home
        </Link>
      </button>

      <button className="button">
        <Link
          style={{display: 'block', height: '100%'}}
          to="/randomdrink">Random Drink
        </Link>
      </button>
      <button className="button">
        <Link
          style={{display: 'block', height: '100%'}}
          to="/drinkbyname">Drink By Name
        </Link>
      </button>
      <button className="button">
        <Link
          style={{display: 'block', height: '100%'}}
          to="/drinkbyalcohol">Drink By Alcohol
        </Link>
      </button>
    </div>
    )
  }


export default LinkGenerator
