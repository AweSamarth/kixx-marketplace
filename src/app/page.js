'use client';

import Image from "next/image";
import { Alert, Navbar, Dropdown, Avatar } from "flowbite-react";
import NavbarNow from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterNow from "@/components/Footer";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (<div>
    <ConnectButton />
    <NavbarNow />
    <FooterNow />
    </div>
  );
}
