import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import Turbolinks from "turbolinks";

import { whenPath } from "./helpers";
import { skipToContent } from "./skip-to-content";
import { toggleNavigation } from "./toggle-navigation";
import { loadEvent, useTurbolinks } from "./settings";
import { makeScrollToTopButton, makeActiveFiltersShadow } from "./blog-page";

/**
 * Bootstrap Alpine. This must come before Turbolinks.
 */
window.Alpine = Alpine;
Alpine.plugin(persist);
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
 * Blog page.
 */
document.addEventListener(
  loadEvent,
  whenPath("/blog/", makeActiveFiltersShadow)
);
document.addEventListener(loadEvent, whenPath("/blog/", makeScrollToTopButton));
