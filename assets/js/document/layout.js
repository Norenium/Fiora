
// Sticky Navigation:



var navbar = document.getElementById("sticky-nav");
var sticky = navbar.offsetTop;

function setNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




// nav 

function changeNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//





// SCREEN ADJUSTMENTS
function setHeaderWidth() {
  console.log('setHeaderWidth Call() width:  '+ window.innerWidth )
  if (window.innerWidth <= 1007) {
    document.getElementById('headerID').style.padding = '3px';
    document.getElementById('onlyPhone').style.display = 'block';
    // document.getElementById('headerID').style.display = 'none';

  }
}

function include(filename)
{
  //  var head = document.getElementsByTagName('body');
   var head = document.getElementsByTagName('head')[0];

   var script = document.createElement('script');
   script.src = filename;
   script.type = 'text/javascript';

   head.appendChild(script)
}   