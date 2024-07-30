'use client'
import { motion } from "framer-motion";


function Projects() {
    return (
        <>
            <div className="grid grid-cols-1 text-center mt-40 text-2xl" >
                Still Not Published Any Projects
            </div>
            <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                    duration: 2,
                    delay: 2

                }}
                whileHover={{
                    scale: 1.2
                }}
                className="grid grid-col-1 text-center mt-10 text-2xl text-yellow-700">
                Comming Soon !!!
            </motion.div>
        </>
    );
}

export default Projects;