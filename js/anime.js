gsap.registerPlugin(ScrollTrigger);

const containers = document.querySelectorAll(".js-animation");

containers.forEach((container, index) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: true,
      start: "top 50%",
      end: "top",
    },
  });

  const slideLeftElements = container.querySelectorAll(".js-slide-left");
  const slideRightElements = container.querySelectorAll(".js-slide-right");
  const slideUpElements = container.querySelectorAll(".js-slide-up");
  timeline
    .from(slideLeftElements, { opacity: 0, x: -500, duration: 6 })
    .from(slideRightElements, { opacity: 0, x: 500, duration: 6 })
    .from(slideUpElements, { opacity: 0, y: 50, duration: 4, stagger: 1 });
});
