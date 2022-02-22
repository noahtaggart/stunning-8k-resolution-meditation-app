import { MeditationApp } from "../components/MeditationApp.js"
import { songs } from "./components/Song.js"




//targets container to render HTML in
const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = MeditationApp()
    songs()
}

render()
