// document 는 html 전체를 의미
let h1 = document.querySelector(".sexy-font")
console.log(h1)
// 이벤트를 보고 싶으면 console.dir 로  확인한다.
function handleTitelClick() {   // classList 는 className 여러개를 사용할 때 사용
    h1.classList.toggle("active")
}
h1.addEventListener("click", handleTitelClick)