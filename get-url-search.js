/**
 * Returns the URL search section (`?a=1&b=2`) as a key-value object.
 *
 * @returns {Object} An object containing the keys/values on the URL search section.
 */

function getSearch() {
  const result = {};

  window.location.search
    .substr(1) // remove the '?'
    .split('&')
    .map(entry => entry.split('=').map(decodeURIComponent))
    .forEach(([key, value]) => result[key] = result[value]);
   
  return result;
}
