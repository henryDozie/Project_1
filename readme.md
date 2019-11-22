![](https://imgur.com/aJie6RM.png)
### HENRY'S FUN WITH FACTS

This app is intended to be a fun way to learn several details about countries around the world. The application will leverage several methods for evaluating the performance of each player such as:
```
```
- Play by currency
- Play by capital
- Play by language
- Play by region
- Play by all
```
```
```
Players will have a time frame to conmplete a stage.
```
The main focus group for this game are kids between the ages 5 - 1. for data collection for this application to work, I have opted to get data from the API `RestcoutriesAPI`.

```
The game will temporarily store the scores on the local storage before the player quits the game.
```

### Wireframe
![](https://imgur.com/uTKq12u.png)


### API 
```
```
- Currency: https://restcountries.eu/rest/v2/currency/{currency}
- Capital: https://restcountries.eu/rest/v2/capital/{capital}
- Language: https://restcountries.eu/rest/v2/lang/{et}
- Region: https://restcountries.eu/rest/v2/region/{region}
- All: https://restcountries.eu/rest/v2/all
```



```
### Key Features
```
- Fun, kid friendly and interactive interface
- Simple floating GIfs when an answer is correct
- Countdown timer on the screen
```

### Future Features
- Background Music (Kid Friendly)
- Voice play
- Some kind of provision for blind folks to be able to play the game `(Still working on that)`



### Example output
```
{
name: "Estonia",
topLevelDomain: [
".ee"
],
alpha2Code: "EE",
alpha3Code: "EST",
callingCodes: [
"372"
],
capital: "Tallinn",
altSpellings: [
"EE",
"Eesti",
"Republic of Estonia",
"Eesti Vabariik"
],
region: "Europe",
subregion: "Northern Europe",
population: 1315944,
latlng: [
59,
26
],
demonym: "Estonian",
area: 45227,
gini: 36,
timezones: [
"UTC+02:00"
],
borders: [
"LVA",
"RUS"
],
nativeName: "Eesti",
numericCode: "233",
currencies: [
{
code: "EUR",
name: "Euro",
symbol: "€"
}
],
languages: [
{
iso639_1: "et",
iso639_2: "est",
name: "Estonian",
nativeName: "eesti"
}
],
translations: {
de: "Estland",
es: "Estonia",
fr: "Estonie",
ja: "エストニア",
it: "Estonia",
br: "Estônia",
pt: "Estónia",
nl: "Estland",
hr: "Estonija",
fa: "استونی"
},
flag: "https://restcountries.eu/data/est.svg",
regionalBlocs: [
{
acronym: "EU",
name: "European Union",
otherAcronyms: [ ],
otherNames: [ ]
}
],
cioc: "EST"
}
```