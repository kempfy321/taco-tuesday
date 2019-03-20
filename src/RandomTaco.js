import React, {Component} from 'react'
import callApi from './libs/api'

class RandomTaco extends Component {
  constructor (){
    super()
    this.state = {
      taco: {
        base_layer: "",
        mixin: ""
      }
    }
  }

  async componentDidMount(){
    this.setState({taco: await callApi()})
    console.log(this.state.taco)
    // console.log(this.state.taco.name)
    // console.log(this.state.taco)
    // console.log(this.state.taco.base_layer.name)
    // console.log(this.state.taco.base_layer.recipe)
  }

  render() {
    return (
          <div>
              <h1>taco: {this.state.taco.name}</h1>
              <p>{this.state.taco.base_layer.recipe}</p>
              <br></br>
              <p></p>
           </div>
    )
  }
}


export default RandomTaco
