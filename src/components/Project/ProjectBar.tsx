import ProjectBarItem from "@/src/components/Project/ProjectBarItem";

export default function ProjectBar() {
    return (
        <nav className=" hidden md:flex sticky left-6 top-6 z-50
        flex-col gap-6 px-6 p-6 text-lg
         bg-slate-900 rounded-xl shadow-2xl border border-slate-800">
            <ProjectBarItem title="Description" anchor="#description"/>
            <ProjectBarItem title="Attendues" anchor="#expectations"/>
            <ProjectBarItem title="Bonus" anchor="#bonus"/>
            <ProjectBarItem title="Difficultés" anchor="#difficulties"/>
            <ProjectBarItem title="Screenshots" anchor="#screenshots"/>
            <ProjectBarItem title="Liens" anchor="#links"/>
        </nav>
    )
}