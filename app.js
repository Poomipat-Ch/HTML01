const x = document.querySelector(".test")
const y = x.textContent
const res = y.split("")
x.textContent = "";

for (let index = 0; index < res.length; index++) {
    x.innerHTML += "<span>" + res[index] + "</span>"
}


let char = 0;
let char2 = 0;
let timer = setInterval(onTick, 100)

function onTick() {
    const span = x.querySelectorAll('span')[char]
    span.classList.add('fade')
    char++
    if (char === res.length) {
        timer = setInterval(color, 100)
        return;
    }
}


function color() {
    const span = x.querySelectorAll('span')[char2]
    span.classList.add('color')
    char2++
    if (char2 === res.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null
}