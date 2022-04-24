const sidebarMenuOpenButton = document.querySelector('.gnb-icon-button.is-menu')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')

function openSidebar() {
  sidebar.classList.add('is-active')
  overlay.classList.add('is-active')
}
sidebarMenuOpenButton.addEventListener('click', openSidebar)

function closeSidebar() {
  sidebar.classList.remove('is-active')
  overlay.classList.remove('is-active')
}
overlay.addEventListener('click', closeSidebar)

// sidebar-drawer
const sidebarMenuButton = document.querySelectorAll(
  '.sidebar .navbar-menu-button'
)

function sidebarDrawer() {
  const navbarMenuContainer = this.parentNode
  navbarMenuContainer.classList.toggle('is-open')
}
sidebarMenuButton.forEach((button) => {
  button.addEventListener('click', sidebarDrawer)
})
