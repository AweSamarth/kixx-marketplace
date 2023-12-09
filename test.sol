// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19 ;
contract SneakerMarketplace{

    uint totalSneakerCOllections;

    struct Brand{
        string name;
        address theAddress;
    }

    struct SneakerCollection{
        Brand brand;
        string collectionName;
        uint totalSupplyOfCollection;
        string imageUrl;


    }

    struct Sneaker {
        SneakerCollection collection;
        string uniqueId;
        address currentOwner;
        uint timestamp;

    }
    
    mapping  (address=>Brand) private addressToBrand;

    mapping (address=>address) closetToOwner;








    // how to get brand name using address


}







