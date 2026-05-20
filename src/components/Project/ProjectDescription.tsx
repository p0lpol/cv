import {ReactNode} from "react";

interface ProjectDescriptionProps {description: ReactNode;
    dates: ReactNode;
}

export default function ProjectDescription({ description, dates}: ProjectDescriptionProps) {
    return (
        <div id="description" className="scroll-section flex flex-col gap-4 bg-sky-900 p-4 rounded-xl shadow-cyan-950 shadow-xl">
            <h1 className="font-bold text-2xl text-emerald-200">Description</h1>
            <div>
                {description}
            </div>
            <h2>Dates</h2>
            <div>
                {dates}
            </div>
        </div>
    )
}