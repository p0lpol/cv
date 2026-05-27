import {ReactNode} from "react";

interface ProjectDescriptionProps {
    description: ReactNode;
    dates: ReactNode;
    cadre: ReactNode;
}

export default function ProjectDescription({ description, dates, cadre}: ProjectDescriptionProps) {
    return (
        <div id="description" className="section">
            <h1 className="section-title">Description</h1>
            <div className="project-description-div">
                {description}
            </div>
            <h2 className={"section-subtitle"}>Dates</h2>
            <div className="project-description-div">
                {dates}
            </div>
            <h2 className={"section-subtitle"}>Cadre</h2>
            <div className="project-description-div">
                {cadre}
            </div>
        </div>
    )
}