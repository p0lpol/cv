import DifficultyCard from "@/src/components/DifficultyCard";

export default function ProjectDifficulties({difficulties}: { difficulties: string[][] }) {
    return (
        <div id="difficulties" className="scroll-section flex flex-col gap-4 bg-slate-900 p-4 rounded-xl shadow-slate-800 shadow-xl">
            <h1 className="font-bold text-2xl text-emerald-500">Difficultés rencontrées et solutions adoptées</h1>
            <div className="grid grid-cols-2 gap-4">
                {difficulties.map((arg, index) => (
                    <DifficultyCard key={index} difficulty={arg[0]} solution={arg[1]} result={arg[2]}/>
                ))}
            </div>
        </div>
    )
}