import ProjectCard from "../../../components/ProjectCard";

const getData = async()=>{
    const res = await fetch('')
    if(!res.ok){
        throw new Error("failed to fetch data")
    }
    return res.json
}

const resell = () => {
    <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
}