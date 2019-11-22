var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://nanosdk-countries-v1.p.rapidapi.com/countries?fields=alpha2%252Ccapital&alpha2=US",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nanosdk-countries-v1.p.rapidapi.com",
		"x-rapidapi-key": "8c0dc1a98emsh385f90229d5e8a8p1da6e7jsn8bb1d8e0ece4"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
