const gnbSearch = document.querySelector('.gnb-right .gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input.form-input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')

// NOTE : searchHistory 열고 닫기
function closeSearchHistory(e) {
  //   console.log('window')
  if (gnbSearch.contains(e.target) == false) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeSearchHistory)
  }
}
function openSearchHistory(e) {
  //   console.log(gnbSearchHistory.contains(e.target))
  if (gnbSearch.classList.contains('is-active') == false) {
    window.addEventListener('click', closeSearchHistory)
  }
  gnbSearchHistory.classList.add('is-active')
}
gnbSearchInput.addEventListener('focus', openSearchHistory)
