const productSectionHaederIconButton = document.querySelectorAll(
  '.product-section-header button.icon-link'
)

function showFullSection() {
  const productSection = this.parentNode.parentNode
  productSection.classList.add('is-open')
}
productSectionHaederIconButton.forEach((button) => {
  button.addEventListener('click', showFullSection)
})
