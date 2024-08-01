import SkillCarousel from "./components/SkillCarousel";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Skills"
};

function Skills() {
    return (
        <SkillCarousel />
    );
}

export default Skills;