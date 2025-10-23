const $ = document;
const menuBtn = $.getElementById("menu");
const mobileNavbar = $.getElementById("mobileNavbar");
const closeBtn = $.getElementById("close");

let isMenuOpen = false;
const menuToggle = () => {
  console.log("a");
  isMenuOpen = !isMenuOpen;
  console.log("b");
  mobileNavbar.style.transform = isMenuOpen
    ? "translateX(0%)"
    : "translateX(100%)";
  console.log("c");
};

menuBtn.addEventListener("click", menuToggle);
closeBtn.addEventListener("click", menuToggle);
