"use client";
import Card from "@/components/Card";
import NavbarNow from "@/components/Navbar";
import FooterNow from "@/components/Footer";
const shoes = [
    {
      _collectionName: "Chicago Reds",
      id:1,
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      owner:'rami',
      _imageUrl: '/sneaker.png',
      source_code_link: "https://github.com/",
      _priceInEth:4
    },
    {
      _collectionName: "University Blues",
      id:2,
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      owner:'sam',
      _imageUrl: '/product1.png',
      source_code_link: "https://github.com/",
      _priceInEth:4
    },
    {
      _collectionName: "air jonins",
      id:3,
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      owner:'peter',
      _imageUrl: '/product2.png',
      source_code_link: "https://github.com/",
      _priceInEth:420
    },
    {
      _collectionName: "air max",
        id:4,
        description:
          "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        owner:'ramu',
        _imageUrl: '/product3.png',
        source_code_link: "https://github.com/",
        _priceInEth:5
      },
      {
        _collectionName: "air max",
        id:4,
        description:
          "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        owner:'ramu',
        _imageUrl: '/product4.png',
        source_code_link: "https://github.com/",
        _priceInEth:3
      },
      {
        _collectionName: "air max",
        _id:4,
        description:
          "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        owner:'ramu',
        _imageUrl: '/product5.png',
        source_code_link: "https://github.com/",
        _priceInEth:22
      }
  ];


  import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

  import { gql } from "@apollo/client";
  
  const query = gql`
  query {
    purchasedFromCollections(first: 5) {
      id
      _buyer
      blockNumber
      blockTimestamp
    }
  }
  `;

export default function resell(){
    const projects = shoes
    const {data} = useSuspenseQuery(query)
    
    return (
        <div className=" bg-white">
            <div className="bg-gradient-to-br from-gray-800 to-black">
        <NavbarNow/>
        </div> 
            <h1 className=" text-gray-800 text-5xl flex justify-center m-8">BUY PREOWNED KIXX HERE</h1>
        <div className='mt-20 flex flex-wrap gap-7 justify-center m-24'>
        {projects.map((project,index) => (
          <Card props={project} key={index} />
        ))}
      </div>
      <FooterNow/>
      </div>
    )
}