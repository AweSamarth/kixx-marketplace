'use client'
import React, { useEffect, useState } from 'react';
import NavbarNow from '@/components/Navbar';
import FooterNow from '@/components/Footer';
import { StoreMetadata } from '@/components/StoreMetadata';
import { readContract, writeContract } from "@wagmi/core";


import { useContractWrite } from 'wagmi';

import { ABI, ADDRESS } from '@/constants/both';

/// used NFT.storage to prepare the metadata for the NFT

export default function Launch() {

 


    
    // Launch collection
    // Replace these values with actual data
    const [name, setName] = useState();
    const [maxsupply, setMaxSupply] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();

    const [imageUrl, setImageUrl] = useState("")


    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: ADDRESS,
        abi: ABI,
        functionName: 'newCollection',
        args:[name, maxsupply, imageUrl, parseInt(price)]

      })


    console.log(name, "name");
    console.log(maxsupply, "supply");
    console.log(price, "price");
    console.log(image, "image");

    useEffect(()=>{
        console.log(imageUrl)
    }, [imageUrl])

    const uploadAndWrite = async () => {
        try {
            const metadata = await StoreMetadata(name, maxsupply, image, price);
            const uri= metadata.data.image.pathname.substring(2)

            const url = `https://ipfs.io/ipfs/${uri}`;
            const { hash } = await writeContract({
                address: ADDRESS,
                abi: ABI,
                functionName: "newCollection",
                args: [name, maxsupply, url, parseInt(price) ],
              });

              console.log(hash)
            console.log("NFT metadata uploaded to IPFS");
        } catch (err) {
            console.log(err);
        }
    };

   


    return (
        <div className='bg-gradient-to-br from-gray-800 to-black'>
            <NavbarNow />
            <div className="flex items-center justify-center p-12">

                <div className="mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-lg shadow-gray-100">
                    <form
                        className="py-6 px-9"
                        onSubmit={(e) => {
                            e.preventDefault(); // Prevents the default form submission behavior
                            uploadAndWrite(); // Call your upload function here
                        }}
                    >
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Name of collection:
                            </label>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Enter the collection name"
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="supply"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Max. supply of the collection:
                            </label>
                            <input
                                type="number"
                                name="supply"
                                id="supply"
                                placeholder="Enter maximum supply"
                                onChange={(e) => setMaxSupply(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Upload File
                            </label>

                            <div className="mb-8">
                                <input type="file" name="file" id="file" className="sr-only" onChange={(e) => setImage(e.target.files[0])} />
                                <label
                                    htmlFor="file"
                                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                >
                                    <div>
                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Drop files here
                                        </span>
                                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                                            Or
                                        </span>
                                        <span
                                            className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] hover:cursor-pointer"
                                        >
                                            Browse
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="price"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Price (In ETH):
                            </label>
                            <input
                                name="price"
                                id="price"
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter price of collection"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div>
                            <button
                                className="hover:shadow-form w-full rounded-md bg-gradient-to-br from-gray-800 to-black py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                type='submit'
                            >
                                Proceed
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <FooterNow />
        </div>
    );
}
import { NFTStorage } from "nft.storage";


