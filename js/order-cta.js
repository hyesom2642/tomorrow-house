const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children
const orderCtaModal = document.querySelector('.order-form-modal')
const orderCtaOverlay = document.querySelector('.overlay')

function openOrderFormModal() {
  orderCtaModal.classList.add('is-open')
  orderCtaOverlay.classList.add('is-active')
}
orderCtaBuyButton.addEventListener('click', openOrderFormModal)

function closeOrderFormModal() {
  orderCtaModal.classList.remove('is-open')
  orderCtaOverlay.classList.remove('is-active')
}
orderCtaOverlay.addEventListener('click', closeOrderFormModal)

function orderCtaBookmarkHandle() {
  const [bookmark, countSpan] = this.children
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))
  let newCount = count
  console.log(newCount)

  if (!bookmark.classList.contains('is-active')) {
    // is-active 가 포함되어있지 않을 때 -> 체크 안되어있을 때 -> 체크 상태로
    bookmark.classList.add('ic-bookmark-filled')
    bookmark.classList.add('is-active')
    bookmark.classList.remove('ic-bookmark')
    newCount += 1
  } else {
    // is-active 가 포함되어있을 때 -> 체크 되어있을 때 -> 체크 해제 상태로
    bookmark.classList.add('ic-bookmark')
    bookmark.classList.remove('ic-bookmark-filled')
    bookmark.classList.remove('is-active')
    newCount -= 1
  }

  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount}개`)
}

orderCtaBookmarkButton.addEventListener('click', orderCtaBookmarkHandle)
