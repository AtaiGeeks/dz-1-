document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slider-item');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'block' : 'none';
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 3000);
});
document.addEventListener("DOMContentLoaded", () => {
  const parent = document.querySelector(".parent_block");
  const child = document.querySelector(".child_block");

  parent.addEventListener("mousemove", (e) => {
    const rect = parent.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    const childWidth = child.offsetWidth;
    const childHeight = child.offsetHeight;
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > rect.width - childWidth) x = rect.width - childWidth;
    if (y > rect.height - childHeight) y = rect.height - childHeight;
    child.style.left = x + "px";
    child.style.top = y + "px";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const gmailInput = document.getElementById("gmail_input");
  const gmailButton = document.getElementById("gmail_button");
  const gmailResult = document.getElementById("gmail_result");

  gmailButton.addEventListener("click", () => {
    const email = gmailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      gmailResult.textContent = "Valid Gmail!";
      gmailResult.style.color = "limegreen";
    } else {
      gmailResult.textContent = "Invalid Gmail!";
      gmailResult.style.color = "red";
    }
  });
});
