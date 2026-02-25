import {ReactNode} from "react";

interface ProjectDescriptionProps {
    description: ReactNode;
    dates: ReactNode;
}

export default function ProjectDescription({ description, dates}: ProjectDescriptionProps) {
    return (
        <div id="description" className="scroll-section flex flex-col gap-4 bg-slate-900 p-4 rounded-xl shadow-slate-800 shadow-xl">
            <h1 className="font-bold text-2xl text-emerald-500">Description</h1>
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