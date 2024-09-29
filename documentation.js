// random number function ---------------------------------------------------------------

function randomType(element, characters, duration, sequential = false) {
  let originalText = element.innerText;
  let textArray = originalText.split('');
  let charactersArray = characters.split('');
  let startTime = new Date().getTime();
  let interval;

  if (sequential) {
    let currentIndex = 0;
    interval = setInterval(function () {
      textArray[currentIndex] =
        charactersArray[Math.floor(Math.random() * charactersArray.length)];
      element.innerText = textArray.join('');
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
      element.innerText = textArray.join('');
      if (new Date().getTime() - startTime >= duration) {
        clearInterval(interval);
        element.innerText = originalText;
      }
    }, 0);
  }
}

// navbar burger toggle mobile version -------------------------------------------

requestAnimationFrame(raf);

const menuBurger = document.querySelector('.burger');

let menuStatus = false;

const menuTL = gsap.timeline({
  default: { duration: 0.5, ease: 'power4.inOut' },
});

menuTL.to('.menu-navbar', { scaleY: 1, stagger: 0.5 });

menuTL.to('.line1', { rotateZ: '35deg' }, '<');
menuTL.to('.line3', { rotateZ: '-35deg', y: '-10px' }, '<');
menuTL.to('.line2', { opacity: 0, onComplete: fadeIn }, '<');

function fadeIn() {
  menuTL.to('.menu-navbar li', { opacity: 1, duration: 0.5 });
}

menuTL.paused(true);

menuBurger.addEventListener('click', () => {
  if (!menuStatus) {
    menuTL.play();
    menuStatus = true;
  } else {
    menuTL.reverse();
    menuStatus = false;
  }
});

// smooth scrool for page snap style ---------------------------------------------------

const container = document.querySelector('.main-content');
const items = document.querySelectorAll('section');

container.addEventListener('wheel', (event) => {
  event.preventDefault();
  const delta = event.deltaY;

  container.scrollBy({
    top: delta,
    behavior: 'smooth',
  });
});
