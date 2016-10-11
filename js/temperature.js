var apiKey = require('./../.env').apiKey;

function Temperature() {

}

Temperature.prototype.getTemp = function(city, displayFunction, unit) {
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

exports.temperatureModule = Temperature;
