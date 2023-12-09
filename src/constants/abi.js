export const ABI= [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_uniqueId",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_listingPrice",
				"type": "uint256"
			}
		],
		"name": "createResellListing",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_brandName",
				"type": "string"
			}
		],
		"name": "newBrand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_collectionName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_totalSupplyOfCollection",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_imageUrl",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_priceInEth",
				"type": "uint256"
			}
		],
		"name": "newCollection",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "brandName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "theAddress",
						"type": "address"
					}
				],
				"internalType": "struct KixxMarketplace.Brand",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_collectionName",
				"type": "string"
			}
		],
		"name": "purchaseFromCollection",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_uniqueId",
				"type": "string"
			}
		],
		"name": "purchaseFromReseller",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToBrand",
		"outputs": [
			{
				"internalType": "string",
				"name": "brandName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "theAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "idToSneaker",
		"outputs": [
			{
				"internalType": "bool",
				"name": "boughtOnce",
				"type": "bool"
			},
			{
				"components": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "brandName",
								"type": "string"
							},
							{
								"internalType": "address",
								"name": "theAddress",
								"type": "address"
							}
						],
						"internalType": "struct KixxMarketplace.Brand",
						"name": "brand",
						"type": "tuple"
					},
					{
						"internalType": "string",
						"name": "collectionName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "totalSupplyOfCollection",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sold",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "imageUrl",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "priceInEth",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct KixxMarketplace.SneakerCollection",
				"name": "collection",
				"type": "tuple"
			},
			{
				"internalType": "string",
				"name": "uniqueId",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "currentOwner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "resellingPriceInEth",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "nameToCollection",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "brandName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "theAddress",
						"type": "address"
					}
				],
				"internalType": "struct KixxMarketplace.Brand",
				"name": "brand",
				"type": "tuple"
			},
			{
				"internalType": "string",
				"name": "collectionName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalSupplyOfCollection",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "sold",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "priceInEth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]