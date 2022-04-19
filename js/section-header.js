const productSectionHeader = document.querySelector(
  '.product-shipment .product-section-header'
)

function showFullSection() {
  const productShipment = this.parentNode
  productShipment.classList.add('is-open')
}

productSectionHeader.addEventListener('click', showFullSection)
