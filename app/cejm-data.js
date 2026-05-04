// CEJM Revision Data — 6 Thèmes complets
window.CEJM_THEMES = [
  {
    id:'T1', num:1,
    titre:"L'intégration de l'entreprise dans son environnement",
    annee:'1ère année',
    icon:'🏢',
    color:{ bg:'#EFF6FF', solid:'#2563EB', ink:'#1E40AF', soft:'#BFDBFE', text:'#fff' },
    chapitres:[
      {
        titre:'Visions de l\'entreprise',
        points:[
          { titre:'Vision entrepreneuriale', contenu:"L'entreprise est vue comme le projet d'un <b>entrepreneur</b> qui prend des risques, mobilise des ressources et innove pour créer de la valeur. <b>Schumpeter</b> (1942) en fait le moteur de la <b>destruction créatrice</b> : l'entrepreneur innove et déstabilise les marchés existants pour créer de nouvelles activités. On distingue <b>l'innovation de produit</b> (nouveau bien/service), <b>de procédé</b> (nouveau process de production), <b>organisationnelle</b> (nouvelle façon de travailler) et <b>de marché</b> (accès à de nouveaux débouchés).", memo:'Entrepreneur = preneur de risque + innovateur — Schumpeter : destruction créatrice' },
          { titre:'Vision managériale', contenu:"L'entreprise est vue comme une <b>organisation</b> pilotée par des <b>managers</b> qui coordonnent des ressources humaines, matérielles et financières pour atteindre des objectifs. Le manager planifie, organise, dirige et contrôle (PODC). Cette vision met en avant les <b>styles de direction</b> (autoritaire, participatif…), la <b>structure organisationnelle</b> (fonctionnelle, divisionnelle, matricielle) et les <b>mécanismes de coordination</b> (Mintzberg). Le manager n'est pas nécessairement le propriétaire de l'entreprise — c'est la <b>séparation entre propriété et pouvoir</b>.", memo:'Manager ≠ Propriétaire — PODC : Planifier · Organiser · Diriger · Contrôler' },
        ]
      },
      {
        titre:'Agents économiques',
        points:[
          { titre:'Les 6 agents économiques', contenu:"Toute économie repose sur 6 catégories d'agents qui échangent entre eux : les <b>ménages</b> (consomment, épargnent, offrent du travail), les <b>sociétés non financières (SNF)</b> (produisent des biens et services marchands), les <b>sociétés financières</b> (banques, assurances, intermédiaires financiers), les <b>administrations publiques</b> (État, collectivités locales, Sécurité sociale), les <b>ISBLSM</b> (Institutions Sans But Lucratif au Service des Ménages : associations, ONG, syndicats) et le <b>reste du monde</b> (tous les agents non-résidents, relations extérieures).", memo:'M · SNF · SF · AP · ISBLSM · RdM — les 6 agents du circuit économique' },
          { titre:'Les flux économiques', contenu:"Les échanges entre agents génèrent deux types de flux : <b>flux réels</b> (biens, services, travail fourni) et <b>flux monétaires</b> (salaires, paiements, impôts, dividendes). Ces flux forment le circuit économique. La monnaie peut être fiduciaire (billets/pièces) ou scripturale (virement, carte).", memo:'Réel = ce qu\'on échange / Monétaire = ce qu\'on paye' },
        ]
      },
      {
        titre:'Fonctionnement du marché',
        points:[
          { titre:'Définition et types de marchés', contenu:"Un <b>marché</b> est un lieu (physique ou virtuel) de rencontre entre l'offre et la demande qui fixe un <b>prix d'équilibre</b>. On distingue le <b>marché des biens et services</b> (échanges de produits marchands), le <b>marché du travail</b> (rencontre de l'offre et de la demande de travail) et le <b>marché des capitaux</b> (financement des agents — marché primaire = émission de nouveaux titres ; marché secondaire = échange de titres existants en Bourse).", memo:'3 marchés : Biens & Services · Travail · Capitaux' },
          { titre:'Le prix d\'équilibre', contenu:"Le <b>prix d'équilibre</b> (ou prix de marché) est celui qui égalise l'offre et la demande. En dessous, il y a pénurie ; au-dessus, surplus. Ce mécanisme est fondamental dans une économie de marché. Il peut être perturbé par des pratiques anticoncurrentielles (ententes, abus de position dominante).", memo:'Prix = régulateur automatique de l\'offre et de la demande' },
        ]
      },
      {
        titre:'Création de valeur / VA',
        points:[
          { titre:'La valeur ajoutée (VA)', contenu:"La <b>valeur ajoutée</b> mesure la richesse créée par l'entreprise : <b>VA = Chiffre d'affaires − Consommations intermédiaires</b>. Les consommations intermédiaires sont les biens et services achetés à d'autres entreprises pour être transformés ou détruits dans le processus de production. La somme des VA de toutes les entreprises d'un pays forme le <b>PIB</b>.", memo:'VA = CA − CI' },
          { titre:'Répartition de la VA', contenu:"La VA est partagée entre différents acteurs : <b>salariés</b> (salaires), <b>État</b> (impôts et cotisations), <b>actionnaires</b> (dividendes), <b>entreprise</b> (réserves pour l'autofinancement) et <b>créanciers</b> (intérêts). Ce partage est au cœur des tensions sociales dans l'entreprise.", memo:'VA → Salariés + État + Actionnaires + Entreprise + Créanciers' },
        ]
      },
      {
        titre:'Structures juridiques',
        points:[
          { titre:'L\'entreprise individuelle (EI)', contenu:"L'<b>entreprise individuelle</b> est exploitée par une seule personne physique (l'entrepreneur). Depuis la réforme de 2022, seul le <b>patrimoine professionnel</b> peut être saisi par les créanciers professionnels (le patrimoine personnel est protégé). C'est la structure la plus simple à créer.", memo:'1 personne = 1 entreprise. Patrimoine pro protégé depuis 2022.' },
          { titre:'SARL, SAS, SA', contenu:"<b>SARL</b> (Société à Responsabilité Limitée) : 1 à 100 associés, responsabilité limitée aux apports, gérée par un gérant. <b>SAS</b> (Société par Actions Simplifiée) : grande liberté statutaire, dirigée par un président, idéale pour les startups. <b>SA</b> (Société Anonyme) : min 2 actionnaires, capital 37 000 €, peut être cotée en bourse.", memo:'SARL = souplesse · SAS = liberté · SA = grande entreprise/cotée' },
        ]
      },
      {
        titre:'Contrats commerciaux',
        points:[
          { titre:'Formation et validité du contrat', contenu:"Un contrat est un <b>accord de volonté</b> entre deux ou plusieurs parties créant des effets juridiques. Pour être valide, il doit réunir 3 conditions : <b>consentement libre et non vicié</b> (ni erreur, ni dol, ni violence), <b>capacité juridique</b> des parties et <b>contenu licite et certain</b>. Un contrat électronique obéit aux mêmes règles et se forme par la <b>règle du double-clic</b>.", memo:'3 conditions : Consentement + Capacité + Contenu licite' },
          { titre:'Effets et rupture du contrat', contenu:"Le contrat valablement formé a une <b>force obligatoire</b> : il s'impose aux parties comme la loi. L'inexécution engage la <b>responsabilité contractuelle</b> (3 conditions : fait générateur, préjudice, lien de causalité). La <b>responsabilité extracontractuelle</b> couvre les dommages causés à des tiers hors contrat.", memo:'Force obligatoire → respect obligatoire sous peine de réparation' },
        ]
      },
      {
        titre:'Parties prenantes',
        points:[
          { titre:'La théorie des parties prenantes (Freeman)', contenu:"<b>Edward Freeman</b> (1984) définit les parties prenantes (<i>stakeholders</i>) comme tout groupe ou individu pouvant affecter ou être affecté par les activités de l'entreprise. Elles se divisent en <b>parties prenantes primaires</b> (salariés, clients, actionnaires, fournisseurs) et <b>secondaires</b> (État, médias, société civile, ONG).", memo:'Freeman : l\'entreprise doit répondre à TOUS ses stakeholders' },
          { titre:'Enjeux et conflits d\'intérêts', contenu:"Les parties prenantes ont souvent des intérêts divergents. Les <b>actionnaires</b> veulent maximiser le profit, les <b>salariés</b> souhaitent de bonnes conditions de travail, les <b>clients</b> veulent des prix bas, et la <b>société civile</b> attend un comportement responsable (RSE). Le management doit concilier ces attentes contradictoires.", memo:'Tension classique : profit court terme ≠ durabilité long terme' },
        ]
      },
    ]
  },
  {
    id:'T2', num:2,
    titre:"La régulation de l'activité économique",
    annee:'1ère année',
    icon:'⚖️',
    color:{ bg:'#FFF7ED', solid:'#EA580C', ink:'#9A3412', soft:'#FED7AA', text:'#fff' },
    chapitres:[
      {
        titre:'Concurrence parfaite / imparfaite',
        points:[
          { titre:'La concurrence pure et parfaite (CPP)', contenu:"La <b>CPP</b> est un modèle théorique reposant sur 5 conditions : <b>atomicité</b> (nombreux offreurs/demandeurs), <b>homogénéité</b> des produits, <b>transparence</b> de l'information, <b>fluidité</b> (libre entrée/sortie du marché) et <b>mobilité</b> des facteurs de production. Dans la réalité, ce modèle est rarement atteint.", memo:'5 conditions CPP : Atomicité · Homogénéité · Transparence · Fluidité · Mobilité' },
          { titre:'Concurrence imparfaite', contenu:"Quand les conditions de CPP ne sont pas réunies, on parle de <b>concurrence imparfaite</b>. Principales formes : <b>monopole</b> (un seul offreur face à de nombreux acheteurs), <b>oligopole</b> (quelques offreurs dominants), <b>concurrence monopolistique</b> (nombreux offreurs mais produits différenciés). Ces structures permettent aux firmes d'exercer un pouvoir de marché.", memo:'Monopole = 1 · Oligopole = quelques-uns · Monopolistique = diff. produit' },
        ]
      },
      {
        titre:'Défaillances du marché',
        points:[
          { titre:'Externalités', contenu:"Une <b>externalité</b> est un effet non compensé d'une activité économique sur un tiers. Elle peut être <b>positive</b> (ex : vaccination qui protège aussi les non-vaccinés) ou <b>négative</b> (ex : pollution d'une usine). En présence d'externalités, le marché alloue mal les ressources → justification de l'intervention de l'État.", memo:'Pollution (négative) ↔ Formation (positive) — ni l\'une ni l\'autre n\'est payée/récompensée' },
          { titre:'Asymétries d\'information', contenu:"L'<b>asymétrie d'information</b> existe quand les parties n'ont pas accès aux mêmes données. Elle provoque la <b>sélection adverse</b> (mauvaise sélection avant la transaction, ex : marché des voitures d'occasion — G. Akerlof) et le <b>risque moral</b> (comportement opportuniste après la transaction). Cela perturbe le fonctionnement optimal du marché.", memo:'Qui sait quoi ? La partie la mieux informée en profite.' },
          { titre:'Biens publics et biens collectifs', contenu:"Un <b>bien public pur</b> est à la fois <b>non rival</b> (la consommation par l'un ne diminue pas celle des autres) et <b>non exclusif</b> (impossible d'en exclure quelqu'un). Ex : éclairage public, défense nationale. Le marché ne les produit pas spontanément car personne ne paierait → l'État doit les fournir.", memo:'Non rival + Non exclusif = Bien public pur → fourni par l\'État' },
        ]
      },
      {
        titre:'Contrat de travail',
        points:[
          { titre:'CDI, CDD, CTT', contenu:"Le <b>CDI</b> (Contrat à Durée Indéterminée) est le droit commun. Le <b>CDD</b> (Durée Déterminée) est précaire : motifs limités par la loi, max <b>18 mois</b> avec 2 renouvellements possibles. Le <b>CTT</b> (Contrat de Travail Temporaire / intérim) répond aux mêmes règles. Le critère déterminant du contrat de travail est le <b>lien de subordination</b> (directive, contrôle, sanction).", memo:'CDI = permanent | CDD = 18 mois max | CTT = intérim' },
          { titre:'Rupture du contrat de travail', contenu:"<b>Démission</b> : à l'initiative du salarié (pas d'allocations chômage). <b>Licenciement</b> : à l'initiative de l'employeur — doit reposer sur une <b>cause réelle et sérieuse</b> (motif personnel ou économique). <b>Rupture conventionnelle</b> : accord commun, ouvre droit aux allocations chômage. La <b>clause de non-concurrence</b> (espace + temps + compensation financière) peut être prévue.", memo:'Démission (salarié) | Licenciement (employeur) | Conventionnelle (accord)' },
        ]
      },
      {
        titre:'Politiques économiques',
        points:[
          { titre:'Politiques conjoncturelles', contenu:"Agissent à court terme sur la conjoncture. La <b>politique budgétaire</b> (État) joue sur les dépenses publiques et la fiscalité pour relancer ou freiner l'activité. La <b>politique monétaire</b> (BCE) agit sur les taux d'intérêt directeurs pour contrôler l'inflation et le crédit. Objectif : atteindre le <b>carré magique de Kaldor</b> : croissance + plein-emploi + stabilité des prix + équilibre extérieur.", memo:'Carré magique de Kaldor : Croissance · Emploi · Inflation · Équilibre extérieur' },
          { titre:'Politiques structurelles', contenu:"Agissent à long terme sur les <b>structures économiques</b>. Exemples : politique industrielle (soutien à des secteurs clés), politique de formation (capital humain), politique énergétique (transition écologique), politique de R&D (innovation). Contrairement aux politiques conjoncturelles, leurs effets sont lents mais durables.", memo:'Long terme → formation, innovation, industrie, énergie' },
        ]
      },
      {
        titre:'Rôle de l\'État',
        points:[
          { titre:'Les 3 fonctions de l\'État (Musgrave)', contenu:"<b>Richard Musgrave</b> (1959) identifie 3 fonctions : <b>Allocation</b> (produire des biens et services collectifs que le marché ne fournit pas), <b>Redistribution</b> (réduire les inégalités via la fiscalité progressive, les prestations sociales et transferts) et <b>Régulation</b> (stabiliser l'activité économique et corriger les défaillances du marché).", memo:'Musgrave : A·R·R — Allocation · Redistribution · Régulation' },
          { titre:'Keynes et l\'intervention de l\'État', contenu:"<b>John Maynard Keynes</b> (1936) montre que l'économie de marché peut rester bloquée à un équilibre de sous-emploi. L'État doit intervenir via la <b>dépense publique</b> (multiplicateur keynésien) pour relancer la demande et l'emploi. Opposé à la vision libérale (Say : l'offre crée sa propre demande).", memo:'Keynes : État = locomotive de la demande en période de récession' },
        ]
      },
    ]
  },
  {
    id:'T3', num:3,
    titre:"L'organisation de l'activité de l'entreprise",
    annee:'1ère année',
    icon:'🏭',
    color:{ bg:'#F0FDF4', solid:'#16A34A', ink:'#14532D', soft:'#BBF7D0', text:'#fff' },
    chapitres:[
      {
        titre:'Facteurs de production',
        points:[
          { titre:'Travail et capital', contenu:"La production combine deux facteurs : le <b>travail</b> (force de travail des salariés, capital humain) et le <b>capital</b>. Le capital se divise en <b>capital fixe</b> (équipements, machines, bâtiments — usure = amortissement) et <b>capital circulant</b> (matières premières consommées dans le processus). La <b>combinaison productive</b> peut être à substitution (remplacer le travail par du capital) ou à complémentarité.", memo:'Travail + Capital fixe + Capital circulant = Combinaison productive' },
          { titre:'Les économies d\'échelle', contenu:"Les <b>économies d'échelle</b> existent quand l'augmentation de la production entraîne une baisse du coût unitaire de production. Elles justifient les grandes tailles d'entreprises. Elles peuvent être internes (organisation, technologie) ou externes (localisation, secteur). Elles s'opposent aux déséconomies d'échelle (au-delà d'une certaine taille, les coûts augmentent).", memo:'↑ production + ↓ coût unitaire = économie d\'échelle' },
        ]
      },
      {
        titre:'Structures organisationnelles',
        points:[
          { titre:'Les 4 structures classiques', contenu:"<b>Fonctionnelle</b> : organisation par grandes fonctions (production, marketing, RH…). <b>Divisionnelle</b> : organisation par produits, zones géographiques ou marchés. <b>Matricielle</b> : double rattachement (fonction + projet). <b>Par projet</b> : équipes temporaires autour d'un projet. Chaque structure a des avantages et inconvénients selon la taille et l'environnement.", memo:'F·D·M·P : Fonctionnelle · Divisionnelle · Matricielle · Projet' },
          { titre:'Mécanismes de coordination (Mintzberg)', contenu:"<b>Henry Mintzberg</b> identifie 5 mécanismes de coordination : <b>ajustement mutuel</b> (communication informelle), <b>supervision directe</b> (contrôle hiérarchique), <b>standardisation des procédés</b> (règles de travail), <b>standardisation des résultats</b> (objectifs à atteindre) et <b>standardisation des qualifications</b> (formation requise). La structure libérée maximise l'autonomie des salariés.", memo:'Mintzberg : Ajustement · Supervision · Standardisation ×3' },
        ]
      },
      {
        titre:'Chaîne de valeur',
        points:[
          { titre:'La chaîne de valeur (Porter)', contenu:"<b>Michael Porter</b> décompose les activités de l'entreprise en deux catégories. <b>Activités principales</b> : logistique entrante, production, logistique sortante, commercialisation & vente, service après-vente. <b>Activités de soutien</b> : infrastructure de l'entreprise, gestion des ressources humaines, développement technologique, approvisionnements. L'<b>avantage concurrentiel</b> naît d'une ou plusieurs activités réalisées mieux ou moins cher que les concurrents.", memo:'Porter : activités principales + soutien = création d\'avantage concurrentiel' },
        ]
      },
      {
        titre:'Propriété intellectuelle',
        points:[
          { titre:'Droit d\'auteur et propriété littéraire', contenu:"Le <b>droit d'auteur</b> protège les œuvres originales (livres, musiques, logiciels, sites internet, bases de données) dès leur création, sans formalité. Il comprend des <b>droits patrimoniaux</b> (durée : 70 ans après la mort de l'auteur) et des <b>droits moraux</b> (perpétuels, inaliénables — paternité, intégrité). Conditions : originalité + matérialisation.", memo:'Droit d\'auteur : 70 ans patrimoniaux + perpétuels moraux' },
          { titre:'Brevets et marques', contenu:"Le <b>brevet</b> protège une invention pour <b>20 ans</b> (non renouvelable). 3 conditions : nouveauté, solution à un problème technique, application industrielle possible. Déposé à l'INPI ou à l'OEB. La <b>marque</b> est un signe distinctif déposé à l'INPI pour <b>10 ans, renouvelable indéfiniment</b>. Le nom de domaine se protège par l'action en concurrence déloyale.", memo:'Brevet = 20 ans | Marque = 10 ans ∞ renouvelable' },
        ]
      },
      {
        titre:'Management & motivation',
        points:[
          { titre:'La pyramide de Maslow', contenu:"<b>Abraham Maslow</b> hiérarchise 5 niveaux de besoins à satisfaire de bas en haut : (1) <b>physiologiques</b> (manger, dormir), (2) <b>sécurité</b> (emploi stable), (3) <b>appartenance sociale</b> (équipe, collègues), (4) <b>estime</b> (reconnaissance, statut), (5) <b>accomplissement de soi</b> (épanouissement, créativité). Un besoin de niveau supérieur ne motive que si le niveau inférieur est satisfait.", memo:'Maslow : Physio · Sécu · Social · Estime · Accomplissement (de bas en haut)' },
          { titre:'Les 2 facteurs d\'Herzberg', contenu:"<b>Frederick Herzberg</b> distingue deux types de facteurs : les <b>facteurs d'hygiène</b> (leur absence crée de l'insatisfaction mais leur présence ne motive pas — ex : salaire, conditions de travail, sécurité) et les <b>facteurs de motivation</b> (créent vraiment de la satisfaction — ex : responsabilités, reconnaissance, intérêt du travail, progression). Pour motiver, il faut enrichir le travail.", memo:'Herzberg : Hygiène = évite insatisfaction | Motivation = crée satisfaction' },
          { titre:'Styles de direction (Likert)', contenu:"<b>Rensis Likert</b> définit 4 styles de direction : <b>autoritaire exploiteur</b> (peur, sanctions), <b>autoritaire paternaliste</b> (récompenses + sanctions), <b>consultatif</b> (avis pris mais décision hiérarchique) et <b>participatif</b> (décisions collectives, grande autonomie). Le style participatif est généralement le plus efficace sur le long terme.", memo:'Likert : Autoritaire exploiteur → Paternaliste → Consultatif → Participatif' },
        ]
      },
      {
        titre:'GPEC',
        points:[
          { titre:'La GPEC', contenu:"La <b>GPEC</b> (Gestion Prévisionnelle des Emplois et des Compétences) consiste à anticiper les évolutions des métiers et compétences nécessaires à l'entreprise pour réduire l'écart entre les besoins futurs et les ressources actuelles. Elle repose sur un diagnostic de l'existant, une prospective des besoins et des plans d'action (formation, recrutement, mobilité, reconversion). Obligatoire dans les entreprises de +300 salariés.", memo:'GPEC : anticiper → former → adapter les compétences' },
        ]
      },
    ]
  },
  {
    id:'T4', num:4,
    titre:"L'impact du numérique sur l'activité de l'entreprise",
    annee:'2ème année',
    icon:'💻',
    color:{ bg:'#F5F3FF', solid:'#7C3AED', ink:'#4C1D95', soft:'#DDD6FE', text:'#fff' },
    chapitres:[
      {
        titre:'Économie numérique / plateformes',
        points:[
          { titre:'La marketplace (place de marché)', contenu:"Une <b>marketplace</b> est une plateforme internet qui met en relation vendeurs et acheteurs (réintermédiation). Modèles : <b>BtoB</b> (entreprise→entreprise), <b>BtoC</b> (entreprise→particulier, ex : Amazon), <b>CtoC</b> (particulier→particulier, économie collaborative, ex : Vinted), <b>BtoG</b> (marchés publics). La plateforme se rémunère par une <b>commission</b>. Les <b>effets de réseau</b> renforcent son attractivité avec le nombre d'utilisateurs.", memo:'BtoB · BtoC · CtoC · BtoG — commission + effets de réseau' },
          { titre:'Désintermédiation, réintermédiation, ubérisation', contenu:"La <b>désintermédiation</b> élimine les intermédiaires traditionnels grâce au numérique (vente directe producteur→consommateur). La <b>réintermédiation</b> crée de nouveaux intermédiaires numériques (agrégateurs, comparateurs). L'<b>ubérisation</b> désigne la disruption d'un secteur par une plateforme mobile mettant en contact direct prestataires et clients (Uber, Airbnb, Deliveroo).", memo:'Désinter = supprime | Réinter = crée | Ubérisation = disrupte' },
        ]
      },
      {
        titre:'Innovation / GAFAM',
        points:[
          { titre:'L\'innovation numérique', contenu:"<b>Schumpeter</b> distingue l'innovation de <b>produit</b> (nouveau bien/service), de <b>procédé</b> (nouveau mode de production), d'<b>organisation</b> (nouvelle façon de s'organiser) et de <b>marché</b> (accès à de nouveaux marchés). L'innovation numérique accélère la <b>destruction créatrice</b> : de nouveaux acteurs émergent et détruisent des modèles établis.", memo:'Schumpeter : Produit · Procédé · Organisation · Marché' },
          { titre:'Les GAFAM et plateformes dominantes', contenu:"Les <b>GAFAM</b> (Google, Apple, Facebook/Meta, Amazon, Microsoft) dominent l'économie numérique mondiale grâce à leur position de <b>plateforme</b>, la collecte massive de données (<b>Big Data</b>), leurs économies d'échelle et les effets de réseau. Ils suscitent des débats sur la concurrence (abus de position dominante), la fiscalité (optimisation fiscale) et la protection des données.", memo:'GAFAM = Google · Apple · Facebook · Amazon · Microsoft' },
        ]
      },
      {
        titre:'RGPD & données personnelles',
        points:[
          { titre:'Le RGPD (Règlement Général sur la Protection des Données)', contenu:"Entré en vigueur en mai 2018, le <b>RGPD</b> encadre le traitement des données personnelles dans l'UE. Principes fondamentaux : licéité, finalité, minimisation, exactitude, durée limitée, sécurité et responsabilité. Les entreprises doivent nommer un <b>DPO</b> (Délégué à la Protection des Données). Les amendes peuvent atteindre 4% du CA mondial.", memo:'RGPD : 6 principes + DPO + droits des personnes' },
          { titre:'Droits des personnes et surveillance des salariés', contenu:"Le RGPD garantit 4 droits clés : <b>accès</b>, <b>rectification</b>, <b>portabilité</b> et <b>droit à l'effacement</b> (droit à l'oubli). En entreprise, l'employeur peut surveiller l'activité numérique des salariés (mails pro, navigation) mais doit impérativement en informer le <b>CSE</b> et les salariés au préalable.", memo:'4 droits RGPD : Accès · Rectification · Portabilité · Effacement' },
        ]
      },
      {
        titre:'ERP & systèmes d\'information',
        points:[
          { titre:'Les outils numériques de gestion', contenu:"Un <b>SI</b> (Système d'Information) collecte, traite, stocke et diffuse les données nécessaires à l'activité. Un <b>ERP</b> (Enterprise Resource Planning / PGI) est un système intégré couvrant toutes les fonctions (production, RH, finance, achats). Un <b>CRM</b> (Customer Relationship Management / GRC) gère la relation client. Le <b>Big Data</b> désigne les données massives exploitées pour la prise de décision et la personnalisation.", memo:'SI → ERP → intègre tout | CRM → clients | Big Data → analyse' },
        ]
      },
      {
        titre:'E-commerce',
        points:[
          { titre:'Le commerce électronique', contenu:"L'<b>e-commerce</b> désigne la vente de biens et services via internet. Le consentement est soumis à la <b>règle du double-clic</b> (1er clic : vérification de la commande ; 2ème clic : confirmation + acceptation des CGV). Le <b>droit de rétractation</b> est de <b>14 jours</b> à compter de la réception du bien, sans justification. La <b>LCEN</b> (Loi pour la Confiance dans l'Économie Numérique) impose des obligations d'information au vendeur.", memo:'Double-clic = consentement | 14 jours = droit de rétractation' },
        ]
      },
    ]
  },
  {
    id:'T5', num:5,
    titre:"Les mutations du travail",
    annee:'2ème année',
    icon:'👷',
    color:{ bg:'#FFF1F2', solid:'#E11D48', ink:'#881337', soft:'#FECDD3', text:'#fff' },
    chapitres:[
      {
        titre:'Marché du travail',
        points:[
          { titre:'Offre, demande et SMIC', contenu:"Sur le <b>marché du travail</b>, l'<b>offre</b> émane des actifs (travailleurs) et la <b>demande</b> des entreprises. Le <b>SMIC</b> (Salaire Minimum Interprofessionnel de Croissance) est le salaire plancher légal, revalorisé chaque année (au 1er janvier + en cours d'année si inflation > 2%). Le salaire réel = salaire nominal corrigé de l'inflation.", memo:'SMIC = salaire plancher légal, revalorisé chaque 1er janvier' },
          { titre:'Le chômage et ses types', contenu:"Le <b>chômage frictionnel</b> correspond aux délais de transition entre deux emplois. Le <b>chômage structurel</b> est lié à des inadéquations entre offre et demande de compétences (mutation technologique ou sectorielle). Le <b>chômage conjoncturel</b> est cyclique, lié à une baisse de l'activité économique. Le <b>taux de chômage</b> (BIT) = chômeurs / population active.", memo:'Frictionnel = transition | Structurel = compétences | Conjoncturel = cycle éco' },
        ]
      },
      {
        titre:'Flexibilité',
        points:[
          { titre:'Formes de flexibilité', contenu:"La <b>flexibilité interne</b> adapte le travail sans changer les effectifs : modulation des horaires, annualisation, polyvalence. La <b>flexibilité externe</b> ajuste les effectifs selon l'activité : CDD, intérim, sous-traitance. Le <b>télétravail</b> (encadré par accord ou charte depuis la loi Travail 2016) offre flexibilité géographique mais pose des questions de déconnexion et d'isolement.", memo:'Interne = horaires/polyvalence | Externe = CDD/intérim' },
        ]
      },
      {
        titre:'Santé & sécurité au travail',
        points:[
          { titre:'Prévention et obligations légales', contenu:"L'employeur a une <b>obligation de sécurité</b> envers ses salariés. Il doit élaborer le <b>DUER</b> (Document Unique d'Évaluation des Risques professionnels), obligatoire dans toutes les entreprises. La <b>médecine du travail</b> assure la surveillance médicale des salariés. Les <b>accidents du travail</b> (AT) et <b>maladies professionnelles</b> (MP) sont reconnus et indemnisés par la Sécurité Sociale. Le salarié a un <b>droit de retrait</b> en cas de danger grave et imminent.", memo:'DUER obligatoire + droit de retrait + médecine du travail' },
        ]
      },
      {
        titre:'Représentation (CSE, syndicats)',
        points:[
          { titre:'Le CSE et la représentation du personnel', contenu:"Le <b>CSE</b> (Comité Social et Économique, créé par la loi El Khomri 2017 et généralisé en 2020) est l'instance unique de représentation des salariés, obligatoire dans les entreprises de <b>11 salariés et plus</b>. Il fusionne les anciens CE, DP et CHSCT. Il est consulté sur les décisions importantes (licenciements économiques, conditions de travail). Dans les entreprises de +50 salariés, il a plus de prérogatives.", memo:'CSE = obligatoire dès 11 salariés | remplace CE + DP + CHSCT' },
          { titre:'Les syndicats et leur rôle', contenu:"Les <b>syndicats</b> représentent et défendent les intérêts des travailleurs. En France, 5 syndicats sont représentatifs au niveau national : CGT, CFDT, FO, CFTC, CFE-CGC. La <b>représentativité</b> est mesurée notamment par les scores aux élections professionnelles. Les syndicats négocient les conventions collectives et les accords d'entreprise.", memo:'5 syndicats représentatifs : CGT · CFDT · FO · CFTC · CFE-CGC' },
        ]
      },
      {
        titre:'Négociation collective',
        points:[
          { titre:'Conventions collectives et accords d\'entreprise', contenu:"Une <b>convention collective</b> (de branche) fixe les conditions de travail et de rémunération au-delà du Code du travail pour un secteur entier. Un <b>accord d'entreprise</b> est négocié au niveau de l'entreprise. Le <b>principe de faveur</b> veut que la règle la plus avantageuse pour le salarié s'applique — mais les lois récentes permettent aux accords d'entreprise de déroger à la branche sur certains points (durée du travail).", memo:'Convention collective = branche | Accord entreprise = local | Principe de faveur' },
        ]
      },
    ]
  },
  {
    id:'T6', num:6,
    titre:"Les choix stratégiques de l'entreprise",
    annee:'2ème année',
    icon:'🎯',
    color:{ bg:'#FEFCE8', solid:'#CA8A04', ink:'#713F12', soft:'#FDE68A', text:'#fff' },
    chapitres:[
      {
        titre:'Diagnostic stratégique',
        points:[
          { titre:'SWOT et PESTEL', contenu:"Le <b>SWOT</b> articule le diagnostic interne (Forces / Faiblesses) et externe (Opportunités / Menaces). Le diagnostic interne analyse les <b>ressources</b> (Penrose : financières, matérielles, immatérielles, humaines) et les <b>compétences</b> (Hamel & Prahalad : distinctives). Le diagnostic externe utilise <b>PESTEL</b> (Politique, Économique, Socioculturel, Technologique, Écologique, Légal) pour le macro-environnement.", memo:'SWOT : Interne (F/F) + Externe (O/M) via PESTEL' },
          { titre:'Les 5 forces de Porter et le LCAG', contenu:"Les <b>5 forces de Porter</b> analysent le micro-environnement : intensité concurrentielle, menace des entrants potentiels, menace des substituts, pouvoir des fournisseurs, pouvoir des clients. Plus les forces sont intenses, moins le secteur est attractif. Le <b>LCAG</b> est un outil de diagnostic stratégique qui combine analyse interne, externe et valeurs des dirigeants pour aboutir à des choix stratégiques.", memo:'Porter : 5 forces = concurrents + entrants + substituts + fournisseurs + clients' },
          { titre:'Rationalité et décision (Simon)', contenu:"<b>Herbert Simon</b> montre que les décideurs ont une <b>rationalité limitée</b> (information incomplète, capacités cognitives finies). Ils passent par 3 étapes : <b>Intelligence</b> (identifier le problème), <b>Modélisation</b> (recenser les solutions), <b>Choix</b> (sélectionner une solution satisfaisante). Les objectifs doivent être <b>SMART</b> : Spécifique, Mesurable, Atteignable, Réaliste, Temporel.", memo:'Simon : Intelligence → Modélisation → Choix | Objectifs SMART' },
        ]
      },
      {
        titre:'Croissance interne / externe',
        points:[
          { titre:'Modalités de croissance', contenu:"<b>Croissance interne</b> : développement par les propres capacités (investissement, R&D). <b>Croissance externe</b> : acquisition (rachat d'une autre entreprise), fusion (regroupement en une nouvelle entité), création de filiale. <b>Croissance conjointe</b> : alliance entre concurrents ou franchise (cession d'un concept contre redevance). <b>Internationalisation</b> : expansion à l'étranger (export, JV, implantation).", memo:'Interne = développer | Externe = racheter | Conjointe = s\'associer' },
          { titre:'Stratégie globale (Ansoff)', contenu:"<b>Ansoff</b> distingue 4 stratégies globales : <b>spécialisation</b> (concentration sur un seul DAS), <b>diversification</b> (plusieurs DAS pour répartir les risques), <b>intégration</b> (contrôle de la filière — internaliser des activités en amont ou aval) et <b>externalisation / impartition</b> (délégation à des partenaires externes). Un <b>DAS</b> (Domaine d'Activité Stratégique) est un sous-ensemble homogène d'activités.", memo:'Ansoff : Spécialisation · Diversification · Intégration · Externalisation' },
        ]
      },
      {
        titre:'Stratégies concurrentielles (Porter)',
        points:[
          { titre:'Les 3 stratégies génériques de Porter', contenu:"<b>Michael Porter</b> identifie 3 stratégies de domaine : <b>domination par les coûts</b> (être l'offreur le moins cher — économies d'échelle, productivité), <b>différenciation</b> (offre perçue comme unique — qualité, innovation, design, image de marque) et <b>focalisation / niche</b> (concentration sur un segment précis, avec coûts réduits ou différenciation). Être « coincé au milieu » sans stratégie claire est risqué.", memo:'Porter : Coûts · Différenciation · Focalisation — éviter le milieu !' },
          { titre:'Définition de la stratégie (Chandler)', contenu:"<b>Alfred Chandler</b> (1962) définit la stratégie comme : <em>«  la détermination des buts et objectifs à long terme d'une entreprise, l'adoption des moyens d'action et l'allocation des ressources nécessaires pour atteindre ces objectifs. »</em> La <b>stratégie délibérée</b> (Mintzberg) est planifiée intentionnellement ; la <b>stratégie émergente</b> apparaît au fil de l'action. La stratégie réalisée est la combinaison des deux.", memo:'Chandler : buts LT + moyens + ressources = stratégie' },
        ]
      },
      {
        titre:'Financement',
        points:[
          { titre:'Financement interne et externe', contenu:"Le <b>financement interne</b> (autofinancement) utilise la <b>CAF</b> (Capacité d'Autofinancement = Résultat Net + Dotations aux amortissements). Le <b>financement externe</b> comprend : emprunt bancaire, crédit-bail (leasing), augmentation de capital, crowdfunding. L'équilibre financier repose sur : <b>FRNG</b> (Fonds de Roulement Net Global) > <b>BFR</b> (Besoin en Fonds de Roulement). <b>Trésorerie Nette = FRNG − BFR</b>.", memo:'CAF = RN + Amortissements | TN = FRNG − BFR' },
        ]
      },
      {
        titre:'Performance & RSE',
        points:[
          { titre:'Mesurer la performance', contenu:"La performance se mesure par <b>3 dimensions</b> (Drucker) : <b>efficacité</b> (objectifs atteints), <b>efficience</b> (optimisation des moyens utilisés) et <b>pertinence</b> (adéquation objectifs/moyens). Les indicateurs financiers : <b>ROE</b> = Résultat Net / Capitaux Propres (rentabilité financière) ; <b>ROI</b> = Résultat d'exploitation / Capital investi (rentabilité économique).", memo:'Drucker : Efficacité + Efficience + Pertinence | ROE = RN/CP | ROI = RE/K' },
          { titre:'La RSE', contenu:"La <b>RSE</b> (Responsabilité Sociétale des Entreprises) désigne l'intégration volontaire par les entreprises des préoccupations sociales, environnementales et économiques dans leurs activités. Elle repose sur la <b>triple bottom line</b> : performance économique (profit), sociale (people) et environnementale (planet). Elle répond aux attentes des <b>parties prenantes</b> (Freeman) et s'inscrit dans les objectifs de développement durable (ODD, Agenda 2030).", memo:'RSE = Triple bottom line : Profit · People · Planet' },
        ]
      },
    ]
  },
];

