var hamburger = document.getElementsByClassName('hamburger')[0];
var navbar = document.getElementsByClassName('navbar')[0];

function toggleClass() {
  navbar.classList.toggle('hidden');
}

hamburger.addEventListener('click', () => toggleClass());
