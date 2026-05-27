import {ReactNode} from "react";

interface ProjectRoleProps {
    role: ReactNode;
}

export default function ProjectRole({role}: ProjectRoleProps){
    return (
        <div id="role" className="section">
            <h1 className="section-title">Rôle personnel</h1>
            {role}
        </div>
    )
}