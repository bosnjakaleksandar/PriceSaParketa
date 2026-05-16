import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardAnimations = () => {
  const clipElements = document.querySelectorAll(".js-clip");

  clipElements.forEach((element) => {
    const innerElements = element.querySelectorAll(
      ".card__content, .card__image, .card__title, .card__links"
    );

    gsap.set(element, {
      opacity: 0,
      y: 24,
      clearProps: "scale,scaleX,scaleY,transformOrigin",
    });

    gsap.set(innerElements, {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      clearProps: "transform",
    });

    tl.to(
      innerElements,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      },
      "-=0.3"
    );
  });
};

export default CardAnimations;
