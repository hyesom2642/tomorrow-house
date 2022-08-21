const gnbSearch = document.querySelector('.gnb-right .gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input.form-input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

const gnbSearchHistoryList = gnbSearchHistory.querySelector(
  'ol.search-history-list'
)
const deleteAllButton = gnbSearchHistory.querySelector('button')
const deleteButton = gnbSearchHistoryList.querySelectorAll('.search-delete')

function closeSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeSearchHistoryOnClickOutside)
}
// NOTE : searchHistory 열고 닫기
function closeSearchHistoryOnClickOutside(e) {
  if (gnbSearch.contains(e.target) == false) {
    closeSearchHistory()
  }
}
function openSearchHistory(e) {
  // gnbSearchHistoryList 안의 li가 없을 경우 return한 곳에서 끝나도록 한다
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }

  if (gnbSearch.classList.contains('is-active') == false) {
    window.addEventListener('click', closeSearchHistoryOnClickOutside)
  }
  gnbSearchHistory.classList.add('is-active')
}
gnbSearchInput.addEventListener('focus', openSearchHistory)

// 전체삭제
function searchAllDelete() {
  gnbSearchHistoryList.innerHTML = ''
  closeSearchHistory()
}
deleteAllButton.addEventListener('click', searchAllDelete)

// 검색기록삭제
function searchDelete(e) {
  e.stopPropagation()

  const searchedItem = this.parentNode
  gnbSearchHistoryList.removeChild(searchedItem)

  if (deleteButton.length === 0) {
    closeSearchHistory()
  }
}
deleteButton.forEach((button) => {
  button.addEventListener('click', searchDelete)
})
