const clock = document.querySelector(".clock");

const getClock = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
};

setInterval(getClock, 1000);
