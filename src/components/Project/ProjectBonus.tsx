import {ReactNode} from "react";

interface ProjectBonusProps {
    bonus: ReactNode;
}

export default function ProjectBonus({bonus}: ProjectBonusProps){
    return (
        <div id="bonus" className="section">
            <h1 className="section-title">Fonctionnalités supplémentaires</h1>
            {bonus}
        </div>
    )
}