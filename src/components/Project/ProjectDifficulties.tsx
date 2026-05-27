import DifficultyCard from "@/src/components/DifficultyCard";

export default function ProjectDifficulties({difficulties}: { difficulties: string[][] }) {
    return (
        <div id="difficulties" className="section">
            <h1 className="section-title">Difficultés rencontrées et solutions adoptées</h1>
            <div className="grid grid-cols-2 gap-4">
                {difficulties.map((arg, index) => (
                    <DifficultyCard key={index} difficulty={arg[0]} solution={arg[1]} result={arg[2]}/>
                ))}
            </div>
        </div>
    )
}