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
