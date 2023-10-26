import generateJoke from "./generateJoke";
import './style/style.scss'
import pic from './assets/laugh.png'

const laughPic = document.getElementById("laughPic")
laughPic.src = pic

const btnJoke = document.getElementById("btnJoke")
btnJoke.addEventListener("click", generateJoke)

