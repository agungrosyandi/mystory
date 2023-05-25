gsap.registerPlugin(ScrollTrigger);
// timeline setting basic

// navbar animation

const navmenu = document.querySelector(".menu1-gallery-about");
const navmenu2 = document.querySelector(".menu2-gallery-about");

navmenu.addEventListener("click", () => {
  gsap.fromTo(
    ".menu1-gallery-about",
    { scale: 1 },
    { scale: 1.1, yoyo: true, repeat: 1 }
  );
});

navmenu2.addEventListener("click", () => {
  gsap.fromTo(
    ".menu2-gallery-about",
    { scale: 1 },
    { scale: 1.1, yoyo: true, repeat: 1 }
  );
});

// navbar burger toggle mobile version

const burger = document.querySelector(".burger-gallery-about");
const nav = document.querySelector(".menu-navbar-gallery-about");
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
