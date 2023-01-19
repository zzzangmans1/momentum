// document 는 html 전체를 의미
let hello = document.getElementById("title")
hello.style.color = "blue";

function handleTitelClick() {
    console.log("click")
}

hello.addEventListener("click", handleTitelClick)