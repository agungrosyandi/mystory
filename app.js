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
    isDesktop: "(min-width: 1025px)",
    isMobile: "(max-width: 1024px)",
  },
  (context) => {
    console.log(context.conditions);
    const { isMobile, isDesktop } = context.conditions;

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
      default: { duration: 0.75, ease: "power4.easeOut" },
    });

    const logoNavbar = new SplitType(".logo-navbar");
    const menu1 = new SplitType(".menu1");
    const menu2 = new SplitType(".menu2");

    // gsap set

    gsap.set([".logo-navbar", ".menu1", ".menu2"], {
      autoAlpha: 1,
      visibility: "hidden",
    });

    tl.fromTo(
      "nav",
      { y: isMobile ? "0%" : "-100%" },
      { y: "0%", duration: 0.5 }
    );

    tl.from(logoNavbar.chars, {
      y: isMobile ? 0 : 40,
      opacity: isMobile ? 1 : 0,
      skewX: isMobile ? 0 : 30,
      stagger: 0.03,
      duration: 1,
    });

    // navbar animation

    tl.from(
      menu1.chars,
      {
        y: 40,
        opacity: 0,
        skewX: 30,
        stagger: 0.03,
        duration: 1,
      },
      "-=.8"
    ).from(
      menu2.chars,
      {
        y: 40,
        opacity: 0,
        skewX: 30,
        stagger: 0.03,
        duration: 1,
      },
      "-=1"
    );

    // right image animation

    tl.fromTo(
      ".right-image",
      { x: isMobile ? "0%" : "100%", opacity: isMobile ? 1 : 0.5 },
      { x: 0, opacity: 1, duration: 1 },
      "<"
    );

    // tex home ----------------------------------------------------------------------

    tl.fromTo(
      ".cta-text1 h2",
      {
        x: isMobile ? "0%" : "-100%",
        opacity: isMobile ? 1 : 0,
      },
      { x: "0%", opacity: 1, duration: 1.2 },
      "<"
    )
      .fromTo(
        ".cta-text2 h1",
        { y: isMobile ? "0%" : "100%", opacity: isMobile ? 1 : 0 },
        { y: "0%", opacity: 1, stagger: 0.3, duration: 1, delay: 0.8 },
        "<"
      )
      .fromTo(
        ".cta-paragraph p",
        { y: isMobile ? 0 : "100%", opacity: isMobile ? 1 : 0 },
        { y: "0%", opacity: 1, duration: 1, delay: 0.8 },
        "<"
      )
      .fromTo(
        ".footer",
        { y: isMobile ? "0%" : "100%", opacity: isMobile ? 1 : 0 },
        { y: "0%", opacity: 1, duration: 0.5, delay: 0.5 },
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

        toggleActions: isMobile
          ? "play complete none none"
          : "play complete restart reverse",

        // markers: true,
      },
    });

    tlHiglightText.fromTo(
      ".highlight",
      {
        color: isMobile ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.1)",
      },
      { color: "rgba(255, 255, 255, 1)", stagger: 0.2, duration: 1.8 }
    );

    tlHiglightText.to(".bottom-border", { scaleX: 1, duration: 1 }, "-=1.8");

    // image dissapers animation ------------------------------------------------

    const tlImageDissapears = gsap.timeline({
      scrollTrigger: {
        trigger: "#biography",
        scroller: ".main-content",
        start: "bottom center",
        // end: "80% center",

        // the 4 states of toggle actions

        // onEnter - this actions happens when you scrool into specific sections or element for the first time. scroolling down
        // onLeave - this actions happens when you scrool out of a specific sections or element for the frist time. scrooling down
        // onEnterBack - this actions happens when you scrool back into a specific sections or element for the first time.  scrooling up
        // onLeaveBack - this actions happens when you scrool back out of a specific sections or elemetn for the first time . scrolling up
        // value: "play", "resume", "reset", "restart", complete, "reverse", and "none"

        toggleActions: "play complete play reverse",

        // markers: true,
      },
    });

    tlImageDissapears.to(".right-image", {
      x: "100",
      opacity: 0,
      duration: 0.5,
    });

    // image dissapers animation ------------------------------------------------

    const tlNavbarChange = gsap.timeline({
      scrollTrigger: {
        trigger: "#biography",
        scroller: ".main-content",
        start: "bottom center",
        // end: "80% center",

        // the 4 states of toggle actions

        // onEnter - this actions happens when you scrool into specific sections or element for the first time. scroolling down
        // onLeave - this actions happens when you scrool out of a specific sections or element for the frist time. scrooling down
        // onEnterBack - this actions happens when you scrool back into a specific sections or element for the first time.  scrooling up
        // onLeaveBack - this actions happens when you scrool back out of a specific sections or elemetn for the first time . scrolling up
        // value: "play", "resume", "reset", "restart", complete, "reverse", and "none"

        toggleActions: "play none play reverse",

        // markers: true,
      },
    });

    tlNavbarChange.fromTo(
      "nav",
      { width: isMobile ? "100vw" : "69vw" },
      { width: isMobile ? "100vw" : "95vw", duration: 1.3, delay: 0.3 },
      "-=.1"
    );

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

        toggleActions: isMobile
          ? "play complete restart reverse"
          : "play complete restart reverse",

        // markers: true,
      },
    });

    tlHiglightText2.to([".showcase-title h1", ".showcase-title p"], {
      x: "0%",
      stagger: 0.1,
      opacity: 1,
      duration: 1.8,
    });

    // gallery showcase sections -----------------------------------------------------------

    tlHiglightText2.to(
      ".video1-style video",
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        delay: 0.5,
      },
      "-=1.8"
    );

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

        toggleActions: isMobile
          ? "play complete none none"
          : "play complete restart reverse",

        // markers: true,
      },
      default: { ease: "power3.out", duration: 1 },
    });

    gsap.set(".text-title h1", { autoAlpha: 1 });
    gsap.set(".text-title p", { autoAlpha: 1 });

    tlClosingSections.from(textClosing.chars, {
      y: isMobile ? 0 : 40,
      opacity: isMobile ? 1 : 0,
      skewX: isMobile ? 0 : 30,
      stagger: 0.03,
      duration: 1.8,
    });

    tlClosingSections.from(
      textClosin2.lines,
      {
        y: isMobile ? 0 : 40,
        opacity: isMobile ? 1 : 0,
        skewX: isMobile ? 0 : 30,
        stagger: 0.03,
        duration: 1.4,
      },
      "-=.8"
    );

    tlClosingSections.from(
      ".email-button",
      { scaleX: isMobile ? 1 : 0, duration: 0.7 },
      "<"
    );
  }
);
