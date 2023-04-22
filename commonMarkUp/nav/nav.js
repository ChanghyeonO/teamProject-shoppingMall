const shopLink = document.querySelector('.navbar-item[href="#SHOP"]');
const navbarWrapper = document.querySelector('.navbar-wrapper');

shopLink.addEventListener('click', (event) => {
  event.preventDefault();
  navbarWrapper.classList.toggle('is-active');
});