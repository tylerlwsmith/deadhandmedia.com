import Alpine from "alpinejs";

import { skipToContent } from "./skip-to-content";
import { toggleNavigation } from "./toggle-navigation";
import { loadEvent, useTurbolinks } from "./settings";
import { addHoverClass } from "./project-preview-hover-class";

window.Alpine = Alpine;
Alpine.start();

import Turbolinks from "turbolinks";

if (useTurbolinks) Turbolinks.start();

document.addEventListener(loadEvent, function () {
  skipToContent();
  toggleNavigation();
  addHoverClass();
});
