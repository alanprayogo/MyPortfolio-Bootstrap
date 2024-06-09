// Toggle class active
const navbarMenu = document.querySelector(".navbar-menu");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarMenu.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});

// typed js
const typed = new Typed(".multiple-text", {
  strings: ["Programer Krupuk", "Freelancer", "Student"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const typed2 = new Typed(".multiple-text2", {
  strings: ["Web Developer | PHP and Laravel", "WFH Freelancer", "Student | Informatic Engineering"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
