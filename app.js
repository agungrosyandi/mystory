gsap.registerPlugin(ScrollTrigger);

// ChangeColor -------------------------------------------------------

function getGradient(name) {
  switch (name) {
    case "home":
      return "#ffffff";

    case "about":
      return "#2b2730";

    case "showchase":
      return "#000000";

    case "vector":
      return "#000000";

    case "motion":
      return "#000000";
  }
}

function getNavbarFooterColor(name) {
  switch (name) {
    case "home":
      return "#2b2730";

    case "about":
      return "#ffffff";

    case "showchase":
      return "#ffffff";

    case "vector":
      return "#ffffff";

    case "motion":
      return "#ffffff";
  }
}

const lenisScrool = () => {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};

const animateWordsBoxHastag = () => {
  const words = [
    "#Graphic Designer",
    "#Web Designer",
    "#Front-End Dev Specialist",
    "#What are you waiting for ?",
    "#Lets Work Together",
  ];
  let currentIndex = 0;
  let split;
  const textElement = document.querySelector(".Carousel-title-showchase h6");

  function updateText() {
    textElement.textContent = words[currentIndex];
    split = new SplitType(textElement, { type: "chars" });
    animateChars(split.chars);
    currentIndex = (currentIndex + 1) % words.length;
  }

  function animateChars(chars) {
    gsap.from(chars, {
      yPercent: 120,
      stagger: 0.03,
      duration: 1.5,
      ease: "power4.out",
      onComplete: () => {
        if (split) {
          split.revert();
        }
      },
    });
  }

  setInterval(updateText, 5000);
};

const bottomBorderNavbar = () => {
  const borders = gsap.utils.toArray(".main-navbar-menu");

  borders.forEach((border) => {
    let linkTl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 0.6 },
    });

    const borderBottomAnimation = border.querySelector(
      ".main-home-menu-border-bottom"
    );

    linkTl.to(borderBottomAnimation, { scaleX: 1, duration: 1 });

    linkTl.pause();

    border.addEventListener("mouseenter", () => {
      linkTl.play();
    });

    border.addEventListener("mouseleave", () => {
      linkTl.reverse();
    });
  });
};

const arrowLogic = () => {
  const links = gsap.utils.toArray(".link");

  links.forEach((link) => {
    let linkTl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 0.6 },
    });

    const headingStart = link.querySelector(".primary");
    const headingEnd = link.querySelector(".secondary");

    linkTl
      .to(headingStart, { yPercent: -100 })
      .to(headingEnd, { yPercent: -100, color: "yellow" }, "<");

    linkTl.pause();

    link.addEventListener("mouseenter", () => {
      linkTl.play();
    });

    link.addEventListener("mouseleave", () => {
      linkTl.reverse();
    });
  });
};

