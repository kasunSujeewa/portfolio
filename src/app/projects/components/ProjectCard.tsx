'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Project } from '../../Interfaces/Project'

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div onClick={handleFlip} className="cursor-pointer" >
            <AnimatePresence initial={false} mode="wait">
                {flipped ? (
                    <motion.div
                        key="back"
                        initial={{ rotateY: 90 }}
                        animate={{ rotateY: 0 }}
                        exit={{ rotateY: 90 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="text-center" style={{ perspective: 1000, width: "300px", height: "300px" }}>
                            <CardHeader>
                                Technologies
                            </CardHeader>
                            <CardContent>
                                <ul>
                                    {project.languages.map((lang, index) => {
                                        return (
                                            <li key={index}>{lang}</li>
                                        )
                                    })}
                                </ul>
                            </CardContent>
                            <CardFooter className="justify-center">
                                <a href={project.link} target="_blank" className="underline">Visit Site</a>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ) : (
                    <motion.div
                        key="front"
                        initial={{ rotateY: -90 }}
                        animate={{ rotateY: 0 }}
                        exit={{ rotateY: -90 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="text-center bg-black text-white" style={{ perspective: 1000, width: "300px", height: "300px" }}>
                            <CardHeader>
                                {project.title}
                            </CardHeader>
                            <CardContent>
                                {project.description}
                            </CardContent>
                            <CardFooter className="justify-center">
                                <a href="#">More Info</a>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ProjectCard;
