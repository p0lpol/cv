import ProjectList from "@/src/components/Project/ProjectList";
import IllustratedList from "@/src/components/IllustratedList";
import ProjectBar from "@/src/components/Project/ProjectBar";

export default function Bac() {
    const description = (
        <p>
            Ce projet a pour but de réaliser un jeu de gestion d'entreprise avec de nombreux
            domaines à organiser. Le jeu possède un écran d'accueil qui résume des statistiques et changements
            importants entre chaque tour, ainsi qu'un écran de gestion pour chacune des parties de l'entreprise
            allant des employés à la publicité, ainsi que l'import / export, la recherche et bien d'autres
            domaines. Ce projet s'inspire du jeu
            <a className="text-emerald-200 font-bold hover:text-green-400" href="https://www.simuland.fr"> Simuland </a>
            que j'ai eu l'occasion d'essayer lors de ma formation pendant mes cours de gestion et management.
            De multiples éléments sont communs entre les deux projets mais celui-ci se différencie par un
            approfondissement et l'ajout de plusieurs mécaniques de jeu.
        </p>
    );

    const dates = (
        <div>
            <ul className="list-disc ml-5">
                <li>Prototype : initialement fin Mars 2026, repoussé à une date indéterminée à cause d'autres projets / stages</li>
                <li>Version finale : En cours de développement</li>
            </ul>
            <p className="mt-2"> Durée totale : En cours </p>
        </div>
    );

    const cadre = (
        <p>Projet personnel individuel</p>
    )

    const expectations = (
        <div className="flex flex-col gap-6">
            <h2><strong>Réaliser un jeu de gestion d'entreprise</strong> en tour par tour qui permet de gérer
                plusieurs aspects d'une entreprise</h2>
            <p>L'interface peut être décomposée en trois grandes parties :</p>
            <IllustratedList items={[
                {
                    title: "La barre supérieure",
                    content: "Affiche différentes informations globales (nom de l'entreprise, date actuelle du tour) et possède différents boutons d'action rapide comme le passage au tour suivant, l'aide et le centre de notifications.",
                    image: "/financial/topbar.png",
                    alt: "Capture d'écran de la barre supérieure",
                    id:"topbar-1"
                },
                {
                    title: "Le menu de navigation",
                    content: "Affiche le titre et possède tous les éléments de navigation latérale vers les autres onglets. Il intègre également le mini-profil du joueur avec son avatar, le nom de l'entreprise et un lien vers le profil complet.",
                    image: "/financial/sidebar.png",
                    alt: "Capture d'écran de la barre de navigation latérale",
                    id: "sidebar-1"
                },
                {
                    title: "Le contenu principal",
                    content: "Contient l'entièreté du contenu dynamique de l'onglet sélectionné. Alors que l'enveloppe globale reste fixe, cette zone se recharge pour afficher le domaine de gestion demandé.",
                    image: "/financial/main.png",
                    alt: "Capture d'écran du contenu principal",
                    id: "main-1"
                }
            ]}/>

            <p className="mt-4">L'interface se compose d'un ensemble d'onglets, chacun regroupant différentes données concernant un ou plusieurs secteurs stratégiques. Voici les différents modules de gestion accessibles :</p>

            <IllustratedList items={[
                {
                    title: "Supervision & Tableau de bord",
                    content: "L'écran principal du jeu. Il sert de tableau de bord analytique afin de surveiller la santé financière globale (liquidités, CA brut/net), les cours de la bourse, les graphiques d'offre/demande et les événements aléatoires à venir.",
                    image: "/financial/overview.png",
                    alt: "Capture d'écran de l'onglet de supervision",
                    id:"overview-1"
                },
                {
                    title: "Le récapitulatif financier",
                    content: "Rassemble toutes les informations comptables de l'entreprise. Il sépare les données d'affichage non modifiables des historiques de transactions en temps réel et propose un panneau de décisions condensé pour les choix rapides.",
                    image: "/financial/recap.png",
                    alt: "Capture d'écran de l'onglet récapitulatif financier",
                    id: "recap-1"
                },
                {
                    title: "Gestion des Ressources Humaines",
                    content: "Permet de piloter la masse salariale de l'entreprise : embauches, licenciements, gestion des salaires, suivi de la motivation des employés et de la productivité globale des équipes.",
                    image: "/financial/employees.png",
                    alt: "Capture d'écran de la gestion des employés",
                    id: "employees-1"
                },
                {
                    title: "Infrastructures & Logistique",
                    content: "Contrôle les actifs physiques et les usines de l'entreprise. Permet d'investir dans l'agrandissement des locaux, l'achat de machines plus performantes ou l'entretien des bâtiments de stockage.",
                    image: "/financial/infra.png",
                    alt: "Capture d'écran de la gestion des infrastructures",
                    id: "infra-1"
                },
                {
                    title: "Chaîne de Production",
                    content: "Gère la transformation des matières premières en produits finis. Le joueur y ajuste les volumes de fabrication en fonction des capacités des machines et de la main-d'œuvre disponible.",
                    image: "/financial/production.png",
                    alt: "Capture d'écran de l'onglet de production",
                    id: "production-1"
                },
                {
                    title: "Logistique & Expéditions (Shipment)",
                    content: "Pilote les flux d'import et d'export. Permet de planifier les livraisons, de choisir les transporteurs, de gérer les contrats de distribution et de suivre l'état des stocks de produits finis prêts à être expédiés.",
                    image: "/financial/shipment.png",
                    alt: "Capture d'écran de la gestion des expéditions",
                    id: "shipment-1"
                },
                {
                    title: "Marketing & Publicité (Ads)",
                    content: "Permet de concevoir les campagnes publicitaires afin de doper la notoriété de la marque, d'attirer de nouveaux clients et de stimuler activement la demande sur le marché.",
                    image: "/financial/ads.png",
                    alt: "Capture d'écran du panneau marketing et publicité",
                    id: "ads-1"
                },
                {
                    title: "R&D et Stratégie (RDRSE)",
                    content: "L'onglet de Recherche & Développement et de Responsabilité Sociétale des Entreprises. Permet de financer des innovations technologiques pour améliorer les produits et d'adopter des politiques éco-responsables.",
                    image: "/financial/rdrse.png",
                    alt: "Capture d'écran de l'onglet R&D et RSE",
                    id: "rdrse-1"
                }
            ]}/>
        </div>
    );

    const bonus = (
        <div>
            <h2>Ces fonctionnalités ne sont pas encore en place, mais sont des points d'amélioration essentiels sur lesquels je souhaiterai me concentrer une fois qu'une version jouable sera en place</h2>
            <ul className="list-disc ml-10 flex flex-col gap-4">
                <li>
                    <strong>Mode Multi-entreprises :</strong> Simulation de marchés boursiers autonomes évoluant indépendamment des actions directes du joueur.
                </li>
                <li>
                    <strong>Système de Notifications Évolué :</strong> Alertes visuelles instantanées dans la topbar lors d'un changement critique du marché ou d'un conflit social chez les employés.
                </li>
                <li>
                    <strong>Plages dynamiques :</strong> Intégration d'un selecteur de plage temporelle pour suivre l'historique des graphiques sur une durée variable de 4 à 50 trimestres. Les périodes trop longues seront arrondies en années pour éviter de surcharger le graphique
                </li>
            </ul>
        </div>
    );

    const difficulties = [
        [
            "Modélisation et synchronisation du moteur au tour par tour. Il fallait s'assurer que toutes les variables complexes (salaires, production, dépréciation de l'infra, impact des pubs) se calculent dans le bon ordre lors du clic sur 'Tour suivant'.",
            "Développement d'un service d'évaluation centralisé côté Spring Boot (Back-end) validant l'ensemble de la feuille de décisions avant de valider et d'enregistrer le nouvel état en base de données.",
            "Un passage de tour fluide et robuste, garantissant la cohérence mathématique des bilans financiers d'un trimestre à l'autre."
        ],
        [
            "Gestion des états (State Management) complexes et volumineux côté React (Front-end). Naviguer entre les nombreux onglets faisait perdre les modifications non validées du joueur.",
            "Mise en place d'un contexte React global (ou d'un store) faisant office de 'brouillon de décisions' persistant tout au long du tour actuel, synchronisé uniquement lors du clic de validation globale.",
            "Une navigation fluide et sans frustration : le joueur peut ajuster les salaires, aller voir l'onglet Production, revenir aux finances sans perdre ses saisies en cours."
        ],
        [
            "Construction d'une API REST propre et modulaire pour dissocier les différents domaines fonctionnels de l'entreprise (RH, Marketing, Logistique).",
            "Application rigoureuse de l'architecture en couches sur Spring Boot (Controllers, Services, Repositories) combinée aux principes SOLID pour éviter un code monolithique.",
            "Un code back-end hautement maintenable et découplé, facilitant l'ajout ultérieur de nouvelles mécaniques de jeu ou de nouveaux onglets."
        ],
        [
            "Consommation et affichage dynamique des données statistiques (offre, demande, cours de la bourse) sous forme de graphiques lisibles.",
            "Intégration de librairies de chart-UI côté React, alimentées de manière asynchrone par des endpoints d'historiques générés par le serveur.",
            "Un tableau de bord de supervision clair et visuel, permettant au joueur d'ajuster sa stratégie en un simple coup d'œil sur les courbes."
        ]
    ];

    const screenshots = [
        ["/financial/main.png", "Vue globale de l'application", "screenshot-main"],
        ["/financial/overview.png", "Tableau de bord de supervision", "screenshot-overview"],
        ["/financial/recap.png", "Récapitulatif comptable et financier", "screenshot-recap"],
        ["/financial/employees.png", "Gestion de la masse salariale", "screenshot-employees"],
        ["/financial/infra.png", "Gestion des usines et infrastructures", "screenshot-infra"],
        ["/financial/production.png", "Suivi de la chaîne de fabrication", "screenshot-production"],
        ["/financial/shipment.png", "Interface d'import/export et expéditions", "screenshot-shipment"],
        ["/financial/ads.png", "Campagnes de publicité et marketing", "screenshot-ads"],
        ["/financial/rdrse.png", "Recherche & Développement et RSE", "screenshot-rdrse"]
    ];

        const links = [
            ["https://github.com/p0lpol/eco", "/logo/github.svg"]
        ];

    const projectData = {
        description: description,
        dates: dates,
        cadre: cadre,
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
                <ProjectBar bonus={true}/>
                <div className="flex flex-col flex-1 w-3/4 pl-8">
                    <ProjectList {...projectData} />
                </div>
            </div>
        </div>
    );
}