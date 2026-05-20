import BigList from "@/src/components/BigList";
import Collection from "@/src/components/Collection";

export default function Competences() {

    const hardSkillCard = {
        name: "Hard Skills",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS_code_on_a_screen_%28Unsplash%29.jpg",
        description:
        <ul className="list-disc flex flex-col flex-1 justify-evenly pl-12">
            <li>Analyse des besoins et modélisation</li>
            <li>Développement Orienté Objet</li>
            <li>Conception d'applications Web Fullstack</li>
            <li>Administration de bases de données relationnelles</li>
            <li>Administration système Linux & Scripting</li>
            <li>Gestion de projet Agile & Versioning</li>
        </ul>,
        link: "#",
        size: 96,
        imgSize: 3
    };

    const softSkillCard = {
        name: "Soft Skills",
        image: "/handshake.jpg",
        description:
            <ul className="list-disc list-outside flex flex-col flex-1 justify-evenly text-gray-200 pl-12">
                <li> <strong>Communication technique :</strong> Anglais professionnel et capacité de synthèse. </li>
                <li> <strong>Travail collaboratif :</strong> Engagement actif au sein d'équipes de développement. </li>
                <li> <strong>Agilité :</strong> Application des rituels Scrum et des méthodes Kanban. </li>
                <li> <strong>Autonomie :</strong> Capacité d'adaptation et résolution de problèmes complexes. </li>
                <li> <strong>Veille technologique :</strong> Curiosité intellectuelle et auto-formation continue. </li>
                <li> <strong>Gestion de projet :</strong> Respect des deadlines et organisation des priorités. </li>
                <li> <strong>Aisance relationnelle :</strong> Présentation et vulgarisation de solutions techniques. </li>
            </ul>,
        link: "#",
        size: 96,
        imgSize: 3
    }

    return (
        <div className="w-full">
            <h1 className="text-cyan-900 text-5xl font-bold font-serif p-8">Compétences</h1>

            <div className="flex flex-col flex-1 w-full items-center mb-15">
                <BigList items={[hardSkillCard, softSkillCard]}/>
            </div>

            <h1 className="text-cyan-900 text-5xl font-bold font-serif p-8">Langages / Technologies</h1>
            <div className="flex flex-col flex-1 w-full items-center mb-15">
                <div className="flex flex-col items-baseline bg-cyan-900 rounded-lg p-4 w-4/5 shadow-xl shadow-slate-800">
                    <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                        <h2 className="text-2xl font-bold">Programmation</h2>
                        <Collection items={[
                            {name: "java", image: "/logo/java.svg"},
                            {name: "C", image: "/logo/c.svg"},
                            {name: "python", image: "/logo/python.svg"}]}/>
                    </div>
                    <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                        <h2 className="text-2xl font-bold">Web</h2>
                        <Collection items={[
                        {name: "JavaScript", image: "/logo/javascript.svg"},
                        {name: "TypeScript", image: "/logo/typescript.svg"},
                        {name: "HTML", image: "/logo/html.svg"},
                        {name: "CSS", image: "/logo/css.svg"}
                            ]}/>
                    </div>
                    <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                        <h2 className={`text-2xl font-bold`}>Framework</h2>
                        <Collection items={[
                        {name: "React", image: "/logo/react.svg"},
                            ]}/>
                    </div>
                    <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                        <h2 className={`text-2xl font-bold`}>Base de Données</h2>
                        <Collection items={[
                        {name: "PostgreSQL", image: "/logo/postgresql.svg"},
                        {name: "Microsoft Access", image: "/logo/access.svg"},
                            ]}/>
                    </div>
                    <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                        <h2 className={`text-2xl font-bold`}>Versionnage</h2>
                        <Collection items={[
                        {name: "Git", image: "/logo/git.svg"},
                        {name: "GitHub", image: "/logo/github.svg"},
                        {name: "GitLab", image: "/logo/gitlab.svg"},
                            ]}/>
                    </div>
                    <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                        <h2 className={`text-2xl font-bold`}>Kernel Linux</h2>
                        <Collection items={[
                        {name: "Docker", image: "/logo/docker.svg"},
                        {name: "Bash", image: "/logo/bash.svg"},
                            ]}/>
                    </div>
                    <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                        <h2 className={`text-2xl font-bold`}>IDE</h2>
                        <Collection items={[
                        {name: "IntelliJ IDEA", image: "/logo/intellij.svg"},
                        {name: "Visual Studio Code", image: "/logo/vscode.png"},
                            ]}/>
                    </div>
                    <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                        <h2 className={`text-2xl font-bold`}>Gestion de projet</h2>
                    <Collection items={[
                        {name: "Trello", image: "/logo/trello.svg"},
                        ]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
