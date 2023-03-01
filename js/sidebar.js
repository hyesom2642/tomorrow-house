const sidebarOpenButton = document.querySelector('.gnb-icon-button.is-menu')
const sidebar = document.querySelector('.sidebar.sm-only')
const sidebarOverlay = document.querySelector('.overlay')

function openSidebar() {
  sidebarOverlay.classList.add('is-active')
  sidebar.classList.add('is-active')
}
sidebarOpenButton.addEventListener('click', openSidebar)

function closeSidebar() {
  sidebarOverlay.classList.remove('is-active')
  sidebar.classList.remove('is-active')
}
sidebarOverlay.addEventListener('click', closeSidebar)
