
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    navText: ['<span class="fas fa-chevron-left fa-3x"></span>', '<span class="fas fa-chevron-right fa-3x"></span>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})


/*
const button = document.querySelector('button');


function greet() {
    const name = prompt('What is your name!?');
    alert(`Hello ${name} nice to meet you!`);
}

button.addEventListener('click',greet);*/




let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();



monthPicker = (month) => {
  if (month === 0) {
    return "January";
  } 
  else if (month === 1) {
    return "February";
  }
  else if (month === 2) {
    return "March";
  } 
  else if (month === 3) {
    return "April";
  } 
  else if (month === 4) {
    return "May";
  } 
  else if (month === 5) {
    return "June";
  } 
  else if (month === 6) {
    return "July";
  } 
  else if (month === 7) {
    return "August";
  } 
  else if (month === 8) {
    return "September";
  } 
  else if (month === 9) {
    return "October";
  } 
  else if (month === 10) {
    return "November";
  } 
  else  {
    return "December";
  } 
}

month = monthPicker(month);

const fulldate = `${date} ${month}, ${year}`
document.getElementById("date").innerHTML = fulldate;






//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
}); 