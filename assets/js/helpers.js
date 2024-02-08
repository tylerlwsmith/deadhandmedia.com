export function whenPath(paths = [], func) {
  const pathsArray = typeof paths === "string" ? [paths] : paths;
  return function (event) {
    const currentPath = window.location.pathname;
    if (pathsArray.indexOf(currentPath) < 0) return;
    return func.bind(this)(event);
  };
}

// Reference: https://web.dev/articles/prefers-reduced-motion
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
