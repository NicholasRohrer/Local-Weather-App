$( document ).ready();

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
var lon = 0;

// get user's city, state, and lat and long
function getLoc() {
    $.getJSON('http://ip-api.com/json/?callback=?', function(data){
    console.log(data);
    theCity = data.city;
    theState = data.regionName;
    lat = data.lat; 
    lon = data.lon;
    console.log(lat);
    console.log(lon);

    //$.getJSON('https://api.darksky.net/forecast/ee7f8c5319292e0f2d3c2a15f2e0327e/' + lat + "," + lon + "/callback=?", function(data){
        //console.log(data);
    //})

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + lon + '&appid=8a10021e7f41b82c85ebfa59a6ecabd5&callback=?', function(data){
        console.log(data);
    })
        
    })
    
//function getWeather() {
    //$.getJSON('https://api.darksky.net/forecast/ee7f8c5319292e0f2d3c2a15f2e0327e/' + lat + "," + long, function(data){
        //console.log(data);
    //})
}

getLoc();
//getWeather();