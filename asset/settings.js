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



document.addEventListener('DOMContentLoaded', function(){
 let viewCart = document.getElementsByClassName('viewCart');
 viewCart.addEventListener('click', function(){
  window.location.href = "cart.html"
 })
})

document.getElementsByTagNameNS













