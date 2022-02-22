export const SoundPicker = () => {
    let html = `<div class="soundPicker">`
    
    html += `<button data-video="./video/rain.mp4" data-sound="./sounds/rain.mp3"><img src="./svg/rain.svg" alt="rain"></button>`
    html += `<button data-video="./video/beach.mp4"data-sound="./sounds/beach.mp3"><img src="./svg/beach.svg" alt="beach"></button>`


    html += `</div>`
    return html
}