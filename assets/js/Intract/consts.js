const contractAddress = "0x9D942d6600c476a89CcC128E986009e9d102c07c";

//#region CLASSes

class NFT {
	constructor(name, description, image, tokenId, isForSell, isOnAuction, isFreezed, price) {
		this.name = name;
		this.description = description;
		this.image = image;
		this.tokenId = tokenId;
		this.isForSell = isForSell;
		this.isOnAuction = isOnAuction;
		this.isFreezed = isFreezed;
		this.price = price;
	}
}

class NFTRawSellTicket {
	constructor(tokenId, price) {
		this.tokenId = tokenId;
		this.price = price;
	}
}

class NFTSell {
	constructor(name, description, image, tokenId, price) {
		this.name = name;
		this.description = description;
		this.image = image;
		this.tokenId = tokenId;
		this.price = price;
	}
}

class Auction {
	constructor(tokenId, basePrice, auctionMaturity, highestBid, currentOwner) {
		this.tokenId = tokenId;
		this.basePrice = basePrice;
		this.auctionMaturity = auctionMaturity;
		this.highestBid = highestBid;
		this.currentOwner = currentOwner;
	}
}

class NFTAuction {
	constructor(tokenId, basePrice, auctionMaturity, highestBid, currentOwner, name, description, image) {
		this.tokenId = tokenId;
		this.basePrice = basePrice;
		this.auctionMaturity = auctionMaturity;
		this.highestBid = highestBid;
		this.currentOwner = currentOwner;
		this.name = name;
		this.description = description;
		this.image = image;
	}

}


class DoneSell {
	constructor(from, to, tokenId, price, timeStamp, wasAuction, name, description, image) {
		this.from = from;
		this.to = to;
		this.tokenId = tokenId;
		this.price = price;
		this.timeStamp = timeStamp;
		this.wasAuction = wasAuction;
		this.name = name;
		this.description = description;
		this.image = image;
	}
}
//#endregion



//#region  ABI


const ABI =
[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "command",
				"type": "uint256"
			}
		],
		"name": "CharlieCall",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "command",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "_data",
				"type": "uint256[]"
			}
		],
		"name": "alphaCall",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "to",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "value",
				"type": "uint256[]"
			}
		],
		"name": "batchTransfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "command",
				"type": "uint256"
			}
		],
		"name": "bravoCall",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "faucet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLatestValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLogicAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSecretary",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSelfAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "setLogicAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "setLogicsProxyAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "setSecretary",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFast",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]


//#endregion