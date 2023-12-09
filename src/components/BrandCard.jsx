
'use client';

import { Card } from 'flowbite-react';

export default function BrandCard({props}) {
  return (
    

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={`/brands/${props.brandId}`}>
        <img class="p-8 rounded-t-lg" src={props.image} alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        </a>
    </div>
</div>

  );
}
