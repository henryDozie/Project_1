window.onload = function () {


  const currency_URL = `https://restcountries.eu/rest/v2/currency/`;
  const lang_URL = `https://restcountries.eu/rest/v2/lang/`;
  const capital_URL = `https://restcountries.eu/rest/v2/capital/`;
  const region_URL = 'https://restcountries.eu/rest/v2/region/';
  const resultsDiv = document.querySelector('#search')
  const searchedItem = this.document.querySelector('#blank')
  const topDiv1 = document.querySelector("#topDiv1")
  const topDiv2 = document.querySelector("#topDiv2")
  const topDiv3 = document.querySelector("#topDiv3")




  topDiv1.addEventListener('click', function () {
    // evt.preventDefault()
    window.location.assign("capitalGame.html");
  });

  topDiv2.addEventListener('click', function () {
    // evt.preventDefault()
    window.location.assign("currencyGame.html");
  });

  topDiv3.addEventListener('click', function () {
    // evt.preventDefault()
    window.location.assign("langGame.html");
  });


}

