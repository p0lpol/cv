import BigList from "@/src/components/BigList";

export default function Page() {
    return (
        <div className="flex flex-col flex-1 w-full">
            <h1 className="text-white text-5xl font-bold font-serif p-8">Mes Projets</h1>
            <BigList items={[
                {
                    name: "Financial",
                    image: "/financial.png",
                    description: "",
                    link: "/projets/financial"
                },
                {
                    name: "Labyrinthe",
                    image: "/labyrinthe.png",
                    description: "",
                    link: "/projets/labyrinthe"
                },
                {
                    name: "Calculatrice",
                    image: "/SuperCalculator.png",
                    description: "",
                    link: "/projets/super_calculator",
                    rounded: false
                },
                {
                    name: "Medieval Horizon",
                    image: "/medieval_horizon.png",
                    description: "",
                    link: "/projets/medieval_horizon"
                }
            ]}/>
        </div>
    )
}