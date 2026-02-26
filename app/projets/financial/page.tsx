import ProjectList from "@/src/components/Project/ProjectList";
import IllustratedList from "@/src/components/IllustratedList";
import ProjectBar from "@/src/components/Project/ProjectBar";

export default function Bac() {
    const description = (
        <p>
            Ce projet a pour but de réaliser un jeu de réaliser un jeu de gestion d'entreprise avec de nombreux
            domaines à organiser. Le jeu possède un écran d'accueil qui résume des statistiques et changements
            important entre chaque tour, ainsi qu'un ecran de gestion pour chacune des parties de l'entreprise
            allant des employés à la publicité, ainsi que la l'import / export, la recherche et biens d'autres
            domaines. Ce projet s'inspire du jeu
            <a className="text-emerald-500 font-bold hover:text-emerald-600" href="https://www.simuland.fr"> Simuland </a>
            que j'ai eu l'occasion d'essayer lors de ma formation pendant mes cours de gestion et management.
            De multiples éléments sont communs entre les deux projets mais celui-ci se différencie par un
            approfondissement et l'ajout de plusieurs mécaniques de jeu.
        </p>
    );

    const dates = (
        <div>
            <ul className="list-disc ml-5">
                <li>Prototype : prévu pour fin mars</li>
                <li>Version finale : pas de date pour l'instant</li>
            </ul>
            <p className="mt-2"> Durée totale : inconnue </p>
        </div>
    );

    const expectations = (
        <div className="flex flex-col gap-6">
            <h2><strong>Réaliser un jeu de gestion d'entreprise</strong> en tour par tour qui permet de gérer
            plusieurs aspects d'une entreprise</h2>
            <p>L'interface peut être décomposée en trois grandes parties :</p>
            <IllustratedList items={[
                {
                    title: "La barre supérieure",
                    content: "Affiche différentes informations (nom de l'entreprise, date actuelle) et possèdes " +
                        "différents boutons (tour suivant, aide, notifications)",
                    image: "/financial/topbar.png",
                    alt: "Capture d'écran de la barre supérieure",
                    id:"topbar-1"
                },
                {
                    title: "Le menu de navigation",
                    content: "Affiche le titre et possède tous les éléments de navigation vers les autres onglets." +
                        "Possède également le mini-profil du joueur avec avatar, nom de l'entreprise et un lien vers" +
                        "le profil complet du joueur.",
                    image: "/financial/sidebar.png",
                    alt: "Capture d'écran de la barre de navigation latérale",
                    id: "sidebar-1"
                },
                {
                    title: "Le contenu principal",
                    content: "Possède l'entièreté du contenu de chaque onglet. Les barres de navigations sont identiques" +
                        "sur la quasi totalité des différentes fenêtre du projet mais lors du changement d'onglet" +
                        "via le menu de navigation, cette partie de la fenêtre change pour afficher le nouveau" +
                        "contenu sélectionné.",
                    image: "/financial/main.png",
                    alt: "Capture d'écran du contenu principal",
                    id: "main-1"
                }
            ]}/>
            <p>L'interface se compose d'un ensemble d'onglet chacun regroupant différentes données
            concernant un ou deux domaines. Le joueur peut en modifier certaines et en consulter
            d'autres. Voici les différents onglets : </p>
            <IllustratedList items={[
                {
                    title: "Supervision",
                    content: <>
                        <p>
                            Cet onglet est l'écran principal du jeu. Celui-ci possède différents éléments consultable
                            mais ne permet pas de modifier quoi que ce soit. Il sert de tableau de bord afin de s'assurer
                            du bon fonctionnement de l'entreprise et possède de nombreuses informations clés. On y retrouve :
                        </p>
                        <ul className="list-disc ml-10 flex flex-col gap-4">

                            <li>
                                La caisse de l'entreprise qui permet de connaître sa liquidité ainsi que
                            son chiffe d'affaire en brut et en net effectué lors du dernier trimestre.
                            </li>

                            <li>
                                La liste des événements à venir. Les événements sont répartis aléatoirement sur toute
                            la durée de la partie. Ils modifient certaines statistiques et sont soit positif, soit négatif,
                            représentés respectivement en vert et en rouge. Lorsqu'un événement n'affecte pas directement
                            les finances de l'entreprise, le montant n'est pas affiché mais une indication est donnée
                            par une flèche.
                            </li>

                            <li>
                                Un résumé de l'évolution des côtes en bourse des entreprises. Celles-ci ne sont pas des
                            concurrents directs mais simplement d'autres société dans l'univers où se passe le jeu.
                            Investir dans une société ne va pas influencer le reste de la partie, c'est simplement un
                            autre moyen de faire de l'argent que la production et la vente de votre produit.
                            </li>

                            <li>
                                Un graphique illustrant la demande et l'offre au cours des deux dernières années.
                            </li>

                            <li>
                                Un récapitulatif des investissement du semestre précédent dans les différenrts domaines
                                de l'entreprise. Chaque domaine est représenté par un logo et un titre. Le montant
                                indiqué est le montant investi dans celui-ci et une évolution du montant représenté en
                                dessous par un pourcentage et une flèche donnant le sens de l'évolution.
                            </li>
                        </ul>
                    </>,
                    image: "/financial/overview.png",
                    alt: "Capture d'écran de l'onglet de supervision",
                    id:"overview-1"
                },
                {
                    title: "Le récapitulatif financier",
                    content: <>
                        <p>
                            Cet onglet rassemble un ensemble d'informations relatives aux finances de l'entreprise.
                            Elle se décompose en deux grandes parties : une partie affichage qui montre des données
                            non modifiables, et une partie décision qui rassemble un ensemble de données modifiables
                            par le joueur et qui concernent des parties très différentes de l'entreprise. On y retouve
                            les éléments suivants :
                        </p>
                        <ul className="list-disc ml-10 flex flex-col gap-4">

                            <li>
                                Un graphique illustrant la demande et l'offre au cours des deux dernières années.
                            </li>

                            <li>
                                Un récapitulatif des investissement du semestre précédent dans les différenrts domaines
                                de l'entreprise. Chaque domaine est représenté par un logo et un titre. Le montant
                                indiqué est le montant investi dans celui-ci et une évolution du montant représenté en
                                dessous par un pourcentage et une flèche donnant le sens de l'évolution.
                            </li>

                            <li>
                                La liste des événements à venir. Les événements sont répartis aléatoirement sur toute
                                la durée de la partie. Ils modifient certaines statistiques et sont soit positif, soit négatif,
                                représentés respectivement en vert et en rouge. Lorsqu'un événement n'affecte pas directement
                                les finances de l'entreprise, le montant n'est pas affiché mais une indication est donnée
                                par une flèche.
                            </li>

                            <li>
                                Un panneau de décisions qui regroupent la plupart des champs modifiables des autres
                                onglets. Ce panneau est avant tout un raccourci rassemblant les champs qui seront le
                                plus modifiés d'un tour à l'autre durant une partie, ce qui évite d'aller chercher
                                dans les différents onglets chacun de ces champs.
                            </li>

                            <li>
                                Un historique des transactions du tour. Chaque dépense ou recette fait durant le tour
                                sera listé dans cet historique ainsi que la date et le temps réel de l'opération.
                            </li>

                        </ul>
                    </>,
                    image: "/financial/recap.png",
                    alt: "Capture d'écran de l'onglet récapitulatif financier",
                    id: "recap-1"
                },
            ]}/>
        </div>
    );

    const bonus =
        <ul className="list-disc ml-10 flex flex-col gap-4">
            <li>
                Effets sonores et de musiques dans l'application.
            </li>
            <li>
                Score basé sur différents paramètres du labyrinthe (taille, pourcentage de murs, plus court chemin, etc.) qui décroit à chaque déplacement.
            </li>
            <li>
                Résumé des statistiques du joueur (nombres d'étapes réussies dans une difficulté donnée, meilleur score, dernier score)
            </li>
            <li>
                Indicateur visuel de completion des niveaux (étoiles) sur le profil du joueur.
            </li>
            <li>
                Ennemi dans le labyrinthe qui poursuit le joueur. La vitesse de l'ennemi est configurable.
            </li>
            <li>
                Vue "rotatée" du labyrinthe qui va le tourner à 90 degrés après un certain nombre de déplacements.
                Les contrôles ne changent pas, seule la vue est tournée.
            </li>
        </ul>;
    const difficulties = [
        [
            "Mise en place d'un algorithme pour déterminer la visibilité des cases dans la vue limitée.",
            "Utilisation d'un algorithme de Line Tracing (bresenham) qui n'a pas donné les résultats escomptés. Après plusieurs essais, nous avons opté pour un algorithme de \"shadow casting\" qui a permis d'obtenir un résultat satisfaisant.",
            "L'algorithme de shadow casting a permis de déterminer correctement les cases visibles en fonction des murs présents dans le labyrinthe. Le joueur ne peut pas voir à travers les murs et la distance de visibilité est respectée."
        ],
        [
            "Mise à jour des tests unitaires après chaque modification du code.",
            "Répartition de l'équipe en deux groupes : un groupe de développement et un groupe de tests. Le groupe de tests s'assurait que les tests unitaires étaient à jour et fonctionnels après chaque modification du code.",
            "Les tests unitaires ont permis de détecter rapidement les régressions et les erreurs dans le code. La qualité du code a été améliorée grâce à une couverture de tests plus complète."
        ],
        [
            "Gestion de la persistance des données (sauvegarde et chargement des profils et des progressions).",
            "Utilisation de la sérialisation Java pour sauvegarder les objets Profil et Progression dans des fichiers. Implémentation de méthodes de sauvegarde et de chargement pour les classes concernées.",
            "La persistance des données fonctionne correctement, permettant aux joueurs de sauvegarder et de charger leur progression. Les profils sont stockés dans des fichiers distincts, facilitant la gestion des données. Les labyrinthes sauvegardés sont stockés individuellement permettant une flexibilité dans la gestion des niveaux."
        ],
        [
            "Lourde dette technique due aux nombreux changements de spécifications en cours de projet et au manque de communication initiale dans l'équipe.",
            "Mise en place de réunions régulières pour clarifier les spécifications et les attentes. Refactor de la majorité du code et séparation des responsabilités entre les différentes classes pour améliorer la maintenabilité. Application des principes de conception SOLID pour structurer le code.",
            "Le code est devenu plus modulaire et plus facile à comprendre. La communication au sein de l'équipe s'est améliorée, réduisant les malentendus sur les spécifications. La dette technique a été réduite, facilitant les futures modifications et ajouts de fonctionnalités."
        ],
        [
            "Compréhension du modèle MVC (Modèle-Vue-Contrôleur) et son implémentation dans le projet.",
            "Refactor du code pour séparer clairement les responsabilités entre le modèle (logique métier), la vue (interface utilisateur) et le contrôleur (gestion des interactions). Consultation de ressources externes et tutoriels pour mieux comprendre le modèle MVC. Demande d'aide auprès du professeur pour clarifier les concepts.",
            "Le code est devenu plus organisé et plus facile à maintenir. La séparation des responsabilités a permis une meilleure collaboration entre les membres de l'équipe. Les modifications dans une partie du code ont eu moins d'impact sur les autres parties."
        ],
        [
            "Performances médiocres de l'affichage du labyrinthe.",
            "Réduction du nombre de cases à mettre à jour à chaque déplacement du joueur en n'actualisant que les cases visibles et modifiées dans la vue actuelle. Utilisation de structures de données efficaces pour stocker et accéder aux différents éléments du labyrinthe (Array 2D). Utilisation de figures simples (rectangles) pour représenter les cases au lieu de composants complexes.",
            "Les performances de l'affichage du labyrinthe se sont nettement améliorées, offrant une expérience utilisateur plus fluide. Le temps de réponse aux déplacements a été réduit et la taille maximale des labyrinthes a pu être augmentée."
        ]
    ];
    const screenshots = [
        ["/maze/title.png", "Ecran titre", "title-1"],
        ["/maze/freeMode.png", "Mode Libre", "free-2"],
        ["/maze/login.png", "Ecran de connexion", "login-1"],
        ["/maze/mainMenu.png", "Menu principal", "mainMenu-1"],
        ["/maze/maze.png", "Labyrinthe", "maze-1"],
        ["/maze/profile.png", "Profil", "profile-1"],
        ["/maze/steps.png", "Etapes", "steps-1"],
    ];
    const links = [
        ["https://gitlab.univ-lille.fr/sae302/2025/H5_SAE3.3", "/gitlab.svg"]
    ];

    const projectData = {
        description: description,
        dates: dates,
        expectations: expectations,
        bonus: bonus,
        difficulties: difficulties,
        screenshots: screenshots,
        links: links,
    }

    return (
        <div className="flex flex-col flex-1 w-full items-center mb-15">
            <h1 className="text-white text-5xl font-bold font-serif p-8" >Financial</h1>
            <h2 className="text-white text-3xl font-bold p-8">Projet de Développement Spring / React</h2>

            <div className="flex flex-1 w-full items-start">
                <ProjectBar/>
                    <div className="flex flex-col flex-1 w-3/4 pl-8">
                        <ProjectList {...projectData} />
                    </div>
                </div>
        </div>
    );
}