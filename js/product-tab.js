const productTab = document.querySelector('.product-tab')
const productTabList = productTab.querySelector('.product-tab-list')
const productTabItemButton = productTab.querySelectorAll(
  '.product-tab-item Button'
)
let currentTabClick = productTab.querySelector('.is-active')

function HandleProductTab() {
  const productTabItem = this.parentNode

  if (currentTabClick !== productTabItem) {
    productTabItem.classList.add('is-active')
    currentTabClick.classList.remove('is-active')
    currentTabClick = productTabItem
  }
}

productTabItemButton.forEach((button) => {
  button.addEventListener('click', HandleProductTab)
})
