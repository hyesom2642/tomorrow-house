const gnbSearch = document.querySelector('.gnb-search')
const gnbInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

function openGnbSearch() {
  if (gnbSearchHistoryList.children.length === 0) {
    // gnbSearchHistoryList 안의 li가 0개일 경우 실행X
    return // return: 실행되면 다음에 아무것도 실행X
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    // gnbSearchHistory를 활성화 시킬 때
    window.addEventListener('click', closeGnbSearchOnClickOutside)
  }
  gnbSearchHistory.classList.add('is-active')
}

function closeGnbSearchOnClickOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    window.removeEventListener('click', closeGnbSearchOnClickOutside)
    closeGnbSearch()
  }
}

function closeGnbSearch() {
  gnbSearchHistory.classList.remove('is-active')
}
gnbInput.addEventListener('focus', openGnbSearch)

function deleteAllSearchHistoryItems() {
  gnbSearchHistoryList.innerHTML = ''
  closeGnbSearch()
}
deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems)
