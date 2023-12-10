"use client"
import { Alert, Navbar, Dropdown, Avatar } from "flowbite-react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { useState,useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function NavbarNow() {
  const [h,setH] = useState(true)

  useEffect(() => {
    const page = document.URL
    if(page=='/'){
      setH(true)
    }
    else{
      setH(false)
    }
  },[])
  return (
    <Navbar fluid rounded style={{ backgroundColor: 'transparent' }} >
      <Navbar.Brand href="/">
        <img src="/logo_kixx.png" className="mx-3 h-12 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">KIXX</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <ConnectButton />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse style={{ color: 'white' }}>
        <Navbar.Link href="/" active style={{ color: 'white' }}>
          Home
        </Navbar.Link>
        {h?<Navbar.Link href="#about" style={{ color: 'white' }}>
          About
        </Navbar.Link>
        :<Navbar.Link href="/#about" style={{ color: 'white' }}>
        About
      </Navbar.Link>}
        
        <Navbar.Link href="/brands" style={{ color: 'white' }}>
          Brands
        </Navbar.Link>
        <Navbar.Link href="/resell" style={{ color: 'white' }}>
          Preowned
        </Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}
