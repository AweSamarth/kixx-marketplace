'use client';

import Image from "next/image";
import { Alert, Navbar, Dropdown, Avatar } from "flowbite-react";
import NavbarNow from "@/components/Navbar";
import About from "@/components/About";
import FooterNow from "@/components/Footer";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Slider from "@/components/Slider";
// import About from "@/components/About";
import { AnonAadhaarProvider } from "anon-aadhaar-react";


export default function Home() {
  return (<div>
    <ConnectButton />
    <div className="w-full h-[900px] bg-gradient-to-br from-gray-800 to-black">
      <NavbarNow />
      <div className="flex flex-row">
        <div className="w-[50%] flex flex-col justify-center items-center h-[500px] sm:justify-center sm:items-center">
          <div className="w-[400px] space-y-16 ">
            <div className="text-[60px] text-white font-bold tracking-widest">
              <p className="drop-shadow-lg">KIXX</p>
              <p className="drop-shadow-lg ">Marketplace</p>
            </div>
            <div className="flex flex-row gap-x-16">
              <button className="border border-white p-4 text-white lg:text-base text-2xl rounded-md">BRANDS</button>
              <button className="p-4 text-white bg-[#FA662C] lg:text-base text-2xl rounded-md ">RESELLERS</button>
            </div>
          </div>
        </div>
        {/* For image */}
        <div className="w-[50%] flex flex-col justify-center items-center h-[500px] pr-28 pt-24">
          <Image
            src={"/sneaker.png"}
            width={700}
            height={700}
            className="hidden w-auto h-[45vh] lg:h-[48vh] md:h-[31vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill lg:block md:block"
          />
        </div>
      </div>
    </div>
    <About/>
    <Slider/>
    <FooterNow />
  </div>
  );
}
