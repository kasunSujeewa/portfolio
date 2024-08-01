'use client';
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";


function Education() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    
    return (
        <motion.div
        ref={ref}
        style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
        }}>
            <div className="grid text-2xl py-5">
                Education
            </div>
            <hr />
            <div className="grid grid-cols-2 sm:grid-cols-9 md:grid-cols-7 py-5">
                <div className="grid col-span-2 sm:col-span-4 md:col-span-3 grid-cols-2">
                    <div className="grid grid-cols-1 gap-1 md:gap-3 py-3">
                        <div className="grid">
                            Sabaragamuwa University Of Srilanka 2018-JAN To 2022 - JAN
                        </div>
                        <div className="grid">
                            Computing & Infromation System (BSc.Hons)
                        </div>
                    </div>
                    <div className="grid justify-center">
                        <Image src="/logos/SUSL.png" width={100} height={100} alt="" />
                    </div>

                </div>
                <div className="hidden sm:grid"></div>
                <div className="grid col-span-2 sm:col-span-4 md:col-span-3 grid-cols-2">
                    <div className="grid justify-center order-last sm:order-first">
                        <Image src="/logos/rcc-copy.png" width={100} height={100} alt="" />
                    </div>
                    <div className="grid grid-cols-1 gap-1 md:gap-3 py-3">

                        <div className="grid">
                            Ruwanwella Rajasinghe Central Collage
                        </div>
                        <div className="grid">
                            A/L Maths
                        </div>
                    </div>


                </div>
            </div>
        </motion.div>
    );
}

export default Education;