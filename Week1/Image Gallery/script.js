let currentIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let interval = setInterval(nextSlide, 3000);

// Show slide based on index
function showSlide(index) {
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
  
  document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next slide
function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

// Previous slide
function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

// Set current slide
function currentSlide(index) {
  currentIndex = index - 1;
  showSlide(currentIndex);
}

// Pause the automatic sliding on hover
document.querySelector('.slider').addEventListener('mouseover', () => clearInterval(interval));

// Resume the sliding on mouse leave
document.querySelector('.slider').addEventListener('mouseleave', () => interval = setInterval(nextSlide, 3000));
