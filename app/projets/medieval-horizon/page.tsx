import ProjectList from "@/src/components/Project/ProjectList";
import IllustratedList from "@/src/components/IllustratedList";
import ProjectBar from "@/src/components/Project/ProjectBar";

export default function medievalHorizonPage() {
    const description = (
        <p>
        </p>
    );

    const dates = (
        <div>
            <ul className="list-disc ml-5">
                <li>Prototype : du 1 au 4 Septembre 2025</li>
                <li>Version finale : du 4 au 5 Septembre 2025</li>
            </ul>
            <p className="mt-2"> Durée totale : 5 jours </p>
        </div>
    );

    const expectations = (
        <div className="flex flex-col gap-6">
            <h2><strong>Réaliser un jeu en utilisant la philosophie AGILE pour s'organiser.</strong> Le thème est libre et les équipes de 6 développeurs
            sont imposées.</h2>
            <p>
                Le jeu ne possède pas d'interface dédié, nous utilisons le terminal pour afficher
                les différents éléments du jeu à l'aide de différentes techniques : ascii art, émoticones, texte.
                A chaque tour, un joueur peut choisir de dépenser de l'argent et des ressources pour construire un batîment
                qui génèrera lui-même des ressources. Le but est donc de trouver un équilibre qui permette à la population de
                prospérer tout en subissant des événements aléatoires entre certains tours. <br/>
                Le point central de se projet n'est pas le jeu en lui-même mais plutôt l'organisation, pour lequels nous
                avons utilisé plusieurs éléments caractéristiques des méthodes qui implémentent la philosophie AGILE :
            </p>
            <IllustratedList items={[
                {
                    title: "Radiateur d'informations",
                    content: "Affichage visuel et très accessible, typique des méthodes agiles (Scrum, Kanban), permettant à l'équipe et aux parties prenantes de connaître l'état d'avancement, le flux de travail et les indicateurs clés en un simple coup d'œil.",
                    image: "/medieval_horizon/radiateur_informations.png",
                    alt: "Illustration d'un radiateur d'informations affichant un tableau de bord et les métriques d'une équipe agile",
                    id: "radiateur-1"
                },
                {
                    title: "Sprint Backlog",
                    content: "Ensemble constitué de l'Objectif de Sprint, des éléments du Product Backlog sélectionnés" +
                        " pour le Sprint actuel, et du plan d'action (les tâches) pour créer l'Incrément.",
                    image: "/medieval_horizon/sprint_backlog.png",
                    alt: "Capture d'un Sprint Backlog affichant le plan de travail détaillé de l'itération en cours",
                    id: "sprint-backlog-1"
                },
                {
                    title: "Tableau Scrum",
                    content: "Outil visuel permettant de suivre en temps réel la progression des éléments du Sprint " +
                        "Backlog à travers différents statuts (généralement : À faire, En cours, Terminé).",
                    image: "/medieval_horizon/tableau_scrum.png",
                    alt: "Image d'un tableau Scrum avec des cartes ou post-its répartis dans les colonnes d'avancement",
                    id: "scrum-board-1"
                },
                {
                    title: "Burndown Chart",
                    content: "Graphique servant de radiateur d'informations pour illustrer la quantité de travail" +
                        " restante (en heures ou en points) au fil du temps dans un Sprint.",
                    image: "/medieval_horizon/burndown_chart.png",
                    alt: "Graphique linéaire descendant montrant le reste à faire par rapport aux jours écoulés du Sprint",
                    id: "burndown-1"
                }
            ]}/>
            <p>
                Pour des raisons pratiques et pédagogiques, ce projet était à faire en 10 sprints
                de deux heures chacun, composés d'une phase de développement de 1h30 et d'une phase
                de mise en commun, compte rendu et prévisions pour le prochain sprint de 30 minutes.
                L'équipe se composait de 5 <strong>développeurs</strong> et d'un <strong>scrum master</strong>.
                Un nouveau scrum master était désigné après chaque sprint parmi les développeurs.
            </p>
        </div>
    );

    const bonus = <></>

    const difficulties = [
        [
            "Organiser l'équipe et se mettre d'accord. En l'absence de leader défini, le rassemblement de nos idées avait tendance" +
            "à créer de la discorde et de la confusion",
            "Laisser la décision finale au scrum master du sprint pour savoir si un élément était à rajouter ou à retirer," +
            "limiter les incréments du backlog au minimum",
            "Réduire le nombre de tâche et features à rajouter par sprint, améliorer la cohésion d'équipe"
        ],
        [
            "Gérer les conflits de versionnage sur Git. Avec plusieurs développeurs travaillant simultanément sur les mêmes portions de code, les fusions devenaient souvent chaotiques, ce qui entraînait une perte de temps considérable et le risque d'écraser le travail des autres.",

            "Mettre en place une communication proactive en instaurant la règle de prévenir l'équipe à voix haute avant chaque 'push' ou fusion importante. Nous avons également défini des règles strictes sur la création et la durée de vie des branches.",

            "Une réduction drastique des conflits lors des intégrations. L'historique du dépôt est nettement plus propre et ordonné, avec beaucoup moins de branches parallèles abandonnées, ce qui fluidifie grandement notre flux de travail collectif."
        ],
        [
            "Tenir les délais et respecter la durée fixe imposée par le sprint. Nous avions une tendance naturelle à sous-estimer la charge de travail et la complexité lors de la planification, ce qui générait une surcharge en fin d'itération et nous empêchait de clôturer le sprint sereinement.",

            "Revoir notre système d'estimation en augmentant le coût en effort (Story Points) des tâches pour y inclure une marge d'incertitude. En parallèle, nous avons drastiquement réduit le nombre d'éléments assignés simultanément à chaque membre de l'équipe pour favoriser la concentration sur un seul sujet à la fois.",

            "Une diminution significative du nombre de tickets inachevés et reportés au sprint suivant. Au lieu d'avoir de nombreuses tâches entamées mais incomplètes, l'équipe livre désormais des fonctionnalités terminées à 100%, ce qui rend notre vélocité beaucoup plus stable et motivante."
        ],
        [
            "Gérer le chevauchement de code et la confusion des responsabilités. Plusieurs développeurs se retrouvaient souvent à travailler sur les mêmes composants ou fonctionnalités en même temps, ce qui entraînait un manque de clarté sur 'qui fait quoi' et générait du travail en double.",

            "Réorganiser la distribution des tâches lors de la planification en assignant des tickets touchant à des domaines fonctionnels bien distincts. Nous avons veillé à délimiter le périmètre d'intervention de chaque développeur à un grand axe ou module spécifique de l'application.",

            "Une disparition quasi totale des modifications concurrentes sur un même fichier. En travaillant sur des axes de développement isolés, nous avons drastiquement évité les conflits Git complexes tout en renforçant l'autonomie de chacun sur sa partie du code."
        ],
        [
            "Maintenir une application rigoureuse de la méthode Scrum au quotidien. Face à la pression ou à la facilité, nous avions une forte tendance à contourner les règles du framework pour dériver vers une organisation beaucoup plus chaotique, improvisée et moins prévisible.",

            "Nous imposer une discipline stricte, dans un but purement pédagogique, en refusant toute action ou prise de décision qui sortirait du cadre défini par Scrum. Nous avons pris le parti de nous forcer à appliquer les cérémonies, les rôles et les artefacts à la lettre, sans exception.",

            "Une efficacité globale et une vélocité légèrement supérieures à celles obtenues avec notre ancienne organisation hybride. En supprimant les approximations de notre méthode 'maison', l'équipe a gagné en clarté, ce qui a permis d'optimiser notre cycle de développement."
        ],
        [
            "Maintenir le radiateur d'informations à jour de manière régulière. Absorbée par le développement pur, l'équipe oubliait souvent de répercuter son avancée sur nos outils visuels, ce qui rendait le suivi obsolète et trompeur pour le reste de l'équipe.",

            "Déléguer la responsabilité principale de cette maintenance au Scrum Master. Ce dernier s'est chargé de vérifier quotidiennement la cohérence des données affichées et d'accompagner l'équipe pour qu'elle prenne le réflexe d'actualiser son avancement.",

            "L'assurance d'avoir en permanence des informations claires, fiables et d'actualité sous les yeux. Cette rigueur nous a permis d'éviter l'oubli de tâches en cours de route et a considérablement amélioré la transparence de notre flux de travail."
        ]
    ];

    const screenshots = [
        ["","",""],
    ];
    const links = [
        ["https://gitlab.univ-lille.fr/iut-info/p3.01/2025-2026/groupe-12", "/logo/gitlab.svg"]
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
            <h1 className="text-white text-5xl font-bold font-serif p-8" >Medieval Horizon</h1>
            <h2 className="text-white text-3xl font-bold p-8">Projet de Développement Java</h2>

            <div className="flex flex-1 w-full items-start">
                <ProjectBar/>
                    <div className="flex flex-col flex-1 w-3/4 pl-8">
                        <ProjectList {...projectData} />
                    </div>
                </div>
        </div>
    );
}