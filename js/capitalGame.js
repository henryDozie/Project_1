window.onload = async function () {

  const capital_Url = `https://restcountries.eu/rest/v2/capital/`;
  const answer = document.querySelector('#submitButton')
  const searchInput = document.querySelector("#input")
  const displayCountry = document.querySelector("#questionField")
  const setButton = document.querySelector('#setCountry')
  const yay = document.createElement("img")
  // const scoreCard = document.querySelector();
  const correct = document.querySelector("#correct")
  const wrong = document.querySelector("#wrong")
  const countriesList = 'https://restcountries.eu/rest/v2/all'
  const base_Url = 'https://restcountries.eu/rest/v2/name/'
  const txt = document.createElement("h2")
  let trueCapital = "";
  let capitalCity = "";
  let score = 0;
  const result = await axios.get(`${countriesList}`)
  const countries = result.data;
  let query = "";
  let countryArray = [];
  let i = 0;
  for (key in countries) {
    countryArray.push(countries[i].name);
    i++;
  }


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
    trueCapital = await axios.get(`${base_Url}${query}`)
    capitalCity = trueCapital.data[0].capital;
    correct.classList.remove("styleCorrect");
    wrong.classList.remove("styleWrong");
    searchInput.value = ""
  }

  setButton.addEventListener("click", function () {
    setCountry()
  })

  answer.addEventListener("click", async function (evt) {
    evt.preventDefault()
    // console.log (questionCountry)

    const response = searchInput.value
    let flag = false
    if (response === capitalCity) {
      flag = true
    }
    else {
      flag = false
    }

    if (flag === true) {
      correct.classList.add("styleCorrect");
      score += 5;
      correct.innerHTML = `<h1>${score}</h1 color="white">`;
    }
    else {
      wrong.classList.add("styleWrong")
    }

    // console.log(score);
    

  })


  function generateCountry() {
    let playCount = 0
    const cntryIndex = Math.floor((Math.random() * 250) + 1);
    countryName = countryArray[cntryIndex]
    return countryName;
  }

}

