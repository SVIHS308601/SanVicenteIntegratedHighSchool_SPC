let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
window.onscroll = () => {
menu.classList.remove('fa-times');
navbar.classList.remove('active');
}
menu.addEventListener('click', () => {
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
});

videoBtn.forEach(btn =>{
btn.addEventListener('click', ()=>{
document.querySelector('.controls .active').classList.remove('active');
btn.classList.add('active');
let src = btn.getAttribute('data-src');
document.querySelector('#video-slider').src = src
});
});


var swiper = new Swiper(".teachers-slider",{
spaceBetween: 20,
grabCursor: true,
loop: true,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
breakpoints: {
540: {
slidesPerView: 1,
},
768: {
slidesPerView: 2,
},
1024: {
slidesPerView: 3,
},
},  
});

var swiper = new Swiper(".student-slider",{
    spaceBetween: 3,
    grabCursor: true,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
    540: {
    slidesPerView: 1,
    },
    768: {
    slidesPerView: 2,
    },
    1024: {
    slidesPerView: 3,
    },
    },  
    });




