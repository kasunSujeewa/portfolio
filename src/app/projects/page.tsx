import { Metadata } from "next";
import CommingSoon from "./components/CommingSoon";


export const metadata: Metadata = {
  title: "Projects"
};


function Projects() {
    return (
        <>
            <div className="grid grid-cols-1 text-center mt-40 text-2xl" >
                Still Not Published Any Projects
            </div>
            <CommingSoon/>
        </>
    );
}

export default Projects;