import React, {Component} from 'react'
import callDrinkApi from './libs/drinkapi'
import './App.css'

class DrinkByName extends Component {
  constructor (){
    super()
    this.state = {
      drinks: {
          drinks:[{}]
      },
      ingredients: [],
      measurements: [],
      allIngredients: []
    }
  }

  onSearchChange = event => {
    this.setState({ search: event.target.value});
    // console.log("searching " + this.state.search);
  };

  drinkByName = async drinks =>{
    // console.log(this.state.search);
    if (this.state.search !== undefined){
    this.setState({drinks: await callDrinkApi("searchByName", this.state.search)})
    // console.log(this.state.drinks)

    for (var prop in this.state.drinks.drinks[0]){
      if (this.state.drinks.drinks[0].hasOwnProperty(prop)){
        // if drink has ingredients that are not null or blank
        if (prop.indexOf('strIngredient') > -1){
          if (this.state.drinks.drinks[0][prop] !== null &&
              this.state.drinks.drinks[0][prop] !== "") {
                // stores valid ingredients
            let stringIngredient = this.state.drinks.drinks[0][prop]
            this.setState({ingredients: this.state.ingredients.concat(stringIngredient)})
          }
          // checks for measurements of ingredients
        } else if (prop.indexOf('strMeasure') > -1){
          if (this.state.drinks.drinks[0][prop] !== null &&
              this.state.drinks.drinks[0][prop] !== " " &&
              this.state.drinks.drinks[0][prop] !== ""  ) {
                // store valid measurements
            let stringMeasurement = this.state.drinks.drinks[0][prop]
            // console.log(stringMeasurement)
            this.setState({measurements: this.state.measurements.concat(stringMeasurement)})
          }
        }
      }
    }
// combines measurements with ingredients
    for (var i in this.state.ingredients){
      console.log(i + " -- " + this.state.ingredients[i])
      this.setState(
        {allIngredients:
        this.state.allIngredients
        .concat(this.state.measurements[i] + " " + this.state.ingredients[i])
      })
    }
  }

  };
  render() {

    return (
        <div className="App">
          <div className="search">
            <input
              className="textBox"
              type="text"
              placeholder="ex: Martini"
              value={this.state.search}
              onChange={this.onSearchChange}
            />

            <button
              className="button"
              type="drinkName"
              onClick={this.drinkByName}>Drink By Name!
            </button>
          </div>
          <div className="recipeCard">
            <h1>{this.state.drinks.drinks[0].strDrink}</h1>
            <div className="recipe">
              <h3>Ingredients:</h3>
                <ul>
                  {this.state.allIngredients.map(all => (
                    <li className="list" key={all}>{all} </li>
                  ))}
                </ul>

              <h3>Instructions:</h3>
              <p>{this.state.drinks.drinks[0].strInstructions}</p>
            </div>
         </div>
       </div>
    )
  }
}


export default DrinkByName
