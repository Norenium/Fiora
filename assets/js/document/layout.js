
// Sticky Navigation:

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//


// SCREEN ADJUSTMENTS

function setHeaderWidth() {
  console.log('setHeaderWidth Call() width:  '+ window.innerWidth )
  if (window.innerWidth <= 640) {
    document.getElementById('headerID').style.padding = '3px';
    document.getElementById('onlyPhone').style.display = 'block';
    // document.getElementById('headerID').style.display = 'none';

  }
}