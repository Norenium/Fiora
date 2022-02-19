
console.log('IDO page Start');

// from Init.js
StartContract();

// from ccommon.js
printBalance();

// from idoFetch.js
fetchIDOdataPart1();

// from timers.js
checkTime();

function setTimesIDO(am) {
      var date = new Date(am*1000); // regular time from auction data
      var countDownDate = am * 1000;//new Date("Jan 5, 2022 15:37:25").getTime();
      console.log('date:  '+date);
      console.log('countDownDate:  '+countDownDate);
      return countDownDate
}