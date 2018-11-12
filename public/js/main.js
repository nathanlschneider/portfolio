'use strict';

const app = (function() {
  let firstLoad = true;
  let nav = document.getElementById('nav');
  let load = document.getElementById('load');
  let b1 = document.getElementById('b1');
  let b2 = document.getElementById('b2');
  let cover = document.getElementById('cover');
  let logo = document.getElementById('logo');
  let name = document.getElementById('name');
  let line = document.getElementById('line');
  let firstName = document.getElementById('firstName');
  let lastName = document.getElementById('lastName');
  let menu = document.getElementById('menu');
  let about = document.getElementById('about');
  let linkItems = document.querySelectorAll('.linkItem');
  let underlines = document.querySelectorAll('.underline');
  let greeting = document.getElementById('greetingWrapper');
  let pageLogo = document.querySelectorAll('svg');
  let chevron = document.getElementById('chevron');
  let logoPos = logo.getBoundingClientRect();
  logoPos = logo.getBoundingClientRect();
  cover.style.left = logoPos.right - 140 + 'px';


  chevron.addEventListener('click', e => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  })
  
  logo.addEventListener('click', e => { 
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })

  window.addEventListener('resize', e => {
    logoPos = logo.getBoundingClientRect();
    cover.style.left = logoPos.right - 140 + 'px';
  });

  window.addEventListener('load', e => {
    logoPos = logo.getBoundingClientRect();
    cover.style.left = logoPos.right - 140 + 'px';
    // logo.classList.add('slideDown');
    // line.classList.add('slideUp');
    // name.classList.add('slideIn');
    greeting.classList.add('fortyFiveIn');
    pageLogo[1].classList.add('flipIn');
  });

  window.addEventListener('scroll', e => {
    console.log(scrollY);
    if (scrollY < 900 && firstLoad === false) {
      line.classList.add('lineFold');
      line.classList.remove('lineUnFold');
      name.classList.remove('slideOut');
      name.classList.add('slideInAndDelay');
      nav.classList.remove('shrinkNavBar');
    }
    if (scrollY > 900) {
      firstLoad = false;
      line.classList.remove('lineFold');
      line.classList.add('lineUnFold');
      name.classList.add('slideOut');
      nav.classList.add('shrinkNavBar');
    }
  });

  line.addEventListener('click', e => {
    menu.classList.toggle('dropMenu');
  });

  Array.from(linkItems).forEach(item =>
    item.addEventListener('mouseover', e => {
      if (e.target.children.length) {
        e.target.children[0].classList.add('growLine');
      }
    })
  );

  Array.from(linkItems).forEach(item =>
    item.addEventListener('mouseleave', e => {
      if (e.target.children['0'].classList[2] !== 'active') {
        e.target.children[0].classList.remove('growLine');
      }
    })
  );

  Array.from(linkItems).forEach(item =>
    item.addEventListener('click', e => {
      clearActives();
      e.target.children[0].classList.add('active');
      shrinkRemainingLines();
    })
  );

  function clearActives() {
    Array.from(underlines).forEach(line => line.classList.remove('active'));
  }

  function shrinkRemainingLines() {
    Array.from(underlines).forEach(line => {
      if (line.classList.value.includes('active')) {
      } else {
        line.classList.remove('growLine');
      }
    });
  }
})();
