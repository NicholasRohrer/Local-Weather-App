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
});