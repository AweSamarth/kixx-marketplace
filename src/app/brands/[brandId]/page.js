'use client'
import { useState } from "react"
import { useParams, usePathname } from "next/navigation"
import FooterNow from "@/components/Footer"
import NavbarNow from "@/components/Navbar"
import Image from "next/image"



const page = () => {
    const params = useParams()
    const path = usePathname()
    console.log(params)
    console.log(path)
  return (
    <div>
        <NavbarNow/>
        <FooterNow/>
    </div>
  )
}

export default page