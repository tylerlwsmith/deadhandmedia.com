import Alpine from "alpinejs";
import persist from "@alpinejs/persist";

import { whenPath } from "./helpers";
import { toggleNavigation } from "./toggle-navigation";
import { blogPageInitData } from "./blog-page";
import { makeScrollToTopButton } from "./scroll-to-top-button";

/**
 * Load functions that Alpine will need to call.
 */
window.blogPageInitData = blogPageInitData;

/**
 * Bootstrap Alpine.
 */
window.Alpine = Alpine;
Alpine.plugin(persist);
Alpine.start();

/**
 * Site-wide JS.
 */
document.addEventListener("DOMContentLoaded", toggleNavigation);

/**
 * Blog page.
 */
document.addEventListener(
  "DOMContentLoaded",
  whenPath("/blog/", makeScrollToTopButton)
);
