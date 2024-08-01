'use client'

import { delay, motion } from "framer-motion";


function ImageCard() {
    return (


        <motion.div whileHover={{ scale: 1.2}} className=" h-72 w-72 p-4 rounded-xl bg-author-image bg-cover">
        </motion.div>

    );
}

export default ImageCard;