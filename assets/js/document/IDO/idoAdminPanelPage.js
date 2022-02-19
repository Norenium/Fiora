
console.log('IDO Admin Panel page Start');

// from Init.js
StartContract();

// from ccommon.js
printBalance();

// from idoFetch.js
fetchIDOdataPart1();

document.getElementById('proxyContractAddress').innerHTML=contractAddress;