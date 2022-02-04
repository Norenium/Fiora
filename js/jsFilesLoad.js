// INCLUDE FILES:

window.addEventListener('load', function () {
      includeJs("/node_modules/ethers/dist/ethers.umd.min.js");
      includeJs("/js/document/layout.js");
      includeJs("/js/mcjs/intract/consts.js");
      includeJs("/js/mcjs/intract/addedFunctions.js");
      includeJs("/js/mcjs/intract/onCard.js");
      includeJs("/js/mcjs/intract/toContract.js");
      includeJs("/js/mcjs/intract/toPage.js");
      includeJs("/js/document/onPageLoad.js");
      // <script src="./pakages/node_modules/ethers/dist/ethers.umd.min.js"></script>

})





// FUNCTION:
function includeJs(jsFilePath) {
      var js = document.createElement("script");
      js.type = "text/javascript";
      js.src = jsFilePath;
      document.body.appendChild(js);
      return Promise.resolve(true);
}


document.onreadystatechange = function () {
      if (document.readyState !== "complete") {
            document.querySelector(
                  "body").style.visibility = "hidden";
            document.querySelector(
                  "#loader").style.visibility = "visible";
      } else {
            document.querySelector(
                  "#loader").style.display = "none";
            document.querySelector(
                  "body").style.visibility = "visible";
            console.log('ready');
      }
};

