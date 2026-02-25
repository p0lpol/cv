import ProjectDescription from "@/src/components/Project/ProjectDescription";
import ProjectExpectations from "@/src/components/Project/ProjectExpectations";
import ProjectBonus from "@/src/components/Project/ProjectBonus";
import {ReactNode} from "react";
import ProjectDifficulties from "@/src/components/Project/ProjectDifficulties";
import ProjectScreenshots from "@/src/components/Project/ProjectScreenshots";
import ProjectLinks from "@/src/components/Project/ProjectLinks";

interface ProjectListProps {
    description: ReactNode;
    dates: ReactNode;
    expectations: ReactNode;
    bonus: ReactNode;
    difficulties: string[][];
    screenshots: string[][];
    links: string[][];
}

export default function ProjectList({description, dates, expectations, bonus, difficulties, screenshots, links}: ProjectListProps) {
    return (
        <div className="flex flex-col gap-4">
            <ProjectDescription {...{description, dates}}/>
            <ProjectExpectations {...{expectations}}/>
            <ProjectBonus {...{bonus}}/>
            <ProjectDifficulties {...{difficulties}}/>
            <ProjectScreenshots {...{screenshots}}/>
            <ProjectLinks {...{links}}/>
        </div>
    )
}