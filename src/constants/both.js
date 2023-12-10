export const ADDRESS = "0xa84641aced4c404c58E8350AfD3F75bb183Bf77d"

export const ABI =[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "_brandName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_theAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_logoUrl",
				"type": "string"
			}
		],
		"name": "BrandCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "_collectionName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_totalSupplyOfCollection",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_imageUrl",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_priceInEth",
				"type": "uint256"
			}
		],
		"name": "CollectionLaunched",
		"type": "event"
	},
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
			},
			{
				"internalType": "string",
				"name": "_logoUrl",
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
					},
					{
						"internalType": "string",
						"name": "logoUrl",
						"type": "string"
					}
				],
				"internalType": "struct SneakerMarketplace.Brand",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_buyer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "string",
				"name": "_theId",
				"type": "string"
			}
		],
		"name": "PurchasedFromCollection",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "_theId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_newOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_prevOwner",
				"type": "address"
			}
		],
		"name": "PurchasedFromReseller",
		"type": "event"
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_reseller",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "string",
				"name": "_theId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "priceInEth",
				"type": "uint256"
			}
		],
		"name": "ResaleListingCreated",
		"type": "event"
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
			},
			{
				"internalType": "string",
				"name": "logoUrl",
				"type": "string"
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
							},
							{
								"internalType": "string",
								"name": "logoUrl",
								"type": "string"
							}
						],
						"internalType": "struct SneakerMarketplace.Brand",
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
				"internalType": "struct SneakerMarketplace.SneakerCollection",
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
					},
					{
						"internalType": "string",
						"name": "logoUrl",
						"type": "string"
					}
				],
				"internalType": "struct SneakerMarketplace.Brand",
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