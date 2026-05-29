"use client"
import BigList from "@/src/components/BigList";
import {useCopyToClipboard} from "usehooks-ts";

export default function Bac() {
    const [_value, copy] = useCopyToClipboard()

    return (
        <div className="flex flex-col flex-1 w-full items-center mb-15 bg-linear-to-b from-green-400 via-green-900 to-black py-16">
            <h1 className="text-white text-5xl font-bold font-serif p-8" >Stage Ouvrier</h1>
            <BigList items={[
                {
                    name: "Détails du stage",
                    image: "/la-sucrerie-du-gol.jpg",
                    description:
                        <div className="flex flex-col justify-evenly items-center h-60">
                            <ul className="flex flex-col items-baseline ml-20 gap-4">
                                <li><strong>Rôle</strong> : ouvrier</li>
                                <li><strong>Durée</strong> : 1 mois (Juillet 2024)</li>
                                <li><strong>Objectif</strong> : Découvrir les difficultés d'un poste d'ouvrier<br/>
                                    dans un milieu industriel</li>
                                <li><strong>Tâches</strong> :
                                    <ul className="list-disc flex flex-col">
                                        <li className="ml-10">Faire l'inventaire</li>
                                        <li className="ml-10">Observer et assister les ouvriers</li>
                                        <li className="ml-10">Maintenance des machines (vidanges / entretien)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>,
                    link: "#",
                    fullSize: true,
                    size: 96
                },
                {
                    name: "Etablissement",
                    image: "/usine-du-gol.jpg",
                    description:
                        <div className="flex flex-col justify-evenly h-70 gap-4">
                            <button
                                onClick={() => copy("Tereos Saint-Louis Rond point du Gol, Saint-Louis 97450, La Réunion")}
                                className="text-start text-emerald-200 hover:text-green-400 w-fit">
                                Tereos Saint-Louis<br/>
                                Rond point du Gol, Saint-Louis 97450<br/>
                                La Réunion
                            </button>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.769606037415!2d55.399441004160785!3d-21.280585592104842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2182a395bf26c2d3%3A0x86b87bfa30bbd7df!2sTereos%20R%C3%A9union%20Sucrerie%20du%20Gol!5e0!3m2!1sfr!2sfr!4v1773499602215!5m2!1sfr!2sfr"
                                width="600" height="450" className="rounded-2xl"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>,
                    link: "#",
                    fullSize: true,
                    size: 96
                }
            ]}/>
        </div>
    )
}