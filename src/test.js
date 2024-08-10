const { getTimezonesByCountry } = require("./index");

try {
  console.log(getTimezonesByCountry("United States")); // Should return US timezones
  console.log(getTimezonesByCountry("Japan")); // Should return Asia/Tokyo
  console.log(getTimezonesByCountry("Nonexistent Country")); // Should throw an error
} catch (error) {
  console.error(error.message);
}
