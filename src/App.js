import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from './Header'
import LinkGenerator from './LinkGenerator'
import RandomTaco from './RandomTaco'
import RandomDrink from './RandomDrink'
// import RandomDrink from './RandomDrink'



function App() {
  return (
    <Router>
      <div>
        <Header />
        <LinkGenerator />
       <Route path="/randomtaco" component={RandomTaco} />
       <Route path="/randomdrink" component={RandomDrink} />
     </div>
    </Router>
  )
}

export default App
