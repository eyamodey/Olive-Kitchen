
// Automatically set the current year in the copyright section of footer
const currentYear = new Date();
const siteOwner = ". Olive's Kitchen. All rights reserved." ;
document.getElementById("copyrightInfo").innerHTML = "copyright © " + currentYear.getFullYear() + siteOwner ;


// gsap.from( '.header', { duration: 1, y: '-100%', ease: 'bounce'})

// gsap.from( '.links', {duration: 1, opacity: 0, delay: 1, stagger: .5 })

// gsap.from( '.right', { duration: 1, x: '-100vw', delay: 1, ease: 'power2.in'})

// gsap.from( '.left', { duration: 1, x: '-100%', delay: 1.5 })

// gsap.to( '.footer', {duration: 1, y: 0, ease: 'elastic', delay: 2.5 })

// gsap.fromTo ( '.myButton', {opacity: 0, scale: 0, rotation: 720}, {duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0})

const timeline = gsap.timeline({defaults: {duration: 1}})
timeline
    .from( '.header', { y: '-100%', ease: 'bounce'})
    .from( '.links', { opacity: 0, stagger: .5 })
    .from( '.right', { x: '-100vw', ease: 'power2.in'}, 1)
    .from( '.left', { x: '-100%'}, '<.5')
    .to( '.bottom', { y: 0, ease: 'elastic'})
    .from( '.welcome', { y: '-100vh', ease: 'bounce'}, '<1')
    .fromTo ( '.oliveKitchen', {opacity: 0, scale: 0, rotation: 720}, { opacity: 1, scale: 1, rotation: 0})
    .fromTo ( '.catchPhrase', {opacity: 0 }, { opacity: 1 })
    .to( '.right', { opacity: 0.5})
    .to( '.left', { opacity: 0.5})
    .to( '.bottom', { opacity: 0.7})
    .to( '.home-page-background', { opacity: 1}, "-=2")
    .to ( '.catchPhrase', {color: 'white'}, '<' )
    .to ( '.welcome', {color: 'white'}, '<' )


//Reduce opacity of the navbar on scroll
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myTopnav").style.opacity = "0.9";
        document.getElementById("header").style.opacity = "0.9";
      } else {
        document.getElementById("myTopnav").style.opacity = "1";
        document.getElementById("header").style.opacity = "1";
      }
    }

    // Highlight the active tab... Get the container element
var btnContainer = document.getElementById("header");

// Get all buttons with class="tabs" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Style the menu Section
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
