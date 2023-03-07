const productSpec = document.querySelector('.product-section.product-spec')
const openButton = productSpec.querySelector('.button-wrapper button')

function openProductSpec() {
  productSpec.classList.add('is-open')
}
openButton.addEventListener('click', openProductSpec)
