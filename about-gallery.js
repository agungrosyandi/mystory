gsap.registerPlugin(ScrollTrigger);
// timeline setting basic

// navbar burger toggle mobile version ------------------------------------

const burger = document.querySelector('.burger-gallery-about');
const nav = document.querySelector('.menu-navbar-gallery-about');
const links = nav.querySelectorAll('a');

burger.addEventListener('click', () => {
  nav.classList.toggle('navbar-open');
  burger.classList.toggle('toggle');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.toggle('navbar-open');
    burger.classList.toggle('toggle');
  });
});

// matchmedia responsive --------------------------------------------------

const matchMediaResponsive = gsap.matchMedia();

matchMediaResponsive.add(
  {
    isDesktop: '(min-width: 1024px)',
    isMobileTab: '(max-width: 1023px)',
  },
  (context) => {
    console.log(context.conditions);
    const { isDesktop, isMobileTab } = context.conditions;

    // timeline setting basic ------------------------------------------------

    const tl = gsap.timeline({
      default: { duration: 0.75, ease: 'Power3.easeOut' },
    });

    // poster sections animations ---------------------------------------------

    tl.fromTo(
      '.logo-navbar-gallery-about',
      { scale: 0 },
      { scale: 1, duration: 2.5, delay: 0.35, ease: 'elastic.out(1.5, 1)' }
    )
      .fromTo(
        '.menu1-gallery-about',
        { scale: 0 },
        {
          scale: 1,
          duration: 2.5,
          delay: 0.35,
          ease: 'elastic.out(1.5, 1)',
        },
        '<10%'
      )
      .fromTo(
        '.menu2-gallery-about',
        { scale: 0 },
        {
          scale: 1,
          duration: 2.5,
          delay: 0.35,
          ease: 'elastic.out(1.5, 1)',
        },
        '<10%'
      )
      .fromTo(
        '.burger-gallery-about',
        { scale: 0 },
        {
          scale: 1,
          duration: 2.5,
          delay: 0.35,
          ease: 'elastic.out(1.5, 1)',
        },
        '<10%'
      )

      .fromTo(
        '.poster-title-main',
        { y: '50', opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '<'
      )
      .fromTo(
        '.poster-title-submain',
        { y: '50', opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '<35%'
      )
      .fromTo(
        '.poster-1',
        { y: '50', opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '<35%'
      )
      .fromTo(
        '.poster-2',
        { y: '50', opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '<35%'
      )
      .fromTo(
        '.poster-3',
        { y: '50', opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '<35%'
      );

    // closing poster with opacity -----------------------------------------

    const tlClosingPoster = gsap.timeline({
      scrollTrigger: {
        trigger: '#poster',
        start: '20% ',
        end: '70% ',
        scrub: 1,
      },
    });

    tlClosingPoster.to('#poster', {
      opacity: isMobileTab ? 1 : 0,
      duration: 1,
    });

    const tlPoster = gsap.timeline({
      scrollTrigger: {
        trigger: '#poster',
        start: '0%',
        end: '100%',
        pin: isMobileTab ? false : true,
        pinSpacing: isMobileTab ? true : false,
      },
    });

    // vector animation sections -----------------------------------------------------------

    const tlSplitvector = gsap.timeline({
      scrollTrigger: {
        trigger: '#vector',
        start: '-20% center',
        end: '0% top',
        scrub: 4,
      },
    });

    tlSplitvector
      .fromTo(
        '.vector-1',
        { y: '50%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.5 }
      )
      .fromTo(
        '.vector-2',
        { y: '50%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.vector-title h1',
        { x: '50%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.vector-title p',
        { x: '50%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.vector-3',
        { scale: 0 },
        { scale: 1, duration: 2.5, delay: 0.35, ease: 'elastic.out(1.5, 1)' },
        '<35%'
      )
      .fromTo(
        '.vector-4',
        { scale: 0 },
        { scale: 1, duration: 2.5, delay: 0.35, ease: 'elastic.out(1.5, 1)' },
        '<35%'
      );

    // closing vector with opacity -----------------------------------------

    const tlClosingVector = gsap.timeline({
      scrollTrigger: {
        trigger: '#vector',
        start: '20% ',
        end: '70% ',
        scrub: 1,
      },
    });

    tlClosingVector.to('#vector', {
      opacity: isMobileTab ? 1 : 0,
      duration: 1,
    });

    const tlVector = gsap.timeline({
      scrollTrigger: {
        trigger: '#vector',
        start: '0%',
        end: '100%',
        pin: isMobileTab ? false : true,
        pinSpacing: isMobileTab ? true : false,
      },
    });

    // video animation sections -----------------------------------------------------------

    const tlSplitvideo = gsap.timeline({
      scrollTrigger: {
        trigger: '#video',
        start: '-30% center',
        end: '0% top',
        scrub: 4,
      },
    });

    tlSplitvideo
      .fromTo(
        '.video-1',
        { x: '-50%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5 }
      )
      .fromTo(
        '.video-title h1',
        { x: '50%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.video-title p',
        { x: '50%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.video-2',
        { x: '50%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.video-3',
        { x: '50%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      );
  }
);
