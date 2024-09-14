'use client'

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function ButtonDownload() {
    const handleDownload = () => {
        const fileUrl = 'cv/Kasun-Ranasinghe-SE.pdf'; // Update with your file name
    
        // Create a link element
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Kasun-Ranasinghe-SE.pdf'; // Set the file name
    
        // Append the link to the body
        document.body.appendChild(link);
    
        // Trigger the click event
        link.click();
    
        // Remove the link from the document
        document.body.removeChild(link);
      }
    return (
        <motion.div whileHover={{ scale: 1.2, textShadow: "0px 0px 10px rgb(255,255,255)" }}>
        <Button className="border rounded-lg" onClick={handleDownload}>Download CV</Button>
      </motion.div>
    );
}

export default ButtonDownload;