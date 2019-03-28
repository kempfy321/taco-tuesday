import React from 'react'

import glitter_drink from './glitter_drink.gif'

class Header extends React.Component {

// returns day of the week
  dayOfWeek = () => {
    let today = new Date()
    let thisDay = today.getDay()
    let myDays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    return myDays[thisDay]
  }

  render() {
    return(
      <div>
        <header className="App-header">
          <img src={glitter_drink} className="App-logo" alt="logo" />
          <h3>Boozy {this.dayOfWeek()}</h3>
        </header>
      </div>
    )
  }
}

export default Header
