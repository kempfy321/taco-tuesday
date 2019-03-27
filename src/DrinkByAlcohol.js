import React, {Component} from 'react'
import callDrinkApi from './libs/drinkapi'
import './App.css'

class DrinkByAlcohol extends Component {
  constructor (){
    super()
    this.state = {
      drinks: {
          drinks:[]
      }
    }
  }



  onSearchChange = event => {
    this.setState({ search: event.target.value});
    console.log("searching " + this.state.search);
  };

  DrinkByAlcohol = async drinks =>{
      this.setState({drinks: await callDrinkApi("searchByAlcohol", this.state.search)})
      console.log(this.state.drinks.drinks.length);

  };
  render() {
    const results = this.state.drinks.drinks.filter(p => this.state.drinks.drinks.length)
    console.log("**");
    console.log(results);
    console.log("**");
    return (
        <div className="App">
          <div className="search">
            <input
              type="text"
              value={this.state.search}
              onChange={this.onSearchChange}
            />
            <ul>
              {results.map(r => (
                <li>{r.strDrink}</li>
              ))}
            </ul>
            <button type="drinkAlcohol" onClick={this.DrinkByAlcohol}>Drink By Alcohol!</button>
          </div>
          <div className="recipeCard">
            {/* <h1>{this.state.drinks.drinks[0].strDrink}</h1> */}
         </div>
       </div>
    )
  }
}


export default DrinkByAlcohol
