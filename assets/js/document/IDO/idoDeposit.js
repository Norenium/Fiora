function Deposit() {
      var amont = parseInt(document.getElementById('depositInput').value);
      console.log('Send deposit Request for ' + amont + ' FRA')
      myContract.alphaCall(14, [amont]).then(() => {
            MyTotalContributionSet();
            TimeRemainedToCancelSet();

      });
}






//#region DDURING THE IDO TIME

function onDuringIDOFunctions() {

      MyTotalContributionSet();
      TotalContributionSet();
      TimeRemainedToCancelSet();
}


function TimeRemainedToCancelSet() {
      console.log('## TimeRemainedToCancelSet')
      resetCancelTime();
      var elmSpinner = document.getElementById('TimeRemainedToCancelSpinner');
      var elmAmount = document.getElementById('TimeRemainedToCancel');
      elmSpinner.hidden = false;
      elmAmount.hidden = true;
      myContract.bravoCall(23).then(x => {
            fetched = true;
            elmSpinner.hidden = true;
            elmAmount.hidden = false;
            elmAmount.innerHTML = numberWithCommas(x);
      })
}


function MyTotalContributionSet() {
      var elmSpinner = document.getElementById('MyTotalContributionSpinner');
      var elmAmount = document.getElementById('MyTotalContribution');

      elmSpinner.hidden = false;
      elmAmount.hidden = true;


      myContract.bravoCall(22).then(x => {
            elmSpinner.hidden = true;
            elmAmount.hidden = false;
            elmAmount.innerHTML = numberWithCommas(x);
      })


}


var fetched = false;

function resetCancelTime() {

      console.log('turn here 0000 ##');

      var elmSpinner = document.getElementById('TimeRemainedToCancelSpinner');
      var elmAmount = document.getElementById('TimeRemainedToCancel');
      setTimeout(() => {
            if (!fetched) {
                  console.log('turn here##');
                  elmSpinner.hidden = true;
                  elmAmount.hidden = false;
                  elmAmount.innerHTML = "--:--:--";
            }
      }, 5000);
}


function TotalContributionSet() {
      myContract.bravoCall(21).then(x => {
            document.getElementById('TotalContribution').innerHTML = numberWithCommas(x);
      })
}

//#endregion DURING THE IDO TIME
