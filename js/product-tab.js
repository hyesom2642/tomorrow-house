const productTab = document.querySelector('.product-tab')
const productTabItemButton = productTab.querySelectorAll(
  '.product-tab-item button'
)

let currentActive = productTab.querySelector('.is-active')

const TOP_HEADER_DESKTOP = 80 + 50 + 56
const TOP_HEADER_MOBILE = 50 + 40 + 40

function productTabClickHandle() {
  this.classList.add('is-active')

  const productTabItem = this.parentNode
  if (currentActive !== productTabItem) {
    productTabItem.classList.add('is-active')
    currentActive.classList.remove('is-active')
    currentActive = productTabItem
  }
}
function scrollToPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)

  scrollBy({
    top:
      tabPanel.getBoundingClientRect().top -
      (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE),
    behavior: 'smooth',
  })
}
productTabItemButton.forEach((button) => {
  button.addEventListener('click', productTabClickHandle)
  button.addEventListener('click', scrollToPanel)
})
