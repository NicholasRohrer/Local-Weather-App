$( document ).ready();

// cache the DOM
var $myCity = $('#city');
var $myState = $('#state');
var $degFButton = $('#degF');
var $degCButton = $('#degC');
var $currentTemp = $('#currentTemp');
var $currentDewpoint = $('#currentDewpoint');
var $currentHumidity = $('#currentHumidity');
var $currentPrecipProb = $('#currentPrecipProb');
var $currentPressure = $('#currentPressure');
var $currentWindSpeed = $('#currentWindSpeed');
var $currentWindBearing = $('#currentWindBearing');
var $minWeather = $('#minWeather');
var $dailyWeather = $('#dailyWeather');
var $weekWeather = $('#weekWeather');
var $hideWeather = $('#hideWeather');
var $fadeThis = $('.fadeThis');
var $getWeatherBtn = $('#getWeatherBtn');
var $wrongLocation = $('#wrongLocation');

// variables
var degF = 0;	
var degC = 0;
var dewPointDegF = 0;
var dewPointDegC = 0;
var humidity = 0;
var precipChance = 0;
var lat = 0;
var lon = 0;
var iconCode = 0;
const KEY = 'ee7f8c5319292e0f2d3c2a15f2e0327e';
var unit = 0; // if unit = 0, unit is degrees F. unit = 1 = degrees C

// converts degrees F to degrees C
function convertToCelsius(temp) {
	return Math.ceil(((temp - 32) * (5/9)));
}

// hides bolt and get weather message, then displays weather info for city
function toggleWeather() {
	$('#getWeatherBtn').fadeOut(500);

	$('#getWeatherMessage').fadeOut(500, function() {
		$hideWeather.fadeIn(2000);
	});	
}

// hides bolt and get weather message, then displays input form
function toggleInputForm() {
	$('#getWeatherBtn').fadeOut(500);
	$wrongLocation.fadeOut(500);

	$('#getWeatherMessage').fadeOut(500, function() {
		$('form').fadeToggle(400);
	});	
	
} 

// grabbing user location info
$.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?', function(location) {
	//console.log(location);
	$myCity.html(location.city + ", ");
	$myState.html(location.state);

	// set lat and lon for Dark Sky call
	lat = location.latitude;
	lon = location.longitude;

	// Dark Sky API call
	$.getJSON('https://api.darksky.net/forecast/' + KEY + '/' + lat + ',' + lon + '?callback=?', function(data){
		//console.log(data);

		// current weather tab unit manipulation
		degF = data.currently['temperature'];
		degC = convertToCelsius(degF);

		dewPointDegF = data.currently['dewPoint'];
		dewPointDegC = convertToCelsius(dewPointDegF);

		humidity = data.currently['humidity'] * 100;
		precipChance = data.currently['precipProbability'] * 100;

		// display current weather tab
		$currentTemp.html(degF + ' &degF');
		$currentDewpoint.html(dewPointDegF + ' &degF');
		$currentHumidity.html(humidity + '%');
		$currentPrecipProb.html(precipChance + '%');
		$currentPressure.html(data.currently['pressure'] + ' mb');
		$currentWindSpeed.html(data.currently['windSpeed'] + ' knots');
		$currentWindBearing.html(data.currently['windBearing'] + '&deg');

		// change units on click of the buttons
	    $degCButton.on('click', function(){
	    	if (unit === 0) {
	        	unit = 1;
	        	$currentTemp.html(degC + ' &degC');
	        	$currentDewpoint.html(dewPointDegC + ' &degC');
	        }
	    });

	    $degFButton.on('click', function(){
	        if (unit === 1) {
	        	unit = 0;
	        	$currentTemp.html(degF + ' &degF');
	        	$currentDewpoint.html(dewPointDegF + ' &degF');
	        }
	    });

	    // display hourly weather tab
	    $minWeather.html(data.minutely['summary']);
	    $dailyWeather.html(data.hourly['summary']);

	    // display weekly weather tab
	    $weekWeather.html(data.daily['summary']);
	})
})

//
geocoder = new google.maps.Geocoder();
address = "Dallas, Texas"
var coordinates;
function getCoordinates(address,callback) {
	geocoder.geocoder({address: address}, function(results, status) {
		coordinates = results[0].geometry.location;
		callback(coordinates, function(){
			console.log(coordinates);
		});
	})
}

// display weather on click of getWeatherBtn
$getWeatherBtn.on('click', toggleWeather);

// display input form on click of wrong location message
$wrongLocation.on('click', toggleInputForm);

getCoordinates();