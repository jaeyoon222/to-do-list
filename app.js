const loginForm = document.querySelector(".loginForm");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
function onLoginBtnClick() {
    console.log("click!");
    console.log("loginInput value: " + loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
