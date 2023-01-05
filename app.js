const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".loginForm input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const ID_KEY = "id";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const userId = loginInput.value;
    localStorage.setItem(ID_KEY, userId);
    paintGreeting(userId);
}

function paintGreeting(userId) {
    greeting.innerText = `Welcome ${userId}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedId = localStorage.getItem(ID_KEY);

if (savedId === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
if (savedId !== null) {
    paintGreeting(savedId);
}
