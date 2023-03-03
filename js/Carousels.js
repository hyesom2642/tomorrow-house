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
  container: '.row.sm-only .user-gallery .user-gallery-slider .slider-list',
  controls: false,
  navContainer:
    '.row.sm-only .user-gallery .user-gallery-thumbnail .thumbnail-list',
  gutter: 4,
  edgePadding: 16,
  arrowKeys: true,
  mouseDrag: true,
  loop: false,
})

const userGallerySliderDesktop = tns({
  container:
    '.product-user-gallery.sm-hidden .user-gallery .user-gallery-slider .slider-list',
  controls: true,
  navContainer:
    '.product-user-gallery.sm-hidden .user-gallery .user-gallery-thumbnail .thumbnail-list',
  controlsContainer: '.product-user-gallery.sm-hidden .user-gallery-controls',
  gutter: 6,
  edgePadding: 75,
  arrowKeys: true,
  mouseDrag: true,
  loop: false,
})
