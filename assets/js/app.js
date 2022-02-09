import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import Turbolinks from "turbolinks";

import { whenPath } from "./helpers";
import { toggleNavigation } from "./toggle-navigation";
import { loadEvent, useTurbolinks } from "./event-names";
import { blogPageInitData } from "./blog-page";
import { makeScrollToTopButton } from "./scroll-to-top-button";

/**
 * Load functions that Alpine will need to call.
 */
window.blogPageInitData = blogPageInitData;

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
document.addEventListener(loadEvent, toggleNavigation);

/**
 * Blog page.
 */

document.addEventListener(loadEvent, whenPath("/blog/", makeScrollToTopButton));
