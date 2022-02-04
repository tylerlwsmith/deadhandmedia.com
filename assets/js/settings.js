export const useTurbolinks = true; // process.env.NODE_ENV === "development";
export const loadEvent = useTurbolinks ? "turbolinks:load" : "DOMContentLoaded";
