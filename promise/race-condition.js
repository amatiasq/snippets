/**
 * Decorates a method to allow only the last call to be fulfilled.
 * This will prevent race conditions where previous calls being fullfilled after the last call will overwrite the output.
 * Use with caution! Previous calls will be left unfulfilled which is considered an anti-pattern.
 *
 * @link http://jsfiddle.net/amatiasq/zhmz8xdx/
 *
 * @param fn {Function} Function to be decorated.
 * @returns {Function} The decorated function.
 */

function raceCondition(fn) {
  let counter = 0;

  return function(...args) {
    const index = ++counter;
    const prom = fn.apply(this, args);

    return new Promise((resolve, reject) => {
      prom.then(
        value => isLast() && resolve(value),
        error => isLast() && reject(error)
      )
    });

    function isLast() {
      return index === counter;
    }
  };
}
