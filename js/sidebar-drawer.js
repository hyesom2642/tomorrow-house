const navbarMenuButtons = document.querySelectorAll(
  '.sidebar .navbar-menu-button'
)

function navbarMenuToggle() {
  const navbarMenu = this.parentNode
  navbarMenu.classList.toggle('is-open')
}
// for (i = 0; i < navbarMenuButtons.length; i++) {
//   navbarMenuButtons[i].addEventListener('click', navbarMenuToggle)
// }
navbarMenuButtons.forEach(function (button) {
  button.addEventListener('click', navbarMenuToggle)
})
