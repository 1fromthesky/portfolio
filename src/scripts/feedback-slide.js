// const prevToggle = document.querySelector('.feedback__toggles-btn_prev');
// const nextToggle = document.querySelector('.feedback__toggles-btn_next');
// const sliderMove = document.querySelector('.feedback__slider-move');

// nextToggle.addEventListener('click', function(event) {
//    loop('next', event)
// })
// prevToggle.addEventListener('click', function(event) {
//    loop('prev', event)
// })

// function loop(direction, event) {
//    event.preventDefault();

//    if (direction === 'next') {
//       sliderMove.appendChild(sliderMove.firstElementChild);
//    } else {
//       sliderMove.insertBefore(sliderMove.lastElementChild, sliderMove.firstElementChild);
//    }
// }

// ==============

// const prevToggle = document.querySelector('.feedback__toggles-btn_prev');
// const nextToggle = document.querySelector('.feedback__toggles-btn_next');
// const sliderMove = document.querySelector('.feedback__slider-move');
// const sliderItem = document.querySelectorAll('.feedback__slider-item');

// const minRight = 0;
// const maxRight = sliderItem.length * 100 - 100;
// const step = 100;
// let currentRight = 0;

// nextToggle.addEventListener('click', function(event) {
//    event.preventDefault();

//    if (currentRight < maxRight) {
//       currentRight += step;
//       sliderMove.style.right = currentRight + '%';
//    }
// })

// prevToggle.addEventListener('click', function(event) {
//    event.preventDefault();

//    if (currentRight > minRight) {
//       currentRight -= step;
//       sliderMove.style.right = currentRight + '%';
//    }
// })

// ==============
const prevToggle = document.querySelector('.feedback__toggles-btn_prev');
const nextToggle = document.querySelector('.feedback__toggles-btn_next');
const sliderMove = document.querySelector('.slider-feedback__window');
const sliderItem = document.querySelectorAll('.feedback-review');

const minRight = 0;
const maxRight = sliderItem.length * 50 - 100;
const step = 100;
let currentRight = 0;

nextToggle.addEventListener('click', function(event) {
   event.preventDefault();
   
   if (currentRight < maxRight) {
      currentRight += step;
      sliderMove.style.right = currentRight + '%';
   }
})

prevToggle.addEventListener('click', function(event) {
   event.preventDefault();

   if (currentRight > minRight) {
      currentRight -= step;
      sliderMove.style.right = currentRight + '%';
   }
})