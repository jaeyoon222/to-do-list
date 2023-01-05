const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".loginForm input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const userId = loginInput.value;
    console.log(userId);
    localStorage.setItem("userId", userId);
    greeting.innerText = `Welcome ${userId}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
