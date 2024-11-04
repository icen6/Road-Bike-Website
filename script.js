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

feather.replace();

// Fungsi untuk membuka form pembelian dan menampilkan nama produk
function openBuyForm(productName) {
  document.getElementById("buyFormModal").style.display = "block";
  document.getElementById("productName").textContent =
    "Prodcut: " + productName;
}

// Fungsi untuk menutup form pembelian
function closeBuyForm() {
  document.getElementById("buyFormModal").style.display = "none";
}

// Menutup form pembelian ketika klik di luar modal
window.onclick = function (event) {
  const modal = document.getElementById("buyFormModal");
  if (event.target == modal) modal.style.display = "none";
};
