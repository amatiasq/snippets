import syncVersion from './sync-version';

/**
 * Will add a method to the provided object which will store the last value returned successfully by calling `method`.
 * The original method will be decorated, you can restore the original one by calling `.restore()` property of that method.
 * Keep in mind that this will break the sync version.
 *
 * @example
 * addSyncMethod(server, 'getStatus');
 * server.getStatus();
 * // Later...
 * // If `server.getStatus()` has ben fulfilled this will return the last successful value
 * server.getStatusSync()
 *
 * @param object {Object} Object to add the method to
 * @param method {String} The original method to hook
 * @returns void
 */

function addSyncMethod(object, method, name = method + 'Sync') {
  const original = object[method];
  const substitute = getSyncVersion(original);
  const {cached} = substitute;
  
  delete substitute.cached;

  object[name] = cached;
  object[method] = substitute;
  object[method].original = original;
  object[method].restore = restore;

  function restore() {
    object[method] = original;
  }
}
