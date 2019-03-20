import React, {Component} from 'react'
import callDrinkApi from './libs/drinkapi'

class RandomDrink extends Component {
  constructor (){
    super()
    this.state = {
      drinks: {
          drinks:[{}]
      },
      ingredients: []
    }
  }

  async componentDidMount(){
    this.setState({drinks: await callDrinkApi()})
    // console.log(JSON.stringify(this.state.drink.drinks[0].strDrink))
    // console.log(this.state.drinks.drinks[0])
    for (var prop in this.state.drinks.drinks[0]){
      if (this.state.drinks.drinks[0].hasOwnProperty(prop)){
        if (prop.indexOf('strIngredient') > -1){
          if (this.state.drinks.drinks[0][prop] !== null && this.state.drinks.drinks[0][prop] !== "") {
            this.state.ingredients.push(this.state.drinks.drinks[0][prop])
          }
        }
      }
    }
  }

  render() {
    console.log(this.state.ingredients)
    return (
          <div>
            <h1>drink: {this.state.drinks.drinks[0].strDrink}</h1>
            <p>ingredients: </p>

            {this.state.ingredients.map((ingredient, index) => (
              console.log("hello")
                    // <p>Hello, {ingredient}!</p>
                ))}

            {/* <p>{this.state.drinks.drinks[0].strMeasure1} {this.state.drinks.drinks[0].strIngredient1}</p>
            <p>{this.state.drinks.drinks[0].strMeasure2} {this.state.drinks.drinks[0].strIngredient2}</p>
            <p>{this.state.drinks.drinks[0].strMeasure3} {this.state.drinks.drinks[0].strIngredient3}</p>
            <p>{this.state.drinks.drinks[0].strMeasure4} {this.state.drinks.drinks[0].strIngredient4}</p> */}
            <p>instructions:</p>
            <p>{this.state.drinks.drinks[0].strInstructions}</p>
         </div>
    )
  }
}


export default RandomDrink
