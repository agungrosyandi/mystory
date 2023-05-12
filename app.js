gsap.registerPlugin(ScrollTrigger);
// timeline setting basic

const tl = gsap.timeline({
  default: { duration: 0.75, ease: "Power3.easeOut" },
});

// navbar animation

const navmenu = document.querySelector(".menu1");
const navmenu2 = document.querySelector(".menu2");

navmenu.addEventListener("click", () => {
  gsap.fromTo(".menu1", { scale: 1 }, { scale: 1.1, yoyo: true, repeat: 1 });
});

navmenu2.addEventListener("click", () => {
  gsap.fromTo(".menu2", { scale: 1 }, { scale: 1.1, yoyo: true, repeat: 1 });
});

// navbar burger toggle mobile version

const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu-navbar");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("navbar-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("navbar-open");
    burger.classList.toggle("toggle");
  });
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

// logo agung

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

// logo dissapear and change to text

tl.to(".home-container svg", { opacity: 0, duration: 2 });
tl.fromTo(
  ".logo-navbar",
  { x: "-10%", opacity: 0 },
  { x: "0%", opacity: 1, duration: 1 }
);

// tex home

tl.fromTo(
  ".cta1",
  { y: "-50%", opacity: 0 },
  { y: "0%", opacity: 1, duration: 1.5 }
);

tl.fromTo(
  ".cta1-x",
  { x: "50%", opacity: 0 },
  { x: "0%", opacity: 1, duration: 1.5 }
);

tl.fromTo(
  ".cta2",
  { y: "100%", opacity: 0.5 },
  { y: 0, opacity: 1, duration: 1.5 },
  "<"
);

// img show agung background

tl.fromTo(
  ".home-container img",
  { x: "-20%", opacity: 0 },
  { x: "0%", opacity: 1, duration: 3.5 },
  "<20%"
);

// text navbar

tl.fromTo(
  ".menu1",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<"
).fromTo(
  ".menu2",
  { y: "-100%", opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<"
);

tl.fromTo(
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
  );

// short biography animation

const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: "#biography",
    start: "-45% center",
    end: "0% top",
    scrub: 4,
  },
});

tlSplit.fromTo(
  ".short-paragraph",
  { x: "-50%", opacity: 0 },
  { x: "0%", opacity: 1 }
);

// retro sections

const tlSplitRetro = gsap.timeline({
  scrollTrigger: {
    trigger: "#retro-design",
    start: "-45% center",
    end: "0% top",
    scrub: 4,
  },
});

tlSplitRetro
  .fromTo(
    ".short-paragraph-retro",
    { x: "-50%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 0.5 }
  )
  .fromTo(
    ".right-photo-retro",
    { x: "50%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 0.5 },
    "<"
  );

// vector sections

const tlSplitVector = gsap.timeline({
  scrollTrigger: {
    trigger: "#vector-design",
    start: "-45% center ",
    end: "0% top ",
    scrub: 4,
  },
});

tlSplitVector
  .fromTo(
    ".right-photo-vector",
    { x: "-50%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 0.5 }
  )
  .fromTo(
    ".short-paragraph-vector",
    { x: "50%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 0.5 },
    "<"
  );

// motion sections

const tlSplitMotion = gsap.timeline({
  scrollTrigger: {
    trigger: "#motion-design",
    start: "-45% center",
    end: "0% top",
    scrub: 4,
  },
});

tlSplitMotion
  .fromTo(
    ".short-paragraph-motion",
    { x: "-50%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 0.5 }
  )
  .fromTo(
    ".right-video-retro",
    { x: "50%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 0.5 },
    "<"
  );

// // portfolio sections

const tlSplitPortfolio = gsap.timeline({
  scrollTrigger: {
    trigger: "#porfolio-section",
    start: "-25% center",
    end: "0% top",
    scrub: 4,
  },
});

tlSplitPortfolio
  .fromTo(
    ".short-paragprah-text1",
    { y: "-50%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 2 }
  )
  .fromTo(
    ".short-paragprah-text2",
    { y: "50%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 2 },
    "<30%"
  )
  .fromTo(
    ".short-paragprah-text3",
    { y: "-50%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 2 },
    "<30%"
  )
  .fromTo(
    ".short-paragprah-portfolio p",
    { y: "-50%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 2 }
  )
  .fromTo(
    ".cv-btn",
    { y: "-50%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 3 }
  )
  .fromTo(
    ".portfolio-gallery-carousei",
    { x: "0%" },
    { x: "-50%", duration: 5 }
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

// closing sections

const tlClosingSections = gsap.timeline({
  scrollTrigger: {
    trigger: "#porfolio-section",
    start: "20% ",
    end: "90% ",
    scrub: 1,
  },
});

tlClosingSections.to(".portfolio-container", { opacity: 0, duration: 1 });

const tlClosing = gsap.timeline({
  scrollTrigger: {
    trigger: "#porfolio-section",
    start: "25%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

const tlSplitClosing = gsap.timeline({
  scrollTrigger: {
    trigger: "#closing-sections",
    start: "-30% center ",
    end: "0% top ",
    scrub: 4,
  },
});

tlSplitClosing
  .fromTo(".closing-container", { x: "-50%", opacity: 0 }, { x: 0, opacity: 1 })
  .fromTo(".img-closing", { x: "50%", opacity: 0 }, { x: 0, opacity: 1 }, "<");

// video play responsive fix
