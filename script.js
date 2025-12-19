function showAlert() {
    alert("Welcome to SIBHA! Browse our collection.");
  }
    document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".image-slider");
  
    sliders.forEach((slider) => {
      let currentIndex = 0;
      const slides = slider.querySelectorAll("img.slide");
      const nextBtn = slider.querySelector(".next");
      const prevBtn = slider.querySelector(".prev");
  
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index);
        });
      }
  
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      });
  
      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      });
  
      showSlide(currentIndex); // Initialize
    });
  });   
