gsap.registerPlugin(ScrollTrigger);

const blocks = document.querySelectorAll(".timeline-block");
blocks.forEach((block) => {
  const elements = Array.from(block.querySelectorAll(".js-from-down-tl"));
  if (elements.length === 0) return;

  const rows = {};
  elements.forEach((el) => {
    const top = el.offsetTop;
    if (!rows[top]) rows[top] = [];
    rows[top].push(el);
  });

  Object.values(rows).forEach((row) => {
    gsap.set(row, { opacity: 0, y: 50 });
    gsap.to(row, {
      scrollTrigger: {
        trigger: row[0],
        start: "top 70%",
        once: false,
        markers: false,
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        each: 0.3,
      },
      onComplete: function () {
        this.targets()[0].style.transform = "";
      },
    });
  });
});

const leftElements = document.querySelectorAll(".js-from-left");
leftElements.forEach((el, i) => {
  gsap.set(el, { opacity: 0, x: -50 });
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      once: false,
      markers: false,
    },
    opacity: 1,
    x: 0,
    duration: 0.5,
    delay: i * 0.3,
    onComplete: function () {
      el.style.transform = "";
      gsap.fromTo(
        el,
        { opacity: 1 },
        {
          opacity: 0.3,
          yoyo: true,
          repeat: 3,
          duration: 0.5,
          ease: "power1.inOut",
          onComplete: function () {
            gsap.set(el, { opacity: 1 });
          },
        }
      );
    },
  });
});
