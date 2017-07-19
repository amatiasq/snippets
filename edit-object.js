/**
 * Adds and removes properties from an object.
 * Passed value is not modified, a new object is returned.
 * The returned object will have it's properties sorted aphabetically.
 *
 * @param object {Object} Original object from where properties will be omitted or added.
 * @param omit {Array<String>} A list of properties to omit from the original object in the result object.
 * @param add {Object} Object with properties to add to the returned object. This will behave as Object.assign.
 * @returns {Object} A new object with the final properties sorted alphabetically.
 */
function edit(object, omit = [], add = {}) {
  const result = {};
  const copy = Object.keys(object).filter(key => omit.indexOf(key) === -1);
  const keys = copy.concat(Object.keys(add)).sort();

  keys.forEach(key => result[key] = key in add ? add[key] : object[key]);

  return result;
}
