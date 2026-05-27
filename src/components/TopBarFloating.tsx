"use client"

import {usePathname} from "next/navigation";
import TopBarItem from "@/src/components/TopBarItem";

const items = [
    { title: "Accueil", link: "/"},
    { title: "Formation", link: "/formation"},
    { title: "Projets", link: "/projets"},
    { title: "Compétences", link: "/competences"},
    { title: "Experience", link: "/experience"},
    { title: "Contact", link: "/contact"},
];

export default function TopBarFloating() {
    const pathname = usePathname();

    return (
        <nav className=" relative grid grid-flow-col grid-cols-6 gap-6 px-6 pt-4 text-lg
        bg-sky-900 rounded-full w-full overflow-hidden shadow-lg shadow-sky-950/90 border-2 border-sky-950/10">
            {items.map((item, index) => {
                const isActive = item.link === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.link);
               return <TopBarItem title={item.title} link={item.link} active={isActive} key={index} />;
            })}
        </nav>
    );
}