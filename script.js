const clock = document.querySelector("#clock");
const date = document.querySelector("#date");

function updateClock() {
  if (!clock || !date) return;

  const now = new Date();
  clock.textContent = now.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  date.textContent = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(now);
}

updateClock();
setInterval(updateClock, 1000);