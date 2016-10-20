$( document ).ready(function() {

    // cache the DOM
    var $myCity = $('#city');
    var $myState = $('#state');
    var $myTemp = $('#temp');
    var $myWeather = $('#weather');

    // variables to display
    var theTemp = 0;
    var theCity = "";
    var theState = "";
    var theWeather = "";
    var lat = 0;
    var long = 0;

    // get user's city, state, and lat and long
    $.getJSON('http://ipinfo.io', function(data){
	    console.log(data);
	    theCity = data.city;
	    theState = data.region;
	    locArray = data.loc.split(",");
	    lat = locArray[0]; 
	    long = locArray[1];
	    console.log(lat);
	    console.log(long);
	})

    $.getJSON('https://api.darksky.net/forecast/ee7f8c5319292e0f2d3c2a15f2e0327e/' + lat + "," + long, function(data){
    	console.log(data);
    })
});