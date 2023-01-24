const clock = document.querySelector("h2#clock")

function setClock(){
    const data = new Date();
    clock.innerText = `${data.getFullYear()} / ${data.getMonth() + 1} / ${data.getDate()} ${data.getHours()}:${data.getMinutes()}`
}

setClock()
setInterval(setClock, 1000);        // 1초마다 실행