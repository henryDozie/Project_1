window.onload = function () {

  const Base_Url = 'https://restcountries.eu/rest/v2/'
  const capital_Url = `https://restcountries.eu/rest/v2/capital/`;
  const answer = document.querySelector('#search')
  const searchInput = document.querySelector("#responseField")

  answer.addEventListener("click", async function (evt) {
    evt.preventDefault()
    const response = searchInput.value
    response.split(",")
    const result = await axios.get(`${capital_Url}${response}`)
    const countryCapital = result.data[0].capital
    countryCapital.split(",")
    if (response[0].toLowerCase() === countryCapital[0].toLowerCase()){
      console.log("correct");
    }
    else {
      console.log("wrong")
    }
    console.log(result)
    
    // console.log(countryName);
    
  })
  


}

