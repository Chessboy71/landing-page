/**
 * Define Global Variables
 * 
*/
const options = {
    threshold:0.8
}
let observer = new IntersectionObserver(navCheck, options);
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
    anchor.innerHTML = e.id;
    list = document.createElement("li");
    list.appendChild(anchor);
    document.getElementById("navbar__list").appendChild(list);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function navCheck(entries){
    entries.forEach(entry => {
        sectionElements.forEach(section => {
            section.classList.remove('activated');
        })
        entry.target.classList.add('activated');
    
    })
}
const sectionScroll = (e) => {
    e.preventDefault();
      wantedActive = e.target.innerHTML.toLowerCase();
      let activeSec = document.getElementById(wantedActive);
      window.scrollTo({
          top:activeSec.offsetTop,
          left:0,
          behavior:'smooth'
      })
      return wantedActive;
      
}
// build the nav
sectionElements.forEach(element => navCreate(element))

// Add class 'active' to section when near top of viewport
sectionElements.forEach(section => {
    observer.observe(section);
});

// Scroll to anchor ID using scrollTO event
navMenu.addEventListener('click', sectionScroll);
/**
 * End Main Functions
 * Begin Events
 * 
*/


