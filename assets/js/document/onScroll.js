var isPhone;
window.onscroll = function () {
  setNav();

  doAnimate(trrigerLevel);

  // This method is for detecting showan div and setting the active menu item to it.
  // neded optimization.

  // if (!isPhone) {
  //   chnageActiveToShowanDiv();
  // }
  
};


function chnageActiveToShowanDiv() {

  // var isElementInView = Utils.isElementInView($('#flyout-left-container'), false);
  var isElementInView = isScrolledIntoView('roadmap');

  if (isElementInView) {
    console.log('in view');
  } else {
    console.log('out of view');
  }

}

function isScrolledIntoView(elem) {
  var docViewTop = window.scrollY;
  var docViewBottom = docViewTop + window.innerHeight;



  var distance = document.getElementById(elem).offsetTop;
  var divHeight = document.getElementById(elem).offsetHeight;


  var elemTop = distance
  var elemBottom = elemTop + divHeight;




  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}