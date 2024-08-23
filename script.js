let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('Section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//responsive sidebar//



//Fade in animations// 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden' , '.hidden2');
hiddenElements.forEach((el) => observer.observe(el));


//Vertical Timeline//
function VerticalTimeline( element ) {
    this.element = element;
    this.blocks = this.element.getElementsByClassName("cd-timeline__block");
    this.images = this.element.getElementsByClassName("cd-timeline__img");
    this.contents = this.element.getElementsByClassName("cd-timeline__content");
    // ..
 };
 
 VerticalTimeline.prototype.showBlocks = function() {
    var self = this;
    for( var i = 0; i < this.blocks.length; i++) {
       (function(i){
          if( self.contents[i].classList.contains("cd-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
             // add bounce-in animation
             self.images[i].classList.add("cd-timeline__img--bounce-in");
             self.contents[i].classList.add("cd-timeline__content--bounce-in");
             self.images[i].classList.remove("cd-timeline__img--hidden");
             self.contents[i].classList.remove("cd-timeline__content--hidden");
          }
       })(i);
    }
 };




//Background JS //

 const canvas = document.querySelector("canvas");
 const ctx = canvas.getContext("2d");

 let mouseMoved = false;

 const pointer = {
    x: 0.5 * window.innerWidth,
    y: 0.5 * window.innerHeight,
 };

 const params = {
    pointsNumber: 40,
    widthFactor: 10,
    mouseThreshold: 0.5,
    spring: 0.25, 
    friction: 0.5,
 };

 const trail = new arras  

 // Email Listing //

 const form = document.querySelector("form");

 function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "officialPhatkidd@gmail.com",
        Password : "BF821FEAD8679F4A1DFBFC7BABBE4873FDD3",
        To : 'officialPhatkidd@gmail.com',
        From : "officialPhatkidd@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
 }

 form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();

 });

 // Validation // 

