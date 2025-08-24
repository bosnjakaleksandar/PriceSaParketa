export function initCustomSelect() {
  const customSelects = document.querySelectorAll(
    ".custom-select"
  ) as NodeListOf<HTMLElement>;

  customSelects.forEach((customSelect) => {
    const trigger = customSelect.querySelector(
      ".custom-select__trigger"
    ) as HTMLElement;
    const options = customSelect.querySelector(
      ".custom-select__options"
    ) as HTMLElement;
    const optionItems = customSelect.querySelectorAll(
      ".custom-select__option"
    ) as NodeListOf<HTMLElement>;
    const flagImg = trigger?.querySelector(
      ".custom-select__flag"
    ) as HTMLImageElement;

    if (!trigger || !options || !flagImg) return;

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      customSelect.classList.toggle("active");

      customSelects.forEach((otherSelect) => {
        if (otherSelect !== customSelect) {
          otherSelect.classList.remove("active");
        }
      });
    });

    optionItems.forEach((option) => {
      option.addEventListener("click", () => {
        const value = option.dataset.value;
        const img = option.querySelector("img") as HTMLImageElement;

        if (img) {
          flagImg.src = img.src;
          flagImg.alt = img.alt;
        }

        customSelect.classList.remove("active");

        if (value === "en") {
          window.location.href = "/en";
        } else {
          window.location.href = "/";
        }
      });
    });
  });

  document.addEventListener("click", () => {
    customSelects.forEach((customSelect) => {
      customSelect.classList.remove("active");
    });
  });
}
