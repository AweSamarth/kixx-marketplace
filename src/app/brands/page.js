"use client"
import BrandCard from "@/components/BrandCard";
import NavbarNow from "@/components/Navbar";
import FooterNow from "@/components/Footer";

import React from 'react'
let brands = [
    {name:'Nike',image:'/-nike-logo.png',brandId:1},
    {name:'Adidas',image:'/-Adidas-logo.png',brandId:2},
    {name:'Asics',image:'/asics-logo.png',brandId:3}
]
const Brand = () => {
  return (
    <div>
        <NavbarNow/>
        <div className='mt-20 flex flex-wrap gap-7 justify-center m-24'>
            {brands.map((brand) =>(
                <BrandCard props={brand}/>
            ))}
        </div>
        <FooterNow/>
    </div>
  )
}

export default Brand