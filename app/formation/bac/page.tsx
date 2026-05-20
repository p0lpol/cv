"use client"
import BigList from "@/src/components/BigList";
import {useCopyToClipboard} from "usehooks-ts";

export default function Bac() {
    const [value, copy] = useCopyToClipboard()

    return (
        <div className="flex flex-col flex-1 w-full items-center mb-15">
            <h1 className="text-white text-5xl font-bold font-serif p-8" >Baccalaureat</h1>
            <BigList items={[
                {
                    name: "Baccalaureat 2022-2023",
                    image: "/books.png",
                    description:
                    <div className="flex flex-col justify-evenly items-center h-50">
                        <p className="text-2xl">Compétences clés</p>
                        <ul className="list-disc flex flex-col flex-1 justify-evenly text-lg">
                            <li>Algorithmie de base</li>
                            <li>Programmation de base</li>
                            <li>Connaissances mathématiques</li>
                        </ul>
                    </div>,
                    link: "#",
                    rounded: false,
                    size: 96
                },
                {
                    name: "Unités d'enseignement",
                    image: "/class.jpg",
                    description:
                    <div className="flex flex-col justify-evenly items-center h-50">
                        <ul className="list-none flex flex-col flex-1 justify-evenly w-2/3 text-lg">
                            <li>Spécialité 1 : Mathématiques</li>
                            <li>Spécialité 2 : Numérique et Sciences de l'Informatique </li>
                            <li>Option : Mathématiques Expertes</li>
                        </ul>
                    </div>,
                    link: "#",
                    rounded: false,
                    size: 96
                },
                {
                    name: "Etablissement",
                    image: "/jj_up.jpeg",
                    description:
                        <div className="flex flex-col justify-evenly h-70 gap-4">
                            <button onClick={() => copy("Lycée Jean Joly - Lycée de la Rivière 2 Chem. la Ouette, Saint-Louis 97421 La Réunion")}
                                    className="text-start text-emerald-200 hover:text-green-400 w-fit">
                                Lycée Jean Joly - Lycée de la Rivière<br/>
                                2 Chem. la Ouette, Saint-Louis 97421<br/>
                                La Réunion
                            </button>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14871.986579156724!2d55.417387559086244!3d-21.271600397651337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2182a1c6200203fb%3A0x8eac9ba3e30d2c3b!2sLyc%C3%A9e%20Jean%20Joly!5e0!3m2!1sfr!2sfr!4v1772043166687!5m2!1sfr!2sfr"
                                width="400" height="300" allowFullScreen={true} loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>,
                    link: "#",
                    rounded: false,
                    size: 96
                }
            ]}/>
        </div>
    )
}