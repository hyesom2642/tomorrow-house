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
