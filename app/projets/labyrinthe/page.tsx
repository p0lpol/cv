import ProjectList from "@/src/components/Project/ProjectList";
import IllustratedList from "@/src/components/IllustratedList";
import ProjectBar from "@/src/components/Project/ProjectBar";

export default function Bac() {
    const description = (
        <p>
            Ce projet a pour but de réaliser un jeu de labyrinthes comportant plusieurs fonctionnalités.
            Le joueur peut choisir entre deux modes de jeu (Libre et Progression) et plusieurs types de
            labyrinthes (aléatoire et parfait) avec différentes vues (totale, locale, limitée et mappée).
            Le joueur peut également se connecter pour sauvegarder et charger sa progression dans le mode
            Progression. Ce projet a été réalisé par équipe de cinq personnes en utilisant Java pour le
            back-end et JavaFX pour le front-end. Deux rendus ont été effectués :
            un premier prototype avec des fonctionnalités de base, puis une version finale avec toutes
            les <a>fonctionnalités attendues</a> et des <a>ajouts optionnels</a>.
        </p>
    );

    const dates = (
        <div>
            <ul className="list-disc ml-5">
                <li>Prototype : du 29 Septembre au 23 Octobre 2025</li>
                <li>Version finale : du 23 Octobre au 21 Novembre 2025</li>
            </ul>
            <p className="mt-2"> Durée totale : 8 semaines </p>
        </div>
    );

    const expectations = (
        <ul className="flex flex-col gap-6">
            <li><strong>Réaliser un jeu de labyrinthe</strong> possédant un joueur et une sortie placés aléatoirement, ainsi que des murs et des chemins</li>
            <li><strong>Deux types de labyrinthes : aléatoire et parfait</strong>
                <ul className="list-disc ml-8 mt-2">
                    <li>
                        Labyrinthe aléatoire : Le pourcentages de murs dans le labyrinthe est configurable.
                    </li>
                    <li>
                        Labyrinthe parfait : pas de cycle, toutes les cases de chemin sont accessibles sans traverser de mur.
                        La distance entre l'entrée et la sortie est configurable.
                    </li>
                </ul>
            </li>
            <li><strong>Deux modes de jeu : Libre et Progression</strong> (accessible uniquement si connecté)
                <IllustratedList items={[
                    {
                        title: "Mode Libre",
                        content: "Choix des différents paramètres du labyrinthe (taille, pourcentage de mure, type, vue, etc.)",
                        image: "/maze/freeMode.png",
                        alt: "Capture d'écran de la fenêtre de configuration du mode libre",
                        id:"free-1"
                    },
                    {
                        title: "Mode Progression",
                        content: "étapes préfaites et imposées. Une étape est un niveau, dont la difficulté peut impacter différents facteur (pourcentage de murs, paramètres propres à la vue, etc.)",
                        image: "/maze/steps.png",
                        alt: "Capture d'écran de la fenêtre de selection de la difficulté de l'étape",
                        id: "prog-1"
                    }
                ]}/>
            </li>
            <li><strong>Pouvoir se connecter</strong> avec un nom, sauvegarder sa progression (mode progression) et la charger lors d'une prochaine connexion.</li>
            <li>En mode Progression, <strong>pouvoir revenir sur une étape</strong> déjà faite et la refaire (dans la même difficulté ou non).</li>

            <li><strong>Quatre vues du labyrinthe imposées :</strong>
                <IllustratedList items={[
                    {
                        title: "Vue Totale",
                        content: "le labyrinthe ainsi que tous les éléments (joueur, sortie) sont entièrement visibles.",
                        image: "/maze/total.png",
                        alt: "Capture d'écran du labyrinthe en vue totale",
                        id: "total-1"
                    },
                    {
                        title: "Vue Locale",
                        content: "le joueur est affiché sur une vue annexe où le champ de vision est réduit à une case. Le reste des éléments du labyrinthes sont affichés normalement",
                        image: "/maze/local.png",
                        alt: "Capture d'écran du labyrinthe en vue locale",
                        id: "locale-1"
                    },
                    {
                        title: "Vue Limitée",
                        content: "le joueur ne voit que les cases se trouvant à une certaine distance de lui. Il ne peut pas voir à travers les murs. La distance d'affichage est configurable",
                        image: "/maze/limited.png",
                        alt: "Capture d'écran du labyrinthe en vue limitée",
                        id: "limitee-1"
                    },
                    {
                        title: "Vue Mappée",
                        content: "L'affichage principal révèle petit à petit les éléments qui ont été vus dans une vue locale centrée sur le joueur. La taille de cette vue locale est configurable.",
                        image: "/maze/mapped.png",
                        alt: "Capture d'écran du labyrinthe en vue mappée",
                        id: "mapped-1"
                    }
                ]}/>
            </li>

            <li>
                <strong>Six étapes obligatoires : (si non précisée, la vue est totale par défaut)</strong>
                <IllustratedList items={[
                    {
                        title: "Etape 1",
                        content: "un labyrinthe aléatoire non carré de petite dimension.",
                        image: "/maze/steps/1.png",
                        alt: "illustration de la première étape",
                        id: "e1-1"
                    },
                    {
                        title: "Etape 2",
                        content: "un labyrinthe aléatoire de taille plus grande.",
                        image: "/maze/steps/1.png",
                        alt: "illustration de la deuxième étape",
                        id: "e2-1"
                    },
                    {
                        title: "Etape 3",
                        content: "un labyrinthe aléatoire avec une vue locale.",
                        image: "/maze/steps/1.png",
                        alt: "illustration de la troisième étape",
                        id: "e3-1"
                    },
                    {
                        title: "Etape 4",
                        content: "un labyrinthe parfait de très petite taille.",
                        image: "/maze/steps/1.png",
                        alt: "illustration de la quatrième étape",
                        id: "e4-1"
                    },
                    {
                        title: "Etape 5",
                        content: "un labyrinthe aléatoire en vue limitée.",
                        image: "/maze/steps/1.png",
                        alt: "illustration de la cinquième étape",
                        id: "e5-1"
                    },
                    {
                        title: "Etape 6",
                        content: "un labyrinthe aléatoire en vue mappée.",
                        image: "/maze/steps/1.png",
                        alt: "illustration de la sixième étape",
                        id: "e6-1"
                    }
                ]}/>
            </li>
            <li>
                <strong>Trois difficultés :</strong> Facile, Moyen et Difficile agissant sur différents paramètres :
                <ul className="list-disc ml-8 mt-2">
                    <li>Toutes les étapes : pourcentage de murs (croissant selon la difficulté).</li>
                    <li>Etape 4 : distance entrée-sortie (croissant selon la difficulté).</li>
                    <li>Etape 5 et 6 : taille du champ de vision (décroissant selon la difficulté).</li>
                </ul>
            </li>
        </ul>
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
        ["https://gitlab.univ-lille.fr/sae302/2025/H5_SAE3.3", "/logo/gitlab.svg"]
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
            <h1 className="text-white text-5xl font-bold font-serif p-8" >Labyrinthe</h1>
            <h2 className="text-white text-3xl font-bold p-8">Projet de Développement Java / JavaFX</h2>

            <div className="flex flex-1 w-full items-start">
                <ProjectBar/>
                    <div className="flex flex-col flex-1 w-3/4 pl-8">
                        <ProjectList {...projectData} />
                    </div>
                </div>
        </div>
    );
}