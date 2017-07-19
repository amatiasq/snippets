/**
 * Extends an object with another one combining them whenever it's possible.
 * If both objects (or it's children) have an array on the same property those will be combined.
 * If both objects (or it's children) have an object on the same property those will be combined.
 * Otherwise it will be overwriten.
 *
 * @param target {Object} Object to be modified.
 * @param source {Object} Object where properties will be copied from.
 * @returns {Object} The object passed as the first argument.
 */
function deepExtend(target, source) {
  Object.keys(source).forEach((key) => {
    var value = source[key];
    var dest = target[key];
    var sourceType = typeof value;
    var destType = typeof target[key];

    if (Array.isArray(value) && Array.isArray(dest))
      target[key] = dest.concat(value);
    else if (sourceType === destType && sourceType === 'object')
      deepExtend(dest, value);
    else
      target[key] = value;
  });
  
  return target;
}