// ====== FLASHCARDS ======
window.CEJM_FLASH = [
  // T1
  { id:'f001', theme:'T1', q:'Qu\'est-ce qu\'un agent économique ?', r:'Un acteur qui prend des décisions économiques (consommer, produire, épargner). On distingue 6 catégories : ménages, sociétés non financières (SNF), sociétés financières, administrations publiques, ISBLSM et reste du monde.', ex:'Les ménages consomment, les SNF produisent des biens marchands, les sociétés financières prêtent.' },
  { id:'f002', theme:'T1', q:'Qu\'est-ce que la valeur ajoutée ?', r:'VA = Chiffre d\'affaires − Consommations intermédiaires. Elle mesure la richesse créée par l\'entreprise.', ex:'Une boulangerie achète de la farine (CI) et vend du pain (CA) : la VA est la différence.' },
  { id:'f003', theme:'T1', q:'Quelle est la différence entre une EI et une SARL ?', r:'L\'EI (Entreprise Individuelle) est une personne physique sans personnalité morale distincte. La SARL est une personne morale avec responsabilité limitée aux apports.', ex:'Un auto-entrepreneur = EI. Une pizzeria à plusieurs associés = souvent SARL.' },
  { id:'f004', theme:'T1', q:'Quelles sont les 3 conditions de validité d\'un contrat ?', r:'1. Consentement libre et non vicié (ni erreur, ni dol, ni violence). 2. Capacité juridique. 3. Contenu licite et certain.', ex:'Un contrat signé sous la menace est vicié par la violence → annulable.' },
  { id:'f005', theme:'T1', q:'Qui sont les parties prenantes selon Freeman ?', r:'Tout groupe ou individu pouvant affecter ou être affecté par les activités de l\'entreprise : salariés, clients, actionnaires, fournisseurs, État, société civile.', ex:'Une ONG qui proteste contre les pratiques d\'une entreprise est une partie prenante.' },
  { id:'f006', theme:'T1', q:'Qu\'est-ce qu\'un flux monétaire ?', r:'Flux de paiement entre agents économiques : salaires, loyers, dividendes, impôts. Il est la contrepartie monétaire d\'un flux réel.', ex:'L\'entreprise paye un salaire (flux monétaire) en échange du travail (flux réel).' },
  { id:'f007', theme:'T1', q:'Quelle est la différence entre SAS et SA ?', r:'La SAS (Société par Actions Simplifiée) offre une grande liberté statutaire et convient aux startups. La SA (Société Anonyme) permet d\'être cotée en Bourse et nécessite min 2 actionnaires et 37 000 € de capital.', ex:'Apple est une SA cotée. La plupart des startups choisissent la SAS.' },
  // T2
  { id:'f008', theme:'T2', q:'Quelles sont les 5 conditions de la concurrence pure et parfaite (CPP) ?', r:'Atomicité (nombreux acteurs), Homogénéité des produits, Transparence de l\'information, Fluidité (libre entrée/sortie), Mobilité des facteurs.', ex:'Aucun marché réel ne réunit toutes ces conditions simultanément.' },
  { id:'f009', theme:'T2', q:'Qu\'est-ce qu\'une externalité ?', r:'Effet non compensé d\'une activité économique sur un tiers : positive (vaccination, formation) ou négative (pollution, bruit).', ex:'La pollution d\'une usine sur les riverains = externalité négative.' },
  { id:'f010', theme:'T2', q:'Quelles sont les 3 fonctions de l\'État selon Musgrave ?', r:'Allocation (biens collectifs), Redistribution (réduire les inégalités), Régulation (stabiliser l\'économie).', ex:'La construction d\'une autoroute = allocation. Les APL = redistribution.' },
  { id:'f011', theme:'T2', q:'Qu\'est-ce que le "carré magique" de Kaldor ?', r:'Les 4 objectifs macro-économiques à atteindre simultanément : croissance (PIB+), plein-emploi (chômage-), stabilité des prix (inflation stable), équilibre extérieur (balance commerciale équilibrée).', ex:'En pratique, ces 4 objectifs sont souvent en tension : lutter contre l\'inflation peut freiner la croissance.' },
  { id:'f012', theme:'T2', q:'Que dit Keynes sur l\'intervention de l\'État ?', r:'En période de récession, l\'État doit relancer la demande par la dépense publique car le marché seul ne retrouve pas l\'équilibre de plein emploi (multiplicateur keynésien).', ex:'Plan de relance post-COVID = politique keynésienne.' },
  { id:'f013', theme:'T2', q:'Quelle est la durée maximale d\'un CDD ?', r:'18 mois maximum (renouvellement inclus). Le CDD peut être renouvelé 2 fois dans cette limite.', ex:'Un CDD de 6 mois peut être renouvelé une première fois de 6 mois et une seconde fois de 6 mois.' },
  { id:'f014', theme:'T2', q:'Qu\'est-ce que l\'asymétrie d\'information ?', r:'Situation où les parties à un échange n\'ont pas accès aux mêmes informations, ce qui peut provoquer une sélection adverse (avant) ou un risque moral (après).', ex:'Le vendeur d\'une voiture d\'occasion connaît ses défauts mieux que l\'acheteur (Akerlof).' },
  // T3
  { id:'f015', theme:'T3', q:'Quelle est la formule de la valeur ajoutée ?', r:'VA = Chiffre d\'affaires − Consommations intermédiaires', ex:'CA = 500 k€, CI = 200 k€ → VA = 300 k€' },
  { id:'f016', theme:'T3', q:'Quels sont les mécanismes de coordination selon Mintzberg ?', r:'Ajustement mutuel (informel), supervision directe (hiérarchique), standardisation des procédés, des résultats, ou des qualifications.', ex:'Dans un cabinet médical : standardisation des qualifications (médecins diplômés).' },
  { id:'f017', theme:'T3', q:'Qu\'est-ce que la chaîne de valeur de Porter ?', r:'Décomposition des activités en activités principales (logistique, production, commercialisation, SAV) et de soutien (RH, R&D, infrastructure, achats) pour identifier l\'avantage concurrentiel.', ex:'IKEA a un avantage sur toute sa chaîne (logistique, design, distribution).' },
  { id:'f018', theme:'T3', q:'Quelle est la durée de protection d\'un brevet ?', r:'20 ans à compter du dépôt, non renouvelable. Conditions : nouveauté, solution technique, application industrielle.', ex:'Après 20 ans, un médicament passe dans le domaine public → génériques.' },
  { id:'f019', theme:'T3', q:'Quelle est la durée de protection d\'une marque ?', r:'10 ans renouvelables indéfiniment, dès lors que le dépôt est renouvelé à l\'INPI.', ex:'Coca-Cola a renouvelé sa marque depuis 1886.' },
  { id:'f020', theme:'T3', q:'Qu\'est-ce que la GPEC ?', r:'Gestion Prévisionnelle des Emplois et des Compétences : anticiper les évolutions des métiers pour réduire l\'écart entre compétences actuelles et besoins futurs (formation, mobilité, recrutement).', ex:'Une entreprise automobile investit dans la GPEC pour former ses employés à l\'électrique.' },
  { id:'f021', theme:'T3', q:'Selon Maslow, quel besoin doit être satisfait en priorité ?', r:'Les besoins physiologiques (manger, dormir, se loger) — le premier niveau de sa pyramide.', ex:'Un salarié qui a faim ne peut pas se préoccuper de reconnaissance ou d\'accomplissement.' },
  { id:'f022', theme:'T3', q:'Que distingue Herzberg entre facteurs d\'hygiène et de motivation ?', r:'Facteurs d\'hygiène : leur absence crée de l\'insatisfaction (salaire, conditions de travail). Facteurs de motivation : créent de la satisfaction (responsabilités, reconnaissance, épanouissement).', ex:'Augmenter le salaire évite l\'insatisfaction mais ne motive pas sur le long terme.' },
  // T4
  { id:'f023', theme:'T4', q:'Qu\'est-ce qu\'une marketplace ?', r:'Plateforme internet mettant en relation des acheteurs et des vendeurs, rémunérée par une commission. Les effets de réseau augmentent son attractivité avec le nombre d\'utilisateurs.', ex:'Amazon marketplace permet à des milliers de vendeurs tiers de vendre aux clients Amazon.' },
  { id:'f024', theme:'T4', q:'Quels sont les principes du RGPD ?', r:'Licéité, finalité, minimisation des données, exactitude, durée limitée, sécurité et responsabilité (accountability). Les entreprises doivent nommer un DPO si nécessaire.', ex:'Collecter des données sans but précis = violation du principe de finalité.' },
  { id:'f025', theme:'T4', q:'Quels sont les 4 droits des personnes sous le RGPD ?', r:'Droit d\'accès, droit de rectification, droit à l\'effacement (droit à l\'oubli), droit à la portabilité des données.', ex:'Vous pouvez demander à Google de supprimer des résultats vous concernant.' },
  { id:'f026', theme:'T4', q:'Quelle est la règle du double-clic ?', r:'Procédure de formation d\'un contrat électronique : 1er clic = vérification de la commande, 2ème clic = confirmation avec acceptation des CGV.', ex:'Sur un site marchand, le résumé de commande + bouton "Confirmer" = double-clic.' },
  { id:'f027', theme:'T4', q:'Quel est le délai de rétractation en e-commerce ?', r:'14 jours à compter de la réception du bien, sans justification nécessaire.', ex:'Vous avez 14 jours pour retourner un vêtement commandé en ligne.' },
  { id:'f028', theme:'T4', q:'Qu\'est-ce qu\'un ERP ?', r:'Enterprise Resource Planning (ou PGI) : système informatique intégré qui centralise la gestion de toutes les fonctions de l\'entreprise (production, achats, RH, finance, stocks).', ex:'SAP et Oracle sont les deux principaux ERP mondiaux.' },
  // T5
  { id:'f029', theme:'T5', q:'Qu\'est-ce que le SMIC ?', r:'Salaire Minimum Interprofessionnel de Croissance : rémunération minimale légale, revalorisée chaque 1er janvier (et en cours d\'année si inflation > 2%).', ex:'En 2024, le SMIC horaire brut est d\'environ 11,65 €.' },
  { id:'f030', theme:'T5', q:'Qu\'est-ce que le CSE ?', r:'Comité Social et Économique : instance unique de représentation du personnel (fusionne CE, DP et CHSCT). Obligatoire dès 11 salariés. Il est consulté sur les décisions importantes.', ex:'Un plan de licenciement économique doit être présenté au CSE avant d\'être mis en œuvre.' },
  { id:'f031', theme:'T5', q:'Qu\'est-ce que le DUER ?', r:'Document Unique d\'Évaluation des Risques professionnels. L\'employeur doit l\'élaborer et le mettre à jour dans toutes les entreprises. Il recense tous les risques professionnels.', ex:'Risque de chute, risques chimiques, risques psychosociaux → tous dans le DUER.' },
  { id:'f032', theme:'T5', q:'Qu\'est-ce que le droit de retrait du salarié ?', r:'Droit pour le salarié de refuser d\'exécuter une tâche qui présente un danger grave et imminent pour sa vie ou sa santé, sans être sanctionné.', ex:'Un électricien peut exercer son droit de retrait face à une installation défectueuse.' },
  { id:'f033', theme:'T5', q:'Qu\'est-ce que le principe de faveur ?', r:'En droit du travail, la règle la plus favorable au salarié s\'applique, quelle que soit la source (loi, convention collective, accord d\'entreprise, contrat individuel).', ex:'Si la convention collective prévoit 5 semaines de congés et la loi 4, c\'est 5 semaines qui s\'appliquent.' },
  // T6
  { id:'f034', theme:'T6', q:'Quelles sont les 3 stratégies génériques de Porter ?', r:'Domination par les coûts (être le moins cher), différenciation (offre unique perçue comme supérieure), focalisation (niche = coûts réduits OU différenciation sur un segment).', ex:'Lidl = coûts | Apple = différenciation | Rolex = focalisation différenciation' },
  { id:'f035', theme:'T6', q:'Quelle est la définition de la stratégie selon Chandler ?', r:'«  La détermination des buts et objectifs à long terme d\'une entreprise, l\'adoption des moyens d\'action et l\'allocation des ressources nécessaires pour les atteindre. »', ex:'Décider de se diversifier dans un nouveau marché = décision stratégique.' },
  { id:'f036', theme:'T6', q:'Qu\'est-ce que le SWOT ?', r:'Outil de diagnostic stratégique croisant : Forces et Faiblesses (interne) et Opportunités et Menaces (externe).', ex:'Forces = bonne R&D | Faiblesses = faible distribution | Opportunités = marché émergent | Menaces = concurrent agressif.' },
  { id:'f037', theme:'T6', q:'Qu\'est-ce que le ROE ?', r:'Return On Equity = Résultat Net / Capitaux Propres. Il mesure la rentabilité financière pour les actionnaires.', ex:'ROE de 15% = l\'entreprise génère 15 € de bénéfice pour 100 € de capitaux propres.' },
  { id:'f038', theme:'T6', q:'Comment calcule-t-on la CAF ?', r:'CAF (Capacité d\'AutoFinancement) = Résultat Net + Dotations aux amortissements et provisions. Elle mesure la capacité de l\'entreprise à financer elle-même ses investissements.', ex:'RN = 100 k€ + Amortissements = 40 k€ → CAF = 140 k€' },
  { id:'f039', theme:'T6', q:'Qu\'est-ce que la RSE ?', r:'Responsabilité Sociétale des Entreprises : intégration volontaire des préoccupations sociales (people), environnementales (planet) et économiques (profit) = triple bottom line.', ex:'Utiliser des matériaux recyclés, payer ses fournisseurs équitablement, réduire ses émissions.' },
  { id:'f040', theme:'T6', q:'Quels sont les objectifs SMART ?', r:'Spécifique, Mesurable, Atteignable, Réaliste, Temporel (délai fixé). Ils permettent de formuler des objectifs clairs et évaluables.', ex:'«  Augmenter les ventes de 10% en 6 mois » = objectif SMART.' },
];

