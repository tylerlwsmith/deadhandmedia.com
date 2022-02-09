import { unloadEvent } from "./event-names";

export function makeScrollToTopButton() {
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

  document.addEventListener(unloadEvent, function cleanup() {
    scrollButton.remove();
    document.removeEventListener(unloadEvent, cleanup);
  });
}
