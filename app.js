gsap.registerPlugin(ScrollTrigger);
// timeline setting basic

const tl = gsap.timeline({
  default: { duration: 0.75, ease: "Power3.easeOut" },
});

// navbar animation

const navmenu = document.querySelector(".menu1");
const navmenu2 = document.querySelector(".menu2");
const navmenu3 = document.querySelector(".menu3");

navmenu.addEventListener("click", () => {
  gsap.fromTo(".menu1", { scale: 1 }, { scale: 1.1, yoyo: true, repeat: 1 });
});

navmenu2.addEventListener("click", () => {
  gsap.fromTo(".menu2", { scale: 1 }, { scale: 1.1, yoyo: true, repeat: 1 });
});

navmenu3.addEventListener("click", () => {
  gsap.fromTo(".menu3", { scale: 1 }, { scale: 1.1, yoyo: true, repeat: 1 });
});

// navbar closed

const showAnim = gsap
  .from("nav", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
});

// tex home

tl.fromTo(
  ".cta1",
  { x: "100%", opacity: 0.5 },
  { x: 0, opacity: 1, duration: 1 },
  "<35%"
);
tl.fromTo(
  ".cta3",
  { x: "-100%", opacity: 0.5 },
  { x: 0, opacity: 1, duration: 1 },
  "<35%"
);
tl.fromTo(
  ".cta2",
  { y: "-100%", opacity: 0.5 },
  { y: 0, opacity: 1, duration: 1 },
  "<35%"
);
tl.fromTo(
  ".cta4",
  { y: "100%", opacity: 0.5 },
  { y: 0, opacity: 1, duration: 1 },
  "<35%"
);
tl.fromTo(
  ".cta5",
  { y: "-100%", opacity: 0.5 },
  { y: 0, opacity: 1, duration: 1 },
  "<35%"
);
tl.fromTo(
  ".cta-btn",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<5%"
);

// logo agung

tl.fromTo(
  "#huruf_A",
  { opacity: 0, x: -100, rotation: "-45deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo("#huruf_R", { opacity: 0, x: 100 }, { opacity: 1, x: 0 });

// logo jump

tl.fromTo("#huruf_A", { y: "-20%" }, { y: 0 });
tl.fromTo("#huruf_R", { y: "20%" }, { y: 0 });

// text navbar

tl.fromTo(
  ".menu1",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, delay: 0.5 }
);
tl.fromTo(
  ".menu3",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, delay: 0.5 },
  "<"
);
tl.fromTo(".menu2", { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 }, "<");

// logo dissapear and change to text

tl.to(".logo-navbar svg", { opacity: 0, duration: 2 });
tl.fromTo(
  ".logo-navbar h1",
  { x: "-10%", opacity: 0 },
  { x: "0%", opacity: 1, duration: 1 }
);

// download cv submitted button

const buttoncv = document.querySelector(".cv-btn");

const tl2 = gsap.timeline({
  default: { duration: 0.75, ease: "Power3.easeOut" },
});

buttoncv.addEventListener("click", (e) => {
  e.preventDefault();
  tl2.to(".titlecv-download", { opacity: 0, pointerEvents: "none" });
  tl2.fromTo(".download-message", { opacity: 0 }, { opacity: 1 });
});

// short biography animation

const tlShortBiography = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: "#biography",
    start: "-25%",
    end: "0%",
    scrub: 1,
  },
});

tlSplit
  .fromTo(".left-photo", { x: "50%" }, { x: "0%" })
  .fromTo(".short-paragraph", { x: "-50%" }, { x: "0%" }, "<");

const tlSplitdescription = gsap.timeline({
  scrollTrigger: {
    trigger: "#biography",
    start: "-10%",
    end: "20%",
    scrub: 1,
  },
});

// tlSplitdescription.fromTo(".left-photo img", { opacity: 0.5 }, { opacity: 1 });

tlSplitdescription.fromTo(
  ".short-paragraph p, .short-paragraph h1, .cv-btn",
  { opacity: 0 },
  { opacity: 1, duration: 2 },
  "<"
);

const tlSplitdescriptionRemove = gsap.timeline({
  scrollTrigger: {
    trigger: "#biography",
    start: "10%",
    end: "60%",
    scrub: 1,
  },
});

tlSplitdescriptionRemove.to(".short-biograpy", { opacity: 0, duration: 1 });

// galery scrolltrigger horizontal

const tlHorizontallScroll = gsap.timeline({
  scrollTrigger: {
    trigger: "#graphic-design-slide",
    start: "0%",
    end: () =>
      "+=" + document.querySelector("#graphic-design-slide").offsetWidth,
    pin: true,
    scrub: 1,
  },
});

tlHorizontallScroll.to("#graphic-design-slide", {
  xPercent: -100,
  ease: "none",
});

// big title animation

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".big-title",
      start: "left left",
      end: "right left",
      scrub: true,
      containerAnimation: tlHorizontallScroll,
    },
  })
  .from(".big-title", { scale: 1.4 });

// galery1 animation

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".galery-portfolio",
      start: "-30% 0%",
      end: "60% 10%",
      scrub: 2,
      containerAnimation: tlHorizontallScroll,
    },
  })
  .from(".galery-portfolio img", { x: "100vw", stagger: 0.05 })
  .to(".galery-portfolio img", { scale: 0.4, stagger: 0.05 });

// big title animation 2

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".big-title2",
      start: "-30% 0%",
      end: "30% 10%",
      scrub: true,
      containerAnimation: tlHorizontallScroll,
    },
  })
  .from(".big-title2", { opacity: 0.5 });
