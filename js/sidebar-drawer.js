const drawerMenuButton = document.querySelectorAll(
  '.sidebar .drawer-menu-button'
)

function openDrawerMenu() {
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
  drawerMenu.classList.toggle('is-active')
}
drawerMenuButton.forEach((button) => {
  button.addEventListener('click', openDrawerMenu)
})
