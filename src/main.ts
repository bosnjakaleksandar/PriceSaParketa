import "./scss/main.scss";
import { initSVGLoader } from "./ts/loadSVG";
import { initBurgerMenu } from "./ts/components/hamburger";
import { initHeaderScrollAnimation } from "./ts/components/header";
import { initCustomSelect } from "./ts/components/customSelect";
import CardAnimations from "./ts/animations/card";
import slider from "./ts/components/slider";

initSVGLoader();
initBurgerMenu();
initHeaderScrollAnimation();
initCustomSelect();
CardAnimations();
slider();
