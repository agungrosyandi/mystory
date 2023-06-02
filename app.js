gsap.registerPlugin(ScrollTrigger);
// timeline setting basic

const tl = gsap.timeline({
  default: { duration: 0.75, ease: "Power3.easeOut" },
});

// navbar animation -------------------------------------------------------------

const navmenu = document.querySelector(".menu1");
const navmenu2 = document.querySelector(".menu2");

navmenu.addEventListener("click", () => {
  gsap.fromTo(".menu1", { scale: 1 }, { scale: 1.1, yoyo: true, repeat: 1 });
});

navmenu2.addEventListener("click", () => {
  gsap.fromTo(".menu2", { scale: 1 }, { scale: 1.1, yoyo: true, repeat: 1 });
});

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

// navbar closed ---------------------------------------------------------------

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

// logo dissapear and change to text -------------------------------------------

const logoNavbar = new SplitType(".logo-navbar");

tl.to(".home-container svg", { opacity: 0, duration: 2 })
  .fromTo(".logo-navbar", { opacity: 0 }, { opacity: 1 })
  .fromTo(
    ".char",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.05, duration: 1, ease: "power4.out" },
    "<"
  );

// tex home ----------------------------------------------------------------------

tl.fromTo(
  ".cta1",
  { y: "-100%", opacity: 0.5 },
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

// navbar animation

tl.fromTo(
  ".burger",
  { x: "20%", opacity: 0 },
  { x: "0%", opacity: 1, duration: 3.5 },
  "<"
);

// text navbar ---------------------------------------------------------------------

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
  background: "white",
  duration: 1,
});

const tlShortBiography = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

// logo and navbar change color ---------------------------------------------

const tlLogoNavbarChangeColorSections = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "10% ",
    end: "40% ",
    scrub: 1,
  },
});

tlLogoNavbarChangeColorSections
  .to(".menu-navbar li a", { color: "black" })
  .to(".logo-navbar a", { color: "black" }, "<");

// short biography animation ------------------------------------------------

const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: "#biography",
    start: "-45% center",
    end: "0% top",
    scrub: 4,
  },
});

tlSplit
  .fromTo(
    ".img-photo-agung img",
    { x: "-50%", opacity: 0 },
    { x: "0%", opacity: 1 }
  )

  .fromTo(
    ".short-paragraph",
    { x: "50%", opacity: 0 },
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
  opacity: 0,
  duration: 1,
});

const tlShortBiographyClosing = gsap.timeline({
  scrollTrigger: {
    trigger: "#biography",
    start: "30%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

// gallery showcase sections -----------------------------------------------------------

const tlSplitRetro = gsap.timeline({
  scrollTrigger: {
    trigger: "#gallery-showcase",
    start: "-15% center",
    end: "0% top",
    scrub: 4,
  },
});

tlSplitRetro
  .fromTo(
    ".gallery-showcase-container h2",
    { y: "-50%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 0.5 }
  )
  .fromTo(
    ".retro-style",
    { x: "-50%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 0.5 },
    "<35%"
  )
  .fromTo(
    ".vector-style",
    { x: "50%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 0.5 },
    "<35%"
  )
  .fromTo(
    ".motion-style",
    { x: "-50%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 0.5 },
    "<35%"
  );

// portfolio sections -------------------------------------------------------

const tlSplitPortfolio = gsap.timeline({
  scrollTrigger: {
    trigger: "#porfolio-section",
    start: "-95% center",
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
  );

//  wa form animation

const tlWaAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: "#closing-sections",
    duration: 0.75,
    ease: "Power3.easeOut",
    start: "55% bottom ",
    end: "75% center ",
    scrub: 4,
  },
});

tlWaAnimation.fromTo(
  ".wa-contact",
  { scale: 0 },
  { scale: 1, delay: 8.5, duration: 5.5, ease: "elastic.out(1.5,1)" }
);

// mail sender code

const sendMail = () => {
  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
  };
  const serviceID = "service_nhvqzzs";
  const templateID = "template_hizzrsg";

  emailjs
    .send(serviceID, templateID, templateParams)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";

      console.log(res);
      alert("pesan anda terkirim, tunggu balasan ya");
    })
    .catch((err) => console.log(err));
};
