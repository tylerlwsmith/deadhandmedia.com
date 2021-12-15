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

    // Refires filters when navigating back from dev.to
    window.addEventListener("pageshow", function () {
      filterPosts();
    });
  })();

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
    return [...getYearHeadings()].forEach(
      (heading) => (heading.style.display = "none")
    );
  }
  function showYearHeadings() {
    return [...getYearHeadings()].forEach(
      (heading) => (heading.style.display = "block")
    );
  }
  function getActiveFilterContainer() {
    return document.querySelector("[data-active-filter-list]");
  }
  function renderActiveFilters() {
    const activeFilters = getActiveFilters();
    getActiveFilterContainer().innerHTML = activeFilters.length
      ? `<span class="active-filter__label">Active Filters:</span> ${activeFilters
          .map(
            (filter) => `
            <button 
              class="active-filter" 
              data-active-filter="${filter}"
            >&times; ${filter}</button>`
          )
          .join("")}`
      : "";
  }
  function handleActiveFilterClick(event) {
    const target = event.target;

    if (!target.hasAttribute("data-active-filter")) return;
    console.log(
      "handling",
      document.querySelector([`[data-blog-tag=${target.dataset.activeFilter}]`])
    );
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
        post.style.display = "block";
        showYearHeadings();
        window.scrollTo(0, currentScroll);
        return;
      }

      const postTags = JSON.parse(post.dataset.tags);
      const matchingTags = activeFilters.filter(
        (activeTag) => postTags.indexOf(activeTag) > -1
      );

      hideYearHeadings();
      post.style.display = matchingTags.length ? "block" : "none";
    });
  }
});
