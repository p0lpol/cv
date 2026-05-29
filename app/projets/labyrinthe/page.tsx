import ProjectList from "@/src/components/Project/ProjectList";
import IllustratedList from "@/src/components/IllustratedList";
import ProjectBar from "@/src/components/Project/ProjectBar";
import {StaticImageData} from "next/image"; // Importation du type pour les tableaux
// 1. Importation statique de toutes les images
import freeModeImg from "@/public/maze/freeMode.png";
import stepsImg from "@/public/maze/steps.png";
import totalImg from "@/public/maze/total.png";
import localImg from "@/public/maze/local.png";
import limitedImg from "@/public/maze/limited.png";
import mappedImg from "@/public/maze/mapped.png";
import step1Img from "@/public/maze/steps/1.png"; // Utilisée pour les 6 étapes dans ton code
import titleImg from "@/public/maze/title.png";
import loginImg from "@/public/maze/login.png";
import mainMenuImg from "@/public/maze/mainMenu.png";
import mazeImg from "@/public/maze/maze.png";
import profileImg from "@/public/maze/profile.png";
import gitlabLogo from "@/public/logo/gitlab.svg";

export default function Labyrinthe() {
    const description = (
        <p>
            Ce projet a pour but de réaliser un jeu de labyrinthes comportant plusieurs fonctionnalités.
            Le joueur peut choisir entre deux modes de jeu (Libre et Progression) et plusieurs types de
            labyrinthes (aléatoire et parfait) avec différentes vues (totale, locale, limitée et mappée).
            Le joueur peut également se connecter pour sauvegarder et charger sa progression dans le mode
            Progression. Ce projet a été réalisé par équipe de cinq personnes en utilisant Java pour le
            back-end et JavaFX pour le front-end. Deux rendus ont été effectués :
            un premier prototype avec des fonctionnalités de base, puis une version finale avec toutes
            les <a href="#expectations">fonctionnalités attendues</a> et des <a href="#bonus">ajouts optionnels</a>.
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

    const cadre = (
        <p>SAE : projet académique universitaire</p>
    )

    const expectations = (
        <ul className="flex flex-col gap-6 w-9/10 self-center py-4">
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
            <li className="w-full flex flex-col"><strong>Deux modes de jeu : Libre et Progression</strong> (accessible uniquement si connecté)
                <IllustratedList items={[
                    {
                        title: "Mode Libre",
                        content: "Choix des différents paramètres du labyrinthe (taille, pourcentage de mure, type, vue, etc.)",
                        image: freeModeImg,
                        alt: "Capture d'écran de la fenêtre de configuration du mode libre",
                        id:"free-1"
                    },
                    {
                        title: "Mode Progression",
                        content: "étapes pré-faites et imposées. Une étape est un niveau, dont la difficulté peut impacter différents facteur (pourcentage de murs, paramètres propres à la vue, etc.)",
                        image: stepsImg,
                        alt: "Capture d'écran de la fenêtre de selection de la difficulté de l'étape",
                        id: "prog-1"
                    }
                ]}/>
            </li>
            <li><strong>Pouvoir se connecter</strong> avec un nom, sauvegarder sa progression (mode progression) et la charger lors d'une prochaine connexion.</li>
            <li>En mode Progression, <strong>pouvoir revenir sur une étape</strong> déjà faite et la refaire (dans la même difficulté ou non).</li>

            <li className="w-full flex flex-col"><strong>Quatre vues du labyrinthe imposées :</strong>
                <IllustratedList items={[
                    {
                        title: "Vue Totale",
                        content: "le labyrinthe ainsi que tous les éléments (joueur, sortie) sont entièrement visibles.",
                        image: totalImg,
                        alt: "Capture d'écran du labyrinthe en vue totale",
                        id: "total-1"
                    },
                    {
                        title: "Vue Locale",
                        content: "le joueur est affiché sur une vue annexe où le champ de vision est réduit à une case. Le reste des éléments du labyrinthes sont affichés normalement",
                        image: localImg,
                        alt: "Capture d'écran du labyrinthe en vue locale",
                        id: "locale-1"
                    },
                    {
                        title: "Vue Limitée",
                        content: "le joueur ne voit que les cases se trouvant à une certaine distance de lui. Il ne peut pas voir à travers les murs. La distance d'affichage est configurable",
                        image: limitedImg,
                        alt: "Capture d'écran du labyrinthe en vue limitée",
                        id: "limitee-1"
                    },
                    {
                        title: "Vue Mappée",
                        content: "L'affichage principal révèle petit à petit les éléments qui ont été vus dans une vue locale centrée sur le joueur. La taille de cette vue locale est configurable.",
                        image: mappedImg,
                        alt: "Capture d'écran du labyrinthe en vue mappée",
                        id: "mapped-1"
                    }
                ]}/>
            </li>

            <li className="w-full flex flex-col">
                <strong>Six étapes obligatoires : (si non précisée, la vue est totale par défaut)</strong>
                <IllustratedList items={[
                    {
                        title: "Etape 1",
                        content: "un labyrinthe aléatoire non carré de petite dimension.",
                        image: step1Img,
                        alt: "illustration de la première étape",
                        id: "e1-1"
                    },
                    {
                        title: "Etape 2",
                        content: "un labyrinthe aléatoire de taille plus grande.",
                        image: step1Img,
                        alt: "illustration de la deuxième étape",
                        id: "e2-1"
                    },
                    {
                        title: "Etape 3",
                        content: "un labyrinthe aléatoire avec une vue locale.",
                        image: step1Img,
                        alt: "illustration de la troisième étape",
                        id: "e3-1"
                    },
                    {
                        title: "Etape 4",
                        content: "un labyrinthe parfait de très petite taille.",
                        image: step1Img,
                        alt: "illustration de la quatrième étape",
                        id: "e4-1"
                    },
                    {
                        title: "Etape 5",
                        content: "un labyrinthe aléatoire en vue limitée.",
                        image: step1Img,
                        alt: "illustration de la cinquième étape",
                        id: "e5-1"
                    },
                    {
                        title: "Etape 6",
                        content: "un labyrinthe aléatoire en vue mappée.",
                        image: step1Img,
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

    const role = (
        <div className="text-white w-9/10 self-center text-justify">
            <p>Durant ce projet, nous ne nous sommes pas répartis des tâches précises et des rôles à chacun pour éviter de trop
                grandes disparités dans les compétences demandées. Ainsi, j'ai participé à la mise en place de plusieurs aspects du projet, tels que : </p>
            <ul className="list-disc ml-8 mt-2 gap-2 flex flex-col">
                <li><strong><a href="#role"> L'interface utilisateur :</a></strong> j'ai conçu une partie des écrans de l'application, et j'ai retouché les écrans qui n'étaient pas conforme
                    en terme de structure. En effet, certains écrans avaient été fait avec un positionnement flottant des éléments au lieu de les contraindre.</li>
                <li><strong><a href="#role">L'algorithmie :</a></strong> je me suis occupé de mettre en place un algorithme de détection de murs et de calcul du champs de vision du joueur dans
                    la vue limitée. C'est l'un des algorithmes les plus complexes du projet.</li>
                <li><strong><a href="#role">L'architecture :</a></strong> j'ai consacré une partie importante de mon temps sur le projet à refactoriser et réorganiser le code afin de respecter
                    les principes
                    <strong><a href="#role"> SOLID</a></strong>,
                    <strong><a href="#role"> DRY </a></strong>
                    et le modèle <strong><a href="#role">MVC</a></strong>.</li>
                <li><strong><a href="#role">L'équilibrage :</a></strong> la gestion de la difficulté était un point volontairement différé car non prioritaire face à l'ajout de fonctionnalités,
                    je m'y suis malgré tout impliqué afin d'avoir un jeu non seulement jouable, mais agréable et équilibré afin de limiter la frustration du joueur</li>
                <li><strong><a href="#role">L'optimisation :</a></strong> l'UI en
                    <strong><a href="#role"> JavaFX </a></strong>
                    était très limité en terme de performances et pas du tout adapté à notre utilisation qui demandait l'affichage
                    de centaines d'éléments indépendants à chaque mise à jour. Afin d'améliorer les performances et de permettre au jeu d'afficher des labyrinthes plus
                    grands et plus complexes, j'ai passé un certain temps sur l'optimisation de l'affichage et des calculs de mise à jour.</li>
                <li><strong><a href="#role">Le modèle MVC :</a></strong> je me suis occupé de la mise en place du modèle MVC en reliant le modèle et la vue avec un controleur minimal et découplé.
                    Nous étions initialement parti sur une mauvaise implémentation du modèle par manque de compréhension des concepts fondamentaux du MVC. Il a fallu presque
                    tout refaire afin d'éviter d'avoir trop de dette technique à la fin du projet.</li>
                <li><strong><a href="#role">La musique :</a></strong> j'ai créé les bruitages et composé les deux musiques du jeu.</li>
            </ul>
        </div>
    )


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

    // 2. Déclaration explicite du Tuple pour éviter les erreurs TypeScript
    const screenshots: [StaticImageData, string, string][] = [
        [titleImg, "Ecran titre", "title-1"],
        [freeModeImg, "Mode Libre", "free-2"],
        [loginImg, "Ecran de connexion", "login-1"],
        [mainMenuImg, "Menu principal", "mainMenu-1"],
        [mazeImg, "Labyrinthe", "maze-1"],
        [profileImg, "Profil", "profile-1"],
        [stepsImg, "Etapes", "steps-1"],
    ];

    // 2. Déclaration explicite du Tuple
    const links: [string, StaticImageData][] = [
        ["https://gitlab.univ-lille.fr/sae302/2025/H5_SAE3.3", gitlabLogo]
    ];

    const projectData = {
        description: description,
        dates: dates,
        cadre: cadre,
        expectations: expectations,
        bonus: bonus,
        role: role,
        difficulties: difficulties,
        screenshots: screenshots,
        links: links,
    }

    return (
        <div className="flex flex-col flex-1 w-full items-center mb-15 bg-linear-to-b from-green-400 via-green-900 to-black py-16">
            <h1 className="text-white text-5xl font-bold font-serif p-8" >Labyrinthe</h1>
            <h2 className="text-white text-3xl font-bold p-8">Projet de Développement Java / JavaFX</h2>

            <div className="flex flex-1 w-full h-full items-start">
                <ProjectBar bonus={true} role={true}/>
                <div className="flex flex-col flex-1 w-3/4 pl-8">
                    <ProjectList {...projectData} />
                </div>
            </div>
        </div>
    );
}