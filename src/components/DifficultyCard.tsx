interface DifficultyCardProps {
    difficulty: string;
    solution: string;
    result: string;
}

export default function DifficultyCard({difficulty, solution, result}: DifficultyCardProps) {
    return(
        <div>
            <div>
                <h1>Difficulté</h1>
                <p>{difficulty}</p>
            </div>
            <div>
                <h1>Solution</h1>
                <p>{solution}</p>
            </div>
            <div>
                <h1>Résultat</h1>
                <p>{result}</p>
            </div>
        </div>
    )
}