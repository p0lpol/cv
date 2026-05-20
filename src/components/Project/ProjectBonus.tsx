import {ReactNode} from "react";

interface ProjectBonusProps {
    bonus: ReactNode;
}

export default function ProjectBonus({bonus}: ProjectBonusProps){
    return (
        <div id="bonus" className="scroll-section flex flex-col gap-4 bg-sky-900 p-4 rounded-xl shadow-cyan-950 shadow-xl">
            <h1 className="font-bold text-2xl text-emerald-200">Fonctionnalités supplémentaires</h1>
            {bonus}
        </div>
    )
}