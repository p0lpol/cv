interface DifficultyCardProps {
    difficulty: string;
    solution: string;
    result: string;
}

export default function DifficultyCard({difficulty, solution, result}: DifficultyCardProps) {
    return(
        <div className="grid grid-rows-3 gap-4 bg-zinc-900 p-4 rounded-2xl">
            <div className="flex flex-col flex-1 gap-2 p-4 bg-red-900/20 rounded-xl">
                <h1 className="text-xl text-red-700 font-bold">Difficulté</h1>
                <p>{difficulty}</p>
            </div>
            <div className="flex flex-col flex-1 gap-2 p-4 bg-emerald-900/20 rounded-xl">
                <h1 className="text-xl text-emerald-700 font-bold">Solution</h1>
                <p>{solution}</p>
            </div>
            <div className="flex flex-col flex-1 gap-2 p-4 bg-sky-900/20 rounded-xl">
                <h1 className="text-xl text-sky-700 font-bold">Résultat</h1>
                <p>{result}</p>
            </div>
        </div>
    )
}