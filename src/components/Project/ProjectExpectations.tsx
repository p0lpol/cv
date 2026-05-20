import {ReactNode} from "react";

export default function ProjectExpectations({expectations}: {expectations: ReactNode}) {
    return (
        <div id="expectations" className="scroll-section flex flex-col gap-4 bg-sky-900 p-4 rounded-xl shadow-cyan-950 shadow-xl">
            <h1 className="font-bold text-2xl text-emerald-200">Attendues du projet</h1>
            {expectations}
        </div>
    )
}