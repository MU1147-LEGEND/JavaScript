const slides = document.querySelectorAll('.slide');
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let counter = 0;
let carousel = () => {
    slides.forEach((slide, index) => {
        if(counter === slides.length || counter < 0){
            counter = 0;
        }
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    }
next.addEventListener('click', () => {
    counter++;
    carousel();
});

prev.addEventListener('click', () => {
    counter--;
    carousel();
    });
