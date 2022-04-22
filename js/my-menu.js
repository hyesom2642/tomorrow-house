const myMenu = document.querySelector('.my-menu')
const myMenuButton = myMenu.querySelector('.my-menu-button')

function toggleMyMenu() {
  // myMenu를제외한 곳을 누르면 myMenu가 닫히도록
  // console.log(myMenu.classList.contains('is-active'))
  if (myMenu.classList.contains('is-active') == false) {
    // myMenu에 is-active가 포함되어있지않을경우
    window.addEventListener('click', closeMyMenuOnClickiningOutside)
  }

  myMenu.classList.toggle('is-active')
}
myMenuButton.addEventListener('click', toggleMyMenu)

function closeMyMenuOnClickiningOutside(e) {
  // this -> windows
  // myMenu가 e.target을 포함하고 있지 않은 경우 -> myMenu의 is-active를 제거
  // console.log(myMenu.contains(e.target))
  if (myMenu.contains(e.target) == false) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickiningOutside)
  }
}
