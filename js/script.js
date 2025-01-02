window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  // Check if the screen size is large (992px or more)
  if (window.innerWidth >= 992) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// Get elements
const openCartButton = document.getElementById("openCartButton");
const closeCartButton = document.getElementById("closeCartButton");
const cartSidebar = document.getElementById("cartSidebar");
const overlay = document.getElementById("overlay");

// Open cart function
openCartButton.addEventListener("click", () => {
  cartSidebar.classList.add("open");
  overlay.classList.add("show");
});

// Close cart function
closeCartButton.addEventListener("click", () => {
  cartSidebar.classList.remove("open");
  overlay.classList.remove("show");
});

// Close cart when clicking on overlay
overlay.addEventListener("click", () => {
  cartSidebar.classList.remove("open");
  overlay.classList.remove("show");
});
