var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('#output-humidity').text("The humidity in " + city + " is " + humidityData + "%");
}


$(document).ready(function() {
  var newWeather = new Weather();
  $('#humidity').click(function() {
    event.preventDefault();
    var city = $('#city').val();
    newWeather.getHumidity(city, displayHumidity);
  });
});
