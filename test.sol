// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/utils/Strings.sol";


pragma solidity ^0.8.19 ;
contract SneakerMarketplace{

    struct Brand{
        string brandName;
        address theAddress;
        string logoUrl;
    }

    struct SneakerCollection{
        Brand brand;
        string collectionName;
        uint totalSupplyOfCollection;
        uint sold;
        string imageUrl;
        uint priceInEth;
        uint timestamp;


    }

    struct Sneaker {
        SneakerCollection collection;
        string uniqueId;
        address currentOwner;
        uint timestamp;
        address [] prevOwners;
        uint resellingPriceInEth;


    }

    mapping  (address=>Brand) public addressToBrand;
    mapping (string =>Sneaker) public idToSneaker;    
    mapping (string=>SneakerCollection) public nameToCollection;

    function newCollection(string memory _collectionName, uint _totalSupplyOfCollection, string memory _imageUrl, uint _priceInEth) public  returns(Brand memory){
    if (bytes(addressToBrand[msg.sender].brandName).length != 0) {
        nameToCollection[_collectionName].brand = addressToBrand[msg.sender];
        nameToCollection[_collectionName].collectionName  = _collectionName;
        nameToCollection[_collectionName].totalSupplyOfCollection  = _totalSupplyOfCollection;
        nameToCollection[_collectionName].imageUrl  = _imageUrl;
        nameToCollection[_collectionName].priceInEth = _priceInEth;
        nameToCollection[_collectionName].timestamp = block.timestamp;
        
    //emit an event here?
    
    }


    return addressToBrand[msg.sender];
    }  

    function newBrand(string memory _brandName) public {
        addressToBrand[msg.sender].brandName = _brandName;
        addressToBrand[msg.sender].theAddress = msg.sender;
    }

    function purchaseFromCollection (string memory _collectionName) payable external {


        if(nameToCollection[_collectionName].sold<nameToCollection[_collectionName].totalSupplyOfCollection){

            require(msg.value>nameToCollection[_collectionName].priceInEth*1000000000000000000, "failed");

            string memory tempString= Strings.toString(++nameToCollection[_collectionName].sold);
            string memory anotherTemp = string.concat(nameToCollection[_collectionName].collectionName, tempString );

            idToSneaker[anotherTemp].collection = nameToCollection[_collectionName];
            idToSneaker[anotherTemp].uniqueId = anotherTemp;
            idToSneaker[anotherTemp].currentOwner = msg.sender;
            idToSneaker[anotherTemp].timestamp = block.timestamp; 
        }   
    }

    function createResellListing(string memory _uniqueId, uint _listingPrice) public {

        if(idToSneaker[_uniqueId].currentOwner==msg.sender){
            idToSneaker[_uniqueId].resellingPriceInEth = _listingPrice;
        }

        else{
            return;
        }

    }

    function purchaseFromReseller(string memory _uniqueId) payable external {
        require (msg.value>idToSneaker[_uniqueId].resellingPriceInEth, "no money lmao");
        idToSneaker[_uniqueId].prevOwners.push(idToSneaker[_uniqueId].currentOwner);
        idToSneaker[_uniqueId].currentOwner = msg.sender;

    }





    receive() external payable {}

    fallback() external payable {}
    



}









// 