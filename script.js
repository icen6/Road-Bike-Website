const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#Tripple-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const Tripple = document.querySelector("#Tripple-menu");

document.addEventListener("click", function (e) {
  if (!Tripple.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
