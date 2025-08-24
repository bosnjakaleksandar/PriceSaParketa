import gsap from "gsap";

const textAnimemation = () => {
    const elements = document.querySelectorAll<HTMLElement>(".text-animation");

    elements.forEach((element) => {
        const lines = element.querySelectorAll<HTMLElement>(".text-animation__line");

        gsap.set(lines, {
            y: "100%",
            opacity: 0,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none",
                once: true,
            },
        });

        tl.to(lines, {
            y: "0%",
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
        });
    });
};

export default textAnimemation;
