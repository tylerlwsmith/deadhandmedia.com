import { skipToContent } from "./skip-to-content";
import { toggleNavigation } from "./toggle-navigation";
import { loadEvent, useTurbolinks } from "./settings";
import {
  addHoverClass,
  removeHoverClassOnPageUnload,
} from "./project-preview-hover-class";
import Turbolinks from "turbolinks";

if (useTurbolinks) Turbolinks.start();

document.addEventListener(loadEvent, function () {
  skipToContent();
  toggleNavigation();
  addHoverClass();
});

if (useTurbolinks) {
  document.addEventListener(loadEvent, removeHoverClassOnPageUnload);
} else {
  window.addEventListener("unload", removeHoverClassOnPageUnload);
}
