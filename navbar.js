var hamburger = document.getElementsByClassName('hamburger')[0];
var navbar = document.getElementsByClassName('navbar')[0];

function toggleClass() {
  if (navbar.classList.contains('hidden')) {
    hamburger.childNodes[1].src = './assets/images/icon-close.svg';
  } else {
    hamburger.childNodes[1].src = './assets/images/icon-hamburger.svg';
  }
  
  navbar.classList.toggle('hidden');
}

hamburger.addEventListener('click', () => toggleClass());
