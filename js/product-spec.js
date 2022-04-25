const productSpec = document.querySelector('.product-section.product-spec')

const wrapperButton = productSpec.querySelector('.button-wrapper')

function openProductSpec() {
  productSpec.classList.add('is-open')
}
wrapperButton.addEventListener('click', openProductSpec)
