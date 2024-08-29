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

// matchmedia responsive --------------------------------------------------

const matchMediaResponsive = gsap.matchMedia();

matchMediaResponsive.add(
  {
    isDesktop: '(min-width: 1024px)',
    isMobileTab: '(max-width: 1024px)',
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

    // animation hyperlink ------------------------------------------------------------

    const links = gsap.utils.toArray('.link');

    links.forEach((link) => {
      let linkTl = gsap.timeline({
        defaults: { ease: 'power4.inOut', duration: 0.6 },
      });

      const arrows = link.querySelector('img');
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

    // behaviour logic function  ------------------------------------------------

    // video hover logic function  ------------------------------------------------

    const videoHover = gsap.utils.toArray('.video-blur');

    videoHover.forEach((video) => {
      let videoTl = gsap.timeline({
        defaults: { ease: 'power4.inOut', duration: 0.6 },
      });

      const videoHover = video.querySelector('.video-blur-reverse');

      videoTl.to(videoHover, { filter: 'grayscale(0%)' });

      videoTl.pause();

      video.addEventListener('mouseenter', () => {
        videoTl.play();
      });

      video.addEventListener('mouseleave', () => {
        videoTl.reverse();
      });
    });

    // image hover logic function  ------------------------------------------------

    const imageHover = gsap.utils.toArray('.img-blur');

    imageHover.forEach((img) => {
      let imgTl = gsap.timeline({
        defaults: { ease: 'power4.inOut', duration: 0.6 },
      });

      const imgHover = img.querySelector('.blur-reverse');

      imgTl.to(imgHover, { filter: 'grayscale(0%)' });

      imgTl.pause();

      img.addEventListener('mouseenter', () => {
        imgTl.play();
      });

      img.addEventListener('mouseleave', () => {
        imgTl.reverse();
      });
    });

    // timeline setting basic ------------------------------------------------

    gsap.set('.main-container', {
      display: 'none',
    });

    const tl = gsap.timeline({
      default: { duration: 0.75, ease: 'Power3.easeOut' },
    });

    // opening scene ------------------------------------------------

    tl.to('.loader', { width: '100%', duration: 2.5, ease: 'power1.inOut' });

    tl.from(
      '.opening',
      {
        y: '-20%',
        ease: 'elastic.out(1, 0.3)',
        duration: 1.5,
      },
      '<'
    );
    tl.to('.loader', { height: '100vh', top: 0, duration: 1.5 });
    tl.to('.opening-animation', { display: 'none' });
    tl.to('.main-container', { display: 'block' }, '<');

    // animation sections ---------------------------------------------

    tl.from('.title-uiux', { y: -20, opacity: 0, duration: 1 })
      .from(
        ['.paragraph-uiux-1', '.paragraph-uiux-2'],
        { color: 'rgba(255, 255, 255, 0.1)', stagger: 0.2, duration: 1 },
        '<'
      )
      .from(
        [
          '.narasihistorian-image img',
          '.agungv2-video video',
          '.antavalley-video video',
        ],
        { scale: 1.2, delay: 0.5, duration: 1, stagger: 0.2, opacity: 0.5 },
        '<'
      )
      .from(
        [
          '.narasihistorian-hyperlink h1',
          '.narasihistorian-hyperlink h6',
          '.link',
        ],
        { y: -20, opacity: 0, duration: 0.5, stagger: 0.2 },
        '<'
      )
      .from('.motion-title h1', { y: -20, opacity: 0, duration: 1 }, '<')
      .from(
        ['.paragraph-motion-1', '.paragraph-motion-2', '.paragraph-motion-3'],
        { color: 'rgba(255, 255, 255, 0.1)', stagger: 0.2, duration: 1 },
        '<'
      )
      .from(
        [
          '.video1-style video',
          '.video2-style video',
          '.video3-style video',
          '.img1-style img',
          '.img2-style img',
          '.img3-style img',
          '.img4-style img',
        ],
        { scale: 1.2, delay: 0.5, duration: 1, stagger: 0.2, opacity: 0.5 },
        '<'
      );
  }
);
