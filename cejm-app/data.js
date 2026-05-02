// Données CEJM — Culture Économique, Juridique & Managériale — BTS
window.CEJM_DATA = {

  aspects: [
    /* ═══════════════════════════════════════════════════════════
       ASPECT I — ÉCONOMIE
    ═══════════════════════════════════════════════════════════ */
    {
      id: 'eco', label: 'Économie', color: 'indigo', icon: '📈', num: 'I',
      question: "Comment les marchés fonctionnent-ils et comment l'État régule-t-il l'activité économique ?",
      chapters: [
        {
          title: "Les marchés et la régulation",
          icon: '🏪',
          sections: [
            {
              type: 'table',
              label: 'Les 5 agents économiques',
              cols: ['Agent', 'Rôle principal', 'Exemples de flux émis'],
              rows: [
                ['Entreprises', 'Production marchande de biens et services', 'Salaires, dividendes'],
                ['Ménages', 'Consommation finale + offre de travail', 'Cotisations, impôts, dépenses'],
                ['Banques', 'Intermédiation financière, création monétaire', 'Crédits, intérêts'],
                ['Administrations publiques', 'Production non marchande, redistribution', 'Subventions, prestations sociales'],
                ['Reste du monde', 'Échanges extérieurs (import/export)', 'Flux commerciaux et financiers'],
              ]
            },
            {
              type: 'definition',
              term: 'Le marché',
              text: 'Lieu réel ou virtuel de rencontre entre une offre et une demande aboutissant à un prix d\'équilibre. Les échanges génèrent des flux réels (biens, services, travail) et des flux monétaires (salaires, paiements, impôts).'
            },
            {
              type: 'points',
              label: 'Concurrence Pure et Parfaite (CPP) — 5 conditions',
              items: [
                'Atomicité : nombreux offreurs et demandeurs, aucun ne peut influencer le prix seul',
                'Homogénéité : les produits sont parfaitement identiques et substituables',
                'Libre entrée/sortie : pas de barrières technologiques, financières ou réglementaires',
                'Mobilité des facteurs de production (travail et capital)',
                'Transparence : information complète et gratuite accessible à tous'
              ]
            },
            {
              type: 'cards',
              label: 'Les défaillances du marché',
              items: [
                { icon: '🏭', title: 'Monopole naturel', text: 'Un seul producteur peut desservir tout le marché efficacement — ex : réseaux eau, électricité, rail' },
                { icon: '💨', title: 'Externalités négatives', text: 'Coûts subis par des tiers non impliqués dans la transaction — ex : pollution industrielle, nuisances' },
                { icon: '🏞️', title: 'Biens collectifs', text: 'Non-rivaux + non-exclusifs → le marché ne les produit pas — ex : éclairage public, défense nationale' },
                { icon: '📊', title: 'Asymétries d\'information', text: 'Une partie est mieux informée que l\'autre — ex : vendeur de voiture d\'occasion vs acheteur' }
              ]
            },
            {
              type: 'cards',
              label: '3 fonctions économiques de l\'État (Musgrave)',
              items: [
                { icon: '⚙️', title: 'Allocation', text: 'Corriger les défaillances du marché et fournir les biens collectifs que le secteur privé ne produit pas suffisamment' },
                { icon: '⚖️', title: 'Redistribution', text: 'Réduire les inégalités via impôts progressifs, cotisations sociales et transferts (RSA, APL, allocations chômage...)' },
                { icon: '📊', title: 'Stabilisation', text: 'Réguler les cycles économiques — politique de relance en récession, politique de rigueur en surchauffe' }
              ]
            },
            {
              type: 'comparison',
              label: 'Politiques économiques',
              cols: ['Politique conjoncturelle', 'Politique structurelle'],
              rows: [
                ['Court terme', 'Long terme'],
                ['Agit via le budget (budgétaire) ou la monnaie (monétaire)', 'Agit sur les structures : innovation, formation, industrie'],
                ['Objectif : carré magique', 'Objectif : compétitivité durable et croissance potentielle'],
              ],
              footer: '⊕ Carré magique (Kaldor) : croissance économique · plein-emploi · stabilité des prix · équilibre extérieur'
            },
            {
              type: 'points',
              label: 'Politique monétaire — BCE',
              items: [
                'Menée par la Banque Centrale Européenne — totalement indépendante des États membres',
                'Outil principal : les taux directeurs (taux auxquels les banques commerciales empruntent à la BCE)',
                'Règle : maintenir l\'inflation à 2 % — si inflation ↑ → taux ↑ → crédit plus cher → frein à la demande',
                'Depuis 2008 : QE (Quantitative Easing) = achats massifs de titres pour injecter des liquidités'
              ]
            },
            {
              type: 'points',
              label: 'Organisations de régulation internationale',
              items: [
                'OMC (Organisation Mondiale du Commerce) : promotion du libre-échange, règlement des différends commerciaux',
                'FMI (Fonds Monétaire International) : stabilité monétaire, aide aux États en crise de balance des paiements',
                'Banque Mondiale : financement du développement des pays pauvres',
                'Autorité de la Concurrence (France) / Commission européenne (UE) : sanctionnent ententes et abus de position dominante'
              ]
            }
          ]
        },
        {
          title: "La combinaison productive",
          icon: '⚙️',
          sections: [
            {
              type: 'comparison',
              label: 'Capital fixe vs capital circulant',
              cols: ['Capital FIXE', 'Capital CIRCULANT'],
              rows: [
                ['Utilisé sur plusieurs cycles de production', 'Consommé en un seul cycle'],
                ['Machines, bâtiments, brevets, logiciels', 'Matières premières, énergie, stocks, créances clients'],
                ['S\'amortit dans le temps (dépréciation)', 'Se renouvelle à chaque cycle de production'],
              ]
            },
            {
              type: 'cards',
              label: '3 types d\'investissement',
              items: [
                { icon: '🏗️', title: 'De capacité', text: 'Augmenter la capacité productive — ex : construire une nouvelle usine, acheter de nouvelles machines' },
                { icon: '🔄', title: 'De remplacement', text: 'Renouveler le capital usé ou obsolète pour maintenir la capacité existante' },
                { icon: '🤖', title: 'De productivité', text: 'Substituer du capital au travail pour réduire les coûts — ex : automatisation, robotisation d\'une chaîne' }
              ]
            },
            {
              type: 'schema',
              label: 'Sources de financement de l\'entreprise',
              branches: [
                {
                  label: 'FINANCEMENT INTERNE',
                  color: 'forest',
                  items: [
                    'Autofinancement : CAF (Capacité d\'Autofinancement) = bénéfices non distribués mis en réserve',
                    'Cession d\'actifs : vente d\'équipements ou de filiales non stratégiques'
                  ]
                },
                {
                  label: 'FINANCEMENT EXTERNE',
                  color: 'indigo',
                  items: [
                    'Emprunt bancaire : crédit à moyen/long terme auprès d\'une banque',
                    'Crédit-bail (leasing) : louer un bien avec option d\'achat à l\'échéance',
                    'Émission d\'actions : augmentation de capital, pas de remboursement mais dilution',
                    'Émission d\'obligations : emprunt obligataire remboursable + coupon (intérêts)'
                  ]
                }
              ]
            },
            {
              type: 'formula',
              label: 'Productivité du travail',
              formula: 'Productivité du travail = Production réalisée ÷ Nombre d\'heures travaillées',
              note: 'Mesure l\'efficacité du facteur travail. ↑ Productivité = produire plus avec les mêmes ressources. Permet de justifier des hausses de salaires et d\'améliorer la compétitivité-prix.'
            },
            {
              type: 'definition',
              term: 'Destruction créatrice (Schumpeter)',
              text: 'Processus par lequel l\'innovation détruit des activités économiques existantes pour en créer de nouvelles. Ex : streaming → mort du marché DVD ; voiture → fin du cheval de trait ; e-commerce → pression sur la distribution physique.'
            }
          ]
        },
        {
          title: "Le numérique dans l'économie",
          icon: '💻',
          sections: [
            {
              type: 'cards',
              label: 'Transformation numérique — 3 phénomènes majeurs',
              items: [
                { icon: '✂️', title: 'Désintermédiation', text: 'Suppression des intermédiaires entre producteur et consommateur — ex : AirBnb (hôtellerie), Amazon (distribution)' },
                { icon: '🛒', title: 'Plateformes & marketplaces', text: 'Mise en relation acheteurs/vendeurs, rémunération par commission, effets de réseau (BtoB, BtoC, CtoC). Plus d\'utilisateurs = plateforme plus attractive.' },
                { icon: '🔁', title: 'Économie de partage', text: 'Partage de ressources sous-utilisées entre particuliers — ex : Uber, BlaBlaCar. Génère des questions sur le statut des travailleurs (faux indépendants).' }
              ]
            },
            {
              type: 'comparison',
              label: 'Outils numériques de l\'entreprise',
              cols: ['Outil', 'Définition et rôle'],
              rows: [
                ['SI (Système d\'Information)', 'Ensemble de ressources pour collecter, stocker, traiter et diffuser l\'information dans l\'entreprise'],
                ['ERP (Enterprise Resource Planning)', 'Progiciel intégré centralisant toutes les fonctions : comptabilité, RH, stocks, production, ventes — en temps réel'],
                ['CRM (Customer Relationship Management)', 'Gestion de la relation client : suivi des interactions, historique, segmentation, fidélisation'],
                ['Big data', 'Collecte et analyse de volumes massifs de données pour créer de la valeur ou optimiser les décisions'],
              ]
            },
            {
              type: 'points',
              label: 'RGPD — Règlement Général sur la Protection des Données (mai 2018)',
              items: [
                'Règlement européen s\'appliquant à toute entreprise traitant des données de citoyens de l\'UE',
                'Droits des personnes : accès, rectification, effacement (droit à l\'oubli), portabilité',
                'Obligations des entreprises : consentement explicite, sécurité des données, registre des traitements, désignation d\'un DPO',
                'Sanctions CNIL : jusqu\'à 4 % du CA mondial ou 20 M€'
              ]
            },
            {
              type: 'points',
              label: 'Protection des actifs numériques & nouvelles formes de travail',
              items: [
                'Nom de domaine : réservé "premier arrivé, premier servi" — si déposé comme marque INPI, protégé 10 ans renouvelable',
                'Logiciels et sites web : protégés par le droit d\'auteur s\'ils sont originaux (protection automatique, sans dépôt)',
                'Contrats électroniques : valides via la procédure du double-clic (conditions affichées + confirmation)',
                'E-commerce : impact fort sur la logistique, les délais et la relation omnicanale client-marque',
                'Télétravail : légalement encadré depuis 2012 — requiert un accord collectif ou un avenant au contrat individuel'
              ]
            }
          ]
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════
       ASPECT II — DROIT
    ═══════════════════════════════════════════════════════════ */
    {
      id: 'droit', label: 'Droit', color: 'forest', icon: '⚖️', num: 'II',
      question: "Quelles règles encadrent la vie de l'entreprise, les contrats et les relations de travail ?",
      chapters: [
        {
          title: "Les formes juridiques de l'entreprise",
          icon: '🏢',
          sections: [
            {
              type: 'table',
              label: 'Formes juridiques — tableau comparatif',
              cols: ['Forme', 'Associés', 'Responsabilité', 'Direction', 'Capital min.'],
              rows: [
                ['EI (Entreprise Individuelle)', '1 seul', 'ILLIMITÉE sur patrimoine perso', 'L\'entrepreneur', 'Aucun'],
                ['EURL', '1 seul', 'Limitée aux apports', 'Gérant (TNS si associé gérant)', '1 €'],
                ['SASU', '1 seul', 'Limitée aux apports', 'Président (assimilé salarié)', '1 €'],
                ['SARL', '2 à 100', 'Limitée aux apports', 'Gérant(s)', '1 €'],
                ['SAS', '≥ 2', 'Limitée aux apports', 'Président (statuts très libres)', '1 €'],
                ['SA', '≥ 2', 'Limitée aux apports', 'DG + CA ou Directoire + CS', '37 000 €'],
                ['SNC', '≥ 2', 'ILLIMITÉE et solidaire', 'Gérant(s)', 'Aucun'],
                ['Association loi 1901', '≥ 2', 'Limitée (but non lucratif)', 'Président + Bureau', 'Aucun'],
              ]
            },
            {
              type: 'points',
              label: 'Critères de choix d\'une forme juridique',
              items: [
                'Nombre d\'associés : seul → EI, EURL ou SASU ; à plusieurs → SARL, SAS, SA',
                'Niveau de responsabilité : protéger son patrimoine perso → responsabilité limitée (SARL, SAS, SA, EURL, SASU)',
                'Régime social du dirigeant : gérant majoritaire SARL = TNS (cotisations moins élevées) ; président SAS/SASU = assimilé salarié (meilleure protection sociale)',
                'Souplesse statutaire : SAS offre la plus grande liberté dans la rédaction des statuts (gouvernance, droits de vote)',
                'Accès aux marchés financiers : seule la SA permet l\'introduction en bourse'
              ]
            }
          ]
        },
        {
          title: "Le droit du travail et la rémunération",
          icon: '📋',
          sections: [
            {
              type: 'hierarchy',
              label: 'Hiérarchie des normes sociales',
              note: 'Principe de faveur : chaque norme de rang inférieur ne peut qu\'améliorer (jamais réduire) la protection accordée par la norme de rang supérieur.',
              levels: [
                { label: 'Constitution', icon: '🏛️', note: 'Droit de grève, liberté syndicale, droit à la formation...' },
                { label: 'Code du travail (Loi)', icon: '📚', note: 'Règles minimales applicables à tous les salariés de droit privé' },
                { label: 'Convention collective de branche', icon: '🤝', note: 'Négociée par secteur (ex : Métallurgie, BTP) — améliore le Code' },
                { label: 'Accord d\'entreprise', icon: '🏢', note: 'Négocié au niveau de l\'entreprise — améliore la convention de branche' },
                { label: 'Contrat de travail individuel', icon: '📝', note: 'Ne peut pas être moins favorable que toutes les normes supérieures' },
              ]
            },
            {
              type: 'table',
              label: 'CDI / CDD / CTT — comparatif',
              cols: ['Critère', 'CDI', 'CDD', 'CTT (Intérim)'],
              rows: [
                ['Durée', 'Indéterminée', 'Limitée dans le temps', 'Mission temporaire'],
                ['Cas légaux', 'Aucun requis — norme de droit commun', 'Remplacement, accroissement temporaire, saisonnier', 'Mêmes que CDD'],
                ['Prime fin contrat', 'Aucune', '10 % de précarité', '10 % de précarité'],
                ['Lien juridique', 'Salarié ↔ Employeur', 'Salarié ↔ Employeur', 'Tripartite : agence + utilisateur + intérimaire'],
                ['Rupture', 'Démission, licenciement, rupture conventionnelle', 'Terme fixé (ou accord commun)', 'Fin de mission'],
              ]
            },
            {
              type: 'definition',
              term: 'Lien de subordination juridique',
              text: 'Critère déterminant qui distingue le salarié du travailleur indépendant : le salarié exécute son travail sous l\'autorité de l\'employeur qui lui donne des ordres, en contrôle l\'exécution et peut en sanctionner les manquements. Ce lien déclenche l\'application du droit du travail.'
            },
            {
              type: 'formula',
              label: 'Bulletin de paie — de brut à net à payer',
              formula: 'SALAIRE BRUT  −  cotisations salariales (≈ 22 %)  =  SALAIRE NET  −  prélèvement à la source  =  NET À PAYER',
              note: '⚠ L\'employeur verse également des cotisations patronales (≈ 42–45 % du brut) qui ne figurent pas sur le bulletin mais constituent le coût réel du travail (financement Sécurité sociale, retraite, chômage).'
            },
            {
              type: 'cards',
              label: 'Rupture du contrat de travail — 3 modes',
              items: [
                { icon: '🚶', title: 'Démission', text: 'Acte unilatéral du salarié — volonté claire et non équivoque, préavis obligatoire, ne donne pas droit aux allocations chômage' },
                { icon: '📋', title: 'Licenciement', text: 'Par l\'employeur — motif personnel (faute, insuffisance) ou économique (difficultés, réorganisation). Doit être réel et sérieux, procédure stricte.' },
                { icon: '🤝', title: 'Rupture conventionnelle', text: 'Mode amiable du CDI — accord écrit homologué DREETS obligatoire. Ouvre droit aux allocations chômage.' }
              ]
            },
            {
              type: 'definition',
              term: 'SMIC — Salaire Minimum Interprofessionnel de Croissance',
              text: 'Plancher légal de rémunération horaire applicable à tous les salariés de droit privé. Revalorisé le 1er janvier de chaque année (et parfois en cours d\'année par décret si l\'inflation dépasse 2 %). Aucun salarié ne peut être rémunéré en dessous du SMIC.'
            }
          ]
        },
        {
          title: "Contrats et responsabilités",
          icon: '📜',
          sections: [
            {
              type: 'cards',
              label: 'Les 3 conditions de validité d\'un contrat (art. 1101 C. civ.)',
              items: [
                { icon: '🤝', title: 'Consentement', text: 'Accord libre et éclairé des parties — doit être exempt de vices (erreur, dol, violence)' },
                { icon: '👤', title: 'Capacité', text: 'Aptitude juridique à contracter — mineurs non émancipés et majeurs sous tutelle en sont privés' },
                { icon: '📋', title: 'Contenu licite et certain', text: 'L\'objet du contrat doit être légal et déterminé (ou déterminable)' }
              ]
            },
            {
              type: 'cards',
              label: 'Les 3 vices du consentement',
              items: [
                { icon: '❓', title: 'Erreur', text: 'Croyance fausse sur l\'objet ou la qualité essentielle de la prestation — ex : acheter une copie en croyant avoir l\'original' },
                { icon: '🎭', title: 'Dol', text: 'Manœuvres frauduleuses d\'une partie pour tromper l\'autre et obtenir son consentement — escroquerie contractuelle' },
                { icon: '⚡', title: 'Violence', text: 'Contrainte physique ou morale exercée sur une partie pour la forcer à contracter contre sa volonté' }
              ]
            },
            {
              type: 'comparison',
              label: 'Responsabilité civile — contractuelle vs délictuelle',
              cols: ['Responsabilité contractuelle', 'Responsabilité délictuelle (art. 1240)'],
              rows: [
                ['Il existe un contrat entre les parties', 'Aucun contrat entre les parties'],
                ['Inexécution ou mauvaise exécution d\'une obligation', 'Faute causant un dommage à un tiers'],
                ['Éléments : inexécution + dommage + lien causal', 'Éléments : FAUTE + DOMMAGE + LIEN DE CAUSALITÉ'],
                ['Ex : entrepreneur qui ne respecte pas les délais', 'Ex : conducteur qui renverse un piéton'],
              ]
            },
            {
              type: 'points',
              label: 'Protection juridique des actifs immatériels',
              items: [
                'Droit d\'auteur : protège les œuvres originales (logiciels, sites web) automatiquement et sans dépôt — durée vie de l\'auteur + 70 ans',
                'Marque (INPI) : signe distinctif déposé pour 10 ans renouvelables — protège nom, logo, slogan',
                'Brevet (INPI) : protège une invention technique nouvelle et applicable industriellement — durée 20 ans',
                'Nom de domaine : premier arrivé, premier servi — si déposé comme marque, peut être défendu contre le cybersquatting',
                'Contrat électronique : valable par la procédure du double-clic (affichage des conditions + confirmation)'
              ]
            }
          ]
        }
      ]
    },

    /* ═══════════════════════════════════════════════════════════
       ASPECT III — MANAGEMENT
    ═══════════════════════════════════════════════════════════ */
    {
      id: 'mgmt', label: 'Management', color: 'amber', icon: '🎯', num: 'III',
      question: "Comment piloter une organisation, motiver ses équipes et choisir une stratégie efficace ?",
      chapters: [
        {
          title: "Organiser et manager",
          icon: '🏗️',
          sections: [
            {
              type: 'cards',
              label: '3 finalités de l\'entreprise',
              items: [
                { icon: '💰', title: 'Financière', text: 'Réaliser du profit, assurer la rentabilité et la pérennité économique de l\'entreprise au service des actionnaires' },
                { icon: '👥', title: 'Sociale', text: 'Prendre en compte le bien-être des salariés, leurs conditions de travail et leurs aspirations professionnelles' },
                { icon: '🌍', title: 'Sociétale (RSE)', text: 'Respecter l\'environnement et contribuer au bien-être de la société — Responsabilité Sociétale des Entreprises' }
              ]
            },
            {
              type: 'definition',
              term: 'Management',
              text: 'Ensemble des techniques d\'organisation et de direction visant à atteindre les objectifs d\'une entreprise. Deux logiques coexistent : l\'entrepreneur (innove, prend des risques, crée de la valeur) et le manager (optimise les ressources, coordonne, contrôle les résultats).'
            },
            {
              type: 'comparison',
              label: 'OST — Organisation Scientifique du Travail (Taylor/Fayol)',
              cols: ['Division horizontale', 'Division verticale'],
              rows: [
                ['Spécialisation des tâches', 'Séparation conception / exécution'],
                ['Chaque opérateur exécute une tâche précise et répétitive', 'Les managers planifient ; les ouvriers exécutent'],
                ['Gain de productivité et rendement accru', 'Hiérarchie formelle, autorité centralisée, contrôle'],
              ],
              footer: '⚠ Limites de l\'OST : déshumanisation, travail monotone, absentéisme, résistances, manque de flexibilité'
            },
            {
              type: 'cards',
              label: '4 structures organisationnelles',
              items: [
                { icon: '🔵', title: 'Fonctionnelle', text: 'Regroupement par service/métier (RH, Marketing, Finance) — simple mais risque de silos et lenteur' },
                { icon: '🔶', title: 'Divisionnelle', text: 'Organisation par produit, zone géographique ou segment client — autonomie de chaque division, mais coûts de structure' },
                { icon: '#️⃣', title: 'Matricielle', text: 'Double hiérarchie fonctionnelle + projet — flexible et polyvalente, mais risque de conflits d\'autorité' },
                { icon: '🌐', title: 'En réseau', text: 'Externalisation maximale autour d\'un cœur de compétences — très agile, mais forte dépendance externe' }
              ]
            },
            {
              type: 'hierarchy',
              label: 'Types de décision selon l\'horizon temporel',
              note: 'Plus on monte dans la hiérarchie, plus les décisions sont structurantes, engageantes et irréversibles.',
              levels: [
                { label: 'Décision stratégique', icon: '🔭', note: 'Long terme (3–5 ans) · Engagements lourds · Prise par les dirigeants (DG, CA)' },
                { label: 'Décision tactique', icon: '📋', note: 'Moyen terme (1–3 ans) · Allocation des ressources · Prise par l\'encadrement intermédiaire' },
                { label: 'Décision opérationnelle', icon: '⚙️', note: 'Court terme (quotidien) · Gestion courante · Prise par les opérationnels et exécutants' },
              ]
            },
            {
              type: 'definition',
              term: 'Rationalité limitée (Herbert Simon)',
              text: 'Les décideurs ne disposent pas d\'une information complète, d\'un temps illimité ni d\'une capacité cognitive infinie. Ils ne cherchent donc pas la solution optimale mais la première solution satisfaisante. Ce principe remet en cause le modèle du décideur "parfaitement rationnel" de la théorie classique.'
            }
          ]
        },
        {
          title: "Motivation et gestion des ressources humaines",
          icon: '👥',
          sections: [
            {
              type: 'pyramid',
              label: 'Pyramide des besoins de Maslow (5 niveaux)',
              note: 'Un besoin de niveau inférieur doit être suffisamment satisfait avant que le niveau supérieur devienne motivant.',
              levels: [
                { label: 'Besoins physiologiques', note: 'Salaire de base, nourriture, repos — conditions minimales de survie', color: 'indigo' },
                { label: 'Besoins de sécurité', note: 'Sécurité de l\'emploi, revenus stables, santé, logement stable', color: 'indigo' },
                { label: 'Besoins d\'appartenance', note: 'Relations sociales, intégration dans une équipe, sentiment d\'appartenance', color: 'forest' },
                { label: 'Besoins d\'estime', note: 'Reconnaissance, statut, respect des pairs, sentiment de compétence', color: 'forest' },
                { label: 'Accomplissement de soi', note: 'Réalisation personnelle, créativité, développement de son plein potentiel', color: 'amber' },
              ]
            },
            {
              type: 'comparison',
              label: 'Théorie de Herzberg — 2 types de facteurs',
              cols: ['Facteurs d\'hygiène', 'Facteurs de motivation'],
              rows: [
                ['Absence → insatisfaction', 'Présence → satisfaction active'],
                ['Ne motivent pas en eux-mêmes', 'Motivent et engagent activement'],
                ['Liés à l\'environnement du travail', 'Liés au contenu même du travail'],
                ['Salaire, conditions, sécurité, supervision', 'Responsabilités, reconnaissance, accomplissement, avancement'],
              ],
              footer: '→ Corriger les facteurs d\'hygiène est nécessaire mais insuffisant pour motiver une équipe'
            },
            {
              type: 'spectrum',
              label: '4 styles de management (Likert)',
              items: [
                { label: 'Autoritaire exploiteur', note: 'Ordres + menaces, aucune participation, contrôle total, peur' },
                { label: 'Autoritaire bienveillant', note: 'Récompenses + sanctions, communication essentiellement descendante' },
                { label: 'Consultatif', note: 'Avis recueillis mais décision finale appartient toujours au manager' },
                { label: 'Participatif', note: 'Décision collective, forte délégation → le plus efficace selon Likert' },
              ]
            },
            {
              type: 'definition',
              term: 'DPO — Direction Par Objectifs (Drucker)',
              text: 'Méthode de management dans laquelle chaque collaborateur reçoit des objectifs SMART dont il est personnellement responsable, avec une évaluation périodique des résultats. Développe la motivation et l\'autonomie des équipes.'
            },
            {
              type: 'acronym',
              label: 'SMART — critères d\'un objectif managérial',
              items: [
                { letter: 'S', word: 'Spécifique', text: 'Précis et clairement formulé — pas d\'ambiguïté sur ce qui est attendu' },
                { letter: 'M', word: 'Mesurable', text: 'Quantifiable avec un indicateur chiffré permettant d\'évaluer le résultat' },
                { letter: 'A', word: 'Atteignable', text: 'Réalisable compte tenu des moyens disponibles (sans être trop facile)' },
                { letter: 'R', word: 'Réaliste', text: 'Pertinent dans le contexte de l\'entreprise et aligné avec la stratégie' },
                { letter: 'T', word: 'Temporellement défini', text: 'Une date butoir précise est fixée' }
              ]
            },
            {
              type: 'process',
              label: 'Processus de recrutement',
              steps: [
                { icon: '📝', label: 'Définition du besoin', note: 'Fiche de poste + profil candidat' },
                { icon: '🔍', label: 'Sourcing', note: 'Interne (mobilité) ou externe (annonces, réseaux, cabinets)' },
                { icon: '👥', label: 'Sélection', note: 'Tri CV → entretiens → tests → références' },
                { icon: '🤝', label: 'Intégration', note: 'Accueil, formation, onboarding' }
              ]
            },
            {
              type: 'points',
              label: 'GPEC et CPF — gestion des compétences',
              items: [
                'GPEC (Gestion Prévisionnelle des Emplois et Compétences) : anticiper à 3–5 ans les besoins en effectifs et compétences — obligatoire dans les entreprises de +300 salariés',
                'CPF (Compte Personnel de Formation) : droit à la formation attaché à chaque salarié, mobilisable tout au long de la carrière (même en cas de changement d\'employeur)',
                'Plan de formation : défini chaque année par l\'employeur pour maintenir et développer les compétences des salariés'
              ]
            }
          ]
        },
        {
          title: "Les choix stratégiques",
          icon: '🧭',
          sections: [
            {
              type: 'definition',
              term: 'Stratégie (Chandler)',
              text: 'Détermination des buts et objectifs à long terme d\'une entreprise, adoption des moyens d\'action et allocation des ressources nécessaires pour les atteindre. La stratégie délibérée est planifiée à l\'avance ; la stratégie émergente est non planifiée, issue d\'adaptations successives à l\'environnement.'
            },
            {
              type: 'schema',
              label: 'Diagnostic stratégique — SWOT',
              branches: [
                {
                  label: 'DIAGNOSTIC INTERNE',
                  sublabel: 'Forces & Faiblesses',
                  color: 'forest',
                  groups: [
                    {
                      label: 'Ressources',
                      items: [
                        'Matérielles : équipements, machines, bâtiments, infrastructure',
                        'Immatérielles : marque, brevets, savoir-faire, réputation',
                        'Financières : trésorerie, capacité d\'emprunt, rentabilité',
                        'Humaines : compétences, expertise, culture d\'entreprise'
                      ]
                    },
                    {
                      label: 'Compétences',
                      items: [
                        'Professionnelles : maîtrise technique du cœur de métier',
                        'Organisationnelles : efficacité des processus internes',
                        'Commerciales : relation client, force de vente, marketing'
                      ]
                    }
                  ]
                },
                {
                  label: 'DIAGNOSTIC EXTERNE',
                  sublabel: 'Opportunités & Menaces',
                  color: 'indigo',
                  groups: [
                    {
                      label: 'Macro-environnement — PESTEL',
                      items: [
                        'Politique : stabilité gouvernementale, politique fiscale',
                        'Économique : croissance, inflation, taux d\'intérêt',
                        'Socioculturel : démographie, valeurs, modes de vie',
                        'Technologique : innovations, R&D, numérisation',
                        'Environnemental : normes écologiques, ressources, RSE',
                        'Légal : droit du travail, concurrence, consommateur'
                      ]
                    },
                    {
                      label: 'Micro-environnement',
                      items: [
                        'Clients : besoins, attentes, pouvoir de négociation',
                        'Fournisseurs : dépendance, pouvoir de négociation',
                        'Concurrents directs et indirects (substituts)',
                        'Intermédiaires : distributeurs, revendeurs, agents',
                        'Partenaires : banques, conseils, sous-traitants'
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: 'acronym',
              label: 'PESTEL — analyse du macro-environnement',
              items: [
                { letter: 'P', word: 'Politique', text: 'Stabilité gouvernementale, politique fiscale, subventions, réglementation sectorielle' },
                { letter: 'E', word: 'Économique', text: 'Croissance du PIB, taux d\'inflation, taux d\'intérêt, chômage, pouvoir d\'achat' },
                { letter: 'S', word: 'Socioculturel', text: 'Démographie, valeurs, modes de vie, comportements de consommation, éducation' },
                { letter: 'T', word: 'Technologique', text: 'Innovations, R&D, numérisation, automatisation, intelligence artificielle' },
                { letter: 'E', word: 'Environnemental', text: 'Normes écologiques, ressources naturelles, changement climatique, empreinte carbone, RSE' },
                { letter: 'L', word: 'Légal', text: 'Droit du travail, droit de la concurrence, protection du consommateur, RGPD' }
              ]
            },
            {
              type: 'cards',
              label: '5 forces concurrentielles de Porter',
              items: [
                { icon: '⚔️', title: 'Rivalité entre concurrents', text: 'Intensité de la concurrence directe dans le secteur — nombre de rivaux, taux de croissance du marché, coûts de sortie' },
                { icon: '🚪', title: 'Menace de nouveaux entrants', text: 'Risque d\'arrivée de nouveaux acteurs — barrières : économies d\'échelle, brevets, capital requis, accès aux réseaux' },
                { icon: '🔄', title: 'Produits de substitution', text: 'Alternatives répondant au même besoin à moindre coût — ex : train vs avion, streaming vs cinéma' },
                { icon: '📦', title: 'Pouvoir des fournisseurs', text: 'Capacité à imposer leurs prix ou conditions — fort si peu nombreux, produits rares ou différenciés' },
                { icon: '🛒', title: 'Pouvoir des clients', text: 'Capacité à négocier — fort si clients concentrés, produits standardisés, coûts de changement faibles' }
              ]
            },
            {
              type: 'cards',
              label: '4 stratégies globales',
              items: [
                { icon: '🎯', title: 'Spécialisation', text: 'Renforcer et approfondir le cœur de métier existant pour devenir expert reconnu — ex : Apple dans l\'écosystème tech' },
                { icon: '🌈', title: 'Diversification', text: 'Développer de nouveaux produits ou entrer sur de nouveaux marchés (liée = synergies ; non liée = conglomérat)' },
                { icon: '⛓️', title: 'Intégration verticale', text: 'Contrôler des étapes supplémentaires de la filière — amont (fournisseurs) ou aval (distribution)' },
                { icon: '📤', title: 'Externalisation (impartition)', text: 'Confier à un prestataire externe des activités non stratégiques pour se concentrer sur le cœur de métier' }
              ]
            },
            {
              type: 'cards',
              label: '3 stratégies de domaine (Porter)',
              items: [
                { icon: '💲', title: 'Domination par les coûts', text: 'Être le producteur le moins cher grâce aux économies d\'échelle et à l\'optimisation des processus — ex : Ryanair, IKEA, Aldi' },
                { icon: '✨', title: 'Différenciation', text: 'Proposer un produit perçu comme unique et supérieur, justifiant un prix premium — ex : Apple, Nespresso, Louis Vuitton' },
                { icon: '🔭', title: 'Focalisation (niche)', text: 'Concentrer ses efforts sur un segment de marché très précis, bien délimité — ex : Ferrari (sportives luxe), Naturalia (bio)' }
              ]
            },
            {
              type: 'cards',
              label: '4 modalités de croissance',
              items: [
                { icon: '🌱', title: 'Croissance interne (organique)', text: 'Développement par ses propres ressources et capacités — plus lent mais maîtrisé et moins risqué' },
                { icon: '🔀', title: 'Croissance externe', text: 'Fusion-acquisition, prise de participation, franchise, alliance stratégique — rapide mais coûteux et difficile à intégrer' },
                { icon: '🌍', title: 'Croissance internationale', text: 'Expansion sur les marchés étrangers via l\'export, une implantation locale ou une joint-venture' },
                { icon: '🤝', title: 'Croissance conjointe', text: 'Alliance ou joint-venture avec un partenaire — partage des ressources et des risques sur un projet commun' }
              ]
            },
            {
              type: 'cards',
              label: 'Performance globale — 3 dimensions',
              items: [
                { icon: '🎯', title: 'Efficacité', text: 'Atteindre les objectifs fixés — faire les bonnes choses. Mesurée par le taux de réalisation des objectifs.' },
                { icon: '⚡', title: 'Efficience', text: 'Atteindre les objectifs en minimisant les ressources mobilisées — bien faire les choses. Indicateurs de productivité.' },
                { icon: '🌿', title: 'Pérennité', text: 'Assurer la durabilité et la survie à long terme — performance économique, sociale ET environnementale (RSE).' }
              ]
            }
          ]
        }
      ]
    }
  ],

  /* ── MATCHING — termes ↔ définitions ───────────────────────────── */
  matching: [
    { left: 'Stratégie de différenciation',  right: 'Proposer un produit ou service perçu comme unique et supérieur aux yeux du client' },
    { left: 'Capital circulant',              right: 'Facteurs consommés en un seul cycle : matières premières, stocks, créances clients' },
    { left: 'Autofinancement',               right: 'Financement par les bénéfices non distribués mis en réserve (CAF)' },
    { left: 'Externalisation',               right: 'Confier à un prestataire externe des activités non stratégiques pour se concentrer sur le cœur de métier' },
    { left: 'Consentement',                  right: '1ère condition de validité d\'un contrat : accord libre et éclairé, exempt de vices' },
    { left: 'Focalisation',                  right: 'Stratégie de domaine ciblant un segment précis (niche) plutôt que l\'ensemble du marché' },
    { left: 'PESTEL',                        right: 'Outil d\'analyse du macro-environnement : Politique, Économique, Socioculturel, Technologique, Environnemental, Légal' },
    { left: 'Efficience',                    right: 'Atteindre les objectifs en minimisant les ressources mobilisées' },
    { left: 'Rationalité limitée',           right: 'Les décideurs choisissent une solution satisfaisante, pas optimale, par manque d\'information complète' },
    { left: 'Stabilisation',                 right: 'Fonction de l\'État consistant à réguler les cycles économiques (relance ou rigueur)' },
    { left: 'DAS',                           right: 'Domaine d\'Activité Stratégique : segment homogène partageant les mêmes facteurs clés de succès' },
    { left: 'Capital fixe',                  right: 'Biens durables utilisés sur plusieurs cycles de production qui s\'amortissent (machines, bâtiments)' },
  ],

  /* ── FLASHCARDS — termes & définitions clés ────────────────────── */
  flashcards: [
    { front: 'Contrat — 3 conditions de validité', back: '1. Consentement (libre et éclairé, sans vice)\n2. Capacité (aptitude juridique à contracter)\n3. Contenu licite et certain (objet légal et déterminable)', aspect: 'droit' },
    { front: 'Les 4 stratégies globales', back: '1. Spécialisation → renforcer le cœur de métier\n2. Diversification → nouveaux produits ou marchés\n3. Intégration verticale → contrôler amont ou aval\n4. Externalisation → sous-traiter le non-stratégique', aspect: 'mgmt' },
    { front: 'Les 3 stratégies de domaine', back: '1. Domination par les coûts → prix les plus bas (ex : Ryanair, IKEA)\n2. Différenciation → attributs uniques, prix premium (ex : Apple, Nespresso)\n3. Focalisation → niche précise (ex : Ferrari, Porsche)', aspect: 'mgmt' },
    { front: 'PESTEL — développé', back: 'P – Politique (stabilité, fiscalité, réglementation)\nE – Économique (croissance, inflation, taux d\'intérêt)\nS – Socioculturel (démographie, valeurs, modes de vie)\nT – Technologique (innovation, R&D, numérisation)\nE – Environnemental (normes écologiques, RSE)\nL – Légal (droit du travail, concurrence, consommateur)', aspect: 'mgmt' },
    { front: 'Capital fixe vs capital circulant', back: 'Capital FIXE : biens durables sur plusieurs cycles (machines, bâtiments, brevets) → s\'amortit\n\nCapital CIRCULANT : consommé en un cycle (matières premières, stocks, créances clients)', aspect: 'eco' },
    { front: 'Les 3 types d\'investissement', back: '1. De capacité : augmenter la production\n2. De remplacement : renouveler le capital usé\n3. De productivité : substituer capital au travail (automatisation)', aspect: 'eco' },
    { front: 'Sources de financement de l\'entreprise', back: 'INTERNES :\n• Autofinancement (CAF = bénéfices non distribués)\n• Cession d\'actifs\n\nEXTERNES :\n• Emprunt bancaire\n• Crédit-bail\n• Émission d\'actions\n• Émission d\'obligations', aspect: 'eco' },
    { front: 'Les 3 vices du consentement', back: '1. Erreur : croyance fausse sur l\'objet ou qualité essentielle\n2. Dol : manœuvres frauduleuses pour tromper l\'autre partie\n3. Violence : contrainte physique ou morale pour forcer le consentement', aspect: 'droit' },
    { front: 'Responsabilité civile délictuelle — 3 conditions', back: 'Art. 1240 C. civ. — 3 éléments obligatoires :\n\n1. Une FAUTE (action ou omission)\n2. Un DOMMAGE (réel, direct, certain)\n3. Un LIEN DE CAUSALITÉ entre la faute et le dommage', aspect: 'droit' },
    { front: 'SMART — développé', back: 'S – Spécifique : objectif précis et clair\nM – Mesurable : indicateur chiffré\nA – Atteignable : réaliste avec les moyens disponibles\nR – Réaliste : pertinent dans le contexte\nT – Temporellement défini : date butoir fixée', aspect: 'mgmt' },
    { front: 'Les 5 forces concurrentielles de Porter', back: '1. Concurrents directs (intensité de la rivalité)\n2. Menace de nouveaux entrants (barrières à l\'entrée)\n3. Produits ou services de substitution\n4. Pouvoir de négociation des fournisseurs\n5. Pouvoir de négociation des clients', aspect: 'mgmt' },
    { front: 'Bulletin de paie — de brut à net', back: 'Salaire BRUT\n− Cotisations salariales (≈ 22 %) → maladie, retraite, chômage\n= Salaire NET\n− Prélèvement à la source (impôt sur le revenu)\n= NET À PAYER\n\n⚠ Cotisations patronales ≈ 42–45 % versées en plus par l\'employeur', aspect: 'droit' },
    { front: 'Les 3 fonctions économiques de l\'État', back: '1. Allocation : corriger les défaillances du marché\n2. Redistribution : réduire les inégalités (impôts + transferts)\n3. Stabilisation : réguler les cycles (relance / rigueur)', aspect: 'eco' },
    { front: 'CDI / CDD / CTT — l\'essentiel', back: 'CDI : sans terme, norme de référence, rupture par démission / licenciement / rupture conventionnelle\n\nCDD : durée limitée, cas précis, prime précarité 10 %\n\nCTT (intérim) : mission via agence, relation tripartite, prime 10 %', aspect: 'droit' },
    { front: 'SWOT — diagnostic stratégique', back: 'INTERNE :\n• Forces : avantages concurrentiels de l\'entreprise\n• Faiblesses : points à améliorer\n\nEXTERNE :\n• Opportunités : tendances favorables de l\'environnement\n• Menaces : risques à anticiper\n\nDiag. interne = ressources + compétences | Diag. externe = PESTEL + 5 forces', aspect: 'mgmt' },
    { front: 'Les 4 styles de management (Likert)', back: '1. Autoritaire exploiteur : ordres + menaces, aucune participation\n2. Autoritaire bienveillant : récompenses + sanctions, peu de participation\n3. Consultatif : avis recueillis mais décision finale au chef\n4. Participatif : décision collective, forte délégation → le plus efficace', aspect: 'mgmt' },
    { front: 'Hiérarchie des normes sociales', back: 'De la plus haute à la plus basse :\n1. Constitution\n2. Code du travail (Loi)\n3. Convention collective de branche\n4. Accord d\'entreprise\n5. Contrat de travail individuel\n\n→ Principe de faveur : chaque niveau améliore le niveau supérieur', aspect: 'droit' },
    { front: 'Performance globale — 3 dimensions', back: '1. Efficacité : atteindre les objectifs fixés (faire les bonnes choses)\n2. Efficience : atteindre les objectifs en minimisant les ressources\n3. Pérennité : assurer la durabilité à long terme (économique, sociale, environnementale)', aspect: 'mgmt' },
    { front: 'Formes juridiques — responsabilité', back: 'Responsabilité ILLIMITÉE (patrimoine personnel en jeu) :\n→ EI, SNC\n\nResponsabilité LIMITÉE aux apports (patrimoine séparé) :\n→ SARL, SAS, SA, EURL, SASU\n\n⚠ SAS = plus grande souplesse statutaire', aspect: 'droit' },
    { front: 'Intégration verticale — amont vs aval', back: 'AMONT : racheter un fournisseur pour contrôler l\'approvisionnement\n→ Ex : constructeur auto qui acquiert un fabricant de pièces\n\nAVAL : racheter ou créer un réseau de distribution\n→ Ex : marque qui ouvre ses propres boutiques', aspect: 'mgmt' },
    { front: 'Destruction créatrice (Schumpeter)', back: 'Processus par lequel l\'innovation détruit des activités existantes pour en créer de nouvelles.\n\nEx : streaming → fin du marché DVD\nEx : e-commerce → pression sur la distribution physique\n\n→ Moteur du capitalisme et de la croissance à long terme', aspect: 'eco' },
    { front: 'Les 3 finalités de l\'entreprise', back: '1. Financière : profit, rentabilité, satisfaction des actionnaires\n2. Sociale : bien-être des salariés, conditions de travail\n3. Sociétale (RSE) : respect de l\'environnement, contribution au bien commun', aspect: 'mgmt' },
  ],

  /* ── QUIZ — QCM ─────────────────────────────────────────────── */
  quiz: [
    { q: 'Pour qu\'un contrat soit valablement formé, quelles sont les 3 conditions requises ?', opts: ['Écrit, signature et enregistrement notarial', 'Consentement, capacité des parties et contenu licite et certain', 'Offre, contre-offre et accord de prix', 'Témoins, écrit et date certaine'], ans: 1, aspect: 'droit' },
    { q: 'Quelles sont les 4 stratégies globales de l\'entreprise ?', opts: ['Croissance, stabilité, déclin et innovation', 'Attaque, défense, alliance et retrait', 'Spécialisation, diversification, intégration et externalisation', 'Interne, externe, internationale et conjointe'], ans: 2, aspect: 'mgmt' },
    { q: 'Quelles sont les 3 stratégies de domaine ?', opts: ['Innovation, imitation et domination', 'Domination par les coûts, différenciation et focalisation', 'Spécialisation, diversification et intégration', 'Publicitaire, promotionnelle et relationnelle'], ans: 1, aspect: 'mgmt' },
    { q: 'Dans PESTEL, que signifient respectivement le 1er "E" et le "S" ?', opts: ['Environnemental et Stratégique', 'Économique et Socioculturel', 'Européen et Systémique', 'Éthique et Structurel'], ans: 1, aspect: 'mgmt' },
    { q: 'Quels sont les 3 types d\'investissement ?', opts: ['Physique, financier et immatériel', 'Public, privé et mixte', 'Capacité, remplacement et productivité', 'Court terme, moyen terme et long terme'], ans: 2, aspect: 'eco' },
    { q: 'Que comprend le capital circulant ?', opts: ['Les machines, bâtiments et brevets', 'Les actions et obligations détenues', 'Les matières premières, stocks et créances clients', 'Les immobilisations corporelles et incorporelles'], ans: 2, aspect: 'eco' },
    { q: 'La responsabilité civile délictuelle nécessite la réunion de :', opts: ['Un contrat, une inexécution et un préjudice', 'Une intention, un acte et une victime', 'Une faute, un dommage et un lien de causalité', 'Une mauvaise foi, une erreur et une violence'], ans: 2, aspect: 'droit' },
    { q: 'SMART signifie (dans l\'ordre) :', opts: ['Simple, Maîtrisé, Approuvé, Raisonnable, Tracé', 'Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini', 'Stratégique, Managérial, Adapté, Résultats, Temps', 'Systémique, Motivant, Ambitieux, Révisable, Transférable'], ans: 1, aspect: 'mgmt' },
    { q: 'Un CDD se termine par une prime de précarité de :', opts: ['5 %', '8 %', '10 %', '15 %'], ans: 2, aspect: 'droit' },
    { q: 'Quelles sont les 3 fonctions économiques de l\'État ?', opts: ['Légiférer, exécuter et juger', 'Produire, distribuer et consommer', 'Allocation, redistribution et stabilisation', 'Taxer, emprunter et subventionner'], ans: 2, aspect: 'eco' },
    { q: 'La stratégie de différenciation consiste à :', opts: ['Proposer les prix les plus bas du marché', 'Se concentrer sur une niche très précise', 'Proposer un produit perçu comme unique et supérieur par le client', 'Racheter un concurrent direct'], ans: 2, aspect: 'mgmt' },
    { q: 'La performance globale d\'une entreprise se compose de :', opts: ['Chiffre d\'affaires, résultat net et dividendes', 'Efficacité, efficience et pérennité', 'Productivité, croissance et parts de marché', 'Qualité, délai et coût'], ans: 1, aspect: 'mgmt' },
    { q: 'Dans la hiérarchie des normes sociales, qu\'est-ce qui prime sur l\'accord d\'entreprise ?', opts: ['Le règlement intérieur', 'Le contrat de travail individuel', 'La convention collective de branche (si plus favorable)', 'La note de service du DRH'], ans: 2, aspect: 'droit' },
    { q: 'L\'intégration verticale aval signifie que l\'entreprise :', opts: ['Rachète un fournisseur pour contrôler l\'approvisionnement', 'Rachète ou crée un réseau de distribution pour vendre directement', 'S\'associe avec un concurrent sur un marché étranger', 'Externalise ses activités logistiques'], ans: 1, aspect: 'mgmt' },
    { q: 'Le diagnostic EXTERNE d\'une entreprise analyse :', opts: ['Les forces et faiblesses internes (ressources, compétences)', 'Les opportunités et menaces de l\'environnement (PESTEL, 5 forces)', 'La chaîne de valeur interne de l\'entreprise', 'La structure organisationnelle et les processus'], ans: 1, aspect: 'mgmt' },
    { q: 'L\'autofinancement correspond à :', opts: ['Un emprunt accordé par la banque sans garanties', 'Une subvention publique à l\'investissement', 'L\'utilisation des bénéfices non distribués pour financer l\'activité', 'Une émission d\'actions sur les marchés financiers'], ans: 2, aspect: 'eco' },
    { q: 'Lequel de ces éléments est un vice du consentement ?', opts: ['Incapacité juridique du signataire', 'Objet illicite du contrat', 'Dol (manœuvres frauduleuses pour tromper)', 'Absence d\'écrit pour un contrat de vente'], ans: 2, aspect: 'droit' },
    { q: 'Quelles sont les 4 modalités de croissance ?', opts: ['Rachat, fusion, franchise et alliance', 'Embauche, formation, promotion et mobilité', 'Interne, externe, internationale et conjointe', 'Audit, restructuration, cession et liquidation'], ans: 2, aspect: 'mgmt' },
    { q: 'Quel critère distingue juridiquement le salarié du travailleur indépendant ?', opts: ['Le montant de la rémunération', 'L\'existence d\'un contrat écrit', 'Le lien de subordination juridique', 'La durée de la mission'], ans: 2, aspect: 'droit' },
    { q: 'Selon la théorie de Herzberg, les facteurs d\'hygiène sont :', opts: ['Des facteurs qui motivent activement le salarié si présents', 'Des facteurs dont l\'absence crée de l\'insatisfaction mais dont la présence ne suffit pas à motiver', 'Des facteurs liés au contenu intrinsèque du travail', 'Des facteurs exclusivement psychologiques'], ans: 1, aspect: 'mgmt' },
  ],

  /* ── BADGES ────────────────────────────────────────────────── */
  badges: [
    { id: 'first',    icon: '🌱', label: 'Premier pas',   desc: 'Première session lancée' },
    { id: 'eco',      icon: '📈', label: 'Économiste',    desc: 'Aspect Économie exploré' },
    { id: 'droit',    icon: '⚖️', label: 'Juriste',       desc: 'Aspect Droit exploré' },
    { id: 'mgmt',     icon: '🎯', label: 'Manager',       desc: 'Aspect Management exploré' },
    { id: 'all3',     icon: '🏆', label: 'Triple A',      desc: 'Les 3 aspects visités' },
    { id: 'quiz10',   icon: '🧠', label: 'Cerveau d\'or', desc: 'Score parfait au quiz' },
    { id: 'matcher',  icon: '🔗', label: 'Vocabulaire',   desc: 'Tous les termes associés' },
    { id: 'flasher',  icon: '⚡', label: 'Flash',         desc: 'Session flashcards complète' },
    { id: 'century',  icon: '💯', label: 'Centenaire',    desc: '100 XP accumulés' },
    { id: 'streak3',  icon: '🔥', label: 'En feu',        desc: 'Série de 3 jours' },
  ],

  /* ── SUJETS du jour ─────────────────────────────────────────── */
  sujets: [
    "L'entreprise est-elle seule responsable de sa performance ?",
    "La stratégie de différenciation est-elle toujours préférable à la domination par les coûts ?",
    "L'externalisation est-elle une menace ou une opportunité pour l'entreprise ?",
    "L'État peut-il réguler efficacement un marché sans en perturber le fonctionnement ?",
    "La rationalité limitée remet-elle en cause l'idée d'un management scientifique ?",
    "Le management participatif est-il applicable dans toutes les organisations ?",
    "La croissance externe est-elle systématiquement préférable à la croissance interne ?",
    "L'innovation est-elle la seule source de compétitivité durable pour une entreprise ?",
    "Le droit du travail protège-t-il suffisamment les salariés face à la flexibilité ?",
    "La transformation numérique est-elle une opportunité ou une menace pour l'emploi ?",
    "L'entreprise peut-elle être performante tout en étant socialement responsable ?",
    "La stratégie délibérée est-elle encore réaliste dans un environnement incertain ?",
  ],
};
