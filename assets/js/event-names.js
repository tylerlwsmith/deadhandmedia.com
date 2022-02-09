export const useTurbolinks = true;
export const loadEvent = useTurbolinks ? "turbolinks:load" : "DOMContentLoaded";

export const unloadEvent = useTurbolinks
  ? "turbolinks:before-render"
  : "unload";
