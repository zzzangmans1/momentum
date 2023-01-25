const clock = document.querySelector("h2#clock")

function setClock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");     // padStart 는 1. 전체 길이 2. 패딩에 넣을 문자 그리고 Start는 앞에서부터 시작 End는 뒤에서부터 시작

    clock.innerText = `${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()} ${hours}:${minutes}:${seconds}`
}

setClock()
setInterval(setClock, 1000);        // 1초마다 실행