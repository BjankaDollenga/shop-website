const hamburgerBtn = document.querySelector('.hamburger-btn');
const body = document.body;

hamburgerBtn.addEventListener('click', () => {
  body.classList.toggle('mobile-menu-active');
  hamburgerBtn.classList.toggle('active');
});
