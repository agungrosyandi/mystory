gsap.registerPlugin(ScrollTrigger);

// navbar burger toggle mobile version -------------------------------------------

const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu-navbar");
const links = nav.querySelectorAll("a");
const blurOpen = document.querySelector(".blur-burger-menu");

burger.addEventListener("click", () => {
  nav.classList.toggle("navbar-open");
  burger.classList.toggle("toggle");
  blurOpen.classList.toggle("blur-open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("navbar-open");
    burger.classList.toggle("toggle");
    blurOpen.classList.toggle("blur-open");
  });
});

// matchmedia responsive --------------------------------------------------

const matchMediaResponsive = gsap.matchMedia();

matchMediaResponsive.add(
  {
    isDesktop: "(min-width: 721px)",
    isMobile: "(max-width: 1023px)",
  },
  (context) => {
    console.log(context.conditions);
    const { isMobile, isDesktopTab } = context.conditions;

    // timeline setting basic

    const tl = gsap.timeline({
      default: { duration: 0.75, ease: "Power3.easeOut" },
    });

    // navbar closed ---------------------------------------------------------------

    const showAnim = gsap
      .from("nav", {
        yPercent: isMobile ? 0 : -100,
        paused: isMobile ? false : true,
        duration: isMobile ? 0 : 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    // logo agung -------------------------------------------------------------------

    tl.fromTo("svg", { opacity: 0 }, { opacity: 1, duration: 3, delay: 0.5 });

    tl.fromTo(
      "#left_line",
      { x: "95%", rotation: "-27deg", transformOrigin: "bottom" },
      { x: "0%", rotation: "0deg", duration: 1 }
    )
      .fromTo(
        "#right_line",
        { x: "-95%", rotation: "27deg", transformOrigin: "bottom" },
        { x: "0%", rotation: "0deg", duration: 1 },
        "<"
      )
      .fromTo(
        "#center_line",
        { opacity: 0, rotation: "35deg" },
        { opacity: 1, rotation: "0deg", duration: 2 },
        "<35%"
      )
      .fromTo(
        "#teks_gungs",
        { opacity: 0, rotation: "45deg", transformOrigin: "bottom left" },
        { opacity: 1, rotation: "0deg", duration: 2 },
        "<35%"
      );

    tl.to(".home-container svg", { opacity: 0, duration: 2 });

    // navbar animation

    tl.fromTo("nav", { y: "-100%" }, { y: "0%", duration: 1.5 });

    const logoNavbar = new SplitType(".logo-navbar");

    tl.fromTo(".logo-navbar", { opacity: 0 }, { opacity: 1 })
      .fromTo(
        ".char",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 1, ease: "power4.out" },
        "<"
      )
      .fromTo(
        ".burger",
        { x: "20%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 3.5 },
        "<"
      )
      .fromTo(
        ".menu1",
        { y: "100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "<"
      )
      .fromTo(
        ".menu2",
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "<"
      )
      .fromTo(
        ".right-image",
        { x: "100%", opacity: 0.5 },
        { x: 0, opacity: 1, duration: 1.5 },
        "<35%"
      );

    // tex home ----------------------------------------------------------------------

    tl.fromTo(
      ".cta1",
      { y: "-100%", opacity: 0.5 },
      { y: "0%", opacity: 1, duration: 1.5 },
      "<"
    )

      .fromTo(
        ".cta1-x",
        { x: "50%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1.5 },
        "<35%"
      )

      .fromTo(
        ".cta2",
        { y: "100%", opacity: 0.5 },
        { y: 0, opacity: 1, duration: 1.5 },
        "<35%"
      )

      .fromTo(
        ".cta3",
        { x: "-100%", opacity: 0.5 },
        { x: 0, opacity: 1, duration: 1 },
        "<35%"
      )
      .fromTo(
        ".cta4",
        { y: "100%", opacity: 0.5 },
        { y: 0, opacity: 1, duration: 1 },
        "<35%"
      )
      .fromTo(
        ".cta5",
        { y: "-100%", opacity: 0.5 },
        { y: 0, opacity: 1, duration: 1 },
        "<35%"
      )
      .fromTo(
        ".cta6",
        { y: "100%", opacity: 0.5 },
        { y: 0, opacity: 1, duration: 1 },
        "<35%"
      )
      .fromTo(".footer p", { opacity: 0 }, { opacity: 1 }, "<35%");

    // closing home sections with opacity -----------------------------------------

    const tlClosingHomeSections = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "20% ",
        end: "70% ",
        scrub: 1,
      },
    });

    tlClosingHomeSections.to("#home", {
      opacity: isMobile ? 1 : 0,
      duration: 1,
    });

    const tlShortBiography = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "0%",
        end: "100%",
        pin: isMobile ? false : true,
        pinSpacing: isMobile ? true : false,
      },
    });

    // navbar change width ---------------------------------------------

    const tlNavbarChangeWidth = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "10% ",
        end: "40% ",
        scrub: 1,
      },
    });

    tlNavbarChangeWidth
      .fromTo("nav", { left: isMobile ? "0" : "45%" }, { left: "0" })
      .fromTo(
        "nav",
        { width: isMobile ? "100vw" : "60vw" },
        { width: "100vw" }
      );

    // short biography animation ------------------------------------------------

    const tlSplit = gsap.timeline({
      scrollTrigger: {
        trigger: "#biography",
        start: "-45% center",
        end: "0% top",
        scrub: 4,
      },
    });

    tlSplit.fromTo(
      ".biography-container",
      { x: isMobile ? "0%" : "50%", opacity: isMobile ? 1 : 0 },
      { x: "0%", opacity: 1 },
      "<35%"
    );

    // short biography closing animation ------------------------------------------------

    const tlSplitClosing = gsap.timeline({
      scrollTrigger: {
        trigger: "#biography",
        start: "20% ",
        end: "70% ",
        scrub: 1,
      },
    });

    tlSplitClosing.to("#biography", {
      opacity: isMobile ? 1 : 0,
      duration: 1,
    });

    const tlShortBiographyClosing = gsap.timeline({
      scrollTrigger: {
        trigger: "#biography",
        start: "30%",
        end: "100%",
        pin: isMobile ? false : true,
        pinSpacing: isMobile ? true : false,
      },
    });

    // gallery showcase sections -----------------------------------------------------------

    const tlSplitRetro = gsap.timeline({
      scrollTrigger: {
        trigger: "#showcase",
        start: "-15% center",
        end: "0% top",
        scrub: 4,
      },
    });

    tlSplitRetro
      .fromTo(
        ".retro-style",
        { x: isMobile ? "0%" : "-50%", opacity: isMobile ? 1 : 0 },
        { x: "0%", opacity: 1, duration: 0.5 },
        "<35%"
      )
      .fromTo(
        ".vector-style",
        { x: isMobile ? "0%" : "-50%", opacity: isMobile ? 1 : 0 },
        { x: "0%", opacity: 1, duration: 0.5 },
        "<35%"
      )
      .fromTo(
        ".web-style",
        { x: isMobile ? "0%" : "-50%", opacity: isMobile ? 1 : 0 },
        { x: "0%", opacity: 1, duration: 0.5 },
        "<35%"
      )
      .fromTo(
        ".motion-style",
        { x: isMobile ? "0%" : "50%", opacity: isMobile ? 1 : 0 },
        { x: "0%", opacity: 1, duration: 0.5 },
        "<35%"
      );

    const tlFooter = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "80% center",
        end: "80% center",
        duration: 0.75,
        scrub: 4,
      },
    });

    tlFooter.fromTo(".footer", { y: "100%" }, { y: 0 });
  }
);
