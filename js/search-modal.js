const searchButton = document.querySelector('.gnb-icon-button.is-search')
const searchModal = document.querySelector('.search-modal')
const searchOverlay = document.querySelector('.overlay')
const searchCloseButton = searchModal.querySelector('.btn-40.btn-ghost')

function openSearchModal() {
  searchOverlay.classList.add('is-active')
  searchModal.classList.add('is-active')
}
searchButton.addEventListener('click', openSearchModal)

function closeSearchModal() {
  searchOverlay.classList.remove('is-active')
  searchModal.classList.remove('is-active')
}
searchCloseButton.addEventListener('click', closeSearchModal)
