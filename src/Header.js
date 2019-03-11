import React from 'react'

import taco_making from './taco_making.gif'

class Header extends React.Component {

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
          <img src={taco_making} className="App-logo" alt="logo" />
          <h3>Taco {this.dayOfWeek()}</h3>
        </header>
      </div>
    )
  }
}

export default Header
