export function toggleNavigation() {
  const navigationToggle = document.getElementById("navigation-toggle");

  if (!navigationToggle) return;

  navigationToggle.addEventListener("click", function () {
    const ariaExpanded = "aria-expanded";
    const isExpanded = JSON.parse(this.getAttribute(ariaExpanded));
    if (isExpanded) {
      navigationToggle.classList.remove("is-active");
      navigationToggle.setAttribute(ariaExpanded, false);
    } else {
      navigationToggle.classList.add("is-active");
      navigationToggle.setAttribute(ariaExpanded, true);
    }
  });
}
