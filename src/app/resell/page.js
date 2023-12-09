"use client";
import ProjectCard from "../../../components/Card";
import NavbarNow from "@/components/Navbar";
import FooterNow from "@/components/Footer";
const shoes = [
    {
      name: "Chicago Reds",
      _id:1,
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      owner:'rami',
      image: '/sneaker.png',
      source_code_link: "https://github.com/",
      price:400
    },
    {
      name: "University Blues",
      _id:2,
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      owner:'sam',
      image: '/product1.png',
      source_code_link: "https://github.com/",
      price:450
    },
    {
      name: "air jonins",
      _id:3,
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      owner:'peter',
      image: '/product2.png',
      source_code_link: "https://github.com/",
      price:420
    },
    {
        name: "air max",
        _id:4,
        description:
          "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        owner:'ramu',
        image: '/product3.png',
        source_code_link: "https://github.com/",
        price:420
      },
      {
        name: "air max",
        _id:4,
        description:
          "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        owner:'ramu',
        image: '/product4.png',
        source_code_link: "https://github.com/",
        price:420
      },
      {
        name: "air max",
        _id:4,
        description:
          "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        owner:'ramu',
        image: '/product5.png',
        source_code_link: "https://github.com/",
        price:420
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
    console.log(data.purchasedFromCollections)
    return (
        <div className=" bg-white">
            <NavbarNow/>
            <h1 className=" text-gray-800 text-5xl flex justify-center m-8">BUY PREOWNED KIXX HERE</h1>
        <div className='mt-20 flex flex-wrap gap-7 justify-center m-24'>
        {projects.map((project,index) => (
          <ProjectCard props={project} key={index} />
        ))}
      </div>
      <FooterNow/>
      </div>
    )
}