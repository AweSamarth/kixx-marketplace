'use client'
import { useState } from "react"
import { useParams, usePathname } from "next/navigation"
import FooterNow from "@/components/Footer"
import NavbarNow from "@/components/Navbar"
import Image from "next/image"
const kickId = () => {
    const params = useParams()
    const path = usePathname()
    console.log(params)
    console.log(path)

    const [size, setSize] = useState(undefined);
 
    const options = [
        "6",
        "7",
        "8",
        "9",
        "10",
        '11',
    ];
    const onOptionChangeHandler = (event) => {
        setData(event.target.value);
        console.log(
            "User Selected Value - ",
            event.target.value
        );
    };

    return (
      <div className="bg-gradient-to-br from-gray-800 to-black dark:bg-gray-800 ">
        <NavbarNow/>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 119fdbc6686a17f840b9d2c51ddcb51663502591
      <div className="py-8 h-full lg:h-screen flex-none mt-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4 justify-center it">
              <div class="md:flex-1 px-4">
                  <div class="h-[460px] max-w-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
<<<<<<< HEAD
=======
      <div className=" dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4 justify-center it">
              <div className="md:flex-1 px-4">
                  <div className="h-[460px] max-w-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
>>>>>>> 71dc999b2705cf3a91a488d4a86dcdb10ddf6ec1
=======
>>>>>>> 119fdbc6686a17f840b9d2c51ddcb51663502591
                  <div className=" relative object-cover  h-[460px] ">
                  <Image
                  className="rounded-lg left-4"
                  src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/390ed0de-62e8-4698-8383-bad3b9092583/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png'
                  // width={600}
                  // height={100}
                  fill
                  // objectFit="contain"
                  />
        </div>
                </div>
                  <div className="flex -mx-2 mb-4 items-center justify-center">
                  </div>
              </div>
              <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-300 dark:text-white mb-2">Product Name</h2>
                  <p className="text-gray-400 dark:text-gray-300 text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                      ante justo. Integer euismod libero id mauris malesuada tincidunt.
                  </p>
                  <div className="flex mb-4">
                      <div className="mr-4">
                          <span className="font-bold text-gray-300 dark:text-gray-300">Price:</span>
                          <span className="text-gray-400 dark:text-gray-300 ml-1">$29.99</span>
                      </div>
                      <div>
                          <span className="font-bold text-gray-300 dark:text-gray-300">Availability:</span>
                          <span className="text-gray-400 dark:text-gray-300 ml-1">In Stock</span>
                      </div>
                  </div>
                  <div className="mb-4">
                      <span className="font-bold text-gray-300 dark:text-gray-400 mr-2">Select Size:</span>
                      <select className=" h-9 p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onOptionChangeHandler}>
                  <option>--size--</option>
                  {options.map((option, index) => {
                      return (
                          <option key={index}>
                              {option}
                          </option>
                      );
                  })}
              </select>
                  </div>
                  <div>
                      <span className="font-bold text-gray-300 dark:text-gray-300">Product Description:</span>
                      <p className="text-gray-400 dark:text-gray-300 text-sm mt-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                          sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                          lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                          ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                          sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                      </p>
                  </div>
                  <div className="flex -mx-2 mb-4 items-center justify-center">
                      <div className="w-1/2 px-2">
                          <button className="w-full bg-slate-200 mt-6 dark:bg-gray-600 text-tertiary py-2 px-4 rounded-full font-bold hover:bg-gray-400 dark:hover:bg-gray-700">Checkout</button>
                      </div>
                  </div>
              </div>
              
          </div>
      </div>
  </div>
  <FooterNow/>
  </div>
  )
}

export default kickId