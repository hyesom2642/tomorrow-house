const productShipment = document.querySelector('.product-shipment')
const productSectionButton = document.querySelectorAll(
  '.product-shipment .product-section-header .icon-link'
)
function openShipmentToggle() {
  productShipment.classList.toggle('is-open')
}
productSectionButton.forEach((button) => {
  button.addEventListener('click', openShipmentToggle)
})
