import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Card = ({ props }) => {
    return (

        <div className="w-full max-w-sm bg-transparent rounded-lg dark:bg-gray-800 dark:border-gray-500 p-8 align-text-bottom flex flex-col justify-between">
            <div className='px-8 h-12'>
                <Link href={`/resell/${props._id}`}>

                    <img className="rounded-t-lg bg-transparent transitions-theme rotate-0 hover:rotate-[25deg] max-h-12" src={props.image} alt="product image" />

                </Link>
            </div>
            <div className="px-7 pb-7 align-bottom pt-5">
                <a href={`/resell/${props._id}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-600 dark:text-white">{props.name}</h5>
                </a>
                <div className="flex items-center justify-between pb-4">
                    <span className="text-3xl font-bold text-gray-400 dark:text-white">${props.price}</span>
                    {/* <a href="/checko" className="text-white mb-2 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Buy Now</a> */}
                </div>
            </div>
        </div>

    ) 
}

export default Card