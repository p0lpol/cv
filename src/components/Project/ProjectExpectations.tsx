import {ReactNode} from "react";

export default function ProjectExpectations({expectations}: {expectations: ReactNode}) {
    return (
        <div id="expectations" className="section">
            <h1 className="section-title">Attendues du projet</h1>
            {expectations}
        </div>
    )
}