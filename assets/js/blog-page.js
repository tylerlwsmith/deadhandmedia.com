export const blogPageInitData = () => ({
  activeFilters: Alpine.$persist([]).as("active-blog-filters"),
  sidebarIsOpen: Alpine.$persist(false).as("blog-sidebar-is-open"),
  sortFiltersBy: Alpine.$persist("name").as("blog-sort-filters-by"),
  init() {
    setTimeout(() => {
      this.activeFilters = [
        ...document.querySelectorAll(
          `input[type='checkbox'][x-model='activeFilters']`
        ),
      ]
        .filter((el) => el.checked)
        .map((el) => el.value);
    }, 0);
  },
  toggleSidebar(event) {
    if (event.key.toUpperCase() !== "F") return;
    this.sidebarIsOpen = !this.sidebarIsOpen;
  },
  resetFilters() {
    this.activeFilters = [];
  },
  classBinder() {
    return this.activeFilters.length > 0 &&
      this.tagList.filter((tag) => this.activeFilters.includes(tag)).length ===
        0
      ? "hidden"
      : "";
  },
  _sortFilters(sortBy) {
    try {
      ({
        name() {
          list = document.querySelector("[data-filter-list]");
          listItems = [...list.querySelectorAll("li[data-filter-name]")];
          getName = (el) => el.dataset.filterName;

          listItems
            .sort((a, b) => getName(a).localeCompare(getName(b)))
            .forEach((el) => list.appendChild(el));
        },
        count() {
          list = document.querySelector("[data-filter-list]");
          listItems = [...list.querySelectorAll("li[data-filter-count]")];
          getCount = (el) => el.dataset.filterCount;

          listItems
            .sort((a, b) => getCount(b) - getCount(a))
            .forEach((el) => list.appendChild(el));
        },
      }[sortBy]());
    } catch (e) {
      console.log(e);
    }
  },
});

export function makeActiveFiltersShadow() {
  const observer = new IntersectionObserver(
    ([e]) => {
      e.target.classList.toggle(
        "active-filter__container--stuck",
        e.intersectionRatio !== 1
      );
    },
    { threshold: [0, 1], rootMargin: "-1px" }
  );

  observer.observe(document.querySelector(".active-filter__container"));

  document.addEventListener("turbolinks:before-render", function cleanup() {
    observer.disconnect();
    document.removeEventListener("turbolinks:before-render", cleanup);
  });
}
