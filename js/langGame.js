window.onload = function () {
  const lang_URL = `https://restcountries.eu/rest/v2/lang/`;
  const base_Url = 'https://restcountries.eu/rest/v2/name/'
  const topDiv = document.querySelector("#topDiv")
  const answer = document.querySelector('#search')
  const searchInput = document.querySelector("#responseField")
  const que = 'Spain'

  answer.addEventListener("click", async function (evt) {
    evt.preventDefault()
    const answerObj = await axios.get(`${base_Url}${que}`)
    // console.log(answerObj)
    const response = searchInput.value.toLowerCase()
    // response.split(",")
    const answer = answerObj.data[0].languages

    let flag = false;
    for (i = 0; i < answer.length; i++) {

      if (response === (answer[i].name).toLowerCase()) {
        flag = true;
      }
    }
    console.log(flag)
  });

}

