const timeEl = document.querySelector(".clock__time");

setInterval(() => {
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString(navigator.language);
}, 1000);
