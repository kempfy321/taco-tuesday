// define function called callApi
let callApi = async () => {
    // call to a fetch with a url, wait for response
    const res = await fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
    // call to parse the json from the response, wait for result
    const json = await res.json()

    console.log('i am here', json)
    // return the json
    return json;
  }

// export the class
export default callApi;
