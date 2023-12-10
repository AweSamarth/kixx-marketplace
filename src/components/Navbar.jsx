"use client"
import { Alert, Navbar, Dropdown, Avatar } from "flowbite-react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function NavbarNow() {
  return (
    <Navbar fluid rounded style={{ backgroundColor: 'transparent' }}>
      <Navbar.Brand href="/">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">KIXX</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <ConnectButton />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse style={{ color: 'white' }}>
        <Navbar.Link href="#" active style={{ color: 'white' }}>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" style={{ color: 'white' }}>
          About
        </Navbar.Link>
        <Navbar.Link href="/brands" style={{ color: 'white' }}>
          Brands
        </Navbar.Link>
        <Navbar.Link href="/resell" style={{ color: 'white' }}>
          Resellers
        </Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}
