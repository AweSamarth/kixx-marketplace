"use client"
import { Alert, Navbar, Dropdown, Avatar } from "flowbite-react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { useState,useEffect } from "react";
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
    <Navbar fluid rounded style={{ backgroundColor: 'transparent' }}>
      <Navbar.Brand href="/">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">KIXX</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
          </Dropdown.Header>
          <Link href="#"><Dropdown.Item>
            <div className="flex items-center gap-x-3">
              <MdDashboard className="text-xl" />
              <p className="text-md">Dashboard</p>
            </div>
          </Dropdown.Item></Link>
          <Link href="/notification"><Dropdown.Item>
            <div className="flex items-center gap-x-3">
              <IoIosNotifications className="text-xl" />
              <p className="text-md">Notifications</p>
            </div>
          </Dropdown.Item></Link>
          <Dropdown.Divider />
          <Dropdown.Item>
            <div className="flex items-center gap-x-3">
              <FaSignOutAlt className="text-xl" />
              <p className="text-md">Sign out</p>
            </div>
          </Dropdown.Item>
        </Dropdown>
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
          Resellers
        </Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}
