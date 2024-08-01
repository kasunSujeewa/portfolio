'use client'

import { motion } from "framer-motion";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";



function DetailsCard() {
    const mainHeader = "Hii Im Kasun Ranasinghe";
    const designation = "Software Engineer";
    const description = "I excel in both front-end and back-end technologies, including React, Next, Vue, Laravel, PHP, NestJS and NodeJS, and have a deep understanding of database management and server configuration. I have successfully delivered numerous projects across diverse industries, such as healthcare, education, and finance, creating responsive and user-friendly web applications that meet client requirements and industry standards."

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
                    {animatedHeader.map((char,index) => {
                        return (
                            <motion.span
                                key={index}
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
                    {animatedDesignation.map((char,index) => {
                        return (
                            <motion.span
                                key={index}
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
                    {animatedDescription.map((char,index) => {
                        return (
                            <motion.span
                                key={index}
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