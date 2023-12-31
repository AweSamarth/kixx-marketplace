'use client'
import React from 'react';
import NavbarNow from '@/components/Navbar';
import FooterNow from '@/components/Footer';
import { useState } from 'react';
import { StoreNewBrand } from '@/components/StoreNewBrand';
import { readContract, writeContract } from "@wagmi/core";

import {
    LogInWithAnonAadhaar,
    useAnonAadhaar,
    AnonAadhaarProof,
    AnonAadhaarProvider,
  } from "anon-aadhaar-react";
 
  
  import { useContractWrite } from 'wagmi';
  import { ABI, ADDRESS } from '@/constants/both';
  
export default function Launch() {
    // Launch brand
    // Replace these values with actual data
    
    const app_id = "609246576999142755181287323616835836365844250624";
    

    const [anonAadhaar] = useAnonAadhaar();

    const [name, setName] = useState();
    const [image, setImage] = useState();



    const uploadAndWrite = async () => {
        
        try {
            const metadata = await StoreNewBrand(name, image);
            const uri= metadata.data.image.pathname.substring(2)

            const url = `https://ipfs.io/ipfs/${uri}`;
            console.log(url)
            const { hash } = await writeContract({
                address: ADDRESS,
                abi: ABI,
                functionName: "newBrand",
                args: [name, url],
              });

              console.log(hash)
            
            console.log("NFT metadata uploaded to IPFS");

        } 
        catch (err) {
            console.log(err);
        }
    };


    return (


        <>

        {anonAadhaar?.status==="logged-in"?
        
    (        <div className='bg-gradient-to-br from-gray-800 to-black'>
    <NavbarNow />
    <div className="flex items-center justify-center p-12 h-screen" >

        <div className="mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-lg shadow-gray-100">
            <form
                className="py-6 px-9"
                onSubmit={(e) => {
                    e.preventDefault(); // Prevents the default form submission behavior
                    uploadAndWrite();
                     // Call your upload function here
                }}
            >
                <div className="mb-5">
                    <label
                        htmlFor="name"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Name of the brand:
                    </label>
                    <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Enter your brand's name"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
               

                <div className="mb-6 pt-4">
                    <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                        Upload The Brand Logo
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

                

                <div>
                    <button
                        className="hover:shadow-form w-full rounded-md bg-gradient-to-br from-gray-800 to-black py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        type='submit'
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    </div>
    <FooterNow />
</div>):
<div className='bg-gradient-to-br from-gray-800 to-black flex justify-center h-screen content-center items-center'>
    
    
    <LogInWithAnonAadhaar />

</div>}

        </>
    );
}
