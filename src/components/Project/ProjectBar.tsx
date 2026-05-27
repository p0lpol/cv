"use client";

import ProjectBarItem from "@/src/components/Project/ProjectBarItem";
import {useScrollSpy} from "@/src/hooks/useScrollSpy";

interface ProjectBarProps {
    bonus?: boolean;
    role?: boolean;
}

export default function ProjectBar({ bonus = false, role = false }: ProjectBarProps) {
    const sectionIds = [
        "description",
        "expectations",
        bonus ? "bonus" : "",
        role ? "role" : "",
        "difficulties",
        "screenshots",
        "links"
    ].filter(Boolean);

    const activeSection = useScrollSpy(sectionIds);

    return (
        <nav className="flex sticky top-6 h-fit flex-col w-1/10 px-8 py-4 gap-4 bg-sky-900 font-bold rounded-2xl z-50">
            <ProjectBarItem title="Description" anchor="#description" isActive={activeSection === "description"} />
            <ProjectBarItem title="Attendues" anchor="#expectations" isActive={activeSection === "expectations"} />

            {bonus && <ProjectBarItem title="Bonus" anchor="#bonus" isActive={activeSection === "bonus"} />}
            {role && <ProjectBarItem title="Role" anchor="#role" isActive={activeSection === "role"} />}

            <ProjectBarItem title="Difficultés" anchor="#difficulties" isActive={activeSection === "difficulties"} />
            <ProjectBarItem title="Screenshots" anchor="#screenshots" isActive={activeSection === "screenshots"} />
            <ProjectBarItem title="Liens" anchor="#links" isActive={activeSection === "links"} />
        </nav>
    );
}