// ====== FILL-IN-THE-BLANK ======
window.CEJM_FILL = [
  // T1
  { id:'fi001', theme:'T1', avant:'La valeur ajoutée se calcule : VA =', trou:'Chiffre d\'affaires', apres:'− Consommations intermédiaires.', indice:'Initiales : CA', thematique:'Création de valeur' },
  { id:'fi002', theme:'T1', avant:'La somme des VA de toutes les entreprises d\'un pays forme le', trou:'PIB', apres:'(Produit Intérieur Brut).', indice:'3 lettres', thematique:'Création de valeur' },
  { id:'fi003', theme:'T1', avant:'Selon Freeman, les', trou:'parties prenantes', apres:'sont tous les groupes pouvant affecter ou être affectés par l\'entreprise.', indice:'stakeholders en anglais', thematique:'Parties prenantes' },
  { id:'fi004', theme:'T1', avant:'L\'EI est exploitée par une personne', trou:'physique', apres:'. Depuis 2022, seul le patrimoine professionnel peut être saisi.', indice:'≠ personne morale', thematique:'Structures juridiques' },
  { id:'fi005', theme:'T1', avant:'Dans un contrat électronique, le consentement est soumis à la règle du', trou:'double-clic', apres:' : vérification puis confirmation.', indice:'2 étapes', thematique:'Contrats' },
  // T2
  { id:'fi006', theme:'T2', avant:'Les 5 conditions de la CPP sont : atomicité, homogénéité,', trou:'transparence', apres:', fluidité et mobilité.', indice:'information parfaite', thematique:'Concurrence' },
  { id:'fi007', theme:'T2', avant:'Le carré magique de', trou:'Kaldor', apres:'réunit 4 objectifs : croissance, plein-emploi, stabilité des prix, équilibre extérieur.', indice:'économiste britannique', thematique:'Politiques économiques' },
  { id:'fi008', theme:'T2', avant:'Selon Musgrave, les 3 fonctions de l\'État sont : Allocation,', trou:'Redistribution', apres:'et Régulation.', indice:'réduire les inégalités', thematique:'Rôle de l\'État' },
  { id:'fi009', theme:'T2', avant:'Un CDD peut être renouvelé 2 fois dans la limite de', trou:'18 mois', apres:'au total.', indice:'un an et demi', thematique:'Contrat de travail' },
  { id:'fi010', theme:'T2', avant:'Une externalité', trou:'négative', apres:'est un coût supporté par un tiers non indemnisé, comme la pollution industrielle.', indice:'opposite de positive', thematique:'Défaillances' },
  // T3
  { id:'fi011', theme:'T3', avant:'La chaîne de valeur a été développée par Michael', trou:'Porter', apres:'. Elle distingue activités principales et activités de soutien.', indice:'célèbre stratège américain', thematique:'Chaîne de valeur' },
  { id:'fi012', theme:'T3', avant:'Les droits moraux d\'un auteur sont', trou:'perpétuels', apres:'et inaliénables. Les droits patrimoniaux durent 70 ans après sa mort.', indice:'sans limite de durée', thematique:'Propriété intellectuelle' },
  { id:'fi013', theme:'T3', avant:'La pyramide des besoins de', trou:'Maslow', apres:'comprend 5 niveaux, des besoins physiologiques à l\'accomplissement de soi.', indice:'psychologue humaniste américain', thematique:'Motivation' },
  { id:'fi014', theme:'T3', avant:'Un brevet est valable', trou:'20 ans', apres:'à compter du dépôt, sans possibilité de renouvellement.', indice:'deux décennies', thematique:'Propriété intellectuelle' },
  { id:'fi015', theme:'T3', avant:'La GPEC est obligatoire dans les entreprises de plus de', trou:'300 salariés', apres:'. Elle anticipe l\'évolution des compétences nécessaires.', indice:'trois cents', thematique:'GPEC' },
  // T4
  { id:'fi016', theme:'T4', avant:'Les', trou:'GAFAM', apres:'(Google, Apple, Facebook, Amazon, Microsoft) dominent l\'économie numérique grâce aux effets de réseau et au Big Data.', indice:'5 géants du web américain', thematique:'Innovation' },
  { id:'fi017', theme:'T4', avant:'Le RGPD impose aux entreprises concernées de nommer un', trou:'DPO', apres:'(Délégué à la Protection des Données).', indice:'3 initiales', thematique:'RGPD' },
  { id:'fi018', theme:'T4', avant:'L\'ubérisation désigne la disruption d\'un secteur par une', trou:'plateforme', apres:'mobile mettant en contact direct prestataires et clients.', indice:'marketplace mobile', thematique:'Numérique' },
  { id:'fi019', theme:'T4', avant:'Le délai de rétractation en e-commerce est de', trou:'14 jours', apres:'à compter de la réception du bien.', indice:'deux semaines', thematique:'E-commerce' },
  // T5
  { id:'fi020', theme:'T5', avant:'Le CSE est obligatoire dans les entreprises de', trou:'11 salariés', apres:'et plus.', indice:'onze', thematique:'Représentation' },
  { id:'fi021', theme:'T5', avant:'Le', trou:'DUER', apres:'(Document Unique d\'Évaluation des Risques) est obligatoire dans toutes les entreprises.', indice:'4 lettres', thematique:'Santé-sécurité' },
  { id:'fi022', theme:'T5', avant:'Le salarié peut exercer son droit de', trou:'retrait', apres:'en cas de danger grave et imminent, sans être sanctionné.', indice:'refus de travailler', thematique:'Santé-sécurité' },
  { id:'fi023', theme:'T5', avant:'Le principe de', trou:'faveur', apres:'impose d\'appliquer toujours la règle la plus avantageuse pour le salarié.', indice:'en faveur du salarié', thematique:'Négociation' },
  // T6
  { id:'fi024', theme:'T6', avant:'La CAF = Résultat Net +', trou:'Dotations aux amortissements', apres:'. Elle mesure la capacité d\'autofinancement.', indice:'charges non décaissées', thematique:'Financement' },
  { id:'fi025', theme:'T6', avant:'La Trésorerie Nette = FRNG −', trou:'BFR', apres:'(Besoin en Fonds de Roulement).', indice:'3 lettres', thematique:'Financement' },
  { id:'fi026', theme:'T6', avant:'Les 3 stratégies de Porter sont : domination par les coûts,', trou:'différenciation', apres:'et focalisation.', indice:'se distinguer', thematique:'Stratégies' },
  { id:'fi027', theme:'T6', avant:'Le ROE = Résultat Net /', trou:'Capitaux Propres', apres:'. Il mesure la rentabilité financière pour les actionnaires.', indice:'fonds apportés par les associés', thematique:'Performance' },
  { id:'fi028', theme:'T6', avant:'La RSE repose sur la triple bottom line : profit,', trou:'people', apres:'et planet.', indice:'personnes (social)', thematique:'RSE' },
];

