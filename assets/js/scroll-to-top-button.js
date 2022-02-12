import { unloadEvent } from "./event-names";

export function makeScrollToTopButton() {
  const hiddenClassName = "scroll-to-top-button--hidden";

  const scrollButton = document.createElement("button");
  scrollButton.classList.add("scroll-to-top-button");
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
      setTimeout(() => {
        scrollButton.classList.remove(hiddenClassName);
      }, 0);
    }
    requestAnimationFrame(checkScroll);
  });

  document.addEventListener(unloadEvent, function cleanup() {
    scrollButton.remove();
    document.removeEventListener(unloadEvent, cleanup);
  });
}
