window.onload = async function () {
  const base_Url = 'https://restcountries.eu/rest/v2/name/'
  const currency_Url = `https://restcountries.eu/rest/v2/currency/`;
  const answer = document.querySelector('#submitButton')
  const countriesList = 'https://restcountries.eu/rest/v2/all'
  const displayCountry = document.querySelector("#questionField")
  const setButton = document.querySelector('#setCountry')
  const correct = document.querySelector("#correct")
  const wrong = document.querySelector("#wrong")
  const txt = document.createElement("h2")
  const searchInput = document.querySelector("#input")
  let getFromAPI = "";
  let score = 0;
  let countryCurrenciesArray = [];


  //--------------> Add all existing countries to an array "countryArray"
  const result = await axios.get(`${countriesList}`)
  const countries = result.data;
  let query = "";
  let countryArray = [];
  let i = 0;
  for (key in countries) {
    countryArray.push(countries[i].name);
    i++;
  }

  /*--------------------------------------------------------------
  Now we generate a country when the set country button is clicked
  *///------------------------------------------------------------

  async function setCountry() {
    // const cName = generateCountry()
    const questionCountry = generateCountry()
    txt.innerHTML = `${questionCountry}`
    txt.style.fontSize = '70px';
    txt.style.fontFamily = 'bradley hand'
    txt.style.color = 'white';
    txt.style.display = 'flex'
    txt.style.justifyContent = "center"
    txt.style.marginTop = '0'
    displayCountry.appendChild(txt)
    query = questionCountry;
    getFromAPI = await axios.get(`${base_Url}${query}`)
    countryCurrenciesArray = getFromAPI.data[0].currencies;
    console.log(countryCurrenciesArray);

    correct.classList.remove("styleCorrect");
    wrong.classList.remove("styleWrong");
    searchInput.value = ""
  }
  //--------------------------------->

  /*--------------------------------->
  Set up event listener for setting and displaying the country
  *///------------------------------->
  setButton.addEventListener("click", function () {
    setCountry()
  })

  /*--------------------------------->
  Set up event listener for checking if the response is correct
  *///------------------------------->

  answer.addEventListener("click", async function (evt) {
    evt.preventDefault()
    const response = searchInput.value.toUpperCase()
    let flag = false;
    for (i = 0; i < countryCurrenciesArray.length; i++) {

      if (response === countryCurrenciesArray[i].code.toUpperCase()) {
        flag = true;
      }
    }
    // console.log(flag)

    if (flag === true) {
      correct.classList.add("styleCorrect");
      score += 5;
      correct.innerHTML = `<h1>${score}</h1 color="white">`;
    }
    else {
      wrong.classList.add("styleWrong")
      score -= 2;
      correct.innerHTML = `<h1>${score}</h1 color="white">`;
    }

  });

  /*--------------------------------->
  Random generation of an index to pick country from the array of countries
*///------------------------------->
  function generateCountry() {
    let playCount = 0
    const cntryIndex = Math.floor((Math.random() * 250) + 1);
    countryName = countryArray[cntryIndex]
    return countryName;
  }
}

