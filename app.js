const x = document.querySelector(".test")
const y = x.textContent
const res = y.split("")
x.textContent = "";

for (let index = 0; index < res.length; index++) {
    x.innerHTML += "<span>" + res[index] + "</span>"
}


let char = 0;
let timer = setInterval(onTick, 100)

function onTick(){
    const span = x.querySelectorAll('span')[char]
    span.classList.add('fade')
    char++
    if (char === res.length) {
        complete();
        return;
    }
}

function complete()
{
    clearInterval(timer);
    timer = null;
}