//renders elements as html

import { Player } from "./Player.js"
import { SoundPicker } from "./SoundPicker.js"
import { TimeSelect } from "./TimeSelect.js"

export const MeditationApp =() => {

    let html=""
    html += `<h1>Meditation App</h1>`
    html += `<article id="app">`
    html += `<div class="vidContainer"><video autoplay loop><source src="./video/rain.mp4"></video></div>`
    html += `${TimeSelect()}${Player()}`

    html += `${SoundPicker()}`
    html+= `</article>`
    return html
}
