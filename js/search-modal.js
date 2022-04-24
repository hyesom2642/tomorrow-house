const searchButton = document.querySelector('.gnb-icon-button.is-search')
const searchOverlay = document.querySelector('.overlay')
const searchModal = document.querySelector('.search-modal')
const closeModalButton = searchModal.querySelector('.btn-ghost.btn-40')

function openSearchModal() {
  searchModal.classList.add('is-active')
  searchOverlay.classList.add('is-active')
}
searchButton.addEventListener('click', openSearchModal)

function closeSearchModal() {
  searchModal.classList.remove('is-active')
  searchOverlay.classList.remove('is-active')
}
closeModalButton.addEventListener('click', closeSearchModal)

const searchModalHistory = searchModal.querySelector('.search-history')
const searchModalHistroyList = searchModalHistory.querySelector(
  'ol.search-history-list'
)
const searchModalDeleteButton = searchModalHistory.querySelectorAll(
  'button.search-delete'
)
const searchModalDeleteAllButton = searchModalHistory.querySelector('button')

// item 삭제버튼
function deleteSearchModalItem() {
  const deleteToItem = this.parentNode
  searchModalHistroyList.removeChild(deleteToItem)
}
searchModalDeleteButton.forEach((button) => {
  button.addEventListener('click', deleteSearchModalItem)
})

// 전체삭제버튼
function deleteSearchModalAll() {
  searchModalHistroyList.innerHTML = ''
}
searchModalDeleteAllButton.addEventListener('click', deleteSearchModalAll)
