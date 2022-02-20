//#region PAGE DATA SET


/// set Proxy Contract Address
function setProxyContractAddress() {
      document.getElementById('proxyContractAddress').innerHTML = (contractAddress);
}


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
      console.log('------ time: ' + time)
      document.getElementById('idoStartTime').innerHTML = formatDateTime2(time);
}

/// IDO END TIME
function setIdoEndDate2(time) {
      document.getElementById('idoEndTime').innerHTML = formatDateTime2(time);
}

/// CONTRIBUTION ADDRESS
function setIdoDataAddress() {
      var ca = '"' + ContributionAddress.substring(0, 10) + '..."';
      document.getElementById('ContributionAddress').innerHTML = ca;
}

/// CONTRIBUTION ADDRESS
function setUserDepositAccess(idoCurrentBlockTimeStamp) {
      var interval = setInterval(() => {

            if (idoStartTime > 0 && idoEndTime > 0 && idoCurrentBlockTimeStamp > 0) {
                  if (idoCurrentBlockTimeStamp > idoStartTime) {
                        console.log(idoCurrentBlockTimeStamp + '-' + idoEndTime);
                        fetchIDOdataPart2();
                        if (idoCurrentBlockTimeStamp < idoEndTime) {
                              console.log('User deposit panel enabled.')
                              document.getElementById('userDepositPanel').classList.remove('disabled');
                        }
                        if (idoCurrentBlockTimeStamp >= idoEndTime) {
                              console.log('User deposit panel disabled.')
                              document.getElementById('userDepositPanel').classList.add('disabled');
                        }
                  }
                  clearInterval(interval);
            }
      }, 1000);
}



function copyToClipBoardCA() {

      console.log('copy click');
      // clipboardData.setData("text/plain", td.textContent);'
      navigator.clipboard.writeText(contractAddress);
      window.alert('Address has been copied to clip board. \n' + contractAddress);
}

//#endregion




function setIdoData() {
      console.log('set dio data call ::')
      document.getElementById('TotalContribution').innerHTML = numberWithCommas(TotalContribution);
      document.getElementById('MyTotalContribution').innerHTML = MyTotalContribution;


      // Set time left to IDO start

      // Set time left to IDO end
      //setIDOCoutSown(idoEndTime/1000, 'idoTimeLeft')

}