const randomNumberVideoAndImage = () => {
  const motionVideo = gsap.utils.toArray(".motion-container");
  const graphicDesign = gsap.utils.toArray(".graphic-design-container");

  motionVideo.forEach((video) => {
    const motion = video.querySelector("video");
    let p = video.querySelector(".motion-container p");
    let originalText = p.innerText;

    video.addEventListener("mouseenter", () => {
      gsap.fromTo(
        motion,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        { clipPath: "polygon(0% 13%, 100% 0%, 100% 87%, 0% 100%)" }
      );
      randomType(p, "01", 500, true);
    });
    video.addEventListener("mouseleave", () => {
      gsap.to(motion, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
      p.innerText = originalText;
    });
  });

  graphicDesign.forEach((images) => {
    const image = images.querySelector("img");
    let p = images.querySelector(".graphic-design-container p");
    let originalText = p.innerText;

    images.addEventListener("mouseenter", () => {
      gsap.fromTo(
        image,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        { clipPath: "polygon(0% 13%, 100% 0%, 100% 87%, 0% 100%)" }
      );
      randomType(p, "01", 500, true);
    });
    images.addEventListener("mouseleave", () => {
      gsap.to(image, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
      p.innerText = originalText;
    });
  });

  function randomType(element, characters, duration, sequential = false) {
    let originalText = element.innerText;
    let textArray = originalText.split("");
    let charactersArray = characters.split("");
    let startTime = new Date().getTime();
    let interval;

    if (sequential) {
      let currentIndex = 0;
      interval = setInterval(function () {
        textArray[currentIndex] =
          charactersArray[Math.floor(Math.random() * charactersArray.length)];
        element.innerText = textArray.join("");
        currentIndex++;
        if (currentIndex === textArray.length) {
          currentIndex = 0;
        }
        if (new Date().getTime() - startTime >= duration) {
          clearInterval(interval);
          element.innerText = originalText;
        }
      }, 20);
    } else {
      interval = setInterval(function () {
        for (let i = 0; i < textArray.length; i++) {
          textArray[i] =
            charactersArray[Math.floor(Math.random() * charactersArray.length)];
        }
        element.innerText = textArray.join("");
        if (new Date().getTime() - startTime >= duration) {
          clearInterval(interval);
          element.innerText = originalText;
        }
      }, 0);
    }
  }
};

// logic behaviour  --------------------------------------------------

const tlLeave = gsap.timeline({
  default: { duration: 0.75, ease: "Power2.easeOut" },
});

const tlEnter = gsap.timeline({
  default: { duration: 0.75, ease: "Power2.easeOut" },
});

function enterTransitionAbout(next, gradient, colorNavbarFooter) {
  const imageBackground = next.querySelector(".biography-background-img img");

  const highlight = next.querySelectorAll(".highlight");
  const button = next.querySelector(".button-resume");

  return tlEnter
    .fromTo(
      "section",
      { x: -20, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
      }
    )
    .to(
      ["body", ".logo-mask a ", ".main-navbar-menu a", ".copyright h1"],
      { background: gradient, color: colorNavbarFooter },
      "<"
    )
    .fromTo(
      imageBackground,
      { opacity: 0, y: "-20%" },
      {
        opacity: 1,
        y: 0,
        duration: 4.5,
      },
      "<"
    )
    .fromTo(
      highlight,
      {
        color: "rgba(255, 255, 255, 0.1)",
      },
      {
        color: "rgba(255, 255, 255, 1)",
        stagger: 0.3,
        duration: 1,
        delay: 0.5,
      },
      "<"
    )
    .fromTo(
      button,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 2.5,
      },
      "<"
    );
}

const enterTransitionShowchase = (next, gradient, colorNavbarFooter) => {
  const title = next.querySelector(".title-showchase h1");
  const splitTitle = next.querySelector(".Carousel-title-showchase h6");
  const titleParagraph = next.querySelector(".title-showchase p");
  const imgShowchase = next.querySelectorAll(".showchase-img img");
  const videoShowchase = next.querySelector(".showchase-video video");
  const bottomDescription = next.querySelectorAll(".narasihistorian-hyperlink");
  const bottomDescriptionTitle = next.querySelectorAll(
    ".narasihistorian-hyperlink h1"
  );
  const bottomDescriptionLink = next.querySelectorAll(".primary");
  const topDescriptionTitle = next.querySelectorAll(".top-description h1");
  const topDescriptionSubTitle = next.querySelectorAll(".top-description p");

  arrowLogic();
  animateWordsBoxHastag();

  return tlEnter
    .fromTo(
      "section",
      { x: -20, opacity: 0 },
      {
        opacity: 1,
        x: 0,
      }
    )
    .to(
      ["body", ".logo-mask a ", ".main-navbar-menu a"],
      { background: gradient, color: colorNavbarFooter },
      "<"
    )
    .fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
      }
    )
    .fromTo(
      [splitTitle, titleParagraph],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.02,
        duration: 1.5,
        delay: 0.3,
      },
      "<"
    )
    .fromTo(
      [imgShowchase, videoShowchase],
      { y: "-50%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
      },
      "<"
    )
    .fromTo(
      bottomDescription,
      { y: "-20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        delay: 0.4,
      },
      "<"
    )
    .fromTo(
      bottomDescriptionTitle,
      { y: "-20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.03,
        delay: 0.4,
      },
      "<"
    )
    .fromTo(
      bottomDescriptionLink,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.2,
        stagger: 0.02,
      },
      "<"
    )
    .fromTo(
      topDescriptionTitle,
      { opacity: 0, x: -20 },
      {
        opacity: 0.2,
        x: 0,
        duration: 1,
      },
      "<"
    )
    .fromTo(
      topDescriptionSubTitle,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
      },
      "<"
    );
};

const enterTransitionGallery = (next, gradient, colorNavbarFooter) => {
  randomNumberVideoAndImage();

  return tlEnter
    .fromTo(next, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5 })
    .to(
      ["body", ".logo-mask a ", ".main-navbar-menu a"],
      { background: gradient, color: colorNavbarFooter },
      "<"
    );
};

function leaveTransition(current, done) {
  tlLeave.fromTo(
    current,
    { opacity: 1, x: 0 },
    { opacity: 0, x: -20, onComplete: done }
  );
}

