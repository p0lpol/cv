"use client"
import BigList from "@/src/components/BigList";
import {useCopyToClipboard} from "usehooks-ts";
import GoodBadCard, {GoodBadCardProps} from "@/src/components/GoodBadCard";

export default function Bac() {
    const [_value, copy] = useCopyToClipboard()

    const retrospectives: GoodBadCardProps[] = [
        {
            title: "L'équipe de taille réduite",
            description: "L'équipe informatique étant de taille assez réduite (3 informaticiens pour 300 employés), " +
                "je devais être assez autonome sur les développement. J'étais souvent seul développeur sur une application " +
                "full-stack, j'aurais aimé avoir une équipe plus conséquente pour m'accompagner sur certaines tâches difficiles.",
            isPositive: false,
        },
        {
            title: "Politique IA souple",
            description: "L'entreprise encourage l'utilisation d'IA générative durant le développement à la fois dans un but " +
                "pédagogique et de gain de productivité. Etant pratiquement seul développeur sur le projet, l'accélération de " +
                "tâches répétitives par un agent dédié m'a permis de mener à bien la mission qui m'a été confiée.",
            isPositive: true,
        },
        {
            title: "Un système complexe et pas documenté",
            description: "L'application à modernisé ne possédait pratiquement aucune documentation technique outre quelques " +
                "commentaires dans la base de données. Ma première mission était d'analyser la structure de données et le " +
                "fonctionnement de l'application afin d'en faire une documentation claire et structurée. J'aurais aimé avoir " +
                "quelques ressources supplémentaire explicatives pour mieux comprendre les mécanismes complexes implémentés.",
            isPositive: false,
        },
        {
            title: "Une stack intelligible et des modèles standards",
            description: "Bien que n'ayant aucune expérience préalable avec Django, l'apprentissage des fondamentaux et " +
                "l'utilisation d'ORM était plutôt rapide. De plus, ayant déjà de l'expérience avec PostgreSQL et NextJS / React, " +
                "j'ai pu avancer assez rapidement dans le développement sans avoir à me plonger dans plusieurs nouveaux langages ou frameworks",
            isPositive: true,
        },
        {
            title: "La répétitivité des tâches",
            description: "Ma mission étant de migrer un système de gestion de données référentielles, beaucoup de mon " +
                "temps de travail s'est résumé à faire plus ou moins la même chose. J'aurais préféré avoir un peu plus" +
                "de diversité autant dans l'analyse que dans le développement réel.",
            isPositive: false,
        },
        {
            title: "L'accompagnement pédagogique",
            description: "Malgré la taille de l'équipe et la charge de travail quotidien, mon maître de stage était particulièrement" +
                "présent pour répondre à mes questions et m'accompagner dans l'analyse du fonctionnement de l'application legacy. " +
                "Cela m'a permi de mieux comprendre les règles métiers, les mécanismes et le besoin derrière l'application, ce qui " +
                "a accéléré et facilité le développement du nouveau logiciel.",
            isPositive: true,
        }
    ]

    return (
        <div className="flex flex-col flex-1 w-full items-center mb-15 bg-linear-to-b from-green-400 via-green-900 to-black py-16">
            <h1 className="text-white text-5xl font-bold font-serif p-8" >Stage Développeur</h1>
            <BigList isLink={false} items={[
                {
                    name: "Présentation du stage",
                    image: "/reunimer/usine-du-port.webp",
                    description:
                        <div className="flex flex-col justify-evenly items-center">
                            <ul className="flex flex-col items-baseline ml-10 gap-4 text-justify">
                                <li><strong>Rôle</strong> : Développeur full-stack</li>
                                <li><strong>Durée</strong> : 10 semaines (6 avril au 12 juin 2026)</li>
                                <li><strong>Objectif</strong> : Découvrir le développement d'application dans le milieu professionnel,
                                    réaliser la mise à jour d'un module du système d'informations de l'entreprise</li>
                                <li><strong>Tâches</strong> :
                                    <ul className="list-disc flex flex-col ml-10">
                                        <li>Documenter le module actuellement en place</li>
                                        <li>Migrer plusieurs bases de données depuis Microsoft Access vers PostgreSQL</li>
                                        <li>Redévelopper le module en architecture REST avec un backend Django et un front end Next.js</li>
                                        <li>Mettre en place un système de permissions larges (RBAC) et fines (ABAC)</li>
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
                    image: "/reunimer/bateau.webp",
                    description:
                        <div className="flex flex-col text-justify gap-4 ml-10">
                            <h2><strong><a href="#"> Intitulé stage </a></strong> : Développement d’un module de gestion de référentiels et migration de données Access vers PostgreSQL</h2>

                            <p><strong><a href="#"> Sujet </a></strong> : Le stage s’inscrit dans un projet de modernisation d’applications métier actuellement développées sous
                                <strong><a href="#"> Microsoft Access </a></strong> vers une architecture moderne basée sur une base de données <strong><a href="#"> PostgreSQL </a></strong> et des applications web développées en <strong><a href="#"> Python </a></strong> et <strong><a href="#"> JavaScript </a></strong>.
                                L’objectif du stage est de développer un <strong><a href="#"> module de gestion de données référentielles </a></strong> (tables de base : familles, catégories, produits, ingrédients, unités, etc.)
                                avec <strong><a href="#"> interface de gestion </a></strong> (création, modification, suppression – CRUD), ainsi que de participer à la mise en place d’un mécanisme de
                                <strong><a href="#"> synchronisation des données </a></strong> entre les applications Access existantes et la nouvelle base <strong><a href="#"> PostgreSQL </a></strong>.
                                Le stagiaire sera amené à :</p>
                                <ul className="list-disc ml-10">
                                    <li><strong><a href="#"> ANALYSER </a></strong> la structure des bases de données Access existantes</li>
                                    <li><strong><a href="#">CONCEVOIR </a></strong> la structure des tables dans PostgreSQL</li>
                                    <li><strong><a href="#"> DEVELOPPER </a></strong> des scripts de migration de données</li>
                                    <li><strong><a href="#"> DEVELOPPER </a></strong> un module de gestion des référentiels (interface simple)</li>
                                    <li><strong><a href="#"> METTRE EN PLACE </a></strong> des opérations CRUD (Create, Read, Update, Delete)</li>
                                    <li><strong><a href="#"> DOCUMENTER </a></strong> la structure de la base de données et les développements réalisés</li>
                                    <li><strong><a href="#"> PARTICIPER </a></strong> aux tests et à la validation des données</li>
                                </ul>
                                <p>Le stage permettra à l’étudiant de travailler sur un projet réel de modernisation d’un système d’information, incluant base de données, développement logiciel, migration de données et bonnes pratiques de développement.</p>
                        </div>,
                    link: "#",
                    fullSize: true,
                    size: 140,
                    imgSize: 4
                },
                {
                    name: "Compétences techniques",
                    image: "/reunimer/stack-traiteur.png",
                    description:
                        <div className="ml-10 flex flex-col gap-8">
                            <p>Ce stage m'a permis de consolider mes compétences en analyse et en architecture logicielle en intervenant sur l'ensemble d'une stack technique moderne. J'ai notamment exploité les technologies suivantes :</p>
                            <ul className="list-disc ml-10">
                                <li><strong><a href="https://www.postgresql.org/">PostgreSQL :</a></strong> Système de Gestion de Base de Données Relationnelle sélectionné pour assurer la migration, l'intégrité et la gestion des données référentielles de l'entreprise.</li>
                                <li><strong><a href="https://www.djangoproject.com/">Django</a></strong> & <strong><a href="https://www.django-rest-framework.org/"> Django REST Framework (DRF) :</a></strong> conception et développement du back-end sous forme d'<strong><a href="https://www.redhat.com/en/topics/api/what-is-a-rest-api">API RESTful</a></strong>. L'accès aux données a été modélisé via l'<strong><a href="https://fr.wikipedia.org/wiki/Mapping_objet-relationnel">ORM</a></strong> de Django, tandis que DRF a permis la sérialisation et la sécurisation stricte des endpoints.</li>
                                <li><strong><a href="https://nextjs.org/">Next.js</a></strong> & <strong><a href="https://react.dev/">React :</a></strong> développement de l'interface client (front-end). L'utilisation du framework Next.js a permis d'optimiser les performances de l'application web, couplé à la bibliothèque React pour concevoir une interface utilisateur dynamique, réactive et ergonomique.</li>
                            </ul>
                        </div>,
                    link: "#",
                    fullSize: true,
                    size: 96,
                    imgSize: 4
                },
                {
                    name: "Retrospective",
                    image: "",
                    description:
                        <div className="flex flex-row gap-32 mr-10 p-16 items-start w-full">
                            <div className="flex flex-col flex-1 gap-16">
                                {retrospectives
                                    .filter((_, index) => index % 2 === 0)
                                    .map((value, index) => (
                                        <GoodBadCard key={`left-${index}`} {...value} />
                                    ))
                                }
                            </div>

                            <div className="flex flex-col flex-1 gap-16">
                                {retrospectives
                                    .filter((_, index) => index % 2 !== 0)
                                    .map((value, index) => (
                                        <GoodBadCard key={`right-${index}`} {...value} />
                                    ))
                                }
                            </div>
                        </div>
                    ,
                    link: "#",
                    fullSize: false,
                    imgSize: 4
                },
                {
                    name: "Etablissement",
                    image: "/reunimer/atlas_cove.jpg",
                    description:
                        <div className="flex flex-col justify-evenly h-70 gap-4 ml-10">
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