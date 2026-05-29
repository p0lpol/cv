import BigList from "@/src/components/BigList";
import Collection from "@/src/components/Collection";

// Images principales
import sourceCode from '@/public/source_code.jpg';
import handShake from '@/public/handshake.jpg';

// 1. Importation statique de tous les logos
import javaLogo from "@/public/logo/java.svg";
import cLogo from "@/public/logo/c.svg";
import pythonLogo from "@/public/logo/python.svg";
import javascriptLogo from "@/public/logo/javascript.svg";
import typescriptLogo from "@/public/logo/typescript.svg";
import htmlLogo from "@/public/logo/html.svg";
import cssLogo from "@/public/logo/css.svg";
import reactLogo from "@/public/logo/react.svg";
import postgresqlLogo from "@/public/logo/postgresql.svg";
import accessLogo from "@/public/logo/access.svg";
import gitLogo from "@/public/logo/git.svg";
import githubLogo from "@/public/logo/github.svg";
import gitlabLogo from "@/public/logo/gitlab.svg";
import dockerLogo from "@/public/logo/docker.svg";
import bashLogo from "@/public/logo/bash.svg";
import intellijLogo from "@/public/logo/intellij.svg";
import vscodeLogo from "@/public/logo/vscode.png";
import trelloLogo from "@/public/logo/trello.svg";

export default function Competences() {

    const hardSkillCard = {
        name: "Hard Skills",
        image: sourceCode,
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
        image: handShake,
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
        <main className="bg-linear-to-b from-green-400 via-green-900 to-black py-16 flex flex-col justify-center items-center">
            <div className="w-9/10 min-h-dvh">
                <h1 className="text-cyan-900 text-5xl font-bold font-serif p-8">Compétences</h1>

                <div className="flex flex-col flex-1 w-full items-center mb-15">
                    <BigList items={[hardSkillCard, softSkillCard]}/>
                </div>

                <h1 className="text-cyan-900 text-5xl font-bold font-serif p-8">Langages / Technologies</h1>
                <div className="flex flex-col flex-1 w-full items-center mb-16">
                    <div className="flex flex-col items-baseline bg-cyan-900 rounded-lg p-4 w-full shadow-xl shadow-slate-800">
                        <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                            <h2 className="text-2xl font-bold">Programmation</h2>
                            <Collection items={[
                                {name: "java", image: javaLogo},
                                {name: "C", image: cLogo},
                                {name: "python", image: pythonLogo}
                            ]}/>
                        </div>
                        <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                            <h2 className="text-2xl font-bold">Web</h2>
                            <Collection items={[
                                {name: "JavaScript", image: javascriptLogo},
                                {name: "TypeScript", image: typescriptLogo},
                                {name: "HTML", image: htmlLogo},
                                {name: "CSS", image: cssLogo}
                            ]}/>
                        </div>
                        <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                            <h2 className={`text-2xl font-bold`}>Framework</h2>
                            <Collection items={[
                                {name: "React", image: reactLogo},
                            ]}/>
                        </div>
                        <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                            <h2 className={`text-2xl font-bold`}>Base de Données</h2>
                            <Collection items={[
                                {name: "PostgreSQL", image: postgresqlLogo},
                                {name: "Microsoft Access", image: accessLogo},
                            ]}/>
                        </div>
                        <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                            <h2 className={`text-2xl font-bold`}>Versionnage</h2>
                            <Collection items={[
                                {name: "Git", image: gitLogo},
                                {name: "GitHub", image: githubLogo},
                                {name: "GitLab", image: gitlabLogo},
                            ]}/>
                        </div>
                        <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                            <h2 className={`text-2xl font-bold`}>Kernel Linux</h2>
                            <Collection items={[
                                {name: "Docker", image: dockerLogo},
                                {name: "Bash", image: bashLogo},
                            ]}/>
                        </div>
                        <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                            <h2 className={`text-2xl font-bold`}>IDE</h2>
                            <Collection items={[
                                {name: "IntelliJ IDEA", image: intellijLogo},
                                {name: "Visual Studio Code", image: vscodeLogo},
                            ]}/>
                        </div>
                        <div className="flex flex-col items-baseline gap-4 p-4 w-full">
                            <h2 className={`text-2xl font-bold`}>Gestion de projet</h2>
                            <Collection items={[
                                {name: "Trello", image: trelloLogo},
                            ]}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}