$( document ).ready();

// cache the DOM
var $myCity = $('#city');
var $myState = $('#state');
var $myTemp = $('#temp');
var $myWeather = $('#weather');

// variables
var theTemp = 0;
var theCity = "";
var theState = "";
var theWeather = "";
var lat = 0;
var lon = 0;

// if unit = 0, unit is degrees F. unit = 1 = degrees C
var unit = 0;

// get user's city, state, and lat and long
function getLoc() {
    $.getJSON('http://ip-api.com/json/?callback=?', function(data){

	    // display data for testing
	    console.log(data);

	    // grab user coordinates
	    lat = data.lat; 
	    lon = data.lon;
	    console.log(lat);
	    console.log(lon);

	    //populate the city and state of the user
	    $myCity.html(data.city);
	    $myState.html(data.regionName);


	    // grab weather for user's location
	    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid=8a10021e7f41b82c85ebfa59a6ecabd5&callback=?', function(data){

	        // display data for testing
	        console.log(data);

	        var theTemp = Math.ceil(data.main['temp'] * (9/5) - 459.67);
	        // grab user temp and weather description
	        $myTemp.html(theTemp + ' &degF');
	        $myWeather.html(data.weather[0].description);
	   
        })
    })
}

function toCelsius(){
	// check the units
	if (unit === 1) {
		return;
	} 


}

getLoc();