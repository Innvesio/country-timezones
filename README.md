# country-timezones-id

`country-timezones` is an npm package that allows you to retrieve the timezones associated with a given country name. It's simple to use and comes with a pre-defined list of all countries and their respective timezones.

## Installation

You can install the package via npm:

```bash
npm install country-timezones-id
```

#### Usage

Import the package and use the getTimezonesByCountry function to retrieve timezones for a given country.

#### Example

```javascript
Copy code
const { getTimezonesByCountry } = require('country-timezones-id');

const timezones = getTimezonesByCountry('United States');
console.log(timezones);
// Output: [
// "America/New_York",
// "America/Detroit",
// ...
// ]

const japanTimezones = getTimezonesByCountry('Japan');
console.log(japanTimezones);
// Output: ["Asia/Tokyo"]

// Handling non-existent country
try {
const nonexistent = getTimezonesByCountry('Nonexistent Country');
} catch (error) {
console.error(error.message); // Output: Country not found
}
```

#### API

`getTimezonesByCountry(countryName)`
Parameters:

`countryName (string)`: The name of the country whose timezones you want to retrieve.
Returns:

An array of strings, each representing a timezone for the specified country.

Throws:

An error if the country is not found.

#### Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions or find any bugs.

#### License

MIT.
