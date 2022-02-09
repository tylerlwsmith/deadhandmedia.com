import Alpine from "alpinejs";
import { unloadEvent } from "./event-names";

export const blogPageInitData = () => ({
  activeFilters: Alpine.$persist([]).as("active-blog-filters"),
  sidebarIsOpen: Alpine.$persist(false).as("blog-sidebar-is-open"),
  sortFiltersBy: Alpine.$persist("name").as("blog-sort-filters-by"),
  activeFilterContainerSticky: false,
  init() {
    Alpine.nextTick(() => {
      this._makeActiveFiltersShadow.bind(this)();
      this.activeFilters = [
        ...document.querySelectorAll(
          `input[type='checkbox'][x-model='activeFilters']`
        ),
      ]
        .filter((el) => el.checked)
        .map((el) => el.value);
    });
  },
  toggleSidebar(event) {
    if (event.key.toUpperCase() !== "F") return;
    this.sidebarIsOpen = !this.sidebarIsOpen;
  },
  resetFilters() {
    this.activeFilters = [];
  },
  postVisibilityClass() {
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
  _makeActiveFiltersShadow() {
    const observer = new IntersectionObserver(
      ([observerEntry]) => {
        this.activeFilterContainerSticky =
          observerEntry.intersectionRatio !== 1;
      },
      { threshold: [0, 1], rootMargin: "-1px" }
    );

    observer.observe(document.querySelector(".active-filter__container"));

    document.addEventListener(unloadEvent, function cleanup() {
      observer.disconnect();
      document.removeEventListener(unloadEvent, cleanup);
    });
  },
});
