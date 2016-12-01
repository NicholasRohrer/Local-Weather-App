$( document ).ready();

// cache the DOM
var $myCity = $('#city');
var $myState = $('#state');
//var $myTemp = $('#temp');
//var $myWeather = $('#weather');
var $degFButton = $('#degF');
var $degCButton = $('#degC');
//var $weatherIcon = $('#weatherIcon');

// variables
var degF = 0;	
var degC = 0;
var lat = 0;
var lon = 0;
var iconCode = 0;
var key = 'ee7f8c5319292e0f2d3c2a15f2e0327e';

// if unit = 0, unit is degrees F. unit = 1 = degrees C
var unit = 0;

// grabbing user location info
$.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?', function(location) {
	console.log(location);
	$myCity.html(location.city);
	$myState.html(location.state);

	// set lat and lon for Dark Sky call
	lat = location.latitude;
	lon = location.longitude;

	// Dark Sky API call
	$.getJSON('https://api.darksky.net/forecast/' + key + '/' + lat + ',' + lon + '?callback=?', function(data){
		console.log(data);
	})
}) 


/*
// get user lat and long
var loc = document.getElementById('myloc');

function myLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getCoords);
	}
	else {
		loc.innerHTML = "Location Tracking not Possible";
	}
}

function getCoords(position) {
	lat = position.coords.longitude;
	lon = position.coords.latitude;
	console.log(lat);
	console.log(lon);



	$.getJSON('https://api.darksky.net/forecast/' + key + '/' + lat + ',' + lon + '?callback=?', function(data){
		console.log(data);
	})


}

*/



// get user's city, state, and lat and long
/*function getLoc() {
    $.getJSON('http://ip-api.com/json/?callback=?', function(data1){

	    // grab user coordinates
	    lat = data1.lat; 
	    lon = data1.lon;

	    // grab weather for user's location
	    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid=8a10021e7f41b82c85ebfa59a6ecabd5&callback=?', function(data2){

	        // convert Kelvin to degrees F
	        degF = Math.ceil(data2.main['temp'] * (9/5) - 459.67);

	        // convert Kelvin to degrees C
	        degC = Math.ceil(data2.main['temp'] - 273.15);

	        // get weather icon code
	        iconCode = data2.weather[0].icon;

	        // display city, state, temp, weather, and icon to page
	        $myCity.html(data1.city + ", ");
	    	$myState.html(data1.regionName);
	        $myTemp.html(degF + ' &degF');
	        $myWeather.html(data2.weather[0].description);
	        $weatherIcon.attr("src", "http://openweathermap.org/img/w/" + iconCode + ".png");

	        // change units on click of the buttons
	        $degCButton.on('click', function(){
	        	if (unit === 0) {
	        		unit = 1;
	        		$myTemp.html(degC + ' &degC');
	        	}
	        });

	        $degFButton.on('click', function(){
	        	if (unit === 1) {
	        		unit = 0;
	        		$myTemp.html(degF + ' &degF');
	        	}
	        });

        })
    })
}

// run the APIs when the page loads
getLoc();

var loc = document.getElementById('myloc');

function myLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else {
		loc.innerHTML = "Location Tracking not Possible";
	}
}

function showPosition(position) {
	loc.innerHTML = "Longitude: " + position.coords.longitude;
}

*/