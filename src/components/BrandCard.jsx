
'use client';

import { Card } from 'flowbite-react';

export default function BrandCard({ props }) {
  return (

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 119fdbc6686a17f840b9d2c51ddcb51663502591

    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className='h-[300px]'>
        <a href={`/brands/${props.brandId}`}>
          <img className="p-8 rounded-t-lg" src={props.image} alt="product image" />
<<<<<<< HEAD
=======
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={`/brands/${props.brandId}`}>
        <img className="p-8 rounded-t-lg" src={props.image} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
>>>>>>> 71dc999b2705cf3a91a488d4a86dcdb10ddf6ec1
=======
>>>>>>> 119fdbc6686a17f840b9d2c51ddcb51663502591
        </a>
      </div>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        </a>
      </div>
    </div>

  );
}

