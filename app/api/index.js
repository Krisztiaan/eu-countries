export const getCountries = () =>
  fetch('https://restcountries.eu/rest/v2/regionalbloc/eu?fields=name;subregion;capital;languages;numericCode');