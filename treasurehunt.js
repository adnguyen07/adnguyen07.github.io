var treasureLoc = Math.floor(Math.random()*9)
var bombLoc = Math.floor(Math.random()*9)
const changeToEmoji = (placeholder) => {
    if (placeholder === treasureLoc) {
        document.getElementById(treasureLoc).innerHTML = "&#x1f308"
    }
    else if (placeholder === bombLoc) {
        document.getElementById(bombLoc).innerHTML = "&#x2620"
    }
    else {
        document.getElementById(placeholder).innerHTML = "&#x1f332"
    }
}