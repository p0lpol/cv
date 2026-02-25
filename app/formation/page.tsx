import BigList from "@/src/components/BigList";

export default function Page() {
    return (
        <div className="flex flex-col flex-1 w-full">
            <h1 className="text-white text-5xl font-bold font-serif p-8">Mes Formations</h1>
            <BigList items={[
                {
                    name: "Baccalaureat - Lycée Jean Joly",
                    image: "/JJ_logo_final.jpeg",
                    description: "",
                    link: "/formation/bac",
                    rounded: false
                },
                {
                    name: "BUT Informatique - IUT de Lille",
                    image: "/ULille-IUT.svg",
                    description: "",
                    link: "/formation/but"
                }
            ]}/>
        </div>
    )
}