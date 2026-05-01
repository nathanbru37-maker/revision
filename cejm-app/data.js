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
      question: "Comment les marchés fonctionnent-ils et quel rôle joue l'État dans l'économie ?",
      chapters: [
        {
          title: "Les marchés et la régulation",
          points: [
            "Marché : lieu de rencontre de l'offre et de la demande → prix d'équilibre",
            "Concurrence pure et parfaite (CPP) : 5 conditions — atomicité, homogénéité, libre entrée/sortie, mobilité des facteurs, transparence de l'information",
            "Défaillances du marché : monopole naturel, externalités (positives/négatives), biens collectifs (non-rival, non-exclusif)",
            "Rôle de l'État selon Musgrave : allocation (corriger les défaillances), redistribution (réduire inégalités), stabilisation (lutter contre les cycles)",
            "Politique budgétaire keynésienne : relance par la dépense publique, effet multiplicateur",
            "Politique monétaire (BCE) : taux directeurs, inflation cible 2 %, QE (rachats d'actifs)",
            "Organisations de régulation mondiale : OMC (commerce), FMI (stabilité monétaire), Banque Mondiale (développement)",
            "Autorités de concurrence : en France l'Autorité de la Concurrence ; en Europe la DG Concurrence (Commission)"
          ]
        },
        {
          title: "La combinaison productive",
          points: [
            "Facteurs de production : TRAVAIL (humain) + CAPITAL (physique = fixe + circulant)",
            "Capital fixe : machines, bâtiments, équipements → amortissement ; capital circulant : matières premières, stocks, créances",
            "Investissement : de capacité (augmenter la production), de remplacement (renouveler le capital usé), de productivité (substituer capital au travail)",
            "Sources de financement : autofinancement (CAF), emprunt bancaire, émission d'actions/obligations, crédit-bail, subventions",
            "Productivité du travail = Production / Nombre d'heures travaillées — mesure l'efficacité du facteur travail",
            "Productivité globale des facteurs (PGF) : progrès technique — Solow : croissance = travail + capital + PGF",
            "Schumpeter : innovation = source principale de croissance ; destruction créatrice : nouvelles activités remplacent les anciennes",
            "Gouvernance d'entreprise (Freeman) : équilibre entre toutes les parties prenantes (stakeholders) — actionnaires, salariés, clients, fournisseurs, État, société civile"
          ]
        },
        {
          title: "Le numérique dans l'économie",
          points: [
            "Transformation digitale : révolution des business models, désintermédiation (Amazon, Airbnb, Uber)",
            "Économie des données : Big data = volume, variété, vélocité, véracité — source de valeur et de décision",
            "IA et automatisation : remplacement des tâches répétitives (Daron Acemoglu), création de nouveaux emplois qualifiés",
            "Système d'information (SI) : ERP (logiciel intégré de gestion), CRM (gestion de la relation client), BI (business intelligence)",
            "E-commerce : impact sur la distribution, logistique (supply chain), relation client omnicanale",
            "Cybersécurité : RGPD (protection des données), risques de cybercriminalité, PCA (plan de continuité d'activité)",
            "Télétravail et flex-office : nouvelles formes d'organisation du travail post-Covid, QVT numérique",
            "Économie circulaire et numérique : traçabilité, optimisation des ressources, empreinte carbone du numérique"
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
      question: "Quelles règles encadrent la création d'entreprise, les contrats et les relations de travail ?",
      chapters: [
        {
          title: "Les formes juridiques de l'entreprise",
          points: [
            "Entreprise individuelle (EI) : patrimoine personnel confondu avec professionnel — risque total",
            "EURL / SASU : structures unipersonnelles à responsabilité limitée — entrepreneur seul",
            "SARL : Société à Responsabilité Limitée — responsabilité limitée aux apports, gérant, capital minimum 1 €",
            "SAS / SA : Société par Actions Simplifiée / Société Anonyme — dirigé par président/directeur général, adaptée aux grandes entreprises",
            "SNC : Société en Nom Collectif — tous associés solidairement responsables",
            "SA (Anonyme) : capital ≥ 37 000 €, minimum 2 actionnaires, Conseil d'Administration ou Conseil de Surveillance",
            "Coopératives (SCOP, SCIC) : démocratie interne, une personne = une voix",
            "Associations loi 1901 : but non lucratif, mais peuvent employer des salariés et exercer une activité économique"
          ]
        },
        {
          title: "Le droit du travail et la rémunération",
          points: [
            "Sources du droit du travail (hiérarchie des normes) : Constitution → Code du travail → Convention collective → Accord d'entreprise → Contrat de travail",
            "CDI (Contrat à Durée Indéterminée) : norme de référence, rupture possible par démission, licenciement ou rupture conventionnelle",
            "CDD (Contrat à Durée Déterminée) : limité à des cas précis (remplacement, accroissement temporaire d'activité, saisonnier) ; prime de précarité 10 % en fin de contrat",
            "CTT (Contrat de Travail Temporaire / Intérim) : utilisateur + agence d'intérim + salarié intérimaire",
            "SMIC (Salaire Minimum Interprofessionnel de Croissance) : salaire horaire minimum légal, revalorisé chaque 1er janvier",
            "Bulletin de paie : salaire brut → − cotisations salariales (maladie, retraite, chômage) → salaire net → − prélèvement à la source → net à payer",
            "Mutations du droit du travail : Loi El Khomri (2016), ordonnances Macron (2017) → primauté de l'accord d'entreprise sur la branche, rupture conventionnelle collective",
            "Licenciement économique : motif réel et sérieux (difficultés économiques, mutations technologiques), plan de sauvegarde de l'emploi (PSE) si ≥ 10 licenciements"
          ]
        },
        {
          title: "Contrats et responsabilité",
          points: [
            "Contrat (art. 1101 C. civ.) : accord de volontés entre deux parties qui crée des obligations — 3 conditions : consentement, capacité, contenu licite",
            "Vices du consentement (nullité relative) : erreur (sur objet ou qualité essentielle), dol (manœuvres frauduleuses), violence (contrainte physique ou morale)",
            "Responsabilité civile contractuelle : inexécution ou mauvaise exécution du contrat → réparation du préjudice subi",
            "Responsabilité civile délictuelle (art. 1240 C. civ.) : faute + dommage + lien de causalité → réparation",
            "Responsabilité pénale de l'entreprise (art. 121-2 C. pén.) : personne morale peut être poursuivie pour infractions commises pour son compte",
            "Propriété intellectuelle : brevet (20 ans, invention industrielle), marque (10 ans renouvelables), droit d'auteur (vie + 70 ans)",
            "Droit de la concurrence : pratiques anticoncurrentielles interdites (ententes, abus de position dominante) → sanctions de l'Autorité de la concurrence",
            "RGPD (2018) : droit à l'information, à l'effacement, à la portabilité ; obligations du responsable de traitement, rôle de la CNIL"
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
      question: "Comment piloter, motiver et faire évoluer une organisation pour atteindre la performance ?",
      chapters: [
        {
          title: "Organiser et manager",
          points: [
            "Organisation du travail — Taylorisme (OST) : division du travail (horizontale et verticale), spécialisation, chronométrage, salaire au rendement",
            "Fordisme : taylorisme + travail à la chaîne + salaire suffisant pour consommer (Ford 5$/day)",
            "Post-fordisme : enrichissement des tâches, polyvalence, travail en équipe (Toyota Production System)",
            "Fayol — PPOCCC : Prévoir, Planifier, Organiser, Commander, Coordonner, Contrôler ; 14 principes du management",
            "Structures organisationnelles : fonctionnelle (par métier), divisionnelle (par produit/zone), matricielle (double hiérarchie), en réseau (externalisation)",
            "Mintzberg — 5 configurations structurelles : simple, bureaucratie mécaniste, bureaucratie professionnelle, structure divisionnalisée, adhocratie",
            "Crozier & Friedberg — analyse stratégique : acteurs, zones d'incertitude, jeux de pouvoir ; l'organisation comme système d'action concret",
            "Prise de décision (Simon) : rationalité limitée → les décideurs choisissent une solution satisfaisante, pas optimale"
          ]
        },
        {
          title: "Motivation et ressources humaines",
          points: [
            "Maslow — Pyramide des 5 besoins : physiologiques (nourriture, sommeil) → sécurité → appartenance → estime → accomplissement de soi",
            "Herzberg — 2 facteurs : hygiène (salaire, conditions de travail → si absent : insatisfaction) et motivation (responsabilités, reconnaissance → si présent : satisfaction)",
            "Likert — 4 styles de management : 1. Autoritaire exploiteur 2. Autoritaire bienveillant 3. Consultatif 4. Participatif (le plus efficace selon lui)",
            "Drucker — DPO (Direction Par Objectifs) : objectifs SMART (Doran), évaluation périodique, responsabilisation",
            "SMART (Doran, 1981) : Spécifique, Mesurable, Atteignable (Achievable), Réaliste, Temporellement défini",
            "Recrutement : définition de poste, sourcing (interne/externe), sélection, intégration (onboarding)",
            "GPEC (Gestion Prévisionnelle des Emplois et Compétences) : anticiper les besoins en compétences à 3-5 ans",
            "Formation professionnelle : CPF (Compte Personnel de Formation), plan de développement des compétences, validation des acquis (VAE)"
          ]
        },
        {
          title: "Les choix stratégiques",
          points: [
            "Stratégie (Chandler) : détermination des buts et objectifs à long terme + adoption des moyens d'action + allocation des ressources nécessaires",
            "Diagnostic interne (forces/faiblesses) : chaîne de valeur (Porter), ressources tangibles/intangibles (Penrose), compétences distinctives (Hamel & Prahalad)",
            "Diagnostic externe (opportunités/menaces) : macro → PESTEL ; micro → 5 forces concurrentielles de Porter",
            "5 forces de Porter : concurrents directs, nouveaux entrants, produits de substitution, pouvoir des fournisseurs, pouvoir des clients",
            "LCAG : méthode de choix stratégique croisant le diagnostic interne et externe → DAS (Domaine d'Activité Stratégique)",
            "Stratégies globales (Ansoff) : spécialisation, diversification, intégration verticale (amont/aval), externalisation",
            "Stratégies de domaine (Porter) : domination par les coûts, différenciation (verticale/horizontale), focalisation/concentration",
            "Mintzberg : stratégie délibérée (planifiée) → stratégie réalisée ; stratégie émergente (non planifiée mais réussie)",
            "Modalités de croissance : interne (organique, autofinancée), externe (fusion, acquisition, franchise, alliance stratégique), internationale",
            "Performance globale (Drucker) : efficacité (atteindre les objectifs) + efficience (optimiser les ressources) + pérennité (durabilité)"
          ]
        }
      ]
    }
  ],

  /* ── AUTEURS (pour le jeu de matching) ─────────────────────────── */
  auteurs: [
    { left: 'Frederick Taylor', right: 'OST : division du travail, spécialisation et salaire au rendement' },
    { left: 'Henry Fayol', right: 'PPOCCC et 14 principes du management' },
    { left: 'Abraham Maslow', right: 'Pyramide des 5 besoins hiérarchiques' },
    { left: 'Frederick Herzberg', right: 'Facteurs d\'hygiène vs facteurs de motivation' },
    { left: 'Rensis Likert', right: '4 styles de management (autoritaire → participatif)' },
    { left: 'Peter Drucker', right: 'DPO, management par objectifs, finalité de l\'entreprise' },
    { left: 'Michael Porter', right: '5 forces concurrentielles, chaîne de valeur, 3 stratégies génériques' },
    { left: 'Henry Mintzberg', right: 'Stratégie délibérée/émergente, 5 configurations structurelles' },
    { left: 'Joseph Schumpeter', right: 'Destruction créatrice et entrepreneur innovateur' },
    { left: 'Igor Ansoff', right: 'Matrice de croissance : spécialisation / diversification' },
    { left: 'Alfred Chandler', right: '"La structure suit la stratégie" — buts + moyens + ressources' },
    { left: 'Herbert Simon', right: 'Rationalité limitée — décision satisfaisante, pas optimale' },
  ],

  /* ── FLASHCARDS ────────────────────────────────────────────────── */
  flashcards: [
    { front: 'Destruction créatrice', back: 'Concept de Schumpeter : l\'innovation détruit les activités existantes pour en créer de nouvelles. Ex : internet vs presse, streaming vs DVD.', aspect: 'eco' },
    { front: 'Les 5 forces concurrentielles de Porter', back: '1. Concurrents directs (intensité concurrentielle)\n2. Nouveaux entrants (barrières à l\'entrée)\n3. Produits de substitution\n4. Pouvoir de négociation des fournisseurs\n5. Pouvoir de négociation des clients', aspect: 'mgmt' },
    { front: 'Pyramide de Maslow (5 niveaux)', back: 'Du bas vers le haut :\n1. Besoins physiologiques (nourriture, sommeil)\n2. Sécurité (emploi, santé)\n3. Appartenance (social, amour)\n4. Estime (reconnaissance, statut)\n5. Accomplissement de soi (réalisation)', aspect: 'mgmt' },
    { front: 'CDI vs CDD — différences clés', back: 'CDI : durée indéterminée, norme de référence, rupture par démission, licenciement ou rupture conventionnelle.\nCDD : durée limitée, cas précis (remplacement, accroissement, saisonnier), prime de précarité 10 % à la fin.', aspect: 'droit' },
    { front: 'Formule de la productivité du travail', back: 'Productivité = Production réalisée ÷ Nombre d\'heures travaillées\n\nMesure l\'efficacité du facteur travail. Une hausse = plus de production avec le même temps.', aspect: 'eco' },
    { front: 'PESTEL', back: 'Analyse du macro-environnement externe :\n• Politique (stabilité, politique fiscale)\n• Économique (croissance, taux d\'intérêt)\n• Socioculturel (démographie, valeurs)\n• Technologique (innovation, R&D)\n• Environnemental (écologie, normes)\n• Légal (lois, réglementations)', aspect: 'mgmt' },
    { front: 'Rationalité limitée (Simon)', back: 'Les décideurs ne peuvent pas optimiser car : information incomplète, capacité cognitive limitée, temps contraint → ils choisissent une solution satisfaisante (satisficing), pas optimale.', aspect: 'mgmt' },
    { front: 'Les 3 stratégies génériques de Porter', back: '1. Domination par les coûts : prix le plus bas (IKEA, Ryanair)\n2. Différenciation : caractéristiques uniques perçues comme supérieures (Apple, Louis Vuitton)\n3. Focalisation / Concentration : niche de marché (Porsche, Hermès)', aspect: 'mgmt' },
    { front: 'Salaire brut → net → net à payer', back: 'Salaire brut\n− Cotisations salariales (maladie, retraite, chômage ≈ 22-23 %)\n= Salaire net\n− Prélèvement à la source (impôt sur le revenu)\n= Net à payer', aspect: 'droit' },
    { front: 'SMART (Doran, 1981)', back: 'Un bon objectif doit être :\nSpécifique (précis)\nMesurable (chiffrable)\nAtteignable (réaliste)\nRéaliste (contextualisé)\nTemporellement défini (échéance claire)', aspect: 'mgmt' },
    { front: 'Gouvernance d\'entreprise', back: 'Ensemble des mécanismes qui assurent le contrôle de l\'entreprise et protègent les parties prenantes (Freeman).\n\nParties prenantes : actionnaires, salariés, clients, fournisseurs, État, société civile, environnement.', aspect: 'eco' },
    { front: 'SWOT', back: 'Outil de diagnostic stratégique global :\n• Strengths (Forces) → interne\n• Weaknesses (Faiblesses) → interne\n• Opportunities (Opportunités) → externe\n• Threats (Menaces) → externe', aspect: 'mgmt' },
    { front: 'Herzberg : hygiène vs motivation', back: 'Facteurs d\'hygiène (si absent → insatisfaction) : salaire, conditions de travail, sécurité, relations hiérarchiques.\n\nFacteurs de motivation (si présent → satisfaction) : responsabilités, reconnaissance, accomplissement, promotion.', aspect: 'mgmt' },
    { front: 'Croissance interne vs externe', back: 'Interne (organique) : développement par ses propres ressources — lent mais maîtrisé, sans dette de rachat.\n\nExterne : fusion, acquisition, franchise, alliance — rapide mais coûteux, risque d\'intégration.', aspect: 'mgmt' },
    { front: 'Vices du consentement (nullité relative)', back: '3 vices qui invalident un contrat :\n• Erreur : croyance fausse sur l\'objet ou la qualité essentielle\n• Dol : manœuvres frauduleuses d\'une partie\n• Violence : contrainte physique ou morale', aspect: 'droit' },
    { front: 'Politique monétaire de la BCE', back: 'Objectif : inflation proche mais inférieure à 2 %.\nOutils : taux directeurs (hausse → crédit plus cher → moins d\'investissement), QE (rachats d\'actifs pour injecter des liquidités).', aspect: 'eco' },
    { front: 'Les 4 styles de management (Likert)', back: '1. Autoritaire exploiteur : ordres, peur, pas de participation\n2. Autoritaire bienveillant : récompenses + sanctions\n3. Consultatif : avis pris en compte partiellement\n4. Participatif : décision collective, le plus efficace selon Likert', aspect: 'mgmt' },
  ],

  /* ── QUIZ ──────────────────────────────────────────────────────── */
  quiz: [
    {
      q: 'Selon Porter, les 3 stratégies génériques sont :',
      opts: ['Innovation, Imitation, Réduction', 'Différenciation, Focalisation, Domination par les coûts', 'Spécialisation, Diversification, Intégration', 'Interne, Externe, Internationale'],
      ans: 1, aspect: 'mgmt'
    },
    {
      q: 'La pyramide de Maslow comporte combien de niveaux ?',
      opts: ['3', '4', '5', '7'],
      ans: 2, aspect: 'mgmt'
    },
    {
      q: 'Mintzberg distingue la stratégie délibérée de la stratégie…',
      opts: ['Planifiée', 'Calculée', 'Émergente', 'Réactive'],
      ans: 2, aspect: 'mgmt'
    },
    {
      q: 'Que signifie le "S" dans PESTEL ?',
      opts: ['Stratégique', 'Socioculturel', 'Systémique', 'Structurel'],
      ans: 1, aspect: 'mgmt'
    },
    {
      q: 'La "destruction créatrice" est un concept de :',
      opts: ['Taylor', 'Marx', 'Schumpeter', 'Keynes'],
      ans: 2, aspect: 'eco'
    },
    {
      q: 'Le diagnostic interne d\'une entreprise évalue :',
      opts: ['Les concurrents et opportunités', 'Forces et faiblesses', 'Les menaces externes', 'Le contexte macro-économique'],
      ans: 1, aspect: 'mgmt'
    },
    {
      q: 'Chandler définit la stratégie comme la détermination des buts et l\'allocation des… :',
      opts: ['Profits', 'Ressources', 'Marchés', 'Employés'],
      ans: 1, aspect: 'mgmt'
    },
    {
      q: 'Le SMIC est un salaire :',
      opts: ['Maximum légal', 'Minimum légal', 'Moyen en France', 'Conventionnel de branche'],
      ans: 1, aspect: 'droit'
    },
    {
      q: 'Dans la hiérarchie des normes sociales, qu\'est-ce qui prime sur un accord d\'entreprise ?',
      opts: ['Le règlement intérieur', 'Le contrat de travail', 'La convention collective (si plus favorable)', 'L\'usage d\'entreprise'],
      ans: 2, aspect: 'droit'
    },
    {
      q: 'Fayol résume le rôle du manager par l\'acronyme :',
      opts: ['SMART', 'SWOT', 'PPOCCC', 'PESTEL'],
      ans: 2, aspect: 'mgmt'
    },
    {
      q: 'La productivité du travail se calcule par :',
      opts: ['Chiffre d\'affaires ÷ effectif', 'Production ÷ heures travaillées', 'Profit ÷ capital investi', 'Valeur ajoutée ÷ salaires'],
      ans: 1, aspect: 'eco'
    },
    {
      q: 'Un CDD se termine toujours avec une prime de précarité de :',
      opts: ['5 %', '8 %', '10 %', '15 %'],
      ans: 2, aspect: 'droit'
    },
    {
      q: 'Herzberg appelle "facteurs d\'hygiène" les éléments dont l\'absence provoque :',
      opts: ['De la satisfaction', 'De la démotivation chronique', 'De l\'insatisfaction', 'Un départ volontaire'],
      ans: 2, aspect: 'mgmt'
    },
    {
      q: 'La matrice d\'Ansoff classe les stratégies selon :',
      opts: ['Taille de l\'entreprise et secteur', 'Produits (existants/nouveaux) × marchés (existants/nouveaux)', 'Diagnostic interne et externe', 'Taux de croissance et part de marché'],
      ans: 1, aspect: 'mgmt'
    },
    {
      q: 'La rationalité limitée (Simon) signifie que les décideurs :',
      opts: ['Maximisent toujours leur utilité', 'Ne décident jamais rationnellement', 'Choisissent une solution satisfaisante faute d\'information complète', 'Délèguent toutes les décisions importantes'],
      ans: 2, aspect: 'mgmt'
    },
    {
      q: 'L\'objectif principal de la BCE est de maintenir l\'inflation :',
      opts: ['À 0 %', 'Inférieure à 1 %', 'Proche mais inférieure à 2 %', 'Entre 3 % et 5 %'],
      ans: 2, aspect: 'eco'
    },
    {
      q: 'La responsabilité civile délictuelle nécessite la réunion de :',
      opts: ['Faute + dommage + lien de causalité', 'Dommage + mauvaise foi', 'Faute + intention de nuire', 'Contrat + inexécution + préjudice'],
      ans: 0, aspect: 'droit'
    },
    {
      q: 'Likert considère que le style de management le plus efficace est :',
      opts: ['Autoritaire exploiteur', 'Autoritaire bienveillant', 'Consultatif', 'Participatif'],
      ans: 3, aspect: 'mgmt'
    },
  ],

  /* ── BADGES ────────────────────────────────────────────────────── */
  badges: [
    { id: 'first',    icon: '🌱', label: 'Premier pas',   desc: 'Première session lancée' },
    { id: 'eco',      icon: '📈', label: 'Économiste',    desc: 'Aspect Économie exploré' },
    { id: 'droit',    icon: '⚖️', label: 'Juriste',       desc: 'Aspect Droit exploré' },
    { id: 'mgmt',     icon: '🎯', label: 'Manager',       desc: 'Aspect Management exploré' },
    { id: 'all3',     icon: '🏆', label: 'Triple A',      desc: 'Les 3 aspects visités' },
    { id: 'quiz10',   icon: '🧠', label: 'Cerveau d\'or', desc: 'Score 10/10 au quiz' },
    { id: 'matcher',  icon: '🔗', label: 'Connecteur',    desc: 'Tous les auteurs associés' },
    { id: 'flasher',  icon: '⚡', label: 'Flash',         desc: 'Session flashcards complète' },
    { id: 'century',  icon: '💯', label: 'Centenaire',    desc: '100 XP accumulés' },
    { id: 'streak3',  icon: '🔥', label: 'En feu',        desc: 'Série de 3 jours' },
  ],

  /* ── SUJETS (question du jour CEJM) ────────────────────────────── */
  sujets: [
    "L'entreprise est-elle seule responsable de sa performance ?",
    "La stratégie de différenciation est-elle toujours préférable à la domination par les coûts ?",
    "Le taylorisme est-il définitivement dépassé dans l'entreprise contemporaine ?",
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
