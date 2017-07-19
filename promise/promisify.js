/**
 * Recives a function and returns a function that when called will add a extra callback parameter
 * The output function will return a promise binded to the callback parameter.
 *
 * @param fn {Function} Function to be decorated
 * @returns {Function} Decorated function. 
 */
function promisify(fn) {
  return (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });
    });
  };
}
