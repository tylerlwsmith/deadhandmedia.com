import { loadEvent } from "./settings";

(function blogPage() {
  (function main() {
    /** Events that should fire when the app starts. */
    document.addEventListener("alpine:init", makeAlpineStore);

    /** Events that should only fire on the blog page. */
    window.addEventListener("keypress", onBlogPage(toggleSidebar));
    document.addEventListener(loadEvent, onBlogPage(makeActiveFiltersShadow));
    document.addEventListener(loadEvent, onBlogPage(makeScrollToTopButton));
  })();

  function isBlogPage() {
    return window.location.pathname === "/blog/";
  }

  function onBlogPage(func) {
    return function (event) {
      if (!isBlogPage()) return;
      return func.bind(this)(event);
    };
  }

  function makeAlpineStore() {
    Alpine.store("sidebar", {
      isOpen: false,
      toggle() {
        this.isOpen = !this.isOpen;
      },
    });
  }

  function toggleSidebar(event) {
    if (event.key.toUpperCase() !== "F") return;
    Alpine.store("sidebar").toggle();
  }

  function makeActiveFiltersShadow() {
    const observer = new IntersectionObserver(
      ([e]) => {
        e.target.classList.toggle(
          "active-filter__container--stuck",
          e.intersectionRatio !== 1
        );
      },
      { threshold: [0, 1], rootMargin: "-1px" }
    );

    observer.observe(document.querySelector(".active-filter__container"));

    document.addEventListener("turbolinks:before-render", function cleanup() {
      observer.disconnect();
      document.removeEventListener("turbolinks:before-render", cleanup);
    });
  }

  function makeScrollToTopButton(event) {
    const scrollButton = document.createElement("button");
    scrollButton.classList.add("scroll-to-top-button");
    scrollButton.classList.add("hidden");
    scrollButton.innerHTML = `<span class="fas fa-arrow-alt-circle-up"></span>`;
    scrollButton.addEventListener("click", () => window.scrollTo(0, 0));
    document.body.append(scrollButton);

    requestAnimationFrame(function checkScroll() {
      const { innerHeight, scrollY } = window;
      const scrollHeight = document.body.scrollHeight;

      /** Bottom pixel of current scroll */
      const currentScrollBottom = innerHeight + scrollY;

      if (scrollY < innerHeight / 3) {
        scrollButton.classList.add("hidden");
      } else if (scrollHeight - currentScrollBottom < 100) {
        scrollButton.classList.add("hidden");
      } else {
        scrollButton.classList.remove("hidden");
      }
      requestAnimationFrame(checkScroll);
    });

    document.addEventListener("turbolinks:before-render", function cleanup() {
      scrollButton.remove();
      document.removeEventListener("turbolinks:before-render", cleanup);
    });
  }
})();
