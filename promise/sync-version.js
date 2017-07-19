/**
 * Decorates a promise-returning-function to cache the last returned value.
 * The returned function will have a `cached` method which will return the value used to fulfill the last successful call.
 * 
 * @example
 * getServerStatus = syncVersion(getServerStatus);
 * getServerStatus()
 * // later...
 * // if the promise has been fulfilled this will return the value
 * getServerStatus.cached()
 *
 * @param fn {Function} Function to decorate
 * @param {Function} Decorated function
 */
 
function syncVersion(fn) {
  let cache = null;
  substitute.cached = cached;
  return substitute;

  function substitute(...args) {
    return fn.apply(this, args).then(value => {
      cache = value;
      return value;
    });
  }

  function cached() {
    return cache;
  }
}
