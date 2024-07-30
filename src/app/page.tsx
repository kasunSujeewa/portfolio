'use client'
import { Button } from "@/components/ui/button";
import DetailsCard from "./components/DetailsCard";
import ImageCard from "./components/ImageCard";
import { motion } from "framer-motion";



export default function Home() {

  const handleDownload = () => {
    const fileUrl = 'cv/cv.pdf'; // Update with your file name

    // Create a link element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'cv.pdf'; // Set the file name

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-96 my-5 p-10 gap-4 content-center">
      <div className="grid order-last sm:order-first">
        <DetailsCard />
      </div>
      <div className="grid justify-center sm:justify-start">
        <ImageCard />
      </div>
      <div className="grid sm:col-span-2 py-5 text-center w-20 mx-auto order-last">
        <motion.div whileHover={{ scale: 1.2 }}>
          <Button className="border rounded-lg" onClick={handleDownload}>Download CV</Button>
        </motion.div>
      </div>

    </div>
  );
}
