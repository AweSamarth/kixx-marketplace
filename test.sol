// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/utils/Strings.sol";


pragma solidity ^0.8.19 ;
contract SneakerMarketplace{

    event CollectionLaunched(string indexed _collectionName, uint _totalSupplyOfCollection, string _imageUrl, uint _priceInEth);
    event PurchasedFromCollection(address _buyer, string indexed _theId);
    event ResaleListingCreated(address _reseller, string indexed _theId, uint priceInEth );
    event PurchasedFromReseller (string indexed _theId, address _newOwner, address _prevOwner);
    event BrandCreated (string indexed _brandName, address _theAddress, string _logoUrl);


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
    emit CollectionLaunched(_collectionName, _totalSupplyOfCollection, _imageUrl, _priceInEth);

    }


    return addressToBrand[msg.sender];
    }  

    function newBrand(string memory _brandName, string memory _logoUrl) public {
        addressToBrand[msg.sender].brandName = _brandName;
        addressToBrand[msg.sender].theAddress = msg.sender;
        addressToBrand[msg.sender].logoUrl = _logoUrl;

    emit BrandCreated(_brandName, msg.sender, _logoUrl);
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


            emit PurchasedFromCollection(msg.sender, anotherTemp);
        }   
    }

    function createResellListing(string memory _uniqueId, uint _listingPrice) public {

        if(idToSneaker[_uniqueId].currentOwner==msg.sender){
            idToSneaker[_uniqueId].resellingPriceInEth = _listingPrice;
            emit ResaleListingCreated(msg.sender, _uniqueId, _listingPrice);

        }

        else{
            return;
        }

    }

    function purchaseFromReseller(string memory _uniqueId) payable external {
        require (msg.value>idToSneaker[_uniqueId].resellingPriceInEth && idToSneaker[_uniqueId].resellingPriceInEth!=0, "no money lmao");
        address prevOwner = idToSneaker[_uniqueId].currentOwner;
        emit PurchasedFromReseller(_uniqueId, msg.sender, prevOwner ); 
        idToSneaker[_uniqueId].prevOwners.push(prevOwner);
        idToSneaker[_uniqueId].currentOwner = msg.sender;
        idToSneaker[_uniqueId].resellingPriceInEth = 0;


    }





    receive() external payable {}

    fallback() external payable {}
    



}









// 