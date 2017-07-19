/**
 * Recives a string as a route definition and returns a regex to match that format:
 *
 * @exapmple
 * toRegexp('/contact/{id}/edit')) // Returns: /\/contact\/([^\/]+)\/edit/i
 *
 * @exapmple
 * toRegexp('/contact/{id}/edit').exec('/contact/313/edit'))
 * // ["/contact/313/edit", "313", index: 0, input: "/contact/313/edit"]
 *
 * @param pattern {String} The pattern of the route.
 * @returns {RegExp} A regex to match that route.
 */
function routeToRegex(pattern) {
  const regexp = pattern
      .split(/{(\w+)}/)
      .map((value, index) => {
        return index % 2 === 0 ?
          value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') :
          '([^\\/]+)';
      });

  return new RegExp('^' + regexp.join('') + '$', 'i');
}
