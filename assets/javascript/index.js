let slideIndex = 1;
let slideInterval;

function startSlideshow() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => plusSlides(1), 2000);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  startSlideshow();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  startSlideshow();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("banner__slideshow-link");
  let dots = document.getElementsByClassName("banner__slideshow-dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" banner__slideshow-dot-active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " banner__slideshow-dot-active";
}

showSlides(slideIndex);
startSlideshow();

let currentPageCategory = 1;
function toggleHomeCategory(direction) {
  const homeCategoryWrap = document.querySelector('.home-category__content-wrap');
  const homeCategoryList = document.querySelector('.home-category__content-list');
  const homeCategoryListItem = document.querySelectorAll('.home-category__content--item');
  const btnNext = document.querySelector('.home-category__content-btn-right');
  const btnBack = document.querySelector('.home-category__content-btn-left');

  const parentWidth = homeCategoryWrap.clientWidth;

  const totalItems = homeCategoryListItem.length;
  const itemsPerPage = Math.floor(parentWidth / homeCategoryListItem[0].clientWidth) * 2;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (direction === 'next' && currentPageCategory < totalPages) currentPageCategory++;
  if (direction === 'back' && currentPageCategory > 1) currentPageCategory--;

  const newTranslateX = -(currentPageCategory - 1) * parentWidth;
  homeCategoryList.style.transform = `translateX(${newTranslateX}px)`;

  btnBack.style.display = currentPageCategory === 1 ? 'none' : 'block';
  btnNext.style.display = currentPageCategory === totalPages ? 'none' : 'block';
}

let currentPageFlashSale = 1;
function toggleHomeFlashSale(direction) {
  const homeFlashSaleWrap = document.querySelector('.flash__sale-list-wrapper');
  const homeFlashSaleList = document.querySelector('.flash__sale-list');
  const homeFlashSaleListItem = document.querySelectorAll('.flash__sale-item');
  const btnNext = document.querySelector('.flash__sale-btn-right');
  const btnBack = document.querySelector('.flash__sale-btn-left');

  const parentWidth = homeFlashSaleWrap.clientWidth;

  const totalItems = homeFlashSaleListItem.length;
  const itemsPerPage = Math.ceil(parentWidth / homeFlashSaleListItem[0].clientWidth);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (direction === 'next' && currentPageFlashSale < totalPages) currentPageFlashSale++;
  if (direction === 'back' && currentPageFlashSale > 1) currentPageFlashSale--;

  const newTranslateX = -(currentPageFlashSale - 1) * parentWidth;
  homeFlashSaleList.style.transform = `translateX(${newTranslateX}px)`;

  btnBack.style.display = currentPageFlashSale === 1 ? 'none' : 'block';
  btnNext.style.display = currentPageFlashSale === totalPages ? 'none' : 'block';
}

let currentPageMall = 1;
function toggleHomeMall(direction) {
  const homeMallWrap = document.querySelector('.mall__content-wrapper');
  const homeMallList = document.querySelector('.mall__content-list');
  const homeMallListItem = document.querySelectorAll('.mall__content-item');
  const btnNext = document.querySelector('.mall__content-btn-right');
  const btnBack = document.querySelector('.mall__content-btn-left');

  const parentWidth = homeMallWrap.clientWidth;

  const totalItems = homeMallListItem.length;
  const itemsPerPage = Math.ceil(parentWidth / homeMallListItem[0].clientWidth) * 2;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (direction === 'next' && currentPageMall < totalPages) currentPageMall++;
  if (direction === 'back' && currentPageMall > 1) currentPageMall--;

  const newTranslateX = -(currentPageMall - 1) * parentWidth;
  homeMallList.style.transform = `translateX(${newTranslateX}px)`;

  btnBack.style.display = currentPageMall === 1 ? 'none' : 'block';
  btnNext.style.display = currentPageMall === totalPages ? 'none' : 'block';
}

let currentPageTopSearch = 1;
function toggleTopSearch(direction) {
  const TopSearchWrap = document.querySelector('.top__search-wrapper');
  const TopSearchList = document.querySelector('.top__search-list');
  const TopSearchListItem = document.querySelectorAll('.top__search-item');
  const btnNext = document.querySelector('.top__search-btn-right');
  const btnBack = document.querySelector('.top__search-btn-left');

  const parentWidth = TopSearchWrap.clientWidth;

  const totalItems = TopSearchListItem.length;
  const itemsPerPage = Math.ceil(parentWidth / TopSearchListItem[0].clientWidth);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (direction === 'next' && currentPageTopSearch < totalPages) currentPageTopSearch++;
  if (direction === 'back' && currentPageTopSearch > 1) currentPageTopSearch--;

  const newTranslateX = -(currentPageTopSearch - 1) * parentWidth;
  TopSearchList.style.transform = `translateX(${newTranslateX}px)`;

  btnBack.style.display = currentPageTopSearch === 1 ? 'none' : 'block';
  btnNext.style.display = currentPageTopSearch === totalPages ? 'none' : 'block';
}
