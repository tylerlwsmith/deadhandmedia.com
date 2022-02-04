export const useTurbolinks = process.env.NODE_ENV === "development";
export const loadEvent = useTurbolinks ? "turbolinks:load" : "DOMContentLoaded";
