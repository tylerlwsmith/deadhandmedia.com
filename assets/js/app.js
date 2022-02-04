import Alpine from "alpinejs";
import Turbolinks from "turbolinks";

import { whenPath } from "./helpers";
import { skipToContent } from "./skip-to-content";
import { toggleNavigation } from "./toggle-navigation";
import { loadEvent, useTurbolinks } from "./settings";
import { addHoverClass } from "./project-preview-hover-class";
import {
  makeScrollToTopButton,
  makeActiveFiltersShadow,
  toggleSidebar,
} from "./blog-page";

/**
 * Bootstrap Alpine. This must come before Turbolinks.
 */
window.Alpine = Alpine;
Alpine.store("sidebar", {
  isOpen: false,
  toggle() {
    this.isOpen = !this.isOpen;
  },
});
Alpine.start();

/**
 * Bootstrap Turbolinks.
 */
if (useTurbolinks) Turbolinks.start();

/**
 * Site-wide JS.
 */
document.addEventListener(loadEvent, skipToContent);
document.addEventListener(loadEvent, toggleNavigation);

/**
 * Projects list page.
 */
document.addEventListener(loadEvent, addHoverClass);

/**
 * Blog page.
 */
window.addEventListener("keypress", whenPath("/blog/", toggleSidebar));
document.addEventListener(
  loadEvent,
  whenPath("/blog/", makeActiveFiltersShadow)
);
document.addEventListener(loadEvent, whenPath("/blog/", makeScrollToTopButton));
