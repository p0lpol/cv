'use client'

import YearlySection from "@/src/components/YearlySection";
import {BigItemsProps} from "@/src/components/BigItem";

export default function Page() {

    const Financials: BigItemsProps = {
            name: "Financial",
            image: "/financial.png",
            description: <>
                <h1 className="uppercase text-xl font-bold">En cours</h1>
                <p>
                    Jeu de gestion d'entreprise sur navigateur en Single Page App <strong className="text-emerald-200">Spring</strong> + <strong className="text-emerald-200">React</strong>.
                </p>
            </>,
            link: "/projets/financial"
    }

    const Labyrinthe = {
        name: "Labyrinthe",
        image: "/labyrinthe.png",
        description: <p>Jeu de labyrinthe avec génération...</p>,
        link: "/projets/labyrinthe"
    }

    const Calculatrice = {
        name: "Calculatrice",
        image: "/SuperCalculator.png",
        description: <p>Calculatrice avec opérations...</p>,
        link: "/projets/super-calculator",
        rounded: false
    }

    const MedievalHorizon = {
        name: "Medieval Horizon",
        image: "/medieval_horizon.png",
        description: <p>Jeu de construction de ville...</p>,
        link: "/projets/medieval-horizon"
    }

    return (
        <main className="bg-linear-to-b from-green-400 via-green-900 via-30% to-black to-50% pt-16 flex flex-col justify-center items-center">
            <div className="flex flex-col flex-1 w-9/10 items-center min-h-dvh">
                <h1 className="text-cyan-900 text-5xl font-bold font-serif p-8 self-start">Mes Projets</h1>
                <YearlySection
                    items={[Financials]}
                    year={2026}
                    />
                <YearlySection
                    items={[Labyrinthe, Calculatrice, MedievalHorizon]}
                    year={2025}
                />
            </div>
        </main>
    )
}