const productTab = document.querySelector('.product-tab')
const productTabList = productTab.querySelector('.product-tab-list')
const productTabItemButton = productTab.querySelectorAll(
  '.product-tab-item Button'
)
let currentTabClick = productTab.querySelector('.is-active')

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

function handleProductTab() {
  const productTabItem = this.parentNode

  if (currentTabClick !== productTabItem) {
    productTabItem.classList.add('is-active')
    currentTabClick.classList.remove('is-active')
    currentTabClick = productTabItem
  }
}
function scrollToPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)
  console.log(tabPanel)

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })
}

productTabItemButton.forEach((button) => {
  button.addEventListener('click', handleProductTab)
  button.addEventListener('click', scrollToPanel)
})
