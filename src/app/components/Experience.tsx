'use client'
import Image from "next/image";
import ClientImage from "./ClientImage";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";



function Experience() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    return (
        <>
        <motion.div
        ref={ref}
        style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
        }}
        >
            <div className="grid text-2xl pb-5">
                Experience
            </div>
            <hr />
            <div className="grid grid-cols-1 sm:grid-cols-3 py-5">
                <div className="grid grid-cols-1 gap-3 py-3 order-last sm:order-first">
                    <div className="grid">
                        Well Tech Solutions 2021-JAN To 2021 - JUN
                    </div>
                    <div className="grid">
                        Software Engineer Internship
                    </div>
                </div>
                <div className="grid justify-center">
                    <Image src="/logos/well-tech.jpg" width={100} height={100} alt="" />
                </div>
                <div className="grid grid-cols-1 gap-3 py-3 order-last">
                    <div className="grid">
                        Well Tech Solutions 2021-JUN To PRESENT
                    </div>
                    <div className="grid">
                        Software Engineer
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 py-5">
                <div className="grid grid-cols-1 gap-3 py-3">
                    <div className="grid">
                        Freelance
                    </div>
                    <div className="grid">
                        Software Engineer
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 col-span-2 justify-center">
                <ClientImage/>
                    
                </div>
            </div>
        </motion.div>
            
        </>

    );
}

export default Experience;