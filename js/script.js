window.addEventListener("scroll", function () {
  document
    .querySelector(".nav-link")
    .addEventListener("click", function (event) {
      event.preventDefault();
    });
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

/* ****************************************************************************** */
/* product cards */

// Select all nav links
const navLinks = document.querySelectorAll(".product-nav .nav-link");

// Loop through links and add click event listener
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // Remove 'active' class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});

/* *************************************************************************** */

/* shopping card */

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

/* *********************************************************************************** */
/* products */

document.querySelectorAll(".product-nav .nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const filter = this.getAttribute("data-filter"); // Get filter value

    // Update active class on navigation
    document
      .querySelectorAll(".product-nav .nav-link")
      .forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");

    // Filter products with animation
    document.querySelectorAll(".products .card").forEach((card) => {
      if (filter === ".all" || card.classList.contains(filter.slice(1))) {
        card.classList.remove(
          "hidden",
          "animate__animated",
          "animate__fadeOut"
        );
        card.classList.add("animate__animated", "animate__fadeIn");
      } else {
        card.classList.add("animate__animated", "animate__fadeOut");
        setTimeout(() => {
          card.classList.add("hidden"); // Hide after fade-out animation
          card.classList.remove("animate__fadeOut");
        }, 0); // Match the animation duration
      }
    });
  });
});

/* ********************************************************************** */
/* quick view product  */
document.addEventListener("DOMContentLoaded", function () {
  // Quantity increment/decrement
  const quantityInput = document.querySelector(".input-group input");
  const decrementBtn = quantityInput.previousElementSibling;
  const incrementBtn = quantityInput.nextElementSibling;

  decrementBtn.addEventListener("click", () => {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
      quantityInput.value = value - 1;
    }
  });

  incrementBtn.addEventListener("click", () => {
    let value = parseInt(quantityInput.value);
    quantityInput.value = value + 1;
  });
});
