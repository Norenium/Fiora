//#region PAGE DATA SET


/// TOTAL RELEASING TOKEN
function setIdoDataToTalToken(amount) {
      document.getElementById('totalReleasingToken').innerHTML = numberWithCommas(amount);
}

/// TOTAL CONTRIBUTION
function setIdoDataToTalContribution(t) {
      document.getElementById('TotalContribution').innerHTML = numberWithCommas(t);
}

/// IDO START TIME
function setIdoStartDate2(time) {
      console.log('------ time: '+time)
      document.getElementById('idoStartTime').innerHTML = formatDateTime2(time);
}

/// IDO END TIME
function setIdoEndDate2(time) {
      document.getElementById('idoEndTime').innerHTML = formatDateTime2(time);
}

/// CONTRIBUTION ADDRESS
function setIdoDataAddress() {
      var ca = '"' + ContributionAddress.substring(1, 10) + '..."';
      document.getElementById('ContributionAddress').innerHTML = ca;
}




//#endregion







//#region OPERATIONAL FUNCTIONS

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