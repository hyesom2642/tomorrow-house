const productTab = document.querySelector('.product-tab')
const productTabItemButtonList = productTab.querySelectorAll(
  '.product-tab-item button'
)

let currentActiveTab = productTab.querySelector('.is-active') // 현재 active가 되어있는 productTab

const TOP_HEADER_DESKTOP = 80 + 50 + 56
const TOP_HEADER_MOBILE = 50 + 40 + 40

function productTabClickHandle() {
  const productTabItem = this.parentNode // <li class="search-history-item"></li>
  if (currentActiveTab !== productTabItem) {
    productTabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = productTabItem // currentActiveTab에 productTabItem을 넣어줌
  }
}
function scrollToPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby') // aria-labelledby 값을 가져옴
  const tabPanel = document.querySelector(`#${tabPanelId}`)
  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

  scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })
}

productTabItemButtonList.forEach((button) => {
  button.addEventListener('click', productTabClickHandle)
  button.addEventListener('click', scrollToPanel)
})

// 1. scroll에 따른 productTabItem이 is-active 되도록
// 2. 각 tabPanel의 y축 = window.scrollY + element.getBoundingClientRect().top (document의 시작점에서 얼마나 떨어져 있는지)
const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]
const productTabPanelList = productTabPanelIdList.map((PanelId) => {
  const tabPanel = document.querySelector(`#${PanelId}`)
  return tabPanel
})
const productTabPanelPositionMap = {
  // id: positionY 형태로 넣어줄 곳
}

function detectTabPanelPosition() {
  // 1. tabPanel의 y축 위치를 찾음
  // 2. productTabPanelPositionMap에 값을 업데이트
  productTabPanelList.forEach((panel) => {
    const id = panel.getAttribute('id') // id값
    const yPosition = window.scrollY + panel.getBoundingClientRect().top // y축 위치

    productTabPanelPositionMap[id] = yPosition
  })
}

function updateActiveTabOnScroll() {
  const scrolledAmount = window.scrollY
  let newActiveTab

  if (scrolledAmount >= productTabPanelPositionMap['product-recommendation']) {
    newActiveTab = productTabItemButtonList[4] // 추천 탭 버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-shipment']) {
    newActiveTab = productTabItemButtonList[3] // 배송/환불 탭 버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabItemButtonList[2] // 문의 탭 버튼
  } else if (scrolledAmount >= productTabPanelPositionMap['product-review']) {
    newActiveTab = productTabItemButtonList[1] // 리뷰 탭 버튼
  } else {
    newActiveTab = productTabItemButtonList[0] // 상품정보 탭 버튼
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode

    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add('is-active')
      currentActiveTab.classList.remove('is-active')
      currentActiveTab = newActiveTab
    }
  }
}

window.addEventListener('load', detectTabPanelPosition)
window.addEventListener('resize', detectTabPanelPosition)
window.addEventListener('scroll', updateActiveTabOnScroll)
