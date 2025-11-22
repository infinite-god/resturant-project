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











// let count = 0;
// document.getElementById("decreaseBtn").onclick = function(){
//   if (count > 0) {
//      count-=1;
//   }
 
//   document.getElementById("display").value = count;
// }
// document.getElementById("increaseBtn").onclick = function(){
//   count+=1;
//   document.getElementById("display").value = count;
// };
// let counts = 0;
// document.getElementById("decreaseBtn2").onclick = function(){
//   if (counts > 0) {
//      counts-=1;
//   }
 
//   document.getElementById("display2").value = count;
// }
// document.getElementById("increaseBtn2").onclick = function(){
//   counts+=1;
//   document.getElementById("display2").value = counts;
// }


