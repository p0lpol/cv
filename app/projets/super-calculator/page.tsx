import ProjectList from "@/src/components/Project/ProjectList";
import IllustratedList from "@/src/components/IllustratedList";
import ProjectBar from "@/src/components/Project/ProjectBar";

export default function superCalculatorPage() {
    const description = (
        <p>
            <strong>SuperCalculator</strong> est une application bureautique de calculatrice interactive, développée en <strong>Java</strong> et propulsée par <strong>JavaFX</strong>.
            Dotée d'une interface graphique moderne et intuitive avec boutons cliquables, l'expérience offre également un support clavier complet pour une saisie rapide et fluide des données.
            L'application prend en charge les opérations arithmétiques de base (addition, soustraction, multiplication, division), la gestion des priorités grâce aux parenthèses et aux nombres à virgule, ainsi que des fonctions mathématiques plus avancées comme le calcul de puissances et le logarithme népérien (ln).
            L'objectif principal est de fournir un outil fiable et réactif, capable d'analyser et de résoudre instantanément des expressions mathématiques complexes tout en garantissant une expérience utilisateur fluide.
            <br/><br/>
            Au-delà de sa simple utilité, ce projet est avant tout <strong>une mise en pratique des patterns d'architecture logicielle</strong>.
            Conçue de manière rigoureuse, la structure de l'application met l'accent sur la séparation des responsabilités entre la logique métier mathématique et le rendu visuel, offrant ainsi un code propre, modulaire et facilement extensible pour de futures fonctionnalités.
        </p>
    );

    const dates = (
        <div>
            <ul className="list-disc ml-5">
                <li>Prototype : du 18 au 21 Septembre 2025</li>
                <li>Version finale : Le 29 Octobre 2025</li>
            </ul>
            <p className="mt-2"> Durée totale : 5 jours d'analyse et développement </p>
        </div>
    );

    const cadre = (
        <p>Projet personnel individuel</p>
    )

    const expectations = (
        <div className="flex flex-col gap-6">
            <h2><strong>Architecture MVC (Modèle-Vue-Contrôleur)</strong> et fonctionnalités fondamentales.</h2>
            <p>
                L'application est entièrement structurée selon le pattern MVC afin de séparer la logique de calcul de l'interface graphique.
                Le <strong>Modèle</strong> prend en charge l'analyse syntaxique (parsing) et l'évaluation mathématique. La <strong>Vue</strong> gère l'affichage JavaFX,
                tandis que le <strong>Contrôleur</strong> fait le lien en interceptant les actions de l'utilisateur (clics ou entrées clavier).
            </p>

            <p className="font-semibold mt-2">Voici les principales fonctionnalités arithmétiques implémentées au sein de cette architecture :</p>

            <IllustratedList items={[
                {
                    title: "L'Addition",
                    content: "Permet de cumuler des valeurs entières ou décimales. Le modèle traite l'opérateur '+' et met à jour instantanément le résultat affiché à l'écran.",
                    image: "/calculator/addition.gif",
                    alt: "Démonstration de la fonctionnalité d'addition",
                    id: "calc-addition"
                },
                {
                    title: "La Soustraction",
                    content: "Prend en charge la différence entre deux expressions numériques, en gérant correctement les nombres négatifs ainsi que l'enchaînement des opérateurs.",
                    image: "/calculator/substraction.gif",
                    alt: "Démonstration de la fonctionnalité de soustraction",
                    id: "calc-substraction"
                },
                {
                    title: "La Multiplication",
                    content: "Opération de produit gérée en priorité par rapport à l'addition et à la soustraction grâce à un moteur d'analyse des priorités opératoires imbriqué dans le modèle.",
                    image: "/calculator/multiplication.gif",
                    alt: "Démonstration de la fonctionnalité de multiplication",
                    id: "calc-multiplication"
                },
                {
                    title: "La Division",
                    content: "Calcule le quotient de deux nombres. Cette fonctionnalité intègre une sécurité critique au niveau du modèle pour intercepter les divisions par zéro et éviter le plantage.",
                    image: "/calculator/division.gif",
                    alt: "Démonstration de la fonctionnalité de division",
                    id: "calc-division"
                },
                {
                    title: "Gestion des Parenthèses",
                    content: "Permet de forcer et modifier l'ordre naturel des priorités arithmétiques. Le parseur analyse l'ouverture et la fermeture des blocs pour isoler les sous-calculs prioritaires.",
                    image: "/calculator/parenthesis.gif",
                    alt: "Démonstration de l'utilisation des parenthèses complexes",
                    id: "calc-parenthesis"
                },
                {
                    title: "Le Logarithme Népérien",
                    content: "Fonction mathématique avancée qui calcule le logarithme de l'expression fournie. Le modèle intègre une gestion des valeurs limites comme 0 ou une valeur négative pour éviter un plantage.",
                    image: "/calculator/log.gif",
                    alt: "Démonstration de la fonctionnalité du logarithme népérien",
                    id: "calc-logarithm"
                }
            ]}/>
        </div>
    );

    const difficulties = [
        [
            "Gestion des priorités opératoires (BODMAS / PEMDAS). L'évaluation linéaire d'une chaîne de caractères ne respecte pas nativement l'ordre des opérations (la multiplication/division avant l'addition).",
            "Mise en place d'un parsing et d'une gestion des opérations dans l'ordre de priorité. J'ai choisi de ne pas me baser sur un algorithme existant pour réfléchir à une solution par moi-même",
            "Une interprétation mathématiquement exacte et sans faille, gérant parfaitement l'imbrication complexe des parenthèses."
        ],
        [
            "Prise en charge du clavier physique en plus de l'interface cliquable. Il fallait s'assurer que presser la touche '+' du clavier déclenche visuellement et logiquement la même action que le bouton de la GUI.",
            "Liaison d'écouteurs d'événements (KeyEvents) globaux sur la scène JavaFX, mappés dynamiquement vers les actions du Contrôleur.",
            "Une utilisation fluide pour les utilisateurs avancés qui préfèrent se servir exclusivement de leur pavé numérique."
        ],
        [
            "Gestion des cas aux limites et erreurs mathématiques (comme la division par zéro ou le logarithme de zéro) qui font crasher l'application.",
            "Création de blocs try-catch dédiés interceptant des exceptions mathématiques personnalisées pour afficher 'Infinity' proprement sur l'écran de la calculatrice au lieu de planter.",
            "Une robustesse applicative totale : l'application reste stable et réactive, peu importe l'erreur commise par l'utilisateur."
        ],
        [
            "Supprimer le résultat d'un calcul si l'utilisateur écrit un chiffre mais le conserver s'il utilise un opérateur.",
            "Mise en place d'un flag 'resultat' qui permet de savoir si la calculatrice affiche un résultat et implémenter ce comportement spécifique si c'est le cas.",
            "Une meilleure expérience utilisateur qui permet de réutiliser des résultats sans les réécrire ainsi que de faire plusieurs calculs indépendants rapidement."
        ]
    ];

    const screenshots = [
        ["/calculator/addition.gif", "Fonctionnalité : L'Addition", "screenshot-add"],
        ["/calculator/substraction.gif", "Fonctionnalité : La Soustraction", "screenshot-sub"],
        ["/calculator/multiplication.gif", "Fonctionnalité : La Multiplication", "screenshot-multi"],
        ["/calculator/division.gif", "Fonctionnalité : La Division", "screenshot-div"],
        ["/calculator/parenthesis.gif", "Gestion avancée des Parenthèses", "screenshot-parenthesis"],
        ["/calculator/log.gif", "Calcul avancé : Logarithme Népérien", "screenshot-log"],
    ];

    const links = [
        ["https://gitlab.univ-lille.fr/iut-info/calculatrice", "/logo/gitlab.svg"]
    ];

    const projectData = {
        description: description,
        dates: dates,
        cadre: cadre,
        expectations: expectations,
        difficulties: difficulties,
        screenshots: screenshots,
        links: links,
    }

    return (
        <div className="flex flex-col flex-1 w-full items-center mb-15 bg-linear-to-b from-green-400 via-green-900 to-black py-16">
            <h1 className="text-white text-5xl font-bold font-serif p-8" >SuperCalculator</h1>
            <h2 className="text-white text-3xl font-bold p-8">Application d'Architecture MVC JavaFX</h2>

            <div className="flex flex-1 w-full items-start">
                <ProjectBar/>
                <div className="flex flex-col flex-1 w-3/4 pl-8">
                    <ProjectList {...projectData} />
                </div>
            </div>
        </div>
    );
}