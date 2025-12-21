"use strict"

// Sidebar toggle script
const menuBtn = document.getElementById('menuBtn');
const asideDashboard = document.getElementById('asideDashboard');

// Toggle sidebar when menu button is clicked
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the click from bubbling to the document
  asideDashboard.classList.toggle('-translate-x-full');
});

// Close sidebar when clicking outside it
document.addEventListener('click', (e) => {
  // If sidebar is open and click is outside both sidebar & menu button
  if (
    !asideDashboard.classList.contains('-translate-x-full') &&
    !asideDashboard.contains(e.target) &&
    e.target !== menuBtn
  ) {
    asideDashboard.classList.add('-translate-x-full');
  }
});
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

function setupCounter(decreaseId, increaseId, displayId){
  let count = 0;
  document.getElementById(decreaseId).onclick = function(){
    if (count > 0){
      count--
    }
    document.getElementById(displayId).value = count
  };
  document.getElementById(increaseId).onclick = function(){
    count++
    document.getElementById(displayId).value = count
  }
}
// card 1
setupCounter("decreaseBtn", "increaseBtn", "display");
// card 2
setupCounter("decreaseBtn2", "increaseBtn2", "display2");
// card 3
setupCounter("decreaseBtn3", "increaseBtn3", "display3");
// card 4
setupCounter("decreaseBtn4", "increaseBtn4", "display4");
// card 5
setupCounter("decreaseBtn5", "increaseBtn5", "display5");
// card 6
setupCounter("decreaseBtn6", "increaseBtn6", "display6");
// card 7
setupCounter("decreaseBtn7", "increaseBtn7", "display7");
// card 8
setupCounter("decreaseBtn8", "increaseBtn8", "display8");
// card 9
setupCounter("decreaseBtn9", "increaseBtn9", "display9");


document.addEventListener('DOMContentLoaded', function(){
  let modal = document.getElementById('simpleModal');
let modalBtn = document.getElementById ('modalBtn');
let closeBtn = document.getElementsByClassName ('closeBtn')[0];
modalBtn.addEventListener('click', function(){
  modal.style.display = 'block';
});
closeBtn.addEventListener('click', function(){
  modal.style.display = 'none';
});
window.addEventListener('click', function(e){
  if(e.target === modal){
    modal.style.display = 'none';
  };
});
});
// add to cart modal//
document.addEventListener('DOMContentLoaded', function(){
  let modalCartss = document.getElementById('simpleModalCart');
  let buttonCart = document.querySelectorAll('.buttonCart');
  let closeCart = document.getElementsByClassName('closeCart')[0];
  buttonCart.forEach(function(btn){
    btn.addEventListener('click', function(){
      modalCartss.style.display = 'block';
    })
  });
  closeCart.addEventListener('click', function(){
    modalCartss.style.display = 'none';
  });
  window.addEventListener('click', function(e){
    if(e.target === modalCartss){
      modalCartss.style.display = 'none';
    }
  });
});
 
document.addEventListener('DOMContentLoaded', function(){
 let viewCart = document.getElementsByClassName('viewCart');
 viewCart.addEventListener('click', function(){
  window.location.href = "cart.html"
 })
})

const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});














