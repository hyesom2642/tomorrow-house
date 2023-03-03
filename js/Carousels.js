const productSlider = tns({
  container: '.product-carousel .slider-list',
  items: 1,
  controls: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  navContainer: '.product-carousel .thumbnail-list',
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
})

const userGallerySliderMobile = tns({
  container: '.user-gallery .user-gallery-slider .slider-list',
  controls: false,
  navContainer: '.user-gallery .user-gallery-thumbnail .thumbnail-list',
  controlsContainer: '.user-gallery-controls',
  gutter: 4,
  edgePadding: 16,
  arrowKeys: true,
  mouseDrag: true,
  loop: false,

  responsive: {
    768: {
      gutter: 6,
      edgePadding: 75,
      controls: true,
    },
  },
})
