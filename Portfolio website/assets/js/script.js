'use strict';

//Navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


//NavToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



//Theme toggle
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle set dark to light theme
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      themeBtn[i].classList.toggle('dark');
      themeBtn[i].classList.toggle('light');


    }

  })

}