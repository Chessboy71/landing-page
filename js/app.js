
const sectionScroll = (e) => {
    e.preventDefault();
      wantedActive = e.target.innerHTML.toLowerCase();
      let activeSec = document.getElementById(wantedActive);
      console.log(activeSec.offsetTop);
      window.scroll({
          top:activeSec.offsetTop,
          left:0,
          behavior:'smooth'
      })
      return wantedActive;
}

window.addEventListener('scroll',{

})








/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let wantedActive = 'section1'; 
const sectionElements = document.querySelectorAll('section');
const navMenu = document.querySelector('.navbar__menu');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
navCreate = (e) => {
    anchor = document.createElement('a');
    anchor.className = 'menu__link';
    anchor.innerHTML = e.id
    list = document.createElement("li");
    list.appendChild(anchor);
    document.getElementById("navbar__list").appendChild(list);
}




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sectionElements.forEach(element => navCreate(element))

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
navMenu.addEventListener('click', sectionScroll);

// Set sections as active


