const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  //   items: 3,
  //   slideBy: 'page',
})

const userGallerySlider = tns({
  container: '.product-user-gallery .user-gallery-slider-list',
  controls: false,
  gutter: 4,
  mouseDrag: true,
  arrowKeys: true,
  nav: false,
  edgePadding: 16,
  loop: false,
  responsive: {
    768: {
      gutter: 6,
      controls: true,
      edgePadding: 75,
    },
  },
})
