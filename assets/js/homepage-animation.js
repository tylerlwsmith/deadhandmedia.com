/**
 * Animate the homepage text. This must execute immediately: do not move into a
 * "DOMContentLoaded" callback.
 */
(function () {
  /**
   * Creating the style tag in JavaScript ensures that the text will be
   * visible on load if JS is disabled. Placing script before the affected
   * DOM elements prevents a flash text before the animation starts.
   */
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    .animate\\:fade-in {
      opacity: 0;
      transform: translateX(20px);
      transition-property: opacity, transform;
      transition-duration: 0.3s;
    }
    @media (max-width: 650px) {
      .animate\\:fade-in {
        transform: translateY(20px);
      }
    }
    .animate\\:fade-in--initialized {
      opacity: 1;
      transform: translateX(0);
    }
  `;
  const headElement = document.querySelector("head");
  if (headElement) headElement.appendChild(styleTag);

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      window.setTimeout(function () {
        const animatable = [...document.querySelectorAll(".animate\\:fade-in")];
        let currentIndex = 0;
        const interval = window.setInterval(function () {
          if (currentIndex + 1 >= animatable.length)
            window.clearInterval(interval);
          animatable[currentIndex].classList.add(
            "animate:fade-in--initialized"
          );
          currentIndex++;
        }, 120);
      }, 100);
    },
    false
  );
})();
