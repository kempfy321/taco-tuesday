// define function called callApi
let callDrinkApi = async (name, searchInput) => {

    let url = ""
    if (name === "random") {
      url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    }else if (name === "searchByName") {
      url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchInput
    }else if (name === "searchByAlcohol") {
      url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + searchInput
    }
    console.log(url);
    // call to a fetch with a url, wait for response
    const res = await fetch(url)
    // call to parse the json from the response, wait for result

    const json = await res.json()

    // console.log('drinks on me', json)

    // return the json
    return json;
  }


// export the class
export default callDrinkApi
