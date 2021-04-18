'use strict';

const hamburger = document.getElementById('hamburger__icon');
const nav__ul = document.getElementById('nav__ul');

hamburger.addEventListener('click', () => {
  nav__ul.classList.toggle('show');
});
