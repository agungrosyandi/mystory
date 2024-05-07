gsap.registerPlugin(ScrollTrigger);

// lenis scrool basic setup -------------------------------------------

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// matchmedia responsive --------------------------------------------------

const matchMediaResponsive = gsap.matchMedia();

matchMediaResponsive.add(
  {
    isDesktop: "(min-width: 1024px)",
    isMobileTab: "(max-width: 1023px)",
  },
  (context) => {
    console.log(context.conditions);
    const { isDesktop, isMobileTab } = context.conditions;

    // lenis scrooltriger ---------------------------------------------------

    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // timeline setting basic ------------------------------------------------

    const tl = gsap.timeline({
      default: { duration: 0.75, ease: "Power3.easeOut" },
    });

    // poster sections ---------------------------------------------

    tl.fromTo(
      ".logo-navbar-gallery-about",
      { scale: 0 },
      { scale: 1, duration: 2.5, delay: 0.35, ease: "elastic.out(1.5, 1)" }
    )
      .fromTo(
        ".poster-title-main",
        { y: "50", opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "<"
      )
      .fromTo(
        ".poster-title-submain",
        { y: "50", opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "<10%"
      )
      .fromTo(
        [
          ".poster-1",
          ".poster-2",
          ".poster-3",
          ".poster-4",
          ".poster-5",
          ".poster-6",
        ],
        { y: "50", opacity: 0 },
        { y: 0, stagger: 0.3, opacity: 1, duration: 1 },
        "<35%"
      );
  }
);
