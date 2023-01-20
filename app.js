const login = document.querySelector("#login-form");
const loginInput = login.querySelector("input")


function onLoginSubmit(event) {         // js는 첫 매개볁수는 이벤트 오브젝트를 넘긴다.
    event.preventDefault();             // 브라우저가 기본 동작을 실행하지 못하게 막기
    console.log(loginInput.value);     
}

login.addEventListener("submit", onLoginSubmit);    // submit 같은 경우에는 form에서 submit 이벤트를 캐치해야 한다?
