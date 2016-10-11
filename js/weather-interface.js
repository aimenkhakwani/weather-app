var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('#output-humidity').text("The humidity in " + city + " is " + humidityData + "%");
}

var displayTemp = function(city, tempData, unit) {
  $('#output-temp').text("The temperature in " + city + " is " + tempData + " " + unit);
}

$(document).ready(function() {
  var newWeather = new Weather();
  $('#weather-form').submit(function() {
    event.preventDefault();
    $("#celsius").show();
    $("#fahrenheit").show();
    var city = $('#city').val();
    var unit = $('#unit').val();
    $('#city').val("");
    newWeather.getHumidity(city, displayHumidity);
    newWeather.getTemp(city, displayTemp, unit);
    // $('#celsius').click(function() {
    //   // event.preventDefault();
    //   var temp = newWeather.getKelvin(city).then(function() {
    //     var celsius = newWeather.getCelsius(temp);
    //     $('#celsius').text(celsius + "°C");
    //   });
    // });
  });
});
