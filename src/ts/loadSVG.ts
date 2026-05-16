const svgIconModules = import.meta.glob("/src/svg/*.svg", {
  query: "?raw",
  import: "default",
});

async function loadSVG(element: HTMLElement, svgName: string) {
  const path = `/src/svg/${svgName}.svg`;

  if (element.dataset.svgLoaded === svgName || element.dataset.svgLoading === svgName) {
    return;
  }

  if (svgIconModules[path]) {
    try {
      element.dataset.svgLoading = svgName;
      const svgText = await svgIconModules[path]();
      Array.from(element.children).forEach((child) => {
        if (child.tagName.toLowerCase() === "svg") {
          child.remove();
        }
      });
      element.insertAdjacentHTML("afterbegin", svgText + " ");
      element.dataset.svgLoaded = svgName;
    } catch (error) {
      console.error(`Error dynamically importing SVG "${svgName}.svg":`, error);
    } finally {
      delete element.dataset.svgLoading;
    }
  } else {
    console.error(`SVG module not found for: ${svgName}`);
  }
}

function initSVGLoader() {
  const loadAllSVGs = () => {
    const svgElements = document.querySelectorAll(
      "[data-svg]"
    ) as NodeListOf<HTMLElement>;

    svgElements.forEach((element) => {
      const svgName = element.getAttribute("data-svg");
      if (svgName) {
        loadSVG(element, svgName);
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadAllSVGs, { once: true });
  } else {
    loadAllSVGs();
  }
}

export { loadSVG, initSVGLoader };
