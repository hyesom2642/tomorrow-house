const gnbSearch = document.querySelector('.gnb-search')
const gnbInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

function openGnbSearch() {
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
