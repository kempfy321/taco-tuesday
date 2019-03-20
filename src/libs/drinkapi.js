// define function called callApi
let callDrinkApi = async () => {
    // call to a fetch with a url, wait for response
    const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    // call to parse the json from the response, wait for result
    const json = await res.json()

    console.log('drinks on me', json)
    // return the json
    return json;
  }

// export the class
export default callDrinkApi;
