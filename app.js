// fix navbar on scroll

window.onscroll = function() {myFunction()};

let topnavbar = document.getElementById("navbar");
let navbarfix = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > navbarfix) {
    topnavbar.classList.add("navbarfix");
    topnavbar.classList.add("nav-shadow");	    
  } else {
    navbar.classList.remove("navbarfix");
    navbar.classList.remove("nav-shadow");    
  }
    // navbar.classList.toggle("navbarfix");
}


// Responsive navbar
const navbtn = document.querySelector(".nav-toggle");
const show_links = document.querySelector(".navbar");
navbtn.addEventListener("click", ()=>{
	// console.log(show_links.classList);
	// if (show_links.classList.contains) {
	// 	show_links.classList.add("show-navbar");
	// }else{
	// 	show_links.classList.remove("show-navbar");		
	// }
	show_links.classList.toggle("show-navbar");
})