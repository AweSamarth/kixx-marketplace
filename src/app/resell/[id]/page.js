'use client'

import { useParams, usePathname } from "next/navigation"
import Image from "next/image"
const kickId = () => {
    const params = useParams()
    const path = usePathname()
    console.log(params)
    console.log(path)
    return (
    <div className="flex m-8">
        <div className="">
        <Image
        src='https://w0.peakpx.com/wallpaper/708/111/HD-wallpaper-jordan-1-air-jordan-air-jordan-1-grey-jordan-jordan-one-red-jordan-shoe-snicker-thumbnail.jpg'
        width={750}
        height={100 }
        objectFit="cover"
        />
        </div>
      <div className="ml-8">
        <h1 className=" text-9xl">name</h1>
        <p className=" pt-60 text-xl">price</p>
        <p>current owner</p>
      </div>
    </div>
  )
}

export default kickId