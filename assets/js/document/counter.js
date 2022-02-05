function startCounter(){
const counters = document.querySelectorAll('.value');
const speed = 80;

counters.forEach(counter => {
     
            const animate = () => {
                  const value = +counter.getAttribute('akhi');
                  const data = +counter.innerText;

                  const time = value / speed;
                  if (data < value) {
                        counter.innerText = Math.ceil(data + time);
                        setTimeout(animate, speed);
                  } else {
                        counter.innerText = value;
                  }

            }

            animate()
});
}


function doAnimate(){
      var distance = document.getElementById("counter-0").offsetTop;
      var divHeight = document.getElementById("counter-0").offsetHeight;
      var screenWidth = window.innerWidth;
      var trrigerLevel = (distance-divHeight)-(0.3*screenWidth)
      if( window.scrollY > trrigerLevel){
            startCounter();
      }
}



function reArrengeCounters(){
      // window.alert('reArrengeCounters   '+window.innerWidth);
      const widthBreak = 700;

      if( window.innerWidth < widthBreak ) {
            document.getElementById("counters-phone").style.display = 'block';
            document.getElementById("counters").style.display = 'none';
      }else{
            document.getElementById("counters-phone").style.display = 'none';
            document.getElementById("counters").style.display = 'block';
      }
}

