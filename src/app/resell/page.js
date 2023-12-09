import ProjectCard from "../../../components/Card";
const shoes = [
    {
      name: "Chicago Reds",
      _id:1,
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      owner:'rami',
      image: '../public',
      source_code_link: "https://github.com/",
      price:400
    },
    {
      name: "University Blues",
      _id:2,
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      owner:'sam',
      image: '../public',
      source_code_link: "https://github.com/",
      price:450
    },
    {
      name: "air jonins",
      _id:3,
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      owner:'peter',
      image: '../public',
      source_code_link: "https://github.com/",
      price:420
    },
  ];
const getData = async()=>{
    const res = await fetch('/api/dummy')
    if(!res.ok){
        throw new Error("failed to fetch data")
    }
    return res.json
}

export default async function resell(){
    const projects = shoes

    return (
        <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project) => (
          <ProjectCard props={project} />
        ))}
      </div>
    )
}