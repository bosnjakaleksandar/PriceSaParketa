import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardAnimations = () => {
  const clipElements = document.querySelectorAll(".js-clip");

  clipElements.forEach((element) => {
    const isMobile = window.innerWidth <= 1024;

    const innerElements = element.querySelectorAll(
      ".card__content, .card__image, .card__title, .card__links"
    );

    if (isMobile) {
      gsap.set(element, {
        scaleY: 0,
        opacity: 0,
        transformOrigin: "top center",
      });
    } else {
      gsap.set(element, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
      });
    }

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

    if (isMobile) {
      tl.to(element, {
        scaleY: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
      });
    } else {
      tl.to(element, {
        scaleX: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
      });
    }

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
