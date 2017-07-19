/**
 * Decorates a function to not be executed until all promise parameters are fulfilled.
 * 
 * @params fn {Function} Function to be decorated.
 * @params {Function} Decorated function.
 */
 
function asyncParams(fn) {
  return function(...args) {
    const execute = (values) => fn.apply(this, values);
    const hasPromise = args.some(arg => arg && typeof arg.then === 'function');

    if (hasPromise)
      return Promise.all(args).then(execute);
      
    return Promise.resolve(execute(args));
  };
}
