
// DATA DEL MATRIMONIO
const weddingDate = new Date("July 2, 2027 16:00:00").getTime();

// FUNZIONE COUNTDOWN
function updateCountdown() {

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        const timer = document.getElementById("timer");
        if (timer) timer.innerHTML = "<h2>È il grande giorno ❤️</h2>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.innerText = days;
    if (hoursEl) hoursEl.innerText = hours;
    if (minutesEl) minutesEl.innerText = minutes;
    if (secondsEl) secondsEl.innerText = seconds;
}

// AVVIO COUNTDOWN
setInterval(updateCountdown, 1000);
updateCountdown();


// EFFETTO APPARIZIONE
document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";
    document.body.style.transition = "1.2s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

    // RSVP FORM (sicuro)
    const form = document.querySelector(".rsvp-form");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            alert("Grazie ❤️ La tua risposta è stata registrata!");

            form.reset();
        });
    }
});
