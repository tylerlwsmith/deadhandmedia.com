import Alpine from "alpinejs";
import gsap from "gsap";
import { unloadEvent } from "./event-names";

/**
 * TODO: There's a bug here somewhere. If the page starts on mobile with the
 *       sidebar hidden by the media query, the animation completel breaks.
 */

function makeSidebarTimeline() {
  return gsap
    .timeline({ paused: true })
    .from(".blog-filter__sidebar", { display: "none", duration: 0 }, "closed")
    .from(
      ".blog-filter__sidebar",
      { width: 0, display: "block", duration: 0.2 },
      "closed"
    )
    .to(
      ".blog-filter__sidebar",
      { width: "auto", duration: 0 }, // duration: 0 prevents start delay on reverse.
      "open"
    );
}

export const blogPageInitData = () => ({
  activeFilters: Alpine.$persist([]).as("active-blog-filters"),
  sidebarIsOpen: Alpine.$persist(false).as("blog-sidebar-is-open"),
  sortFiltersBy: Alpine.$persist("name").as("blog-sort-filters-by"),
  activeFilterContainerSticky: false,
  sidebarOpenTimeline: null,
  init() {
    this.sidebarOpenTimeline = makeSidebarTimeline();

    if (this.sidebarIsOpen) {
      this.sidebarOpenTimeline.tweenTo("open").duration(0);
    }

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
    if (this.sidebarIsOpen) {
      this.sidebarOpenTimeline.play();
    } else {
      this.sidebarOpenTimeline.reverse();
    }
  },
  resetFilters() {
    this.activeFilters = [];
  },
  postIsVisible() {
    return this.activeFilters.length > 0 &&
      this.tagList.filter((tag) => this.activeFilters.includes(tag)).length ===
        0
      ? false
      : true;
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