// ====== MATCHING GAMES ======
window.CEJM_MATCH = [
  {
    id:'m1', theme:'T1', titre:'Agent → Fonction principale',
    paires:[
      { g:'Entreprises', d:'Production marchande' },
      { g:'Ménages', d:'Consommation et offre de travail' },
      { g:'Banques', d:'Intermédiation financière' },
      { g:'Administrations', d:'Production non marchande' },
      { g:'Reste du monde', d:'Échanges extérieurs' },
    ]
  },
  {
    id:'m2', theme:'T1', titre:'Structure juridique → Caractéristique clé',
    paires:[
      { g:'EI', d:'Personne physique — patrimoine pro protégé depuis 2022' },
      { g:'SARL', d:'1 à 100 associés, responsabilité limitée' },
      { g:'SAS', d:'Grande liberté statutaire, idéale pour les startups' },
      { g:'SA', d:'Peut être cotée en Bourse, capital min 37 000 €' },
    ]
  },
  {
    id:'m3', theme:'T2', titre:'Concept → Définition',
    paires:[
      { g:'Externalité négative', d:'Pollution industrielle sur les riverains' },
      { g:'Sélection adverse', d:'Mauvaise sélection avant la transaction (Akerlof)' },
      { g:'Risque moral', d:'Comportement opportuniste après la transaction' },
      { g:'Bien public pur', d:'Non rival + non exclusif (ex : éclairage public)' },
      { g:'Monopole', d:'Un seul offreur face à de nombreux acheteurs' },
    ]
  },
  {
    id:'m4', theme:'T3', titre:'Auteur → Apport clé',
    paires:[
      { g:'Maslow', d:'Pyramide des 5 besoins (physiologique → accomplissement)' },
      { g:'Herzberg', d:'Facteurs d\'hygiène vs facteurs de motivation' },
      { g:'Likert', d:'4 styles de direction (autoritaire → participatif)' },
      { g:'Mintzberg', d:'5 mécanismes de coordination organisationnelle' },
      { g:'Porter', d:'Chaîne de valeur + 5 forces + 3 stratégies génériques' },
    ]
  },
  {
    id:'m5', theme:'T4', titre:'Outil numérique → Fonction',
    paires:[
      { g:'ERP (PGI)', d:'Gestion intégrée de toutes les fonctions de l\'entreprise' },
      { g:'CRM', d:'Gestion de la relation client' },
      { g:'Big Data', d:'Analyse de données massives pour la décision' },
      { g:'RGPD', d:'Encadrement légal du traitement des données personnelles' },
      { g:'Marketplace', d:'Plateforme mettant en relation vendeurs et acheteurs' },
    ]
  },
  {
    id:'m6', theme:'T6', titre:'Stratégie → Exemple emblématique',
    paires:[
      { g:'Domination par les coûts', d:'Lidl, Primark, Ryanair' },
      { g:'Différenciation', d:'Apple, Louis Vuitton, Tesla' },
      { g:'Focalisation', d:'Rolex (luxe), Bonduelle (légumes)' },
      { g:'Croissance externe', d:'Rachat, fusion, filiale' },
      { g:'Croissance conjointe', d:'Alliance, franchise, partenariat' },
    ]
  },
];

