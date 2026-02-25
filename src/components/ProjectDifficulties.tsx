import DifficultyCard from "@/src/components/DifficultyCard";

export default function ProjectDifficulties({difficulties}: { difficulties: string[][] }) {
    return (
        <div>
            <h1>Difficultés rencontrées et solutions adoptées</h1>
            <div>
                {difficulties.map((arg, index) => (
                    <DifficultyCard key={index} difficulty={arg[0]} solution={arg[1]} result={arg[2]}/>
                ))}
            </div>
        </div>
    )
}