/**
 *
 * @param {(string|string[])} paths
 * @param {function} callback
 * @returns {function}
 */
export function whenPath(paths = [], callback) {
  const pathsArray = typeof paths === "string" ? [paths] : paths;

  /**
   * @param {*} params
   * @this {*}
   */
  return function (...params) {
    const currentPath = window.location.pathname;
    if (pathsArray.indexOf(currentPath) < 0) return;
    return callback.bind(this)(...params);
  };
}

// Reference: https://web.dev/articles/prefers-reduced-motion
export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
