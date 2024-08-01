'use client'
import { motion } from "framer-motion";

function CommingSoon() {
    return (
        <>
        <motion.div
                
                animate={{ scale: [1,1.1,1] }}
                transition={{
                    duration: 2,
                    delay: 1,
                    repeat: Infinity, // Repeat infinitely
                    repeatType: 'loop', // Ensure the animation loops smoothly
                    

                }}
                className="grid grid-col-1 text-center pt-20 mx-10 text-2xl text-yellow-700">
                Comming Soon !!!
            </motion.div>
        </>
    );
}

export default CommingSoon;