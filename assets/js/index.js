const showModal = document.querySelector('.js-modal');
const modelContainer = document.querySelector('.js-modal-container');

document.querySelectorAll('.js-buy-ticket').forEach(ticket =>
  ticket.addEventListener('click', () => showModal.classList.add('open'))
);

const removeClass = () => showModal.classList.remove('open');

['.close-tickets', '.btn-close', '.js-modal'].forEach(selector =>
  document.querySelector(selector).addEventListener('click', removeClass)
);

modelContainer.addEventListener('click', event => event.stopPropagation());

var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight

mobileMenu.onclick = function () {
  var isClose = header.clientHeight === headerHeight
  if (isClose) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]')

for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i]

  menuItem.onclick = function(event) {
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

    if (!isParentMenu) {
      header.style.height = null;
    } else if (window.matchMedia('(max-width: 46.1875em)').matches) {
      event.preventDefault();
      this.nextElementSibling.style.position =
      window.getComputedStyle(this.nextElementSibling).position === 'static' ? 'absolute' : 'static';
    }
  }
}
