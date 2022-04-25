const orderCta = document.querySelector('.order-cta')
// const bookMarkButton = orderCta.children[0]
// const buyButton = orderCta.children[1]
const [bookMarkButton, orderCtaBuyButton] = orderCta.children
const orderFormModal = document.querySelector('.order-form-modal')

const orderFormModalOverlay = document.querySelector('.overlay')

const bookmarkToaset = document.querySelector('.bookmark-toaset')

function openOrderFormModal() {
  orderFormModal.classList.add('is-open')
  orderFormModalOverlay.classList.add('is-active')
}
orderCtaBuyButton.addEventListener('click', openOrderFormModal)

function closeOrderFormModal() {
  orderFormModal.classList.remove('is-open')
  orderFormModalOverlay.classList.remove('is-active')
}
orderFormModalOverlay.addEventListener('click', closeOrderFormModal)

function toggleOrderCtaBookmark() {
  // this -> bookMarkButton
  // 1. 버튼 클릭시 .is-active toggle
  // 2. icon 클래스가 ic-bookmark 에서 ic-bookmark-filled로 변경
  // 3. 북마크수 span 가 +1
  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))
  // console.log(count, typeof count)
  let newCount = count

  if (this.classList.contains('is-active')) {
    // is-active 가 있는 상태
    icon.classList.remove('ic-bookmark-filled')
    icon.classList.add('ic-bookmark')
    newCount = newCount - 1
    bookmarkToaset.classList.remove('is-active')
  } else {
    // is-active 가 없는 상태
    icon.classList.remove('ic-bookmark')
    icon.classList.add('ic-bookmark-filled')
    newCount = newCount + 1
    bookmarkToaset.classList.add('is-active')
  }
  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString}회`)

  this.classList.toggle('is-active')
}
bookMarkButton.addEventListener('click', toggleOrderCtaBookmark)

// 북마크 됐을 때 bookmark-toaset에 .is-active
