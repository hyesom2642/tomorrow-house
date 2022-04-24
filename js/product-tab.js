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

// 1. 각 element의 y축위치(document의 시작점에서 얼마나 떨어져있는지)
// 2. 요소의 y축 위치 = window.scrollY + element.getBoundingClientRect().top
const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]
const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`)
  return tabPanel
})

const productTabPanelPosition = {
  // id : position
}
function findTabPanelPosition() {
  productTabPanelList.forEach((panel) => {
    const id = panel.getAttribute('id')
    const position = window.scrollY + panel.getBoundingClientRect().top

    productTabPanelPosition[id] = position
  })
}
function updateActiveTab() {
  // 스크롤 위치에 따라서 activeTab 업데이트
  // 1. 현재 얼마만큼 스크롤을 했는가 -> window.scrollY
  // 2. 각 element의 y축 위치 -> productTabPanelPosition
  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

  let newActiveTab
  if (scrolledAmount >= productTabPanelPosition['product-recommendation']) {
    newActiveTab = productTabItemButton[4] // 추천버튼
  } else if (scrolledAmount >= productTabPanelPosition['product-shipment']) {
    newActiveTab = productTabItemButton[3] // 배송/환불 버튼
  } else if (scrolledAmount >= productTabPanelPosition['product-inquiry']) {
    newActiveTab = productTabItemButton[2] // 문의 버튼
  } else if (scrolledAmount >= productTabPanelPosition['product-review']) {
    newActiveTab = productTabItemButton[1] // 리뷰 버튼
  } else {
    newActiveTab = productTabItemButton[0] // 상품정보 버튼
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode

    if (newActiveTab !== currentTabClick) {
      newActiveTab.classList.add('is-active')
      currentTabClick.classList.remove('is-active')
      currentTabClick = newActiveTab
    }
  }
}
window.addEventListener('load', findTabPanelPosition) // load 됐을 때
window.addEventListener('resize', findTabPanelPosition) // window의 사이즈가 바뀔 때
window.addEventListener('scroll', updateActiveTab) // window가 스크롤 될 때
