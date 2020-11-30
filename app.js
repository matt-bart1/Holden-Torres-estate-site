
//---------------------- responsive nav bar 

const openButton = document.getElementById('burger');
const nav = document.getElementById('topNav');
const closeButton = document.getElementById('closeBtn');


openButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);


function openNav(){
    nav.classList.add('open');
}


function closeNav(){
    nav.classList.remove('open');
}




//----------------------- fade images intersection observer

const faders = document.querySelectorAll('.fade');


const options = {
    threshold:0.5,
    rootMargin: '50px 0px -50px 0px',

};


const fadeObserver = new IntersectionObserver(function(entries, fadeObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            fadeObserver.unobserve;
        };
    });
}, options);


faders.forEach(fader => {
    fadeObserver.observe(fader);
})







//------------------------------------ modals 

// selectors
const modalBtns = document.querySelectorAll('.modal-open');

// open modal button
modalBtns.forEach(function(btn){
    btn.onclick = function() {
        const modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = 'block';
    };
});

//close modal button
const closeBtns = document.querySelectorAll('.modal-close');
    closeBtns.forEach(function(btn){
        btn.onclick = function(){
            const modal = (btn.closest('.modal').style.display = 'none');
        }
    });

 //click off in window
window.onclick = function(e){
    if(e.target.className == 'modal'){
        e.target.style.display = 'none';
    }
};




// ------------------------------slideshow for featured property-----------------------------------


// const slideIndex = 0;
// slideShow();

// function slideShow() {
//     let i;
//     let slides = document.getElementsByClassName('Slides');
//     for (i = 0; i < slides.clientHeight; i++) {
//         slides[i].style.display = 'none';
//     }

//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = 'block';
//     setTimeout(slideShow, 1000);
// }


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}

//------------across all pages----------------


//responsive full page nav bar (done)

//intersection observer for nav bar 

// intersection observer for fade in elements in pages (done)

// slideshow for featured property section and also for the images inside the modals


// -------------properties page----------------




// filter search bar on properties page

// modals on property page (done)




//-------------contact page -------------------

// form validation for contact form

// possibly something that lets an email be sent 



