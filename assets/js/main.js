// Carousel
const firstSlide = document.querySelector(".hero-slide:first-child");
const slides = document.querySelectorAll(".hero-slide");

firstSlide.classList.add("active");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3500);

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}
// Akhir Carousel

// Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top =
      "0"; /* tampilkan navbar saat scroll ke atas */
  } else {
    document.querySelector(".navbar").style.top =
      "-60px"; /* sembunyikan navbar saat scroll ke bawah */
  }
  prevScrollpos = currentScrollPos;
};

// Akhir Navbar
