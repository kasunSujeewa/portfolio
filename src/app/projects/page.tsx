import { Metadata } from "next";
import ProjectCard from "./components/ProjectCard";
import ProjectsData  from "./components/Projects";


export const metadata: Metadata = {
  title: "Projects"
};


function Projects() {
    return (
        <>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-4 py-3 justify-items-center">
            <div className="hidden lg:grid"></div>
            {ProjectsData.map((project) =>{
                return(
                    
                    <ProjectCard project={project}/>
                )
            })}
             <div className="hidden lg:grid"></div>
           </div>
        </>
    );
}

export default Projects;