
function printBalance() {
      var balanceInterval = setInterval(() => {
            console.info(balance);

            if (isBalanceFetched) {
                  document.getElementById('balanceSpinner').hidden = true;
                  document.getElementById('balanceAmount').innerHTML = balance;
                  document.getElementById('balanceAmount').hidden = false;
                  console.log('final balance: ' + balance);
                  clearInterval(balanceInterval);
            }

      }, 1000)
}


//#region OPERATIONAL FUNCTIONS


function _hexToInt(BigNumber) {
      return ethers.utils.formatUnits(BigNumber) * (10 ** 18)
}



function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function formatDateTime2(DT) {
      console.log(' DT :  ' + DT)
      if (DT == 0) { return '----/--/--  &nbsp; --:--:--' }
      var org = new Date(DT * 1000);
      var years = org.getFullYear();
      var months = org.getMonth() + 1;
      var days = org.getDate();
      var Hours = org.getHours();
      var Minutes = org.getMinutes();
      var Seconds = org.getSeconds();
      return (years + '/' + months + '/' + days + '-' + Hours + ':' + Minutes + ':' + Seconds);
}


//#endregion

