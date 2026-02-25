import {ReactNode} from "react";

export default function ProjectExpectations({expectations}: {expectations: ReactNode}) {
    return (
        <div id="expectations" className="scroll-section flex flex-col gap-4 bg-slate-900 p-4 rounded-xl shadow-slate-800 shadow-xl">
            <h1 className="font-bold text-2xl text-emerald-500">Attendues du projet</h1>
            {expectations}
        </div>
    )
}