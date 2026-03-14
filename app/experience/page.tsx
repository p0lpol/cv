import BigList from "@/src/components/BigList";

export default function Page() {
    return (
        <div className="flex flex-col flex-1 w-full">
            <h1 className="text-white text-5xl font-bold font-serif p-8">Mes expériences professionnelles</h1>
            <BigList items={[
                    {
                        name: "Stage Ouvrier - Tereos",
                        image: "/tereos.svg",
                        description: "",
                        link: "/experience/tereos"
                    }
                ]}/>
        </div>
        )
}