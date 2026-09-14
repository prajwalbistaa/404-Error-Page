const goBackButton = document.getElementById("goBack");
const tryAgainButton = document.getElementById("tryAgain");
const message = document.getElementById("error-subtitle");
const illustration = document.querySelector(".illustration");

const messages = [
    "Looks like we took a wrong turn.",
    "We've looked everywhere. Still nothing.",
    "This page seems to have disappeared.",
    "Even Google Maps couldn't find this page.",
    "Well... this is awkward."
];

const randomMessage =
    messages[Math.floor(Math.random() * messages.length)];

message.textContent = randomMessage;

goBackButton.addEventListener("click", () => {
    window.history.back();
});

tryAgainButton.addEventListener("click", () => {
    window.location.reload();
});

document.addEventListener("mousemove", (event) => {
    const x = (window.innerWidth / 2 - event.clientX) / 40;
    const y = (window.innerHeight / 2 - event.clientY) / 40;

    illustration.style.transform = `translate(${x}px, ${y}px)`;
});