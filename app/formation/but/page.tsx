"use client"

import BigList from "@/src/components/BigList";
import {useCopyToClipboard} from 'usehooks-ts'
import sourceCode from '@/public/source_code.jpg'
import iutHall from '@/public/iut_hall.jpg'
import iut from '@/public/iut.jpg.jpg'

export default function But() {
    const [value, copy] = useCopyToClipboard()
    return (
        <div className="flex flex-col flex-1 w-full items-center mb-15 bg-linear-to-b from-green-400 via-green-900 to-black py-16">
            <h1 className="text-white text-5xl font-bold font-serif p-8" >BUT Informatique</h1>
            <h2 className="text-white text-3xl font-bold font-serif p-8" >Bachelor en informatique, formation actuelle</h2>
            <BigList items={[
                {
                    name: "BUT Informatique 2024-2027",
                    image: sourceCode,
                    description:
                        <div className="flex flex-col justify-evenly items-center h-70">
                            <p className="text-2xl">Compétences clés</p>
                            <ul className="list-disc flex flex-col flex-1 justify-evenly text-lg pl-20">
                                <li>Conception logiciel</li>
                                <li>Analyse d'un besoin client</li>
                                <li>Programmation et Algorithmie</li>
                                <li>Conception, réalisation et exploitation de bases de données</li>
                                <li>Travail d'équipe et coopération</li>
                                <li>Connaissances mathématiques relatives à l'informatique</li>
                            </ul>
                        </div>,
                    link: "#",
                    size: 96
                },
                {
                    name: "Unités d'enseignement",
                    image: iutHall,
                    description:
                        <div className="flex flex-col justify-evenly items-center h-70">
                            <ul className="list-none flex flex-col flex-1 justify-evenly w-2/3 text-lg">
                                <li>UE1 : Réaliser un développement d'application</li>
                                <li>UE2 : Optimiser des applications informatiques</li>
                                <li>UE3 : Administrer des systèmes informatiques communicants complexes</li>
                                <li>UE4 : Gérer des données de l'information</li>
                                <li>UE5 : Conduire un projet</li>
                                <li>UE6 : Travailler dans une équipe informatique</li>
                            </ul>
                        </div>,
                    link: "#",
                    size: 96
                },
                {
                    name: "Etablissement",
                    image: iut,
                    description:
                        <div className="flex flex-col justify-evenly h-70 gap-4">
                            <button onClick={() => copy("IUT de Lille Av. Paul Langevin, 59653 Villeneuve-d'Ascq")}
                            className="text-start text-emerald-200 hover:text-green-400 w-fit">
                                IUT de Lille <br/>
                                Av. Paul Langevin, 59653 <br/>
                                Villeneuve-d'Ascq
                            </button>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5063.394836936286!2d3.135905291343027!3d50.61415980366643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32831bfb51bab%3A0x52714ad4d035db6f!2sIUT%20de%20Lille!5e0!3m2!1sfr!2sfr!4v1772044343494!5m2!1sfr!2sfr"
                                width="400" height="300" allowFullScreen={true} loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>,
                    link: "#",
                    size: 96
                }
            ]}/>
        </div>
    )
}