export const Player = () => {
    let html=`<div class="player">`
    html += `<audio class="song"><source src="./sounds/rain.mp3"/></audio>`
    html += `<img src="./svg/play.svg" alt ="play" id="play"/>`
    html += `<svg class="trackOutline" width="453" height="453" viewBox="0 0 453 453" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="226.5" cy="226.5" r="216.5" stroke="white" stroke-width="20"/>
    </svg>`
    html += `<svg class="movingOutline" width="453" height="453" viewBox="0 0 453 453" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" stroke-width="20"/>
    <h3 class="timeDisplay">0:00</h3>
    </svg>
    `
    html+= `</div>`
    return html
}