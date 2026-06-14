export function makeScrollToTopButton() {
  const buttonClassName = "scroll-to-top-button";
  const hiddenClassName = "scroll-to-top-button--hidden";

  const scrollButton = document.createElement("button");
  scrollButton.classList.add(buttonClassName);
  scrollButton.classList.add(hiddenClassName);
  scrollButton.innerHTML = `<span class="fas fa-arrow-alt-circle-up"></span>`;
  scrollButton.addEventListener("click", () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  );
  document.body.append(scrollButton);

  scrollButton.addEventListener("transitionend", function hideButton(event) {
    if (this.classList.contains(hiddenClassName)) {
      this.style.display = "none";
    }
  });

  requestAnimationFrame(function checkScroll() {
    const { innerHeight, scrollY } = window;
    const scrollHeight = document.body.scrollHeight;

    /** Bottom pixel of current scroll */
    const currentScrollBottom = innerHeight + scrollY;

    const isNearPageTop = scrollY < innerHeight / 3;
    const isNearPageBottom = scrollHeight - currentScrollBottom < 100;

    if (isNearPageTop || isNearPageBottom) {
      scrollButton.classList.add(hiddenClassName);
    } else {
      scrollButton.style.removeProperty("display");
      // Without a timeout, the animation will fire before the browser
      // registers that the display property has been removed. This will
      // cause the animation to be skipped entirely.
      setTimeout(() => {
        scrollButton.classList.remove(hiddenClassName);
      }, 0);
    }
    requestAnimationFrame(checkScroll);
  });

  document.addEventListener("unload", function cleanup() {
    scrollButton.remove();
    document.removeEventListener("unload", cleanup);
  });
}
