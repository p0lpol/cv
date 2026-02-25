import {ReactNode} from "react";

export default function ProjectExpectations({expectations}: {expectations: ReactNode}) {
    return (
        <div className="flex flex-col gap-4">
            <h1>Attendues du projet</h1>
            {expectations}
        </div>
    )
}