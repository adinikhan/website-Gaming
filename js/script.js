// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu dipencet
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// pencet luar bisa masuk lagih
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
