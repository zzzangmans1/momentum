const login = document.querySelector("#login-form");
const loginInput = login.querySelector("input")
const loginName = document.querySelector("#greteeng")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {         // js는 첫 매개볁수는 이벤트 오브젝트를 넘긴다.
    event.preventDefault();             // 브라우저가 기본 동작을 실행하지 못하게 막기
    login.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);         // 애플리케이션 스토리지 저장한다 값을
    paintGreetings(userName);
}

function paintGreetings(username){                      // login Name 개체 채워넣기
    loginName.innerText = `hello ${username}`;
    loginName.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsernamee = localStorage.getItem(USERNAME_KEY);      // 스토리지에 저장된 값을 키이름으로 벨류값 찾기

if(savedUsernamee === null) {       // 스토리지에 값이 없다면
    login.classList.remove(HIDDEN_CLASSNAME);
    login.addEventListener("submit", onLoginSubmit);    // submit 같은 경우에는 form에서 submit 이벤트를 캐치해야 한다?
} else {                            // 스토리지에 값이 있다면
    paintGreetings(savedUsernamee);
}