onPageLoads()




function onPageLoads() {


      


      setTimeout(() => {
            StartContract();
            setHeaderWidth();

      }, 2000)


      var distance = document.getElementById("counter-0").offsetTop;
      var divHeight = document.getElementById("counter-0").offsetHeight;
      var screenWidth = window.innerWidth;
      trrigerLevel = (distance-divHeight)-(0.1*screenWidth)

      if(screenWidth < 1008){
            isPhone = true;
      }
}
var trrigerLevel;



/// LOADING SPINNER
document.onreadystatechange = function () {
      if (document.readyState !== "complete") {
            document.querySelector(
                  "body").style.visibility = "hidden";
            document.querySelector(
                  "#loader-pad").style.visibility = "visible";
      } else {
            document.querySelector(
                  "#loader-pad").style.display = "none";
            document.querySelector(
                  "body").style.visibility = "visible";
            console.log('ready');
      }
};