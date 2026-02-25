import {ReactNode} from "react";
interface ProjectBonusProps {
    bonus: ReactNode;
}

export default function ProjectBonus({bonus}: ProjectBonusProps){
    return (
        <div>
            <h1>Fonctionnalités supplémentaires</h1>
            {bonus}
        </div>
    )
}