export function addHoverClass() {
  const projectClassName = "project-preview";
  const hoverClassName = "project-preview--hover";
  const hoverables = [
    ...document.querySelectorAll(".project-preview__thumbnail"),
    ...document.querySelectorAll(".project-preview__link"),
  ];

  const addHoverClass = (event) =>
    event.target.closest(`.${projectClassName}`).classList.add(hoverClassName);

  const removeHoverClass = (event) =>
    !event.target
      .closest(`.${projectClassName}`)
      .contains(document.activeElement) &&
    event.target
      .closest(`.${projectClassName}`)
      .classList.remove(hoverClassName);

  hoverables.forEach((hoverable) => {
    hoverable.addEventListener("mouseover", addHoverClass);
    hoverable.addEventListener("mouseout", removeHoverClass);
    hoverable.addEventListener("focus", addHoverClass);
    hoverable.addEventListener("blur", removeHoverClass);
    hoverable.addEventListener("click", removeHoverClass);
  });
}
