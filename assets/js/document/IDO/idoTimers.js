//#region PERIODIC FUNCTIONS
var periodicsCalled = false;
function onBeforeIDO() {

}

function onDuringIDO() {
      console.log('onDuringIDO()');
      onDuringIDOFunctions();
}

function onAfterIDO() {

}
//#endregion PERIODIC FUNCTIONS





//#region SETTING TIME CCONDITIONS
var isTimeKnown = false;
var isBeforeIDO = false;
var isDuringIDO = false;
var isAfterIDO = false;

var currentLiveTime = 0;
function checkTime() {
      var timeInterval = setInterval(() => {
            currentLiveTime = Math.floor(Date.now() / 1000);
            // check if we cen determine the time;
            if (!isTimeKnown) {
                  if (idoStartTime > 0 && idoEndTime > 0) {
                        isTimeKnown = true
                  }
            } else {
                  checkTimePeriod();
            }


      }, 1000);
}



function checkTimePeriod() {

      //console.log('periodicsCalled: ' + periodicsCalled)
      // BEFORE IDO
      if (idoStartTime > currentLiveTime) {
            console.log('BEFORE IDO');
            isBeforeIDO = true;
            if (!periodicsCalled) {
                  onBeforeIDO();
                  periodicsCalled = true;
            }
            return;
      }

      // DURING IDO
      if (idoStartTime < currentLiveTime && currentLiveTime < idoEndTime) {
           // console.log('DURING IDO - isBeforeIDO:' + isBeforeIDO);
            if (isBeforeIDO) {
                  periodicsCalled = false;
            }
            isBeforeIDO = false;
            isDuringIDO = true;
            if (!periodicsCalled) {
                  periodicsCalled = true;

                  onDuringIDO();
                  console.log('periodicsCalled2: ' + periodicsCalled)

            }
      }

      // AFTER IDO
      if (currentLiveTime > idoEndTime) {
            console.log('AFTER IDO');
            if (isDuringIDO) {
                  periodicsCalled = false;
            }
            isDuringIDO = false;
            isAfterIDO = true;
            if (!periodicsCalled) {
                  onAfterIDO();
                  periodicsCalled = true;
            }
      }

}



//#endregion SETTING TIME CCONDITIONS




//#region TIMERS OF IDO START AND END TIME
var distance;
var distanceEnd;
var remainingStart;
var remainingEnd;

function setIDOCoutSownT(startTime, endTime, startId, endId) {

      var countDownDateStart = startTime * 1000;
      var countDownDateEnd = endTime * 1000;

      // Update the count down every 1 second for the IDO Start
      var startInterval = setInterval(function () {

            // Get today's date and startTime
            var now = (new Date().getTime());

            // Find the distance between now and the count down date
            distance = countDownDateStart - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);




            setTimeout(() => {

                  // Output the result in an element with id="demo"
                  remainingStart = days + "Days and " + hours + ":" + minutes + ":" + seconds;
                  if (days == 0) {
                        remainingStart = hours + ":" + minutes + ":" + seconds;
                  }


                  document.getElementById(startId).innerHTML = remainingStart;

            }, 100)

            // If the count down is over, write some text 
            console.log('#here distance: ' + distance + '    ');
            if (distance < 0) {

                  clearInterval(startInterval);
                  setTimeout(() => {
                        document.getElementById(startId).innerHTML = "--:--:--";
                        var elem = document.getElementById('start-div');
                        return elem.parentNode.removeChild(elem);
                  }, 300)

            }


      }, 1000);



      // Update the count down every 1 second for the IDO End
      var endInterval = setInterval(function () {

            // Get today's date and startTime
            var now = (new Date().getTime());

            // Find the distance between now and the count down date
            distanceEnd = countDownDateEnd - now;

            // Time calculations for days, hours, minutes and seconds
            var daysE = Math.floor(distanceEnd / (1000 * 60 * 60 * 24));
            var hoursE = Math.floor((distanceEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutesE = Math.floor((distanceEnd % (1000 * 60 * 60)) / (1000 * 60));
            var secondsE = Math.floor((distanceEnd % (1000 * 60)) / 1000);




            setTimeout(() => {



                  remainingEnd = daysE + "Days and " + hoursE + ":"
                        + minutesE + ":" + secondsE;
                  if (daysE == 0) {
                        remainingEnd = hoursE + ":"
                              + minutesE + ":" + secondsE;
                  }


                  document.getElementById(endId).innerHTML = remainingEnd;

            }, 100)


            // If the count down is over, write some text 
            if (distanceEnd < 0) {
                  clearInterval(endInterval);
                  setTimeout(() => {
                        document.getElementById(endId).innerHTML = "--:--:--";
                        document.getElementById('end-div').innerHTML = "";

                  }, 300)

            }

      }, 1000);
}

//#endregion TIMERS OF IDO START AND END TIME