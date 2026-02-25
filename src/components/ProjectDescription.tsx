import {ReactNode} from "react";

interface ProjectDescriptionProps {
    content: ReactNode;
}

export default function ProjectDescription({ content}: ProjectDescriptionProps) {
    return (
        <div className="flex flex-col gap-4">
            {content}
        </div>
    )
}