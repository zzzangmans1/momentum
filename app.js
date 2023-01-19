// document 는 html 전체를 의미
let hello = document.getElementById("title")
hello.style.color = "blue";
// 이벤트를 보고 싶으면 console.dir 로  확인한다.
function handleTitelClick() {
    hello.style.color = "black"
}

function handleMouseEnter() {
    hello.innerText = "Mouse is here!"
}

function handleMouseLeave() {
    hello.innerText = "Mouse is gone"
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"
}
function handleWindowCopy() {
    alert("copy")
}
function handleWindowOffline() {
    alert("SOS no WIFI")
}
function handleWindowOnline(){
    alert("ALL GOOD")
}
hello.addEventListener("click", handleTitelClick)
hello.addEventListener("mouseenter", handleMouseEnter)      // mouse enter 는 마우스 가져다 대면 이벤트
hello.addEventListener("mouseleave", handleMouseLeave)      // mouse leave 는 마우스를 떼면 이벤트

window.addEventListener("resize", handleWindowResize)       // 사이즈가 변경되면 이벤트
window.addEventListener("copy", handleWindowCopy)           // 복사하면 이벤트
window.addEventListener("offline", handleWindowOffline)     // wifi 끝기면 이벤트
window.addEventListener("online", handleWindowOnline)       // wifi 연결되면 이벤트