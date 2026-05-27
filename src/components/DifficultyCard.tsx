interface DifficultyCardProps {
    difficulty: string;
    solution: string;
    result: string;
}

export default function DifficultyCard({difficulty, solution, result}: DifficultyCardProps) {
    return(
        <div className="grid grid-rows-3 gap-4 bg-zinc-900 p-4 rounded-2xl">
            <div className="difficulty-subsection bg-red-900/20">
                <h1 className="difficulty-title text-red-600">Difficulté</h1>
                <p>{difficulty}</p>
            </div>
            <div className="difficulty-subsection bg-green-400/20">
                <h1 className="difficulty-title text-emerald-400">Solution</h1>
                <p>{solution}</p>
            </div>
            <div className="difficulty-subsection bg-sky-900/20">
                <h1 className="difficulty-title text-slate-300">Résultat</h1>
                <p>{result}</p>
            </div>
        </div>
    )
}