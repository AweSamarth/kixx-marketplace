import { NextResponse } from "next/server";

export function GET(req){
    const shoes = [
        {
          name: "Chicago Reds",
          id:1,
          description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
          owner:'rami',
          image: '../public',

        },
        {
          name: "University Blues",
          id:2,
          description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
          owner:'sam',
          image: '../public',

        },
        {
          name: "air jonins",
          id:3,
          description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
          owner:'peter',
          image: '../public',

        },
      ];
    
    return NextResponse.json(shoes)
}