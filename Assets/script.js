document.addEventListener("DOMContentLoaded", () => {
  // Menambahkan animasi untuk setiap slide
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.style.transition = 'opacity 0.5s ease-in-out';
    slide.style.opacity = 0;
    setTimeout(() => {
      slide.style.opacity = 1;
    }, index * 500);
  });
  console.log("Slides ready!");
});