// ====== ESSAY PROMPTS ======
window.CEJM_ESSAI = [
  { id:'e1', themes:['T1','T6'], q:'L\'entreprise doit-elle uniquement servir les intérêts de ses actionnaires ?', pistes:['Théorie de la valeur actionnariale (Friedman)', 'Théorie des parties prenantes (Freeman)', 'RSE et triple bottom line', 'Performance sociale vs performance financière'] },
  { id:'e2', themes:['T2'], q:'Le marché est-il toujours le meilleur mécanisme d\'allocation des ressources ?', pistes:['Conditions de la CPP rarement réunies', 'Défaillances du marché (externalités, asymétries)', 'Rôle correctif de l\'État (Musgrave, Keynes)', 'Exemples : pollution, santé, éducation'] },
  { id:'e3', themes:['T2','T5'], q:'Le recours aux formes de travail atypiques (CDD, intérim) est-il une chance ou une menace pour les salariés ?', pistes:['Flexibilité pour les entreprises vs précarité pour les salariés', 'Protection légale limitée du CDD', 'SMIC, droit de retrait, CSE', 'Dialogue social et conventions collectives'] },
  { id:'e4', themes:['T4'], q:'Le numérique menace-t-il ou crée-t-il de l\'emploi ?', pistes:['Ubérisation, désintermédiation', 'Destruction créatrice (Schumpeter)', 'GAFAM et nouveaux métiers', 'Reconversion et GPEC', 'IA et automatisation'] },
  { id:'e5', themes:['T6'], q:'Une stratégie de différenciation est-elle toujours plus rentable qu\'une stratégie de domination par les coûts ?', pistes:['Porter : pas de stratégie universellement supérieure', 'Dépend du secteur et des ressources de l\'entreprise', 'Risque d\'être "coincé au milieu"', 'Exemples : Apple vs Xiaomi'] },
  { id:'e6', themes:['T3','T5'], q:'La motivation des salariés est-elle uniquement une question de rémunération ?', pistes:['Pyramide de Maslow', 'Théorie bi-factorielle d\'Herzberg', 'Styles de direction (Likert)', 'Conditions de travail, sens du travail (Graeber)', 'GPEC et développement des compétences'] },
  { id:'e7', themes:['T4'], q:'La collecte des données personnelles par les entreprises est-elle compatible avec les libertés individuelles ?', pistes:['Big Data et modèle économique des GAFAM', 'RGPD : droits des personnes, DPO', '4 droits : accès, rectification, effacement, portabilité', 'Surveillance au travail (CSE)'] },
  { id:'e8', themes:['T1','T2'], q:'L\'État doit-il intervenir dans l\'économie ou laisser le marché fonctionner librement ?', pistes:['Libéralisme (Adam Smith, Say) vs Keynésianisme', 'Fonctions de l\'État (Musgrave)', 'Défaillances du marché', 'Politiques conjoncturelles et structurelles'] },
];
