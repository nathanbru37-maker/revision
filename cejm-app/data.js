// Données CEJM — Culture Économique, Juridique & Managériale — BTS

window.CEJM_DATA = {

  /* ── 3 ASPECTS ─────────────────────────────────────────────────── */
  aspects: [
    {
      id: 'eco',
      label: 'Économie',
      color: 'indigo',
      icon: '📈',
      num: 'I',
      question: "Comment les marchés fonctionnent-ils et comment l'État régule-t-il l'activité économique ?",
      chapters: [
        {
          title: "Les marchés et la régulation",
          points: [
            "Marché : lieu (réel ou virtuel) de rencontre entre une offre et une demande, aboutissant à un prix d'équilibre",
            "Concurrence pure et parfaite (CPP) : 5 conditions — atomicité (nombreux acteurs), homogénéité du produit, libre entrée/sortie, mobilité des facteurs, transparence de l'information",
            "Défaillances du marché : monopole naturel, externalités négatives (ex : pollution), biens collectifs (non-rivaux et non-exclusifs, ex : éclairage public)",
            "3 fonctions économiques de l'État : allocation (corriger les défaillances), redistribution (réduire les inégalités), stabilisation (réguler les cycles)",
            "Politique budgétaire : action par les dépenses publiques et les impôts — politique de relance (↑ dépenses) ou de rigueur (↓ dépenses)",
            "Politique monétaire : menée par la BCE — agit via les taux directeurs (taux auxquels les banques empruntent) et l'objectif d'inflation à 2 %",
            "Organisations internationales de régulation : OMC (libre-échange), FMI (stabilité monétaire), Banque Mondiale (aide au développement)",
            "Autorités de concurrence : en France l'Autorité de la Concurrence ; en Europe la Commission européenne — sanctionnent ententes et abus de position dominante"
          ]
        },
        {
          title: "La combinaison productive",
          points: [
            "Facteurs de production : le TRAVAIL (humain) + le CAPITAL (physique) sont combinés pour produire",
            "Capital fixe : biens durables utilisés plusieurs cycles (machines, bâtiments, brevets) → s'amortit dans le temps",
            "Capital circulant : biens consommés en un cycle de production (matières premières, stocks, créances clients)",
            "3 types d'investissement : de capacité (augmenter la production), de remplacement (renouveler le capital usé), de productivité (substituer capital au travail)",
            "Sources de financement INTERNES : autofinancement (bénéfices mis en réserve = CAF), cession d'actifs",
            "Sources de financement EXTERNES : emprunt bancaire, crédit-bail, émission d'actions (augmentation de capital), émission d'obligations",
            "Productivité du travail = Production réalisée ÷ Nombre d'heures travaillées → mesure l'efficacité du facteur travail",
            "Destruction créatrice : mécanisme par lequel l'innovation détruit des activités existantes et en crée de nouvelles (ex : streaming vs DVD)"
          ]
        },
        {
          title: "Le numérique dans l'économie",
          points: [
            "Transformation digitale : révolution des modèles d'affaires — désintermédiation (supprimer les intermédiaires), plateformes, économie de partage",
            "Big data : volumétrie massive de données collectées, analysées pour prendre des décisions ou créer de la valeur",
            "Système d'information (SI) : ensemble organisé de ressources pour collecter, stocker et diffuser l'information dans l'entreprise",
            "ERP (Enterprise Resource Planning) : logiciel intégré qui centralise toutes les fonctions de gestion (compta, RH, stock, ventes...)",
            "CRM (Customer Relationship Management) : outil de gestion de la relation client — suivi des interactions, fidélisation",
            "RGPD (Règlement Général sur la Protection des Données) : règlement européen de 2018 encadrant la collecte et l'usage des données personnelles",
            "E-commerce : vente en ligne — impact sur la distribution (logistique, relation omnicanale client/marque)",
            "Télétravail : mode de travail à distance rendu possible par le numérique, encadré légalement depuis 2012 (accord ou avenant au contrat)"
          ]
        }
      ]
    },
    {
      id: 'droit',
      label: 'Droit',
      color: 'forest',
      icon: '⚖️',
      num: 'II',
      question: "Quelles règles encadrent la vie de l'entreprise, les contrats et les relations de travail ?",
      chapters: [
        {
          title: "Les formes juridiques de l'entreprise",
          points: [
            "Entreprise individuelle (EI) : patrimoine professionnel et personnel confondus → responsabilité illimitée sur les biens personnels",
            "EURL / SASU : formes unipersonnelles à responsabilité limitée — un seul associé, patrimoine séparé",
            "SARL (Société à Responsabilité Limitée) : responsabilité limitée aux apports, dirigée par un gérant, capital minimum 1 €",
            "SAS (Société par Actions Simplifiée) : très flexible, dirigée par un président, adaptée aux start-up et PME",
            "SA (Société Anonyme) : capital ≥ 37 000 €, minimum 2 actionnaires, dirigée par un DG (CA ou directoire + CS)",
            "SNC (Société en Nom Collectif) : tous les associés sont responsables solidairement et indéfiniment des dettes",
            "Association loi 1901 : but non lucratif, peut employer des salariés et exercer une activité économique",
            "Critère de choix d'une forme juridique : nombre d'associés, niveau de responsabilité souhaitée, régime fiscal et social du dirigeant"
          ]
        },
        {
          title: "Le droit du travail et la rémunération",
          points: [
            "Hiérarchie des normes sociales (ordre public) : Constitution → Code du travail → Convention collective de branche → Accord d'entreprise → Contrat de travail",
            "CDI (Contrat à Durée Indéterminée) : contrat de droit commun — sans terme fixé, rompu par démission, licenciement (motif réel et sérieux) ou rupture conventionnelle",
            "CDD (Contrat à Durée Déterminée) : limité dans le temps, réservé à des cas précis (remplacement, accroissement temporaire, travail saisonnier) — prime de précarité 10 % en fin de contrat",
            "CTT (intérim) : relation tripartite — entreprise utilisatrice + agence d'intérim + salarié intérimaire — même prime de précarité 10 %",
            "SMIC (Salaire Minimum Interprofessionnel de Croissance) : plancher légal de rémunération horaire, revalorisé chaque 1er janvier et parfois en cours d'année",
            "Bulletin de paie : Salaire brut → − cotisations salariales (≈ 22 %) → Salaire net → − prélèvement à la source → Net à payer",
            "Cotisations patronales : versées par l'employeur en plus du salaire brut (≈ 42-45 %) — financement de la Sécu, retraite, chômage...",
            "Rupture conventionnelle : mode de rupture à l'amiable du CDI, nécessite un accord écrit homologué par la DREETS, ouvre droit aux allocations chômage"
          ]
        },
        {
          title: "Contrats et responsabilités",
          points: [
            "Contrat (art. 1101 C. civ.) : accord de volontés entre 2 ou plusieurs parties qui crée des obligations — 3 conditions de validité : consentement, capacité, contenu licite et certain",
            "Consentement : accord libre et éclairé — doit être exempt de vices (erreur, dol, violence)",
            "Erreur : croyance fausse sur l'objet ou la qualité essentielle de la prestation (ex : acheter une copie croyant avoir l'original)",
            "Dol : manœuvres frauduleuses d'une partie pour tromper l'autre et obtenir son consentement",
            "Violence : contrainte physique ou morale exercée sur une partie pour la forcer à contracter",
            "Capacité : aptitude juridique à contracter — les mineurs non émancipés et les majeurs sous tutelle en sont privés",
            "Responsabilité civile contractuelle : inexécution ou mauvaise exécution d'une obligation contractuelle → réparation du préjudice",
            "Responsabilité civile délictuelle (art. 1240 C. civ.) : nécessite 3 éléments — une FAUTE + un DOMMAGE (réel, direct, certain) + un LIEN DE CAUSALITÉ entre les deux"
          ]
        }
      ]
    },
    {
      id: 'mgmt',
      label: 'Management',
      color: 'amber',
      icon: '🎯',
      num: 'III',
      question: "Comment piloter une organisation, motiver ses équipes et choisir une stratégie efficace ?",
      chapters: [
        {
          title: "Organiser et manager",
          points: [
            "Management : ensemble des techniques d'organisation et de direction visant à atteindre les objectifs d'une entreprise",
            "OST (Organisation Scientifique du Travail) : division horizontale du travail (spécialisation des tâches) + division verticale (séparation conception/exécution)",
            "Structures organisationnelles : fonctionnelle (par métier/service), divisionnelle (par produit, zone ou client), matricielle (double hiérarchie), en réseau (externalisation maximale)",
            "4 fonctions du management (PPOCCC) : Prévoir, Organiser, Commander, Coordonner, Contrôler",
            "Délégation : confier une mission et les moyens associés à un collaborateur, en maintenant la responsabilité finale",
            "Organigramme : représentation schématique de la structure hiérarchique et fonctionnelle de l'entreprise",
            "Prise de décision : décision stratégique (long terme, dirigeants), tactique (moyen terme, encadrement), opérationnelle (court terme, exécutants)",
            "Rationalité limitée : les décideurs ne disposent pas d'une information complète ni d'une capacité cognitive illimitée → ils choisissent une solution satisfaisante, pas optimale"
          ]
        },
        {
          title: "Motivation et gestion des ressources humaines",
          points: [
            "Pyramide des besoins : 5 niveaux hiérarchiques (du bas) — physiologiques → sécurité → appartenance → estime → accomplissement de soi",
            "2 types de facteurs de motivation : facteurs d'hygiène (si absent → insatisfaction : salaire, conditions de travail) ; facteurs de motivation (si présent → satisfaction : responsabilités, reconnaissance)",
            "4 styles de management : autoritaire exploiteur → autoritaire bienveillant → consultatif → participatif (du plus directif au plus collaboratif)",
            "DPO (Direction Par Objectifs) : chaque collaborateur reçoit des objectifs SMART dont il est responsable, avec évaluation périodique",
            "SMART : objectif Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini",
            "GPEC (Gestion Prévisionnelle des Emplois et Compétences) : anticiper à 3-5 ans les besoins en effectifs et compétences pour préparer les évolutions",
            "CPF (Compte Personnel de Formation) : droit à la formation attaché à chaque salarié, mobilisable tout au long de la carrière",
            "Recrutement : définition du poste → sourcing (interne/externe) → sélection → intégration (onboarding)"
          ]
        },
        {
          title: "Les choix stratégiques",
          points: [
            "Stratégie : détermination des buts et objectifs à long terme, adoption des moyens d'action et allocation des ressources nécessaires pour les atteindre",
            "Diagnostic interne (forces/faiblesses) : analyse des ressources tangibles (équipements, finances) et intangibles (marque, savoir-faire), des compétences et de la chaîne de valeur",
            "Diagnostic externe (opportunités/menaces) : macro-environnement → PESTEL ; micro-environnement → 5 forces concurrentielles",
            "PESTEL : Politique, Économique, Socioculturel, Technologique, Environnemental, Légal",
            "5 forces concurrentielles : concurrents directs, nouveaux entrants potentiels, produits de substitution, pouvoir des fournisseurs, pouvoir des clients",
            "4 stratégies globales : spécialisation (renforcer le cœur de métier), diversification (nouveaux marchés ou produits), intégration verticale (amont ou aval), externalisation (sous-traiter ce qui n'est pas stratégique)",
            "3 stratégies de domaine : domination par les coûts (être le moins cher), différenciation (se distinguer par des attributs uniques), focalisation/concentration (se spécialiser sur une niche)",
            "Stratégie délibérée : stratégie planifiée à l'avance et réalisée conformément au plan ↔ Stratégie émergente : non planifiée, issue d'adaptations successives",
            "4 modalités de croissance : interne (organique, par ses propres ressources), externe (fusion-acquisition, franchise, alliance), internationale, conjointe (joint-venture)",
            "Performance globale : efficacité (atteindre les objectifs fixés) + efficience (optimiser les ressources utilisées) + pérennité (durabilité à long terme)"
          ]
        }
      ]
    }
  ],

  /* ── MATCHING — termes ↔ définitions ───────────────────────────── */
  matching: [
    { left: 'Stratégie de différenciation',  right: 'Proposer un produit ou service perçu comme unique et supérieur aux yeux du client' },
    { left: 'Capital circulant',              right: 'Facteurs consommés en un seul cycle : matières premières, stocks, créances clients' },
    { left: 'Autofinancement',               right: 'Financement de l\'entreprise par ses propres bénéfices mis en réserve (sans recours à l\'extérieur)' },
    { left: 'Externalisation',               right: 'Confier à un prestataire externe des activités non stratégiques pour se concentrer sur le cœur de métier' },
    { left: 'Consentement',                  right: '1ère condition de validité d\'un contrat : accord libre et éclairé, exempt de vices' },
    { left: 'Focalisation',                  right: 'Stratégie de domaine ciblant un segment précis (niche) plutôt que l\'ensemble du marché' },
    { left: 'PESTEL',                        right: 'Outil d\'analyse du macro-environnement : Politique, Économique, Socioculturel, Technologique, Environnemental, Légal' },
    { left: 'Efficience',                    right: 'Dimension de la performance : atteindre les objectifs en minimisant les ressources mobilisées' },
    { left: 'Rationalité limitée',           right: 'Les décideurs manquent d\'information complète et choisissent une solution satisfaisante, pas optimale' },
    { left: 'Stabilisation',                 right: 'Fonction de l\'État consistant à réguler les cycles économiques (relance ou rigueur)' },
    { left: 'DAS',                           right: 'Domaine d\'Activité Stratégique : segment homogène partageant les mêmes facteurs clés de succès et concurrents' },
    { left: 'Capital fixe',                  right: 'Biens durables de l\'entreprise (machines, bâtiments) utilisés sur plusieurs cycles et qui s\'amortissent' },
  ],

  /* ── FLASHCARDS — termes & définitions clés ────────────────────── */
  flashcards: [
    {
      front: 'Contrat — 3 conditions de validité',
      back: '1. Consentement des parties (libre et éclairé, sans vice)\n2. Capacité des parties (aptitude juridique à contracter)\n3. Contenu licite et certain (objet légal et déterminable)',
      aspect: 'droit'
    },
    {
      front: 'Les 4 stratégies globales',
      back: '1. Spécialisation → renforcer le cœur de métier existant\n2. Diversification → nouveaux produits ou marchés\n3. Intégration verticale → contrôler amont (fournisseurs) ou aval (distribution)\n4. Externalisation → sous-traiter les activités non stratégiques',
      aspect: 'mgmt'
    },
    {
      front: 'Les 3 stratégies de domaine',
      back: '1. Domination par les coûts → prix les plus bas du marché (ex : Ryanair, IKEA)\n2. Différenciation → attributs uniques perçus comme supérieurs (ex : Apple, Nespresso)\n3. Focalisation / Concentration → niche ou segment très précis (ex : Ferrari, Porsche)',
      aspect: 'mgmt'
    },
    {
      front: 'PESTEL — développé',
      back: 'P – Politique (stabilité, politique fiscale, réglementation)\nE – Économique (croissance, inflation, taux d\'intérêt)\nS – Socioculturel (démographie, valeurs, modes de vie)\nT – Technologique (innovation, R&D, numérisation)\nE – Environnemental (normes écologiques, ressources naturelles)\nL – Légal (lois, conventions, jurisprudence)',
      aspect: 'mgmt'
    },
    {
      front: 'Capital fixe vs capital circulant',
      back: 'Capital FIXE : biens durables utilisés sur plusieurs cycles de production (machines, bâtiments, brevets) → s\'amortit\n\nCapital CIRCULANT : consommé en un cycle (matières premières, stocks, créances clients)',
      aspect: 'eco'
    },
    {
      front: 'Les 3 types d\'investissement',
      back: '1. De capacité : augmenter la capacité de production (nouvelles machines)\n2. De remplacement : renouveler le capital usé ou obsolète\n3. De productivité : substituer capital au travail pour réduire les coûts (automatisation)',
      aspect: 'eco'
    },
    {
      front: 'Sources de financement de l\'entreprise',
      back: 'INTERNES :\n• Autofinancement (bénéfices non distribués)\n• Cession d\'actifs\n\nEXTERNES :\n• Emprunt bancaire\n• Crédit-bail\n• Émission d\'actions (augmentation de capital)\n• Émission d\'obligations',
      aspect: 'eco'
    },
    {
      front: 'Les 3 vices du consentement',
      back: '1. Erreur : croyance fausse sur l\'objet ou la qualité essentielle (ex : acheter une copie en croyant avoir l\'original)\n\n2. Dol : manœuvres frauduleuses d\'une partie pour tromper l\'autre\n\n3. Violence : contrainte physique ou morale pour forcer le consentement',
      aspect: 'droit'
    },
    {
      front: 'Responsabilité civile délictuelle — 3 conditions',
      back: 'Pour engager la responsabilité (art. 1240 C. civ.), 3 éléments doivent être réunis :\n\n1. Une FAUTE (action ou omission)\n2. Un DOMMAGE (réel, direct, certain)\n3. Un LIEN DE CAUSALITÉ entre la faute et le dommage',
      aspect: 'droit'
    },
    {
      front: 'SMART — développé',
      back: 'S – Spécifique : objectif précis et clair\nM – Mesurable : chiffrable, avec indicateur\nA – Atteignable : réaliste compte tenu des moyens\nR – Réaliste : pertinent dans le contexte\nT – Temporellement défini : date butoir fixée',
      aspect: 'mgmt'
    },
    {
      front: 'Les 5 forces concurrentielles',
      back: '1. Concurrents directs (intensité de la rivalité)\n2. Menace de nouveaux entrants (barrières à l\'entrée)\n3. Produits ou services de substitution\n4. Pouvoir de négociation des fournisseurs\n5. Pouvoir de négociation des clients\n\n→ Plus ces forces sont intenses, moins l\'attractivité du secteur est élevée',
      aspect: 'mgmt'
    },
    {
      front: 'Bulletin de paie — de brut à net',
      back: 'Salaire BRUT\n− Cotisations salariales (≈ 22 %) → maladie, retraite, chômage\n= Salaire NET\n− Prélèvement à la source (impôt sur le revenu)\n= NET À PAYER\n\n⚠ L\'employeur verse aussi des cotisations patronales (≈ 42-45 %) en plus du brut',
      aspect: 'droit'
    },
    {
      front: 'Les 3 fonctions économiques de l\'État',
      back: '1. Allocation : corriger les défaillances du marché (monopoles, externalités, biens collectifs)\n\n2. Redistribution : réduire les inégalités via impôts et transferts sociaux\n\n3. Stabilisation : réguler les cycles économiques (relance en période de récession, rigueur en période de surchauffe)',
      aspect: 'eco'
    },
    {
      front: 'CDI / CDD / CTT — l\'essentiel',
      back: 'CDI : contrat sans terme, norme de référence, rompu par démission, licenciement ou rupture conventionnelle\n\nCDD : durée limitée, cas précis (remplacement, accroissement, saisonnier), prime précarité 10 %\n\nCTT (intérim) : mission via agence, relation tripartite, prime précarité 10 %',
      aspect: 'droit'
    },
    {
      front: 'SWOT — diagnostic stratégique',
      back: 'INTERNE :\n• Strengths (Forces) : avantages de l\'entreprise\n• Weaknesses (Faiblesses) : points de fraiblesse\n\nEXTERNE :\n• Opportunities (Opportunités) : tendances favorables\n• Threats (Menaces) : risques environnementaux\n\n→ Croise diagnostic interne et externe',
      aspect: 'mgmt'
    },
    {
      front: 'Les 4 styles de management',
      back: '1. Autoritaire exploiteur : ordres, menace, aucune participation\n2. Autoritaire bienveillant : récompenses + sanctions, peu de participation\n3. Consultatif : avis recueillis mais décision finale au chef\n4. Participatif : décision collective, forte délégation → le plus efficace',
      aspect: 'mgmt'
    },
    {
      front: 'Hiérarchie des normes sociales',
      back: 'De la plus haute à la plus basse :\n1. Constitution\n2. Loi (Code du travail)\n3. Convention collective de branche\n4. Accord d\'entreprise\n5. Contrat de travail individuel\n\n→ Chaque niveau ne peut qu\'améliorer le niveau supérieur (principe de faveur)',
      aspect: 'droit'
    },
    {
      front: 'Performance globale — 3 dimensions',
      back: '1. Efficacité : atteindre les objectifs fixés (faire les bonnes choses)\n2. Efficience : atteindre les objectifs en minimisant les ressources (bien faire les choses)\n3. Pérennité : assurer la durabilité et la survie à long terme de l\'organisation',
      aspect: 'mgmt'
    },
    {
      front: 'Formes juridiques — niveaux de responsabilité',
      back: 'Responsabilité ILLIMITÉE (patrimoine personnel en jeu) :\n→ EI, SNC\n\nResponsabilité LIMITÉE aux apports (patrimoine séparé) :\n→ SARL, SAS, SA, EURL, SASU\n\n⚠ La SARL et la SAS se distinguent par leur souplesse statutaire (SAS plus flexible)',
      aspect: 'droit'
    },
    {
      front: 'Intégration verticale — amont vs aval',
      back: 'Stratégie globale consistant à contrôler des étapes supplémentaires de la filière :\n\nAMONT : racheter un fournisseur (contrôler l\'approvisionnement)\n→ Ex : constructeur auto qui acquiert un fabricant de pièces\n\nAVAL : racheter un distributeur (contrôler la mise en marché)\n→ Ex : marque qui ouvre ses propres boutiques',
      aspect: 'mgmt'
    },
  ],

  /* ── QUIZ — connaissance des termes et mécanismes ──────────────── */
  quiz: [
    {
      q: 'Pour qu\'un contrat soit valablement formé, quelles sont les 3 conditions requises ?',
      opts: [
        'Écrit, signature et enregistrement notarial',
        'Consentement, capacité des parties et contenu licite et certain',
        'Offre, contre-offre et accord de prix',
        'Témoins, écrit et date certaine'
      ],
      ans: 1, aspect: 'droit'
    },
    {
      q: 'Quelles sont les 4 stratégies globales de l\'entreprise ?',
      opts: [
        'Croissance, stabilité, déclin et innovation',
        'Attaque, défense, alliance et retrait',
        'Spécialisation, diversification, intégration et externalisation',
        'Interne, externe, internationale et conjointe'
      ],
      ans: 2, aspect: 'mgmt'
    },
    {
      q: 'Quelles sont les 3 stratégies de domaine ?',
      opts: [
        'Innovation, imitation et domination',
        'Domination par les coûts, différenciation et focalisation',
        'Spécialisation, diversification et intégration',
        'Publicitaire, promotionnelle et relationnelle'
      ],
      ans: 1, aspect: 'mgmt'
    },
    {
      q: 'Dans PESTEL, que signifient respectivement le 1er "E" et le "S" ?',
      opts: [
        'Environnemental et Stratégique',
        'Économique et Socioculturel',
        'Européen et Systémique',
        'Éthique et Structurel'
      ],
      ans: 1, aspect: 'mgmt'
    },
    {
      q: 'Quels sont les 3 types d\'investissement ?',
      opts: [
        'Physique, financier et immatériel',
        'Public, privé et mixte',
        'Capacité, remplacement et productivité',
        'Court terme, moyen terme et long terme'
      ],
      ans: 2, aspect: 'eco'
    },
    {
      q: 'Que comprend le capital circulant ?',
      opts: [
        'Les machines, bâtiments et brevets',
        'Les actions et obligations détenues',
        'Les matières premières, stocks et créances clients',
        'Les immobilisations corporelles et incorporelles'
      ],
      ans: 2, aspect: 'eco'
    },
    {
      q: 'La responsabilité civile délictuelle nécessite la réunion de :',
      opts: [
        'Un contrat, une inexécution et un préjudice',
        'Une intention, un acte et une victime',
        'Une faute, un dommage et un lien de causalité',
        'Une mauvaise foi, une erreur et une violence'
      ],
      ans: 2, aspect: 'droit'
    },
    {
      q: 'SMART signifie (dans l\'ordre) :',
      opts: [
        'Simple, Maîtrisé, Approuvé, Raisonnable, Tracé',
        'Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini',
        'Stratégique, Managérial, Adapté, Résultats, Temps',
        'Systémique, Motivant, Ambitieux, Révisable, Transférable'
      ],
      ans: 1, aspect: 'mgmt'
    },
    {
      q: 'Un CDD se termine par une prime de précarité de :',
      opts: ['5 %', '8 %', '10 %', '15 %'],
      ans: 2, aspect: 'droit'
    },
    {
      q: 'Quelles sont les 3 fonctions économiques de l\'État ?',
      opts: [
        'Légiférer, exécuter et juger',
        'Produire, distribuer et consommer',
        'Allocation, redistribution et stabilisation',
        'Taxer, emprunter et subventionner'
      ],
      ans: 2, aspect: 'eco'
    },
    {
      q: 'La stratégie de différenciation consiste à :',
      opts: [
        'Proposer les prix les plus bas du marché',
        'Se concentrer sur une niche très précise',
        'Proposer un produit perçu comme unique et supérieur par le client',
        'Racheter un concurrent direct'
      ],
      ans: 2, aspect: 'mgmt'
    },
    {
      q: 'La performance globale d\'une entreprise se compose de :',
      opts: [
        'Chiffre d\'affaires, résultat net et dividendes',
        'Efficacité, efficience et pérennité',
        'Productivité, croissance et parts de marché',
        'Qualité, délai et coût'
      ],
      ans: 1, aspect: 'mgmt'
    },
    {
      q: 'Dans la hiérarchie des normes sociales, qu\'est-ce qui prime sur l\'accord d\'entreprise ?',
      opts: [
        'Le règlement intérieur',
        'Le contrat de travail individuel',
        'La convention collective de branche (si plus favorable)',
        'La note de service du DRH'
      ],
      ans: 2, aspect: 'droit'
    },
    {
      q: 'L\'intégration verticale aval signifie que l\'entreprise :',
      opts: [
        'Rachète un fournisseur pour contrôler l\'approvisionnement',
        'Rachète ou crée un réseau de distribution pour vendre directement',
        'S\'associe avec un concurrent sur un marché étranger',
        'Externalise ses activités logistiques'
      ],
      ans: 1, aspect: 'mgmt'
    },
    {
      q: 'Le diagnostic EXTERNE d\'une entreprise analyse :',
      opts: [
        'Les forces et faiblesses internes (ressources, compétences)',
        'Les opportunités et menaces de l\'environnement (PESTEL, 5 forces)',
        'La chaîne de valeur interne de l\'entreprise',
        'La structure organisationnelle et les processus'
      ],
      ans: 1, aspect: 'mgmt'
    },
    {
      q: 'L\'autofinancement correspond à :',
      opts: [
        'Un emprunt accordé par la banque sans garanties',
        'Une subvention publique à l\'investissement',
        'L\'utilisation des bénéfices non distribués pour financer l\'activité',
        'Une émission d\'actions sur les marchés financiers'
      ],
      ans: 2, aspect: 'eco'
    },
    {
      q: 'Lequel de ces éléments est un vice du consentement ?',
      opts: [
        'Incapacité juridique du signataire',
        'Objet illicite du contrat',
        'Dol (manœuvres frauduleuses pour tromper)',
        'Absence d\'écrit pour un contrat de vente'
      ],
      ans: 2, aspect: 'droit'
    },
    {
      q: 'Quelles sont les 4 stratégies de croissance externe ?',
      opts: [
        'Rachat, fusion, franchise et alliance',
        'Embauche, formation, promotion et mobilité',
        'Exportation, implantation, joint-venture et licences',
        'Audit, restructuration, cession et liquidation'
      ],
      ans: 0, aspect: 'mgmt'
    },
  ],

  /* ── BADGES ────────────────────────────────────────────────────── */
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

  /* ── SUJETS du jour ─────────────────────────────────────────────── */
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
