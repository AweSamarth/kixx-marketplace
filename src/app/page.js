'use client';

import Image from "next/image";
import { Alert, Navbar, Dropdown, Avatar } from "flowbite-react";
import NavbarNow from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterNow from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <NavbarNow />
      <FooterNow />
    </div>
  );
}
