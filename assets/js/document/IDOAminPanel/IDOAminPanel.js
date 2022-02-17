StartOperation();

function StartOperation() {

      // Step 1: get connect to metamask
      checkForMetamask().then(step1 => {
            console.log('checkForMetamask');
            if (step1) {
                  // step 2: init contract
                  tryInitContract().then(step2 => {
                        console.log('tryInitContract result: ' + step2);

                        myContract.name().then(x => {
                              console.log(x);
                        });

                        if (step2) {

                              // check if ido start time is not zero then the IDO is initiated
                              
                              // IDO start time
                              myContract.bravoCall(14).then(x => {
                                    idoStartTime = x;
                                    setIdoStartDate2(x);
                              });


                              myContract.bravoCall(15).then(x => {
                                    idoEndTime = x;
                                    setIdoEndDate2(x);
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
                                    setIdoDataToTalContribution(x);
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