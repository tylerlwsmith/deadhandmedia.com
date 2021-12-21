(function skipToContent() {
  const skipToContent = document.getElementById("skip-to-content");
  const main = document.getElementById("main");

  if (!skipToContent) return;
  if (!main) {
    return skipToContent.classList.add("hidden");
  }

  skipToContent.addEventListener("click", function (event) {
    event.preventDefault();
    main.tabIndex = -1;
    main.focus();
  });
})();

(function toggleNavigation() {
  const navigationToggle = document.getElementById("navigation-toggle");

  if (!navigationToggle) return;

  navigationToggle.addEventListener("click", function () {
    const ariaExpanded = "aria-expanded";
    const isExpanded = JSON.parse(this.getAttribute(ariaExpanded));
    console.log({ isExpanded });
    if (isExpanded) {
      navigationToggle.classList.remove("is-active");
      navigationToggle.setAttribute(ariaExpanded, false);
    } else {
      navigationToggle.classList.add("is-active");
      navigationToggle.setAttribute(ariaExpanded, true);
    }
  });
})();
