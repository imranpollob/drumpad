function playsound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    if (!audio) return
    audio.currentTime = 0
    audio.play()
}

window.addEventListener('keydown', playsound)