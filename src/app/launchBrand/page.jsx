'use client'
import React from 'react';
import NavbarNow from '@/components/Navbar';
import FooterNow from '@/components/Footer';
import { useState } from 'react';
export default function Launch() {
    // Replace these values with actual data
    const [name, setName] = useState();


    return (
        <div className='bg-gradient-to-br from-gray-800 to-black'>
            <NavbarNow />
            <div className="flex items-center justify-center p-12 h-screen">

                <div className="mx-auto w-full max-w-[550px] bg-white rounded-lg shadow-lg shadow-gray-100">
                    <p className='text-center text-xl pt-7 font-bold'>Create a New Brand</p>
                    <form
                        className="py-6 px-9"
                        action="https://formbold.com/s/FORM_ID"
                        method="POST"
                    >
                        <div className="mb-5">
                            <label
                                for="name"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Name of the brand:
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
                        

                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Upload The Brand Logo
                            </label>

                            <div className="mb-8">
                                <input type="file" name="file" id="file" className="sr-only" />
                                <label
                                    for="file"
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
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <FooterNow />
        </div>
    );
}