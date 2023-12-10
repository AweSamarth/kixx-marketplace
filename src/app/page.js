'use client';

import Image from "next/image";
import { Alert, Navbar, Dropdown, Avatar } from "flowbite-react";
import NavbarNow from "@/components/Navbar";
import About from "@/components/About";
import FooterNow from "@/components/Footer";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Slider from "@/components/Slider";
import { AnonAadhaarProvider } from "anon-aadhaar-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-screen lg:h-[900px] h-[550px] bg-gradient-to-br from-gray-800 to-black">
        <NavbarNow />
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-[50%] flex flex-col justify-center items-center h-[500px] w-screen">
            <div className="lg:w-[400px] space-y-16 w-screen">
              <div className="lg:text-[60px] text-[40px] text-white font-bold tracking-widest lg:flex-none flex flex-col justify-center lg:items-start items-center">
                <p className="drop-shadow-lg">KIXX</p>
                <p className="drop-shadow-lg ">Marketplace</p>
                <p className="drop-shadow-lg text-orange-300 text-[40px] font-semibold">Cop the real</p>
              </div>
              <div className="flex flex-row gap-x-16 justify-center lg:justify-start">
                <Link href="/brands"> <button className="border border-white lg:p-4 sm:p-2 p-3 text-white lg:text-base text-md rounded-md">BRANDS</button></Link>
                <button className="lg:p-4 sm:p-2 p-3 text-white bg-[#FA662C] lg:text-base text-md rounded-md ">RESELLERS</button>
              </div>
            </div>
          </div>
          {/* For image */}
          <div className="hidden w-[50%] flex-col justify-center items-center h-[500px] pr-28 pt-24 lg:block">
            <Image
              src={"/sneaker.png"}
              width={700}
              height={700}
              className="w-auto h-[45vh] lg:h-[48vh] md:h-[31vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill"
            />
          </div>
        </div>
      </div>
      <About id='about'/>
      <Slider />
      <div className="bg-[#151030]">
      <FooterNow />
      </div>
    </div>
  );
}
