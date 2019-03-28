import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from './Header'
import LinkGenerator from './LinkGenerator'
import RandomDrink from './RandomDrink'
import DrinkByName from './DrinkByName'
import DrinkByAlcohol from './DrinkByAlcohol'



function App() {
  return (
    <Router>
      <div>
        <Header />
        <LinkGenerator />
       <Route path="/randomdrink" component={RandomDrink} />
       <Route path="/drinkbyname" component={DrinkByName} />
       <Route path="/drinkbyalcohol" component={DrinkByAlcohol} />
     </div>
    </Router>
  )
}

export default App
