//Y-axis
const observer = new  IntersectionObserver((entries)=>{

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
    
    
});


const hidenElements = document.querySelectorAll('.hidden');
hidenElements.forEach((el) => observer.observe(el));




//TOP-Y-axis
const observerY = new  IntersectionObserver((entries)=>{

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('Yshow');
        } else {
            entry.target.classList.remove('Yshow');
        }
    });
    
    
});


const hidenElementsY = document.querySelectorAll('.Yhidden');
hidenElementsY.forEach((el) => observerY.observe(el));


//left x-aixs
const observerX = new  IntersectionObserver((entries)=>{

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('Lxshow');
        } else {
            entry.target.classList.remove('Lxshow');
        }
    });
    
    
});


const hidenElementsX =document.querySelectorAll('.Lxhidden');
hidenElementsX.forEach((el) => observerX.observe(el));






//right x-axis
const observerR = new  IntersectionObserver((entries)=>{

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('Rxshow');
        } else {
            entry.target.classList.remove('Rxshow');
        }
    });
    
    
});

    

const hidenElementsR =document.querySelectorAll('.Rxhidden');
hidenElementsR.forEach((el) => observerR.observe(el));





