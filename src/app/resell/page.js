import ProjectCard from "../../../components/Card";
const getData = async()=>{
    const res = await fetch(' "../../../dummy/data"')
    if(!res.ok){
        throw new Error("failed to fetch data")
    }
    return res.json
}

export default async function resell(){
    const projects = await getData()

    return (
        <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    )
}