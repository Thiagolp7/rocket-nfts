// ***** This control the music
const musciPauseBtn = document.querySelector('#music-pause-btn')
const music = document.querySelector('#audio-player')

let musicIsPlaying = false
music.volume = 0.3

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

// ***** Menu hamburguer controls
const navMenu = document.querySelector('#nav')
const menuBtn = document.querySelector('#menu-hamburguer')

function toggleMenu() {
  menuBtn.classList.toggle('active')
  navMenu.classList.toggle('active')
}

menuBtn.addEventListener('click', toggleMenu)
// *********************************************************
