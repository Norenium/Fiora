function fetchIDOdataPart1() {
      var dataInterval = setInterval(() => {

            if (isBalanceFetched) {


                  myContract.bravoCall(12).then(x => {
                        totalReleasingToken = x;
                        setIdoDataToTalToken(x);
                  });


                  myContract.bravoCall(14).then(x => {
                        idoStartTime = x;
                        setIdoStartDate2(x);
                  });


                  myContract.bravoCall(15).then(x => {
                        idoEndTime = x;
                        setIdoEndDate2(x);
                        //setIdoData();
                  });

                  myContract.bravoCall(11).then(x => {
                        idoCurrentBlockTimeStamp = x;
                        setUserDepositAccess(x);
                  });

                  myContract.CharlieCall(1).then(x => {
                        console.log('charlie: ' + x);
                        ContributionAddress = x;
                        setIdoDataAddress();
                  });

                  clearInterval(dataInterval);
            }

      }, 1000)

}


function fetchIDOdataPart2() {
      setIDOCoutSownT(idoStartTime, idoEndTime, 'idoStartTimeLeft', 'idoTimeLeft');

}

// myContract.bravoCall(23).then(x => {
//       TimeRemainedToCancel = 0;
//       if (x != 0) {
//             TimeRemainedToCancel = new Date(x * 1000);
//       }
//       setIDOCoutSown(1644748315, 'TimeRemainedToCancel');
// });


// myContract.bravoCall(21).then(x => {
//       TotalContribution = x;
//       setIdoDataToTalContribution(x);
// });



// IDO DATA:

var totalReleasingToken;
var TotalContribution;
var MyTotalContribution = 0;
var TimeRemainedToCancel;



var idoStartTime = 0;
var idoEndTime = 0;
var idoTimeLeft;
var idoCurrentBlockTimeStamp = 0;


//

// Page Data

var CurrentEstimatedTokenPrice;
var ContributionAddress;


console.log('js current time stamp:');
console.log(Math.floor(Date.now() / 1000));
