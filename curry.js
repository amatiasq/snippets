/**
 * Decorates a function to not be executed until all required parameters are passed. Even on different calls.
 * It uses functions `.length` property to detect the required arguments count if length is not passed.
 *
 * @link https://gist.github.com/amatiasq/2e4344792f28611fa499
 * 
 * @param fn {Function} Function to curry.
 * @param length {Number} The arguments required to invoke the function. Optional. By default is fn.length
 * @returns {Function} The currified function.
 */
function curry(fn, length = fn.length) {
  return function currified(...args) {
    if (args.length === 0)
      return currified;

    if (args.length >= length)
      return fn.apply(this, args);

    const child = fn.bind(this, ...args);
    return curry(child, length - args.length);
  };
}
