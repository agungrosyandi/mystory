gsap.registerPlugin(ScrollTrigger);

// lenis scrool basic setup -------------------------------------------

// const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// navbar burger toggle mobile version -------------------------------------------

const menuBurger = document.querySelector(".burger");

let menuStatus = false;

const menuTL = gsap.timeline({
  default: { duration: 0.5, ease: "power4.inOut" },
});

menuTL.to(".menu-navbar", { scaleY: 1, stagger: 0.5 });

menuTL.to(".line1", { rotateZ: "35deg" }, "<");
menuTL.to(".line3", { rotateZ: "-35deg", y: "-10px" }, "<");
menuTL.to(".line2", { opacity: 0, onComplete: fadeIn }, "<");

function fadeIn() {
  menuTL.to(".menu-navbar li", { opacity: 1, duration: 0.5 });
}

menuTL.paused(true);

menuBurger.addEventListener("click", () => {
  if (!menuStatus) {
    menuTL.play();
    menuStatus = true;
  } else {
    menuTL.reverse();
    menuStatus = false;
  }
});

// matchmedia responsive --------------------------------------------------

const matchMediaResponsive = gsap.matchMedia();

matchMediaResponsive.add(
  {
    isDesktop: "(min-width: 721px)",
    isMobile: "(max-width: 1024px)",
  },
  (context) => {
    console.log(context.conditions);
    const { isMobile, isDesktopTab } = context.conditions;

    // smooth scrool ---------------------------------------------------

    const container = document.querySelector(".main-content");
    const items = document.querySelectorAll("section");

    container.addEventListener("wheel", (event) => {
      event.preventDefault();
      const delta = event.deltaY;

      container.scrollBy({
        top: delta,
        behavior: "smooth",
      });
    });

    // lenis scrooltriger ---------------------------------------------------

    // const lenis = new Lenis();

    // lenis.on("scroll", ScrollTrigger.update);

    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000);
    // });

    // gsap.ticker.lagSmoothing(0);

    // navbar closed ---------------------------------------------------------------

    // const showAnim = gsap
    //   .from("nav", {
    //     yPercent: isMobile ? 0 : -100,
    //     paused: isMobile ? false : true,
    //     duration: isMobile ? 0 : 0.2,
    //   })
    //   .progress(1);

    // ScrollTrigger.create({
    //   start: "top top",
    //   end: 99999,
    //   onUpdate: (self) => {
    //     self.direction === -1 ? showAnim.play() : showAnim.reverse();
    //   },
    // });

    // logo agung -------------------------------------------------------------------

    const tl = gsap.timeline({
      default: { duration: 0.75, ease: "Power3.easeOut" },
    });

    tl.to(["#biography", "#showcase", "#closing-sections", ".footer"], {
      display: isMobile ? "block" : "none",
    });

    tl.to("svg", { display: isMobile ? "none" : "block" });

    tl.fromTo(
      "svg",
      { opacity: 0 },
      { opacity: isMobile ? 0 : 1, duration: 0.5 },
      "<"
    );

    tl.fromTo(
      "#left_line",
      { x: "95%", rotation: "-27deg", transformOrigin: "bottom" },
      { x: "0%", rotation: "0deg", duration: 0.8 }
    )
      .fromTo(
        "#right_line",
        { x: "-95%", rotation: "27deg", transformOrigin: "bottom" },
        { x: "0%", rotation: "0deg", duration: 0.8 },
        "<"
      )
      .fromTo(
        "#center_line",
        { opacity: 0, rotation: "35deg" },
        { opacity: 1, rotation: "0deg", duration: 0.8 },
        "<"
      )
      .fromTo(
        "#teks_gungs",
        { opacity: 0, rotation: "45deg", transformOrigin: "bottom left" },
        { opacity: 1, rotation: "0deg", duration: 1 }
      );

    tl.to(".home-container svg", { opacity: 0, duration: 1 });

    // navbar animation

    tl.fromTo(
      "nav",
      { y: isMobile ? "0%" : "-100%" },
      { y: "0%", duration: 1.5 }
    ),
      "<";

    const logoNavbar = new SplitType(".logo-navbar");

    tl.fromTo(".logo-navbar", { opacity: isMobile ? 1 : 0 }, { opacity: 1 })
      .fromTo(
        ".char",
        { y: isMobile ? 0 : 50, opacity: isMobile ? 1 : 0 },
        {
          y: 0,
          opacity: 1,
          stagger: isMobile ? 0 : 0.05,
          duration: isMobile ? 0 : 1,
          ease: isMobile ? "none" : "power4.out",
        },
        "<"
      )
      .fromTo(
        ".burger",
        { x: isMobile ? "0%" : "20%", opacity: isMobile ? 1 : 0 },
        { x: "0%", opacity: 1 },
        "<"
      )
      .fromTo(
        ".menu1",
        { y: isMobile ? 0 : "100%", opacity: isMobile ? 1 : 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=.9"
      )
      .fromTo(
        ".menu2",
        { y: isMobile ? 0 : "-100%", opacity: isMobile ? 1 : 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=.9"
      )
      .fromTo(
        ".right-image",
        { x: isMobile ? 0 : "100%", opacity: isMobile ? 1 : 0.5 },
        { x: 0, opacity: 1, duration: 1 },
        "-=.8"
      );

    // tex home ----------------------------------------------------------------------

    tl.fromTo(
      ".cta1",
      { x: isMobile ? "0%" : "-100%", opacity: isMobile ? 1 : 0.5 },
      { x: "0%", opacity: 1, duration: 1 },
      "<"
    )

      .fromTo(
        ".cta2",
        { x: isMobile ? 0 : "-100%", opacity: isMobile ? 1 : 0.5 },
        { x: 0, opacity: 1, duration: 1 },
        "-=.9"
      )

      .fromTo(
        ".cta3",
        { x: isMobile ? 0 : "-100%", opacity: isMobile ? 1 : 0.5 },
        { x: 0, opacity: 1, duration: 1 },
        "-=.9"
      )

      .fromTo(
        ".cta6",
        { y: isMobile ? 0 : "100%", opacity: isMobile ? 1 : 0.5 },
        { y: 0, opacity: 1, duration: 1 },
        "-=.9"
      );

    tl.to(
      ["#biography", "#showcase", "#closing-sections", ".footer"],
      {
        display: "block",
      },
      "<"
    );

    // higlight text biography animation ------------------------------------------------

    const tlHiglightText = gsap.timeline({
      scrollTrigger: {
        trigger: "#biography",
        scroller: ".main-content",
        start: "center 55%",
        // end: "80% center",

        // the 4 states of toggle actions

        // onEnter - this actions happens when you scrool into specific sections or element for the first time. scroolling down
        // onLeave - this actions happens when you scrool out of a specific sections or element for the frist time. scrooling down
        // onEnterBack - this actions happens when you scrool back into a specific sections or element for the first time.  scrooling up
        // onLeaveBack - this actions happens when you scrool back out of a specific sections or elemetn for the first time . scrolling up
        // value: "play", "resume", "reset", "restart", complete, "reverse", and "none"

        toggleActions: "play complete restart reverse",

        // markers: true,
      },
    });

    tlHiglightText.fromTo(
      ".highlight",
      {
        color: "rgba(255, 255, 255, 0.1)",
      },
      { color: "rgba(255, 255, 255, 1)", stagger: 0.2, duration: 1.8 }
    );

    tlHiglightText.to(".bottom-border", { scaleX: 1, duration: 1 }, "-=1.8");

    // higlight text showcase animation ------------------------------------------------

    const tlHiglightText2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#showcase",
        scroller: ".main-content",
        start: isMobile ? "center 85%" : "center 55%",
        // end: "100% center",

        // the 4 states of toggle actions

        // onEnter - this actions happens when you scrool into specific sections or element for the first time. scroolling down
        // onLeave - this actions happens when you scrool out of a specific sections or element for the frist time. scrooling down
        // onEnterBack - this actions happens when you scrool back into a specific sections or element for the first time.  scrooling up
        // onLeaveBack - this actions happens when you scrool back out of a specific sections or elemetn for the first time . scrolling up
        // value: "play", "resume", "reset", "restart", complete, "reverse", and "none"

        toggleActions: "play complete restart reverse",

        // markers: true,
      },
    });

    tlHiglightText2.fromTo(
      [".highlight2", ".highlight2 a"],
      {
        color: "rgba(255, 255, 255, 0.1)",
      },
      {
        color: "rgba(255, 255, 255, 1)",
        stagger: 0.1,
        duration: 1.8,
      }
    );

    // gallery showcase sections -----------------------------------------------------------

    tlHiglightText2.to(
      [".video1-style video", ".video2-style video"],
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        // delay: 0.3,
      },
      "-=1.8"
    );

    tlHiglightText2.to(".bottom-border2", { scaleX: 1, duration: 2 }, "-=1.8");

    // closing sections -----------------------------------------------------------

    const textClosing = new SplitType(".text-title h1");
    const textClosin2 = new SplitType(".text-title p");

    const tlClosingSections = gsap.timeline({
      scrollTrigger: {
        trigger: "#closing-sections",
        scroller: ".main-content",
        start: "center 55%",
        // end: "-5%",

        // the 4 states of toggle actions

        // onEnter - this actions happens when you scrool into specific sections or element for the first time. scroolling down
        // onLeave - this actions happens when you scrool out of a specific sections or element for the frist time. scrooling down
        // onEnterBack - this actions happens when you scrool back into a specific sections or element for the first time.  scrooling up
        // onLeaveBack - this actions happens when you scrool back out of a specific sections or elemetn for the first time . scrolling up
        // value: "play", "resume", "reset", "restart", complete, "reverse", and "none"

        toggleActions: "play complete restart reverse",

        // markers: true,
      },
      default: { ease: "power3.out", duration: 1 },
    });

    gsap.set(".text-title h1", { autoAlpha: 1 });
    gsap.set(".text-title p", { autoAlpha: 1 });

    tlClosingSections.from(textClosing.chars, {
      y: 40,
      opacity: 0,
      skewX: 30,
      stagger: 0.03,
      duration: 1.8,
    });

    tlClosingSections.from(
      textClosin2.lines,
      {
        y: 40,
        opacity: 0,
        skewX: 30,
        stagger: 0.03,
        duration: 1.4,
      },
      "-=.8"
    );

    tlClosingSections.from(".email-button", { scaleX: 0, duration: 0.7 }, "<");
  }
);
