window.addEventListener("DOMContentLoaded", function () {
  const checkboxSelector = "[data-blog-tag]";

  (function main() {
    [...getCheckboxes()].forEach((tag) => {
      tag.addEventListener("click", filterPosts);
    });

    document
      .getElementById("reset-filters")
      .addEventListener("click", function () {
        [...getCheckboxes()].forEach((checkBox) => (checkBox.checked = false));
        filterPosts();
      });

    getActiveFilterContainer().addEventListener(
      "click",
      handleActiveFilterClick
    );

    // Refire filters when navigating back from dev.to because Chrome/Firefox
    // persist checkbox state, but do not persist modifications to the DOM.
    window.addEventListener("pageshow", function () {
      filterPosts();
    });

    makeScrollToTopButton();

    const observer = new IntersectionObserver(
      ([e]) => {
        console.log(e);
        e.target.classList.toggle(
          "active-filter__container--stuck",
          e.intersectionRatio !== 1
        );
      },
      { threshold: [0, 1], rootMargin: "-1px" }
    );

    observer.observe(document.querySelector(".active-filter__container"));
  })();

  function makeScrollToTopButton() {
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
  }

  function getCheckboxes() {
    return document.querySelectorAll(checkboxSelector);
  }
  function getActiveFilters() {
    return [...document.querySelectorAll(checkboxSelector + ":checked")].map(
      (checkbox) => checkbox.name
    );
  }
  function getPosts() {
    return document.querySelectorAll("[data-tags]");
  }
  function getYearHeadings() {
    return document.querySelectorAll(["[data-year-heading]"]);
  }
  function hideYearHeadings() {
    return [...getYearHeadings()].forEach((heading) =>
      heading.classList.add("hidden")
    );
  }
  function showYearHeadings() {
    return [...getYearHeadings()].forEach((heading) =>
      heading.classList.remove("hidden")
    );
  }
  function getActiveFilterContainer() {
    return document.querySelector("[data-active-filter-list]");
  }
  function renderActiveFilters() {
    const activeFilters = getActiveFilters();
    getActiveFilterContainer().innerHTML = activeFilters.length
      ? // prettier-ignore
        `
        <div class="active-filter__list">
          <span class="active-filter__label">Active Filters:</span> 
          ${activeFilters.map((filter) => `
            <button 
              class="active-filter" 
              data-active-filter="${filter}"
            >&times; ${filter}</button>`
          ).join("")}
        </div>`
      : "";
  }
  function handleActiveFilterClick(event) {
    const target = event.target;

    if (!target.hasAttribute("data-active-filter")) return;
    document.querySelector([
      `[data-blog-tag=${target.dataset.activeFilter}]`,
    ]).checked = false;
    filterPosts();
  }
  function filterPosts() {
    const activeFilters = getActiveFilters();
    [...getPosts()].forEach((post) => {
      renderActiveFilters();
      if (activeFilters.length === 0) {
        // Scroll jumps, so we need to manually set it.
        const currentScroll = window.scrollY;
        post.classList.remove("hidden");
        showYearHeadings();
        window.scrollTo(0, currentScroll);
        return;
      }

      const postTags = JSON.parse(post.dataset.tags);
      const matchingTags = activeFilters.filter(
        (activeTag) => postTags.indexOf(activeTag) > -1
      );

      hideYearHeadings();

      post.classList[matchingTags.length ? "remove" : "add"]("hidden");
    });
  }
});

window.addEventListener("keypress", (event) => {
  if (event.key.toUpperCase() !== "F") return;
  document.querySelector(".blog-filter__sidebar").classList.toggle("hidden");
});
