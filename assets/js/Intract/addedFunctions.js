
function setIdoStartDate() {
      document.getElementById('idoStartTime').innerHTML = formatDateTime(idoStartTime);
}

function setIdoEndDate() {
      document.getElementById('idoEndTime').innerHTML = formatDateTime(idoEndTime);
}


function setIdoData() {
      console.log('set dio data call ::')
      document.getElementById('TotalContribution').innerHTML = numberWithCommas(TotalContribution);
      document.getElementById('MyTotalContribution').innerHTML = MyTotalContribution;


      // Set time left to IDO start
      setIDOCoutSownT(idoStartTime, idoEndTime, 'idoStartTimeLeft', 'idoTimeLeft');

      // Set time left to IDO end
      //setIDOCoutSown(idoEndTime/1000, 'idoTimeLeft')

}
function setIdoDataAddress() {
      var ca = '"' + ContributionAddress.substring(1, 10) + '..."';
      document.getElementById('ContributionAddress').innerHTML = ca;
}


function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatDateTime(DT) {
      console.log(' DT :  '+DT)
      if(DT == 0){return 0}
      var org = new Date(DT);
      var years = org.getFullYear();
      var months = org.getMonth() + 1;
      var days = org.getDate();
      var Hours = org.getHours();
      var Minutes = org.getMinutes();
      var Seconds = org.getSeconds();
      return (years + '/' + months + '/' + days + '-' + Hours + ':' + Minutes + ':' + Seconds);
}


var distance;
var distanceEnd;

function setIDOCoutSownT(startTime, endTime, startId, endId) {



      var countDownDateStart = startTime;
      var countDownDateEnd = endTime;

      // Update the count down every 1 second
      var x = setInterval(function () {

            // Get today's date and startTime
            var now = (new Date().getTime());

            // Find the distance between now and the count down date
            distance = countDownDateStart - now;
            distanceEnd = countDownDateEnd - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);


            // Time calculations for days, hours, minutes and seconds
            var daysE = Math.floor(distanceEnd / (1000 * 60 * 60 * 24));
            var hoursE = Math.floor((distanceEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutesE = Math.floor((distanceEnd % (1000 * 60 * 60)) / (1000 * 60));
            var secondsE = Math.floor((distanceEnd % (1000 * 60)) / 1000);




            setTimeout(() => {

                  // Output the result in an element with id="demo"
                  remainingStart = days + "Days and " + hours + ":" + minutes + ":" + seconds;
                  if (days == 0) {
                        remainingStart = hours + ":" + minutes + ":" + seconds;
                  }


                  remainingEnd = daysE + "Days and " + hoursE + ":"
                        + minutesE + ":" + secondsE;
                  if (daysE == 0) {
                        remainingEnd = hoursE + ":"
                              + minutesE + ":" + secondsE;
                  }


                  document.getElementById(startId).innerHTML = remainingStart;
                  document.getElementById(endId).innerHTML = remainingEnd;

            }, 100)

            // If the count down is over, write some text 
            if (distance < 0) {
                  clearInterval(x);
                  document.getElementById(startId).innerHTML = "--:--:--";
            }

            // If the count down is over, write some text 
            if (distanceEnd < 0) {
                  clearInterval(x);
                  document.getElementById(endId).innerHTML = "--:--:--";
            }

      }, 1000);
}

var remainingStart;
var remainingEnd;




var balance = 0;
var balanceFetched = false;
async function tryGetBalance() {

      myContract.balanceOf(signer.getAddress()).then(function (value) {
            balance = BigInt(value._hex).toString();
            console.log('balance: ' + balance);
            printBalance();

      });

      balanceFetched = true;
      return Promise.resolve(true);

}

function printBalance() {
      setTimeout(() => {
            document.getElementById('balanceAmount').innerHTML = balance;
            document.getElementById('wallet-ok-button').style.display = 'block';
            document.getElementById('connect-wallet-button').style.display = 'none';
      }, 500)
}