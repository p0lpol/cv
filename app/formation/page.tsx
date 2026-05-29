import BigList from "@/src/components/BigList";

export default function Page() {
    return (
        <main className="bg-linear-to-b from-green-400 via-green-900 via-50% to-black to-100% pt-16">
            <div className="flex flex-col flex-1 w-full h-dvh">
                <h1 className="text-cyan-900 text-5xl font-bold font-serif p-8">Mes Formations</h1>
                <BigList items={[
                    {
                        name: "BUT Informatique - IUT de Lille",
                        image: "/ULille-IUT.svg",
                        description: <>
                            <h1 className="text-xl font-bold text-emerald-200">Formation Actuelle</h1>
                            <p>
                                BUT Informatique<br/>
                                Parcours Développement et Réalisation d'Applications<br/>
                                IUT de Lille
                            </p>
                        </>,
                        link: "/formation/but",
                        bg: true
                    },
                    {
                        name: "Baccalaureat - Lycée Jean Joly",
                        image: "/JJ_logo_final.jpeg",
                        description: <>
                            <h1></h1>
                            <p>
                                Baccalauréat 2022 - 2023<br/>
                                Mathématiques et NSI<br/>
                                Lycée Jean Joly
                            </p>
                        </>,
                        link: "/formation/bac",
                    }
                ]}/>
            </div>
        </main>
    )
}