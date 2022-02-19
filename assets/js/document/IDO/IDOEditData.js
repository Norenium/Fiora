/// SET TOTAL TOKEN
function editTotalReleasingToken() {

      var inp = window.prompt("Set new number of total releasing tokens:", "Type a number!")

      if (inp == null) {
            return; //break out of the function early
      } else {
            var selection = parseInt(inp);
            if (!/^\d+$/.test(selection)) {
                  window.alert('ONLY NUMBERS ARE ALLOWED!!!    No change executed');
                  return;
            } else {

                  myContract.name().then(x => {
                        console.log(x);
                        resetTotalReleasingToken(selection)
                  });

                  console.log('send request to change total releasing toke to ' + selection);
            }
      }

}

function resetTotalReleasingToken(selection) {
      console.log('totalReleasingToken CRT: ' + totalReleasingToken);

      var CRT = totalReleasingToken;
      document.getElementById('totalReleasingToken').classList.add('disabled');
      document.getElementById('editTotal').hidden = true;
      document.getElementById('spinner').hidden = false;

      //Set max supply for IDO
      myContract.alphaCall(20, [selection]).then(() => {
            setTimeout(() => {
                  var xIntrv = setInterval(() => {

                        myContract.bravoCall(12).then(x => {
                              CRT = parseInt(x);
                              console.log('fetched CRT: ' + CRT);
                        });

                        if (CRT === selection) {
                              document.getElementById('totalReleasingToken').classList.remove('disabled');
                              document.getElementById('spinner').hidden = true;
                              document.getElementById('editTotal').hidden = false;
                              console.log('>>>  NEW  CRT: ' + CRT);
                              totalReleasingToken = CRT;
                              setIdoDataToTalToken(CRT);
                              clearInterval(xIntrv);
                        }


                  }, 4000)
            }, 6000)
      });
}


/// SET START TIME
function editIDOStartTime() {

      var inp = window.prompt("Set new number of seconds to Start point:", "Type a number!")

      if (inp == null) {
            return; //break out of the function early
      } else {
            var inputValue = parseInt(inp);
            if (!/^\d+$/.test(inputValue)) {
                  window.alert('ONLY NUMBERS ARE ALLOWED!!!    No change executed');
                  return;
            } else {

                  if (inputValue < 60) {
                        window.alert('ITS TOO CLOSE!!!    No change executed');
                        return;
                  } else {

                        myContract.name().then(x => {
                              console.log(x);
                              resetIDOStartTime(inputValue)
                              console.log('send request to change IDO start point ' + inputValue);
                        });
                        console.log('send request for contract name');
                  }
            }
      }

}

function resetIDOStartTime(inputValue) {
      console.log('resetIDOStartTime RQUEST: ' + inputValue);

      var CRT = idoStartTime;
      document.getElementById('idoStartTime').classList.add('disabled');
      document.getElementById('editIDOStartTime').hidden = true;
      document.getElementById('IDOStartTimeSpinner').hidden = false;

      //Set Start point for IDO
      myContract.alphaCall(25, [inputValue]).then(res => {
            console.log(' ido start res: ' + res);
            setTimeout(() => {
                  var xIntrv = setInterval(() => {

                        myContract.bravoCall(14).then(x => {
                              CRT = parseInt(x);
                              console.log('fetched CRT: ' + CRT);
                        });

                        if (CRT != idoStartTime) {
                              document.getElementById('idoStartTime').classList.remove('disabled');
                              document.getElementById('IDOStartTimeSpinner').hidden = true;
                              document.getElementById('editIDOStartTime').hidden = false;
                              console.log('>>>  NEW  CRT: ' + CRT);
                              idoStartTime = CRT;
                              setIdoStartDate2(CRT);
                              clearInterval(xIntrv);
                        }
                  }, 4000)
            }, 6000)

      }).catch(() => {

            console.log('Task rejected');
            document.getElementById('idoStartTime').classList.remove('disabled');
            document.getElementById('IDOStartTimeSpinner').hidden = true;
            document.getElementById('editIDOStartTime').hidden = false;
            setTimeout(() => {
                  window.alert('Task rejected');
            }, 100)

      });


}



/// SET END TIME
function editIDOEndTime() {

      var inp = window.prompt("Set new number of seconds to End point:", "Type a number!")

      if (inp == null) {
            return; //break out of the function early
      } else {
            var inputValue = parseInt(inp);
            if (!/^\d+$/.test(inputValue)) {
                  window.alert('ONLY NUMBERS ARE ALLOWED!!!    No change executed');
                  return;
            } else {

                  if (inputValue < 60) {
                        window.alert('ITS TOO CLOSE!!!    No change executed');
                        return;
                  } else {

                        myContract.name().then(x => {
                              console.log(x);
                              resetIDOEndTime(inputValue)
                              console.log('send request to change IDO End point ' + inputValue);
                        });
                        console.log('send request for contract name');
                  }
            }
      }

}

function resetIDOEndTime(inputValue) {
      console.log('resetIDOEndTime RQUEST: ' + inputValue);

      var CRT = idoEndTime;
      document.getElementById('idoEndTime').classList.add('disabled');
      document.getElementById('editIDOEndTime').hidden = true;
      document.getElementById('IDOEndTimeSpinner').hidden = false;

      //Set End Point for IDO
      myContract.alphaCall(26, [inputValue]).then(res => {
            console.log(' ido End res: ' + res);
            setTimeout(() => {
                  var xIntrv = setInterval(() => {

                        myContract.bravoCall(15).then(x => {
                              CRT = parseInt(x);
                              console.log('fetched CRT: ' + CRT);
                        });

                        if (CRT != idoEndTime) {
                              document.getElementById('idoEndTime').classList.remove('disabled');
                              document.getElementById('IDOEndTimeSpinner').hidden = true;
                              document.getElementById('editIDOEndTime').hidden = false;
                              console.log('>>>  NEW  CRT: ' + CRT);
                              idoEndTime = CRT;
                              setIdoEndDate2(CRT);
                              clearInterval(xIntrv);
                        }
                  }, 4000)
            }, 6000)

      }).catch(() => {

            console.log('Task rejected');
            document.getElementById('idoEndTime').classList.remove('disabled');
            document.getElementById('IDOEndTimeSpinner').hidden = true;
            document.getElementById('editIDOEndTime').hidden = false;
            setTimeout(() => {
                  window.alert('Task rejected');
            }, 100)

      });


}