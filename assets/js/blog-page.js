import gsap from "gsap";

const SORT_TAGS_BY = {
  COUNT: "COUNT",
  NAME: "NAME",
};

export const blogPageInitData = () => ({
  SORT_TAGS_BY: SORT_TAGS_BY,
  activeFilters: [],
  sidebarIsOpen: false,
  sortTagsBy: null, // Hydrate after page load.
  activeFilterContainerSticky: false,
  sidebarOpenTimeline: null,
  init() {
    this.sidebarOpenTimeline = makeSidebarTimeline();

    if (this.sidebarIsOpen) {
      this.sidebarOpenTimeline.tweenTo("open").duration(0);
    }
  },
  toggleSidebar() {
    this.sidebarIsOpen = !this.sidebarIsOpen;
    if (this.sidebarIsOpen) {
      this.sidebarOpenTimeline.play();
    } else {
      this.sidebarOpenTimeline.reverse();
    }
  },
  closeSidebar() {
    if (!this.sidebarIsOpen) return;
    this.sidebarIsOpen = false;
    this.sidebarOpenTimeline.reverse();
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
  sortTags(sortBy) {
    try {
      ({
        [SORT_TAGS_BY.NAME]() {
          const list = document.querySelector("[data-filter-list]");
          const listItems = [...list.querySelectorAll("li[data-filter-name]")];
          const getName = (el) => el.dataset.filterName;

          listItems
            .sort((a, b) => getName(a).localeCompare(getName(b)))
            .forEach((el) => list.appendChild(el));
        },
        [SORT_TAGS_BY.COUNT]() {
          const list = document.querySelector("[data-filter-list]");
          const listItems = [...list.querySelectorAll("li[data-filter-count]")];
          const getCount = (el) => el.dataset.filterCount;

          listItems
            .sort((a, b) => getCount(b) - getCount(a))
            .forEach((el) => list.appendChild(el));
        },
      })[sortBy]();
    } catch (e) {
      console.error(e);
    }
  },

  hydrateStateFromDOM() {
    const sortTagsBy = document.querySelector(
      `[name="sort_tags_by"]:checked`
    ).value;

    const activeFilters = [
      ...document.querySelectorAll(
        `input[type='checkbox'][x-model='activeFilters']:checked`
      ),
    ].map((el) => el.value);

    this.sortTagsBy = sortTagsBy;
    this.activeFilters = activeFilters;
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

    document.addEventListener("unload", function cleanup() {
      observer.disconnect();
      document.removeEventListener("unload", cleanup);
    });
  },
});

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
