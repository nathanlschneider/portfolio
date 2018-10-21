"use strict";

const app = (function() {

    let nav = document.getElementById('nav');
    let menuButton = document.getElementById('menuButton');
    let letters = document.querySelectorAll('.secondary');
    let space = document.querySelector('.space');
    let cover = document.querySelector('.cover');

    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        if (scroll > 100) { 
            nav.classList.add('shrink');
            menuButton.classList.add('show');
            space.classList.remove('space');
            letters.forEach(letter => letter.classList.add('fade'))
        } else {
            nav.classList.remove('shrink');
            nav.classList.remove('drop');
            menuButton.classList.remove('show');
            space.classList.add('space');
            letters.forEach(letter => letter.classList.remove('fade'))

        }
    });

    menuButton.addEventListener('click', e => {
      
        if (window.getComputedStyle(menuButton).opacity > 0) {
        nav.classList.toggle('drop');
        cover.classList.toggle('section-blackout');
        }
    })
   


})();
