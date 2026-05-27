"use client"
import BigList from "@/src/components/BigList";
import {useCopyToClipboard} from "usehooks-ts";

export default function Bac() {
    const [_value, copy] = useCopyToClipboard()

    return (
        <div className="flex flex-col flex-1 w-full items-center mb-15">
            <h1 className="text-white text-5xl font-bold font-serif p-8" >Stage Développeur</h1>
            <BigList items={[
                {
                    name: "Détails du stage",
                    image: "/usine_du_port.webp",
                    description:
                        <div className="flex flex-col justify-evenly items-center h-100 w-2/3">
                            <ul className="flex flex-col items-baseline ml-20 gap-4 text-justify">
                                <li><strong>Rôle</strong> : Développeur full-stack</li>
                                <li><strong>Durée</strong> : 10 semaines (6 avril au 12 juin 2026)</li>
                                <li><strong>Objectif</strong> : Découvrir le développement d'application dans le milieu professionnel,
                                    réaliser la mise à jour d'un module du système d'informations de l'entreprise</li>
                                <li><strong>Tâches</strong> :
                                    <ul className="list-disc flex flex-col">
                                        <li className="ml-10">Documenter le module actuellement en place</li>
                                        <li className="ml-10">Migrer plusieurs bases de données depuis Microsoft Access vers PostgreSQL</li>
                                        <li className="ml-10">Redévelopper le module en architecture REST avec un backend Django et un front end Next.js</li>
                                        <li className="ml-10">Mettre en place un système de permissions larges (RBAC) et fines (ABAC)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>,
                    link: "#",
                    fullSize: true,
                    size: 96,
                },
                {
                    name: "Sujet du stage",
                    image: "",
                    description:
                        <div className="flex flex-col text-justify gap-4">
                            <h2><strong><a href="#"> Intitulé stage </a></strong> : Développement d’un module de gestion de référentiels et migration de données Access vers PostgreSQL</h2>

                            <p><strong><a href="#"> Sujet </a></strong> : Le stage s’inscrit dans un projet de modernisation d’applications métier actuellement développées sous
                                <strong><a href="#"> Microsoft Access </a></strong> vers une architecture moderne basée sur une base de données <strong><a href="#"> PostgreSQL </a></strong> et des applications web développées en <strong><a href="#"> Python </a></strong> et <strong><a href="#"> JavaScript </a></strong>.
                                L’objectif du stage est de développer un <strong><a href="#"> module de gestion de données référentielles </a></strong> (tables de base : familles, catégories, produits, ingrédients, unités, etc.)
                                avec <strong><a href="#"> interface de gestion </a></strong> (création, modification, suppression – CRUD), ainsi que de participer à la mise en place d’un mécanisme de
                                <strong><a href="#"> synchronisation des données </a></strong> entre les applications Access existantes et la nouvelle base <strong><a href="#"> PostgreSQL </a></strong>.
                            Le stagiaire sera amené à :
                                <ul>
                                    <li><strong><a href="#"> ANALYSER </a></strong> la structure des bases de données Access existantes,</li>
                                    <li><strong><a href="#">CONCEVOIR </a></strong> la structure des tables dans PostgreSQL,</li>
                                </ul>


                            développer des scripts de migration de données,
                            développer un module de gestion des référentiels (interface simple),
                            mettre en place des opérations CRUD (Create, Read, Update, Delete),
                            documenter la structure de la base de données et les développements réalisés,
                            participer aux tests et à la validation des données.
                                Le stage permettra à l’étudiant de travailler sur un projet réel de modernisation d’un système d’information, incluant base de données, développement logiciel, migration de données et bonnes pratiques de développement.</p>
                        </div>,
                    link: "#",
                    fullSize: true,
                    size: 96
                },
                {
                    name: "Etablissement",
                    image: "/atlas_cove.jpg",
                    description:
                        <div className="flex flex-col justify-evenly h-70 gap-4">
                            <button
                                onClick={() => copy("Reunimer Le Port, 9 Rue Armagnac, Le Port 97420, La Réunion")}
                                className="text-start text-emerald-200 hover:text-green-400 w-fit">
                                Reunimer Le Port<br/>
                                9 Rue Armagnac, Le Port 97420<br/>
                                La Réunion
                            </button>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.5956422423733!2d55.28577124732575!3d-20.928581899999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2182885fadee6633%3A0xd7e85e76ac6ab2cc!2sReunimer%20Logistique!5e0!3m2!1sfr!2sfr!4v1779875252124!5m2!1sfr!2sfr"
                                width="600" height="450" loading="lazy" className="rounded-2xl"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>,
                    link: "#",
                    fullSize: true,
                    size: 96,
                    imgSize: 4
                }
            ]}/>
        </div>
    )
}