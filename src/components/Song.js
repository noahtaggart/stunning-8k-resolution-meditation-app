export const songs = () => {
    const song = document.querySelector(".song")
    const play = document.querySelector("#play")
    const video = document.querySelector(".vidContainer video")

    //selects all the songs
    //const sounds = document.querySelectorAll("./soundPicker")

    const checkPlaying = song => {
        if(song.paused){
            song.play()
            video.play()
            play.src = "./svg/pause.svg"
        } else {
            song.pause()
            video.pause()
            play.src = "./svg/play.svg"
        }
    }
    document.addEventListener('click', clickEvent => {
        if (clickEvent.target.id === "play") {

            checkPlaying(song)
        }
    })
}
