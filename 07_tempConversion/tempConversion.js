const convertToCelsius = function(temp_f) {
  temp_c = (temp_f - 32) * 5 / 9;
  return Math.round(temp_c * 10) / 10;
};

const convertToFahrenheit = function(temp_c) {
  temp_f = temp_c * 9 / 5 + 32;
  return Math.round(temp_f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
