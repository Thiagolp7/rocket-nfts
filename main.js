// ***** This control the music
const musciPauseBtn = document.querySelector('#music-pause-btn')
const music = document.querySelector('#audio')
music.play()
music.volume = 0.3
let musicIsPlaying = true

function musicTogglePause() {
  if (musicIsPlaying) {
    music.pause()
    musicIsPlaying = false
    musciPauseBtn.classList.toggle('active')
  } else {
    music.play()
    musicIsPlaying = true
    musciPauseBtn.classList.toggle('active')
  }
}

musciPauseBtn.addEventListener('click', musicTogglePause)
// *********************************************************

const navMenu = document.querySelector('#nav')
const menuBtn = document.querySelector('#menu-hamburguer')

function toggleMenu() {
  menuBtn.classList.toggle('active')
  navMenu.classList.toggle('active')
}

menuBtn.addEventListener('click', toggleMenu)
