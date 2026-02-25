import {ReactNode} from "react";

interface ProjectDescriptionProps {
    description: ReactNode;
    dates: ReactNode;
}

export default function ProjectDescription({ description, dates}: ProjectDescriptionProps) {
    return (
        <div className="flex flex-col gap-4">
            <h1>Description</h1>
            <div>
                {description}
            </div>
            <h2>Dates</h2>
            <div>
                {dates};
            </div>
        </div>
    )
}