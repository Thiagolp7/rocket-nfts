const navMenu = document.querySelector('#nav')
const menuBtn = document.querySelector('#menu-hamburguer')

function toggleMenu() {
  menuBtn.classList.toggle('active')
  navMenu.classList.toggle('active')
}

menuBtn.addEventListener('click', toggleMenu)
