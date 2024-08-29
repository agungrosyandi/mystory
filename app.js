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

// const menuBurger = document.querySelector('.burger');

// let menuStatus = false;

// const menuTL = gsap.timeline({
//   default: { duration: 0.5, ease: 'power4.inOut' },
// });

// menuTL.to('.menu-navbar', { scaleY: 1, stagger: 0.5 });

// menuTL.to('.line1', { rotateZ: '35deg' }, '<');
// menuTL.to('.line3', { rotateZ: '-35deg', y: '-10px' }, '<');
// menuTL.to('.line2', { opacity: 0, onComplete: fadeIn }, '<');

// function fadeIn() {
//   menuTL.to('.menu-navbar li', { opacity: 1, duration: 0.5 });
// }

// menuTL.paused(true);

// menuBurger.addEventListener('click', () => {
//   if (!menuStatus) {
//     menuTL.play();
//     menuStatus = true;
//   } else {
//     menuTL.reverse();
//     menuStatus = false;
//   }
// });

// matchmedia responsive --------------------------------------------------

const matchMediaResponsive = gsap.matchMedia();

matchMediaResponsive.add(
  {
    isDesktop: '(min-width: 1025px)',
    isMobile: '(max-width: 1024px)',
  },
  (context) => {
    console.log(context.conditions);
    const { isMobile, isDesktop } = context.conditions;

    // smooth scrool ---------------------------------------------------

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
      default: { duration: 0.75, ease: 'power4.easeOut' },
    });

    tl.fromTo(
      '.right-image',
      { x: isMobile ? '0%' : '100%', opacity: isMobile ? 1 : 0.5 },
      { x: 0, opacity: 1, duration: 1 },
      '<'
    );

    // tex home ----------------------------------------------------------------------

    tl.fromTo(
      '.cta-text1 h2',
      {
        x: isMobile ? '0%' : '-100%',
        opacity: isMobile ? 1 : 0,
      },
      { x: '0%', opacity: 1, duration: 1.2 },
      '<'
    )
      .fromTo(
        '.cta-text2 h1',
        { y: isMobile ? '0%' : '100%', opacity: isMobile ? 1 : 0 },
        { y: '0%', opacity: 1, stagger: 0.3, duration: 1, delay: 0.8 },
        '<'
      )
      .fromTo(
        '.cta-paragraph p',
        { y: isMobile ? 0 : '100%', opacity: isMobile ? 1 : 0 },
        { y: '0%', opacity: 1, duration: 1, delay: 0.8 },
        '<'
      )
      .fromTo(
        '.menu-social-media',
        { y: isMobile ? 0 : '100%', opacity: isMobile ? 1 : 0 },
        {
          y: '0%',
          ease: 'bounce.out',
          stagger: 0.2,
          duration: 1,
          opacity: 1,
        },
        '<'
      );

    // higlight text biography animation ------------------------------------------------

    const tlHiglightText = gsap.timeline({
      scrollTrigger: {
        trigger: '#biography',
        scroller: '.main-content',
        start: 'center 55%',
        // end: "80% center",

        // the 4 states of toggle actions

        // onEnter - this actions happens when you scrool into specific sections or element for the first time. scroolling down
        // onLeave - this actions happens when you scrool out of a specific sections or element for the frist time. scrooling down
        // onEnterBack - this actions happens when you scrool back into a specific sections or element for the first time.  scrooling up
        // onLeaveBack - this actions happens when you scrool back out of a specific sections or elemetn for the first time . scrolling up
        // value: "play", "resume", "reset", "restart", complete, "reverse", and "none"

        toggleActions: isMobile
          ? 'play complete none none'
          : 'play complete restart reverse',

        // markers: true,
      },
    });

    tlHiglightText.fromTo(
      '.highlight',
      {
        color: isMobile ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.1)',
      },
      { color: 'rgba(255, 255, 255, 1)', stagger: 0.2, duration: 1.8 }
    );

    tlHiglightText.to('.bottom-border', { scaleX: 1, duration: 1 }, '-=1.8');

    // image dissapers animation ------------------------------------------------

    const tlImageDissapears = gsap.timeline({
      scrollTrigger: {
        trigger: '#biography',
        scroller: '.main-content',
        start: 'bottom center',
        // end: "80% center",

        // the 4 states of toggle actions

        // onEnter - this actions happens when you scrool into specific sections or element for the first time. scroolling down
        // onLeave - this actions happens when you scrool out of a specific sections or element for the frist time. scrooling down
        // onEnterBack - this actions happens when you scrool back into a specific sections or element for the first time.  scrooling up
        // onLeaveBack - this actions happens when you scrool back out of a specific sections or elemetn for the first time . scrolling up
        // value: "play", "resume", "reset", "restart", complete, "reverse", and "none"

        toggleActions: 'play complete play reverse',

        // markers: true,
      },
    });

    tlImageDissapears.to('.right-image', {
      x: isMobile ? '0' : '100',
      opacity: isMobile ? 1 : 0,
      duration: 0.5,
    });

    // higlight text showcase animation ------------------------------------------------

    const tlHiglightText2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#showcase',
        scroller: '.main-content',
        start: isMobile ? 'center 85%' : 'center 55%',
        // end: "100% center",

        // the 4 states of toggle actions

        // onEnter - this actions happens when you scrool into specific sections or element for the first time. scroolling down
        // onLeave - this actions happens when you scrool out of a specific sections or element for the frist time. scrooling down
        // onEnterBack - this actions happens when you scrool back into a specific sections or element for the first time.  scrooling up
        // onLeaveBack - this actions happens when you scrool back out of a specific sections or elemetn for the first time . scrolling up
        // value: "play", "resume", "reset", "restart", complete, "reverse", and "none"

        toggleActions: isMobile
          ? 'play complete restart reverse'
          : 'play complete restart reverse',

        // markers: true,
      },
    });

    if (isDesktop) {
      tlHiglightText2.to(
        ['.showcase-title h1', '.showcase-title p', '.hyperlink-gallery'],
        {
          x: '0%',
          stagger: 0.1,
          opacity: 1,
          duration: 1.8,
        }
      );
    } else {
      gsap.set(
        ['.showcase-title h1', '.showcase-title p', '.hyperlink-gallery'],
        { opacity: 1, x: 0 }
      );
    }

    const links = gsap.utils.toArray('.hyperlink-gallery');

    links.forEach((link) => {
      let linkTl = gsap.timeline({
        defaults: { ease: 'power4.inOut', duration: 0.6 },
      });

      const arrows = link.querySelector('.hyperlink-gallery img');
      const headingStart = link.querySelector('.primary');
      const headingEnd = link.querySelector('.secondary');

      linkTl
        .to(headingStart, { yPercent: -100 })
        .to(headingEnd, { yPercent: -100, color: 'yellow' }, '<')
        .to(arrows, { xPercent: 50 }, '-=.5');

      linkTl.pause();
      link.addEventListener('mouseenter', () => {
        linkTl.play();
      });
      link.addEventListener('mouseleave', () => {
        linkTl.reverse();
      });
    });

    // gallery showcase sections -----------------------------------------------------------

    if (isDesktop) {
      tlHiglightText2.to(
        '.gallery-showcase video',
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          delay: 0.5,
        },
        '-=1.8'
      );
    } else {
      gsap.set('.gallery-showcase video', {
        opacity: 1,
        x: 0,
      });
    }

    // closing sections -----------------------------------------------------------

    const textClosing = new SplitType('.text-title h1');
    const textClosin2 = new SplitType('.text-title p');

    const tlClosingSections = gsap.timeline({
      scrollTrigger: {
        trigger: '#closing-sections',
        scroller: '.main-content',
        start: 'center 55%',
        // end: "-5%",

        // the 4 states of toggle actions

        // onEnter - this actions happens when you scrool into specific sections or element for the first time. scroolling down
        // onLeave - this actions happens when you scrool out of a specific sections or element for the frist time. scrooling down
        // onEnterBack - this actions happens when you scrool back into a specific sections or element for the first time.  scrooling up
        // onLeaveBack - this actions happens when you scrool back out of a specific sections or elemetn for the first time . scrolling up
        // value: "play", "resume", "reset", "restart", complete, "reverse", and "none"

        toggleActions: isMobile
          ? 'play complete none none'
          : 'play complete restart reverse',

        // markers: true,
      },
      default: { ease: 'power3.out', duration: 1 },
    });

    gsap.set('.text-title h1', { autoAlpha: 1 });
    gsap.set('.text-title p', { autoAlpha: 1 });

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
      '-=.8'
    );

    tlClosingSections.from(
      '.email-button',
      { scaleY: isMobile ? 1 : 0, duration: 0.7, ease: 'bounce.out' },
      '<'
    );
  }
);
