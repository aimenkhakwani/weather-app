var Temperature = require('./../js/temperature.js').temperatureModule;

var displayTemp = function(city, tempData, unit) {
  $('#output-temp').text("The temperature in " + city + " is " + tempData + " " + unit);
}

$(document).ready(function() {
  var newTemperature = new Temperature();
  $('#temp').click(function() {
    event.preventDefault();
    var city = $('#city').val();
    var unit = $('#unit').val();
    newTemperature.getTemp(city, displayTemp, unit);
  });
});
