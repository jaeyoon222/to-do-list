const loginForm = document.querySelector(".loginForm");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
    const userId = loginInput.value;

    if (userId === "") {
        return console.log("Please write ID");
    }
    if (userId.length > 15) {
        return console.log("ID is too long");
    }
}

loginButton.addEventListener("click", onLoginBtnClick);
