// async function getBalance() {
//       return Promise.resolve(myContract.getMyBalance().then(res => {
//             return Promise.resolve(_hexToInt(res._hex));
//       }));
// }

function _hexToInt(BigNumber) {
      return ethers.utils.formatUnits(BigNumber) * (10 ** 18)
}