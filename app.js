const loginInput = document.querySelector(".loginForm input");
const loginButton = document.querySelector(".loginForm .button");

function onLoginBtnClick() {
    const userId = loginInput.value;
    console.log(userId);
}

loginButton.addEventListener("click", onLoginBtnClick);
