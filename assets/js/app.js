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
