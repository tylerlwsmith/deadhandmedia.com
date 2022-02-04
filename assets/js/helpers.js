export function whenPath(paths = [], func) {
  const pathsArray = typeof paths === "string" ? [paths] : paths;
  return function (event) {
    const currentPath = window.location.pathname;
    if (pathsArray.indexOf(currentPath) < 0) return;
    return func.bind(this)(event);
  };
}
