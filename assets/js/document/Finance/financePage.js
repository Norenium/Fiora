console.log('Finance page Start');

StartContract();

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

