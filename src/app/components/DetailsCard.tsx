'use client'

import { motion } from "framer-motion";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";



function DetailsCard() {
    const mainHeader = "Hii Im Kasun Ranasinghe";
    const designation = "Software Engineer";
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo asperiores laborum ad aperiam eaque rerum illum esse ratione, aliquam eos, mollitia incidunt veniam perspiciatis distinctio. Perspiciatis praesentium earum iste."

    const animatedHeader = splitStringUsingRegex(mainHeader);
    const animatedDesignation = splitStringUsingRegex(designation);
    const animatedDescription = splitStringUsingRegex(description);

    const charVariants = {
        hidden: { opacity: 0 },
        reveal: { opacity: 1 }
    }
    return (
        <div className="grid grid-cols-1 gap-1 text-center md:text-right content-center">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>

                </div>
                <motion.div className="title text-3xl"
                    initial="hidden"
                    whileInView="reveal"
                    transition={{ staggerChildren: 0.02 }}
                >
                    {animatedHeader.map((char) => {
                        return (
                            <motion.span
                                key={char}
                                transition={{ duration: 0.5 }}
                                variants={charVariants}>{char}</motion.span>
                        )
                    })}
                </motion.div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div></div>
                <motion.div className="text-2xl" initial="hidden"
                    whileInView="reveal"
                    transition={{ staggerChildren: 0.02 }}>
                    {animatedDesignation.map((char) => {
                        return (
                            <motion.span
                                key={char}
                                transition={{ duration: 0.5 }}
                                variants={charVariants}>{char}</motion.span>
                        )
                    })}
                </motion.div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div></div>
                <motion.div className="text-xl" initial="hidden"
                    whileInView="reveal"
                    transition={{ staggerChildren: 0.02 }}>
                    {animatedDescription.map((char) => {
                        return (
                            <motion.span
                                key={char}
                                transition={{ duration: 0.5 }}
                                variants={charVariants}>{char}</motion.span>
                        )
                    })}
                </motion.div>
            </div>


        </div>
    );
}

export default DetailsCard;