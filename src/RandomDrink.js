import React, {Component} from 'react'
import callDrinkApi from './libs/drinkapi'
import './App.css'

class RandomDrink extends Component {
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

  async componentDidMount(){
    this.setState({drinks: await callDrinkApi("random")})
    // console.log(JSON.stringify(this.state.drink.drinks[0].strDrink))
    // console.log(this.state.drinks.drinks[0])
    for (var prop in this.state.drinks.drinks[0]){
      if (this.state.drinks.drinks[0].hasOwnProperty(prop)){
        if (prop.indexOf('strIngredient') > -1){
          if (this.state.drinks.drinks[0][prop] !== null &&
              this.state.drinks.drinks[0][prop] !== "") {
            let stringIngredient = this.state.drinks.drinks[0][prop]
            this.setState({ingredients: this.state.ingredients.concat(stringIngredient)})
          }
        } else if (prop.indexOf('strMeasure') > -1){
          if (this.state.drinks.drinks[0][prop] !== null &&
              this.state.drinks.drinks[0][prop] !== " " &&
              this.state.drinks.drinks[0][prop] !== ""  ) {
            let stringMeasurement = this.state.drinks.drinks[0][prop]
            this.setState({measurements: this.state.measurements.concat(stringMeasurement)})
          }
        }
      }
    }

    for (var i in this.state.ingredients){
      console.log(i + " -- " + this.state.ingredients[i])
      this.setState({allIngredients: this.state.allIngredients.concat(this.state.measurements[i] + " " + this.state.ingredients[i])})
    }
    console.log(this.state.allIngredients)
  }



  render() {

    return (
        <div className="App">
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


export default RandomDrink
