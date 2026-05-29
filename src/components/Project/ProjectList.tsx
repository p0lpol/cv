import ProjectDescription from "@/src/components/Project/ProjectDescription";
import ProjectExpectations from "@/src/components/Project/ProjectExpectations";
import ProjectBonus from "@/src/components/Project/ProjectBonus";
import {ReactNode} from "react";
import ProjectDifficulties from "@/src/components/Project/ProjectDifficulties";
import ProjectScreenshots from "@/src/components/Project/ProjectScreenshots";
import ProjectLinks from "@/src/components/Project/ProjectLinks";
import ProjectRole from "@/src/components/Project/ProjectRole";
import {StaticImageData} from "next/image";

export interface ProjectListProps {
    description: ReactNode;
    dates: ReactNode;
    cadre: ReactNode;
    expectations: ReactNode;
    bonus?: ReactNode;
    role?: ReactNode;
    difficulties: string[][];
    screenshots: [StaticImageData, string, string][];
    links: [string, StaticImageData][];
}

export default function ProjectList({description, dates, cadre, expectations, bonus, role, difficulties, screenshots, links}: ProjectListProps) {
    return (
        <div className="flex flex-col gap-4">
            <ProjectDescription {...{description, dates, cadre}}/>
            <ProjectExpectations {...{expectations}}/>
            {bonus && <ProjectBonus {...{bonus}}/>}
            {role && <ProjectRole {...{role}}/>}
            <ProjectDifficulties {...{difficulties}}/>
            <ProjectScreenshots {...{screenshots}}/>
            <ProjectLinks {...{links}}/>
        </div>
    )
}