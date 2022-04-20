const orderCta = document.querySelector('.order-cta')
// const bookMarkButton = orderCta.children[0]
// const buyButton = orderCta.children[1]
const [bookMarkButton, orderCtaBuyButton] = orderCta.children
const orderFormModal = document.querySelector('.order-form-modal')

const orderFormModalOverlay = document.querySelector('.overlay')

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

const fillBookMarkButton = bookMarkButton.nextElementSibling
console.log(fillBookMarkButton)

bookMarkButton.addEventListener('click', function () {
  bookMarkButton.classList.add('is-active')
  bookMarkButton.style.display = 'none'
})
