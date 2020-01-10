import "./mobile-menu";

console.log("Great State Burger 🍔");

// Dynamically set CSS variable to current viewport height
// This prevents overlap of iOS Safari's chrome with the website
// see: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
function refreshVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty(`--vh`, `${vh}px`);
}

window.addEventListener("resize", refreshVh);
refreshVh();
