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
  let addTocart = document.getElementById('addToCart');
  let closeCart = document.getElementsByClassName('closeCart')[0];
  addTocart.addEventListener('click', function(){
    modalCartss.style.display = 'block';
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

document.getElementsByTagNameNS













