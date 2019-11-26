window.onload = function () {
  const base_Url = 'https://restcountries.eu/rest/v2/name/'
  const currency_Url = `https://restcountries.eu/rest/v2/currency/`;
  const answer = document.querySelector('#search')
  const searchInput = document.querySelector("#responseField")
  const que = 'Zimbabwe'

  answer.addEventListener("click", async function (evt) {
    evt.preventDefault()
    const answerObj = await axios.get(`${base_Url}${que}`)
    // console.log(answerObj)
    const response = searchInput.value.toUpperCase()
    // response.split(",")
    const answer = answerObj.data[0].currencies

    let flag = false;
    for (i = 0; i < answer.length; i++) {
      
      if (response === answer[i].code){
        flag = true;
      }
    }
    console.log(flag)
  });
  // countryCapital.split(",")
  
  // console.log(result)

  // console.log(countryName)
}

