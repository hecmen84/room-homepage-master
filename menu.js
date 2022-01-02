const burger =  document.querySelector('.burger');
const l1 = document.querySelector('l1');
const l3 = document.querySelector('l2');
const l2 = document.querySelector('l3');
const menu = document.querySelector('nav.nav-mobile  ul');
const logo = document.querySelector('.logo');
burger.addEventListener('click', () => {
  burger.classList.toggle('toggle');
  menu.classList.toggle('nav-shown');
  logo.classList.toggle('logo-opacity');
});