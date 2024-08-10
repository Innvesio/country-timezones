// src/index.js

const countriesTimezones = require("./countriesTimezones");

function getTimezonesByCountry(countryName) {
  const country = countriesTimezones.find(
    (c) => c.name.toLowerCase() === countryName.toLowerCase()
  );
  if (country) {
    return country.timezones;
  } else {
    throw new Error("Country not found");
  }
}

module.exports = { getTimezonesByCountry };