document.addEventListener("DOMContentLoaded", () => {
  animateWordsBoxHastag();
  bottomBorderNavbar();
  arrowLogic();
  randomNumberVideoAndImage();
  lenisScrool();
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

    lenisScrool();

    barba.init({
      preventRunning: true,
      sync: true,
      cacheFirstPage: true,
      transitions: [
        {
          name: "refresh-transition",

          async once(data) {
            let next = data.next.container;
            let gradient = getGradient(data.next.namespace);
            let colorNavbarFooter = getNavbarFooterColor(data.next.namespace);
            gsap.set(["body", ".logo-mask a ", ".main-navbar-menu a"], {
              background: gradient,
              color: colorNavbarFooter,
            });
            gsap.fromTo(
              next,
              { x: -20, opacity: 0 },
              { x: 0, opacity: 1, duration: 1.5 }
            );
          },
        },

        {
          name: "enter-about",
          from: {
            namespace: [
              "home",
              "showchase",
              "motion",
              "vector",
              "photo-manipulation",
            ],
          },
          to: { namespace: ["about"] },

          async enter(data) {
            let next = data.next.container;
            let gradient = getGradient(data.next.namespace);
            let colorNavbarFooter = getNavbarFooterColor(data.next.namespace);
            enterTransitionAbout(next, gradient, colorNavbarFooter);
          },

          async leave(data) {
            const done = this.async();
            let current = data.current.container;
            leaveTransition(current, done);
          },
        },

        {
          name: "enter-showchase",
          from: {
            namespace: ["home", "about", "motion", "vector"],
          },
          to: { namespace: ["showchase"] },

          async enter(data) {
            let next = data.next.container;
            let gradient = getGradient(data.next.namespace);
            let colorNavbarFooter = getNavbarFooterColor(data.next.namespace);
            enterTransitionShowchase(next, gradient, colorNavbarFooter);
          },
        },

        {
          name: "enter-gallery-transition",
          from: {
            namespace: ["showchase"],
          },
          to: { namespace: ["motion", "vector"] },

          async enter(data) {
            let next = data.next.container;
            let gradient = getGradient(data.next.namespace);
            let colorNavbarFooter = getNavbarFooterColor(data.next.namespace);
            enterTransitionGallery(next, gradient, colorNavbarFooter);
          },
        },

        {
          name: "enter-to-home-transition",
          from: {
            namespace: ["about", "showchase", "motion", "vector"],
          },
          to: { namespace: ["home"] },

          async enter(data) {
            let next = data.next.container;
            let gradient = getGradient(data.next.namespace);
            let colorNavbarFooter = getNavbarFooterColor(data.next.namespace);
            enterTransitionBackToHome(next, gradient, colorNavbarFooter);
            function enterTransitionBackToHome(
              next,
              gradient,
              colorNavbarFooter
            ) {
              tlEnter
                .fromTo(next, { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
                .to(
                  [
                    "body",
                    ".logo-mask a ",
                    ".main-navbar-menu a",
                    ".copyright h1",
                  ],
                  { background: gradient, color: colorNavbarFooter },
                  "<"
                )
                .to(".cta-text1 h2", { x: 0, opacity: 1, duration: 1 }, "<")
                .to(
                  [".cta-text2 h1", ".home-image", ".cta-paragraph p"],
                  { y: 0, opacity: 1, duration: 1 },
                  "<"
                )
                .to(
                  ".menu-social-media",
                  { scale: 1, opacity: 1, duration: 1 },
                  "<"
                )
                .to(
                  ".button-contact",
                  { scale: 1, opacity: 1, duration: 1 },
                  "<"
                );
            }
          },

          async leave(data) {
            const done = this.async();
            let current = data.current.container;
            leaveTransition(current, done);
          },
        },
      ],
    });

    // opening animation -----------------------------------------------------------

    const tl = gsap.timeline({
      default: { duration: 0.75, ease: "power4.easeOut" },
    });

    tl.to(".home-image", {
      y: 0,
      opacity: 1,
      duration: 1,
    })
      .to(
        ".cta-text1 h2",
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        "<10%"
      )
      .to(
        ".cta-text2 h1",
        { y: 0, opacity: 1, stagger: 0.3, duration: 1 },
        "<20%"
      )
      .to(".cta-paragraph p", { y: 0, opacity: 1, duration: 1 }, "<30%")
      .to(
        ".logo-mask h1",
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        },
        "<"
      )
      .to(
        ".main-navbar-menu",
        {
          y: 0,
          opacity: 1,
          stagger: 0.4,
          duration: 1,
        },
        "<"
      )
      .to(
        ".bottom-border",
        {
          scaleX: 1,
          duration: 1.5,
          delay: 0.5,
        },
        "<"
      )
      .to(
        ".menu-social-media",
        {
          scale: 1,
          opacity: 1,
          ease: "bounce.out",
          stagger: 0.2,
          duration: 1,
        },
        "<10%"
      )
      .to(
        [".button-contact", ".copyright h1"],
        { scale: 1, opacity: 1, stagger: 0.2, duration: 1 },
        "<10%"
      );
  }
);
