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
    console.log("i am here");
    const ariaExpanded = "aria-expanded";
    const isExpanded = JSON.parse(this.getAttribute(ariaExpanded));
    console.log({ isExpanded });
    if (isExpanded) {
      console.log("is expanded");
      navigationToggle.classList.remove("is-active");
      navigationToggle.setAttribute(ariaExpanded, false);
    } else {
      console.log("is not expanded");
      navigationToggle.classList.add("is-active");
      navigationToggle.setAttribute(ariaExpanded, true);
    }
  });
})();
