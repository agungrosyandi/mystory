gsap.registerPlugin(ScrollTrigger);

// lenis scrool basic setup -------------------------------------------

const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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

    // lenis scrooltriger ---------------------------------------------------

    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

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
      )
      .fromTo(
        '.poster-4',
        { y: '50', opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '<35%'
      )
      .fromTo(
        '.poster-5',
        { y: '50', opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '<35%'
      )
      .fromTo(
        '.poster-6',
        { y: '50', opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '<35%'
      );

    // vector animation sections -----------------------------------------------------------

    const tlSplitvector = gsap.timeline({
      scrollTrigger: {
        trigger: '#vector',
        start: '-10% center',
        end: '30% top',
        scrub: 4,
      },
    });

    tlSplitvector
      .fromTo(
        '.vector-title h1',
        { x: isMobileTab ? '0%' : '-50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 1.5 }
      )
      .fromTo(
        '.vector-title p',
        { x: isMobileTab ? '0%' : '-50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 1.5 },
        '<35%'
      )
      .fromTo(
        '.vector-1',
        { x: isMobileTab ? '0%' : '-50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 1.5 },
        '<35%'
      )
      .fromTo(
        '.vector-2',
        { x: isMobileTab ? '0%' : '50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 1.5 },
        '<35%'
      )
      .fromTo(
        '.vector-4',
        { x: isMobileTab ? '0%' : '-50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 1.5 },
        '<35%'
      )
      .fromTo(
        '.vector-3',
        { x: isMobileTab ? '0%' : '-50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 1.5 },
        '<35%'
      )
      .fromTo(
        '.vector-5',
        { x: isMobileTab ? '0%' : '50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 1.5 },
        '<35%'
      )
      .fromTo(
        '.vector-6',
        { x: isMobileTab ? '0%' : '50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 1.5 },
        '<35%'
      );

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
        '.video-title h1',
        { x: isMobileTab ? '0%' : '50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 0.5 }
      )
      .fromTo(
        '.video-title p',
        { x: isMobileTab ? '0%' : '50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.video-1',
        { x: isMobileTab ? '0%' : '50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.video-2',
        { x: isMobileTab ? '0%' : '50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.video-3',
        { x: isMobileTab ? '0%' : '50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      );

    // UI/UX sections -----------------------------------------------------------

    const tlSplitWeb = gsap.timeline({
      scrollTrigger: {
        trigger: '#narasihistorian-web',
        start: '-30% center',
        end: '15% top',
        scrub: 4,
      },
    });

    tlSplitWeb
      .fromTo(
        '.narasihistorian-title h1',
        { x: isMobileTab ? '0%' : '-50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 0.5 }
      )
      .fromTo(
        '.narasihistorian-title p',
        { x: isMobileTab ? '0%' : '-50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.narasihistorian-1',
        { x: isMobileTab ? '0%' : '-50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.narasihistorian-4',
        { x: isMobileTab ? '0%' : '50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.narasihistorian-2',
        { x: isMobileTab ? '0%' : '-50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.narasihistorian-3',
        { x: isMobileTab ? '0%' : '50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.narasihistorian-about h1',
        { x: isMobileTab ? '0%' : '50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      )
      .fromTo(
        '.narasihistorian-about p',
        { x: isMobileTab ? '0%' : '50%', opacity: isMobileTab ? 1 : 0 },
        { x: '0%', opacity: 1, duration: 0.5 },
        '<35%'
      );
  }
);
