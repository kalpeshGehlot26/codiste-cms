var splide = new Splide('#first-slider', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    pagination: true,
    autoplay: true,
    interval: 2000,
    perPage: 5,
    arrows: false,
    autoScroll: {
      speed: 2,
    },
  });

  splide.mount();

  var splide1 = new Splide('#second-slider', {
    type: 'loop',
    drag: 'free',
    // focus: 'center',
    pagination: true,
    autoplay: true,
    interval: 2000,
    perPage: 1,
    arrows: false,
    rewind: true,
    autoScroll: {
      speed: 2,
    },
  });

  splide1.mount();