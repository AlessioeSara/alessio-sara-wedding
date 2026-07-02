// DATA DEL MATRIMONIO
const weddingDate = new Date("July 2, 2027 16:00:00").getTime();

// ELEMENTI HTML
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// FUNZIONE COUNTDOWN
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "<h2>È il grande giorno ❤️</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
}

// AGGIORNA OGNI SECONDO
setInterval(updateCountdown, 1000);
updateCountdown();


// PICCOLO EFFETTO DI APPARIZIONE
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "1.2s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});
// RSVP FORM (demo)
document.querySelector(".rsvp-form").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Grazie ❤️ La tua risposta è stata registrata!");

    this.reset();
});
