window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  console.log("Scroll position:", window.scrollY);
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
