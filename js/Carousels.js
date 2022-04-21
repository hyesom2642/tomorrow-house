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

const userGallerySliderMobile = tns({
  container: '.product-user-gallery.is-mobile .user-gallery-slider-list',
  controls: false,
  gutter: 4,
  mouseDrag: true,
  arrowKeys: true,
  navContainer: '.product-user-gallery.is-mobile .user-gallery-thumbnail-list',
  edgePadding: 16,
  loop: false,
})

const userGallerySliderDesktop = tns({
  container: '.product-user-gallery.is-desktop .user-gallery-slider-list',
  controls: true,
  controlsContainer: '.product-user-gallery.is-desktop .user-gallery-controls',
  gutter: 6,
  mouseDrag: true,
  arrowKeys: true,
  navContainer: '.product-user-gallery.is-desktop .user-gallery-thumbnail-list',
  edgePadding: 75,
  loop: false,
})
