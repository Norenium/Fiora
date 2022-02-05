onPageLoads()




function onPageLoads() {




      setTimeout(() => {
            StartContract();
            setHeaderWidth();

      }, 2000)
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