const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function handleLoginBtnClick() {
    if(loginInput.value !== ""){
        console.log(loginInput.value);
        loginInput.placeholder = "";
    }
}

loginButton.addEventListener("click", handleLoginBtnClick);