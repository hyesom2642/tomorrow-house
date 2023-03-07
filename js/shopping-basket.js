const mobileOrderForm = document.querySelector('.order-form-modal.lg-hidden')
const shoppingBasketButton = document.querySelectorAll(
  '.order-form .shopping-basket-btn'
)
const shoppingBasketModal = document.querySelector('.shopping-basket-modal')
const confirmButton = shoppingBasketModal.querySelector('button')
const shoppingBasketOverlay = document.querySelector('.overlay')

function openShoppingBasketModal() {
  shoppingBasketModal.classList.add('is-active')
  shoppingBasketOverlay.classList.add('is-active')
  mobileOrderForm.classList.remove('is-open')
}
function closeShoppingBasketModal() {
  shoppingBasketModal.classList.remove('is-active')
  shoppingBasketOverlay.classList.remove('is-active')
}

shoppingBasketButton.forEach((button) => {
  button.addEventListener('click', openShoppingBasketModal)
})
shoppingBasketOverlay.addEventListener('click', closeShoppingBasketModal)
confirmButton.addEventListener('click', closeShoppingBasketModal)
