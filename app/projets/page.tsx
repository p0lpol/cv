import BigList from "@/src/components/BigList";

export default function Page() {
    return (
        <div className="flex flex-col flex-1 w-full items-center mb-15">
            <h1 className="text-white text-5xl font-bold font-serif p-8 self-start">Mes Projets</h1>
            <h1 className="text-white text-6xl font-bold font-serif p-8">2026</h1>
            <BigList items={[
                {
                    name: "Financial",
                    image: "/financial.png",
                    description: <>
                        <h1 className="uppercase text-xl font-bold">En cours</h1>
                        <p>
                            Jeu de gestion d'entreprise sur navigateur en Single Page App <strong className="text-emerald-500">Spring</strong> + <strong className="text-emerald-500">React</strong>.
                        </p>
                    </>,
                    link: "/projets/financial"
                }
            ]}/>
            <h1 className="text-white text-6xl font-bold font-serif p-8">2025</h1>
            <BigList items={[
                {
                    name: "Labyrinthe",
                    image: "/labyrinthe.png",
                    description:
                        <p>
                            Jeu de labyrinthe avec génération aléatoire et gestion de champ de vision <strong className="text-emerald-500">Java</strong> + <strong className="text-emerald-500">JavaFX</strong>
                        </p>,
                    link: "/projets/labyrinthe"
                },
                {
                    name: "Calculatrice",
                    image: "/SuperCalculator.png",
                    description:
                        <p>
                            Calculatrice avec opérations de bases + quelques fonctions en <strong className="text-emerald-500">Java</strong> + <strong className="text-emerald-500">JavaFx</strong>
                        </p>,
                    link: "/projets/super_calculator",
                    rounded: false
                },
                {
                    name: "Medieval Horizon",
                    image: "/medieval_horizon.png",
                    description:
                        <p>
                            Jeu de construction de ville en suivant une philosophie <strong className="text-emerald-500">Agile</strong> en <strong className="text-emerald-500">Java</strong> (interface graphique dans le terminal)
                        </p>,
                    link: "/projets/medieval_horizon"
                }
            ]}/>
        </div>
    )
}