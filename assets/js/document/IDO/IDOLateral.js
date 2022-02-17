function setTimesIDO(am) {
      var date = new Date(am*1000); // regular time from auction data
      var countDownDate = am * 1000;//new Date("Jan 5, 2022 15:37:25").getTime();
      console.log('date:  '+date);
      console.log('countDownDate:  '+countDownDate);

      return countDownDate
      /*
      // Update the count down every 1 second
      var x = setInterval(function () {

            // Get today's date and time
            var now = (new Date().getTime());

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            var remaining = days + "Days and " + hours + ":"
                  + minutes + ":" + seconds;
            if (days == 0) {
                  remaining = hours + ":"
                        + minutes + ":" + seconds;
            }
            document.getElementById("timeLeft").innerHTML = remaining;

            // If the count down is over, write some text 
            if (distance < 0) {
                  clearInterval(x);
                  document.getElementById("timeLeft").innerHTML = "EXPIRED";
            }
      }, 1000);*/
}