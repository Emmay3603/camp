const closeBtn = document.querySelector('.close-btn'),
      menuBtn = document.querySelector('.menu-btn'),
      navMenu = document.querySelector('.nav-menu'),
      navLink = document.querySelectorAll('.nav-link')



////////////  Functions //////////////////////////
function showNavBar (){
  navMenu.classList.add('menu-display');
}

function hideNavBar (){
  navMenu.classList.remove('menu-display');
}


// //////// Show Navigation Bar //////////////////
menuBtn.addEventListener('click', showNavBar);


// //////// Hide Navigation Bar //////////////////
closeBtn.addEventListener('click', hideNavBar);

navLink.forEach((link) => {
  link.addEventListener('click', hideNavBar);
})
