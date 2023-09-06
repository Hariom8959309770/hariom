// This JavaScript code is optional, but it will make the floating box
// follow the mouse cursor.
var floatingBox = document.querySelector(".floating-box");

window.addEventListener("mousemove", function(event) {
  floatingBox.style.left = event.clientX - floatingBox.offsetWidth / 2;
});
const box = document.querySelector(".box");

box.addEventListener("mouseover", function() {
  this.classList.add("hover");
});

box.addEventListener("mouseout", function() {
  this.classList.remove("hover");
});