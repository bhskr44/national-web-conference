const hamburgerIcon = document.querySelector('.hamburger-menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileNav = document.querySelector('.mobile-nav');
const primaryNavItem = document.querySelector('.contact-us');

hamburgerIcon.addEventListener('click', () => {
  mobileNav.classList.remove('hide');
  hamburgerIcon.classList.add('hide');
  primaryNavItem.classList.remove('theme-btn');
  primaryNavItem.classList.remove('theme-btn-primary');
  primaryNavItem.classList.add('nav-item');
});

closeIcon.addEventListener('click', () => {
  mobileNav.classList.add('hide');
  hamburgerIcon.classList.remove('hide');
  primaryNavItem.classList.add('theme-btn');
  primaryNavItem.classList.add('theme-btn-primary');
  primaryNavItem.classList.remove('nav-item');
});
