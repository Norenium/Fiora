
var balance = 0;
var balanceFetched = false;
async function tryGetBalance() {

      myContract.balanceOf(signer.getAddress()).then(function (value) {
            balance = BigInt(value._hex).toString();
            console.log('balance: ' + balance);
            printBalance();

      });

      balanceFetched = true;
      return Promise.resolve(true);

}

function printBalance() {
      setTimeout(() => {
            document.getElementById('balanceAmount').innerHTML = balance;
            document.getElementById('wallet-ok-button').style.display = 'block';
            document.getElementById('connect-wallet-button').style.display = 'none';
      }, 500)
}