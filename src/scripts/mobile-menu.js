import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const header = document.querySelector(".main-header");
const nav = document.querySelector(".main-nav");
const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

if (burger) {
  // Handle clicks to hamburger menu
  burger.addEventListener("click", event => {
    event.preventDefault();

    if (burger.classList.contains("is-active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

// only allow tab-focus for menu items while open
// see: https://allyjs.io/tutorials/accessible-dialog.html#trapping-focus-inside-the-dialog
function trapFocus(element, namespace) {
  const focusableEls = [...element.querySelectorAll("a[href]:not([disabled])")];
  focusableEls.unshift(mobileMenu.querySelectorAll("a[href]:not([disabled])"));
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];

  element.addEventListener("keydown", function(event) {
    const isTabPressed = event.key === "Tab";

    if (!isTabPressed) {
      // allow users to use "Esc" to close menu
      if (event.key === "Escape") {
        closeMenu();
      }
      return;
    }

    if (event.shiftKey) {
      // shift + tab
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        event.preventDefault();
      }
    } else {
      // tab
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        event.preventDefault();
      }
    }
  });
}

function openMenu() {
  trapFocus(mobileMenu); // disallow focus for links behind modal
  disableBodyScroll(mobileMenu); // no scroll allowed while menu is open
  header.classList.add("is-active");
  nav.classList.add("is-active");
  burger.classList.add("is-active");
  mobileMenu.classList.add("is-active");
  burger.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  clearAllBodyScrollLocks(); // allow scrolling now that menu is closed
  header.classList.remove("is-active");
  nav.classList.remove("is-active");
  burger.classList.remove("is-active");
  mobileMenu.classList.remove("is-active");
  burger.setAttribute("aria-expanded", "false");
}

function setScrollClass() {
  // top of the page
  try {
    if (window.scrollY < 33) {
      header.classList.add("at-scroll-top");
    } else {
      header.classList.remove("at-scroll-top");
    }
  } catch {
    console.warn("no nav");
  }
}

setScrollClass();
window.addEventListener("scroll", setScrollClass);
