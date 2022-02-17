function copyToClipBoardCA() {

      console.log('copy click');
      // clipboardData.setData("text/plain", td.textContent);'
      navigator.clipboard.writeText(contractAddress);
      window.alert('Address has been copied to clip board. \n' + contractAddress);
}


async function StartContractP() {

      console.log('Start Contract ++');
      //hideLists();


      // Step 1: get connect to metamask
      checkForMetamask().then(step1 => {
            if (step1) {
                  // step 2: init contract
                  tryInitContract().then(step2 => {

                        myContract.name().then(x => {
                              console.log(x);
                        });

                        if (step2) {

                              // check if ido start time is not zero then the IDO is initiated
                              // IDO start time
                              myContract.bravoCall(14).then(x => {
                                    // For test
                                    if (x != 0) {
                                          idoStartTime = new Date(x * 1000);
                                    }
                                    setIdoStartDate();
                              });


                              myContract.bravoCall(15).then(x => {
                                    // For test
                                    if (x != 0) {
                                          idoEndTime = new Date(x * 1000);
                                    }
                                    setIdoEndDate();
                              });

                              myContract.CharlieCall(1).then(x => {
                                    console.log('charlie: ' + x);
                                    ContributionAddress = x;
                                    setIdoDataAddress();
                              });

                              // myContract.bravoCall(23).then(x => {
                              //       TimeRemainedToCancel = 0;
                              //       if (x != 0) {
                              //             TimeRemainedToCancel = new Date(x * 1000);
                              //       }
                              //       setIDOCoutSown(1644748315, 'TimeRemainedToCancel');
                              // });

                              myContract.bravoCall(12).then(x => {
                                    totalReleasingToken = x;
                                    setIdoDataToTalToken(x);
                              });

                              myContract.bravoCall(21).then(x => {
                                    TotalContribution = x;
                                    setIdoData();
                              });

                              // myContract.bravoCall(22).then(x => {
                              //       MyTotalContribution = x;
                              //       setIdoData();
                              // });

                        }

                        return Promise.resolve(true);
                  })
            }
      })
}





/// TOTAL RELEASING TOKEN
function setIdoDataToTalToken(amount) {
      document.getElementById('totalReleasingToken').innerHTML = numberWithCommas(amount);
}


// IDO DATA:

var totalReleasingToken;
var TotalContribution;
var MyTotalContribution = 0;
var TimeRemainedToCancel;



var idoStartTime = 0;
var idoEndTime = 0;
var idoTimeLeft;


//

// Page Data

var CurrentEstimatedTokenPrice;
var ContributionAddress;



