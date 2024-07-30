"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Skills",
        path: "/skills"
    },
    {
        name: "Projects",
        path: "/projects"
    }

]
function NavLinks() {
    const pathName = usePathname()
    return (
        <>
            {links.map((link, index) => {
                return (
                    <div key={index}>
                        <Link href={link.path} className={`${pathName === link.path && "border-b-2 border-white"}`}>
                            {link.name}
                        </Link>
                    </div>
                )
            })}
        </>

    );
}

export default NavLinks;