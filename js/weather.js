var apiKey = require('./../.env').apiKey;

function Weather() {

}

Weather.prototype.getHumidity = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.humidity);
  }).fail(function(error) {
    $('#output-humidity').text(error.responseJSON.message);
  });
}

Weather.prototype.getTemp = function(city, displayFunction, unit) {
  var scale;
  if (unit === "Imperial") {
    scale = "Fahrenheit";
  } else if (unit === "Metric") {
    scale = "Celsius";
  } else {
    scale = "Kelvin";
  }
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + unit + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.temp, scale);
  }).fail(function(error) {
    $('#output-temp').text(error.responseJSON.message);
  });
}

// Weather.prototype.getKelvin = function(city) {
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
//     var kelvin = response.main.temp;
//     console.log(kelvin);
//     return kelvin;
//   });
// }
//
// Weather.prototype.getCelsius = function(kelvin) {
//   var celsius = kelvin - 273.15;
//   console.log("Celsius:" + celsius);
//   return celsius;
// }
//
// Weather.prototype.getFahrenheit = function(kelvin) {
//   var fahrenheit = (kelvin * 1.8) - 459.67;
//   return fahrenheit;
// }

exports.weatherModule = Weather;
