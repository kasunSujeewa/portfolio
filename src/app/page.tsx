
import DetailsCard from "./components/DetailsCard";
import ImageCard from "./components/ImageCard";
import ButtonDownload from "./components/ButtonDownload";
import Head from "next/head";
import { Metadata } from "next";
import Experience from "./components/Experience";
import Education from "./components/Education";


export const metadata: Metadata = {
  title: "Home"
};

export default function Home() {

  
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-96 my-5 p-10 gap-4 content-center">
      <div className="grid order-last sm:order-first">
        <DetailsCard />
      </div>
      <div className="grid justify-center sm:justify-start">
        <ImageCard />
      </div>
      <div className="grid sm:col-span-2 py-5 text-center w-20 mx-auto order-last">
        <ButtonDownload/>
      </div>

    </div>
      <div className="grid grid-cols-1 text-center px-10 ">
        <Experience/>
      </div>
      <div className="grid grid-cols-1 text-center px-10 ">
        <Education/>
      </div>
    </>
  );
}
