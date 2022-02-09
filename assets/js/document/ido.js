function copyToClipBoardCA(){

      console.log('copy click');
      // clipboardData.setData("text/plain", td.textContent);'
      navigator.clipboard.writeText(contractAddress);
}


