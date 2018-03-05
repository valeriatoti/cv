
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var slide = document.querySelector('.slide');
var image = 1;

console.log(slide);

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function prevSlide(e) {
   image--;
   if (image === 0) {
      image = 4;
   }
   slide.src = './images/ironman' + image + '.jpg';
   slide.classList.add('fade-in');
   setTimeout(function () {
      return slide.classList.remove('fade-in');
   }, 500);
}

function nextSlide() {
   image++;
   if (image > 4) {
      image = 1;
   }
   slide.src = './images/ironman' + image + '.jpg';
   slide.classList.add('fade-in');
   setTimeout(function () {
      return slide.classList.remove('fade-in');
   }, 500);
}