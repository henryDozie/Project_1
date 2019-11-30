window.onload = async function () {

  const capital_Url = `https://restcountries.eu/rest/v2/capital/`;
  const answer = document.querySelector('#submitButton')
  const searchInput = document.querySelector("#input")
  const displayCountry = document.querySelector("#questionField")
  const setButton = document.querySelector('#setCountry')
  const yay = document.createElement("img")
  // const scoreCard = document.querySelector();
  const correct = document.querySelector("#correct")
  let timeCircle = document.querySelector("#timeCircle")
  const wrong = document.querySelector("#wrong")
  const countriesList = 'https://restcountries.eu/rest/v2/all'
  const base_Url = 'https://restcountries.eu/rest/v2/name/'
  const hintButton = document.querySelector("#hint")
  const txt = document.createElement("h1")
  const hintDisplay = document.createElement("h1")
  const hintCircle = document.querySelector("#timeCircle")
  const homePage = document.querySelector('#headImage')

  let trueCapital = "";
  let capitalCity = "";
  let hint = `${capitalCity[0]}${capitalCity[1]}${capitalCity[2]}`
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
    const questionCountry = generateCountry()
    txt.innerHTML = `${questionCountry}`
    // txt.style.fontSize = '70px';
    txt.style.fontFamily = 'bradley hand'
    txt.style.color = 'white';
    txt.style.display = 'flex'
    txt.style.justifyContent = "center"
    txt.style.marginTop = '0'
    displayCountry.appendChild(txt)
    query = questionCountry;
    trueCapital = await axios.get(`${base_Url}${query}`)
    capitalCity = trueCapital.data[0].capital;
    console.log(capitalCity)
    hint = `${capitalCity[0]}${capitalCity[1]}${capitalCity[2]}`
    correct.classList.remove("styleCorrect");
    wrong.classList.remove("styleWrong");
    searchInput.value = ""
    console.log(hint)
    hintDisplay.innerHTML = "";
    hintCircle.classList.add("hintDisplay")
    timeCircle.setAttribute("id", "timeCircle")
  }

  setButton.addEventListener("click", function () {
    setCountry()
  })

  answer.addEventListener("click", async function (evt) {
    evt.preventDefault()
    // console.log (questionCountry)

    const response = searchInput.value
    if (response !== "") {
      let flag = false
      if (response.toLowerCase() === capitalCity.toLowerCase()) {
        flag = true
      }
      else {
        flag = false
      }

      if (flag === true) {
        correct.classList.add("styleCorrect");
        score += 5;
        correct.innerHTML = `<h1>${score}</h1>`;
        hintCircle.appendChild(hintDisplay)
      }
      else {
        wrong.classList.add("styleWrong")
        score -= 2;
        let loss = -2;
        correct.innerHTML = `<h1>${score}</h1 color="white">`;
        wrong.innerHTML = `<h1>${loss}</h1 color="white">`;
      }
    }
    // console.log(score);


  })


  function generateCountry() {
    let playCount = 0
    const cntryIndex = Math.floor((Math.random() * 250) + 1);
    countryName = countryArray[cntryIndex]
    return countryName;
  }

  hintButton.addEventListener("click", async function () {

    hintDisplay.innerHTML = hint
    timeCircle.removeAttribute("id", "timeCircle")

    hintCircle.appendChild(hintDisplay)

    timeCircle.classList.add("hintBG")

    // let fiveMinutes = 60 * 0.1,
    //     display = document.querySelector('#scoreCircle');
    // console.log(startTimer(fiveMinutes, display));

  })



  async function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);

  }

  homePage.addEventListener("click", async function () {
    window.open("index.html");
})




}


