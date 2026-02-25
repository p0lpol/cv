import ProjectDescription from "@/src/components/ProjectDescription";
import ProjectExpectations from "@/src/components/ProjectExpectations";
import ProjectBonus from "@/src/components/ProjectBonus";
import {ReactNode} from "react";
import ProjectDifficulties from "@/src/components/ProjectDifficulties";
import ProjectScreenshots from "@/src/components/ProjectScreenshots";
import ProjectLinks from "@/src/components/ProjectLinks";

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
        <div>
            <ProjectDescription {...{description, dates}}/>
            <ProjectExpectations {...{expectations}}/>
            <ProjectBonus {...{bonus}}/>
            <ProjectDifficulties {...{difficulties}}/>
            <ProjectScreenshots {...{screenshots}}/>
            <ProjectLinks {...{links}}/>
        </div>
    )
}