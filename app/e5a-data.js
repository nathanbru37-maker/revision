// E5A — BTS NDRC · Relation Client à Distance et Digitalisation
window.E5A_COMP = [
  // ══════════════════════════════════════════
  //  COMPÉTENCE 1 — Relation client omnicanale
  // ══════════════════════════════════════════
  {
    id:'C1', num:1,
    titre:'Maîtriser la relation client omnicanale',
    icon:'📞',
    color:{ bg:'#F0FDFA', solid:'#0D9488', ink:'#134E4A', soft:'#CCFBF1', text:'#fff' },
    blocs:[
      {
        id:'B1', num:1, titre:'Le Centre de Relation Client (CRC)',
        points:[
          { titre:'Définition et rôle du CRC', contenu:"Le <b>CRC (Centre de Relation Client)</b> est une structure dédiée à la gestion de toutes les interactions entre l'entreprise et ses clients ou prospects, quel que soit le canal utilisé. Il ne faut pas le confondre avec un simple \"service client\" : le CRC intègre les fonctions de télémarketing, de SAV, de fidélisation et de communication digitale. Il est le cœur de la relation client à distance (RCD).", memo:'CRC ≠ simple hotline — c\'est le hub central de TOUTE la relation client' },
          { titre:'Organisation d\'un CRC (plateau téléphonique)', contenu:"Un CRC s'organise autour d'un <b>plateau téléphonique</b> composé de téléacteurs (chargés des appels), de superviseurs (pilotage en temps réel), et d'un responsable de centre. Les équipes peuvent être spécialisées par type de demande (appels entrants, sortants, e-mails, chat). Les outils clés : <b>ACD</b> (Automatic Call Distribution — distribue les appels), <b>CTI</b> (Couplage Téléphonie-Informatique — lie la fiche client à l'appel), <b>SVI</b> (Serveur Vocal Interactif).", memo:'ACD (distribue) + CTI (lie fiche) + SVI (orientation auto) = les 3 outils du plateau' },
          { titre:'CRC internalisé vs externalisé', contenu:"<b>CRC internalisé</b> : géré en interne par l'entreprise. Avantages : meilleure maîtrise de la qualité, cohérence avec la culture d'entreprise, confidentialité. <b>CRC externalisé</b> (outsourcing) : confié à un prestataire spécialisé (ex : Teleperformance). Avantages : coûts réduits, flexibilité, expertise. Inconvénients : perte de contrôle, risque de perte de connaissance client, fidélité réduite.", memo:'Internalisé = contrôle | Externalisé = flexibilité et coûts réduits' },
          { titre:'Canaux de la Relation Client à Distance (RCD)', contenu:"La RCD utilise de multiples canaux : <b>téléphone</b> (canal historique, taux de résolution élevé), <b>e-mail</b> (traçable, asynchrone), <b>chat en ligne</b> (temps réel, peu intrusif), <b>visioconférence</b> (humanise la relation à distance, recommandée pour les sujets complexes), <b>SMS/MMS</b>, <b>réseaux sociaux</b> et applications mobiles. Chaque canal a ses propres codes de communication et indicateurs de performance.", memo:'Tel + Email + Chat + Visio + SMS + RS = les 6 canaux de la RCD' },
          { titre:'Stratégie omnicanale vs multicanale', contenu:"<b>Multicanal</b> : l'entreprise est présente sur plusieurs canaux, mais ils fonctionnent en silos (pas de continuité entre eux). <b>Omnicanal</b> : tous les canaux sont <b>interconnectés</b> et synchronisés — le client peut commencer une demande par email et la poursuivre par téléphone sans répéter son problème. L'omnicanal offre une expérience client fluide et cohérente, quelle que soit l'entrée. C'est la stratégie cible en BTS NDRC.", memo:'Multi = canaux séparés | Omni = canaux connectés et synchronisés' },
          { titre:'CRM — définition et utilisation', contenu:"Le <b>CRM (Customer Relationship Management)</b> est un logiciel centralisé qui stocke toutes les interactions avec les clients (historique des achats, réclamations, préférences, contacts). Il permet la <b>personnalisation</b>, la <b>segmentation</b>, le <b>suivi des relances</b> et l'automatisation des tâches. Exemples : HubSpot, Salesforce, Pipedrive. Sans CRM, une stratégie omnicanale est impossible.", memo:'CRM = mémoire de l\'entreprise sur chaque client. Indispensable pour l\'omnicanal.' },
          { titre:'Script d\'appel et charte relationnelle', contenu:"Le <b>script d'appel</b> est un guide structuré (non figé) que suit le téléacteur : introduction → identification → découverte du besoin → réponse/proposition → conclusion. La <b>charte relationnelle</b> définit le ton, le vocabulaire, les formules de politesse et les engagements de l'entreprise envers ses clients (délais de réponse, formules interdites…). Elle garantit la cohérence de l'image de marque sur tous les canaux.", memo:'Script = guide d\'entretien | Charte = cadre de la relation (ton, mots, engagements)' },
        ]
      },
      {
        id:'B2', num:2, titre:'Traitement des demandes et réclamations',
        points:[
          { titre:'Appels entrants vs appels sortants', contenu:"<b>Appels entrants (inbound)</b> : initiés par le client (demande d'info, SAV, réclamation). Objectif : résoudre rapidement et satisfaire. Indicateur clé : <b>FCR</b> (First Call Resolution). <b>Appels sortants (outbound)</b> : initiés par l'entreprise (prospection, relance, enquêtes de satisfaction, recouvrement). Objectif : créer une opportunité ou maintenir le lien. Indicateur clé : <b>taux de contact</b> et <b>taux de transformation</b>.", memo:'Entrant = client appelle | Sortant = entreprise appelle' },
          { titre:'Technique CROC', contenu:"La technique <b>CROC</b> structure les appels sortants en 4 étapes : <b>C</b>ontact (se présenter, identifier l'interlocuteur), <b>R</b>aison (expliquer l'objet de l'appel en une phrase), <b>O</b>bjectif (dérouler la proposition, découvrir le besoin), <b>C</b>onclusion (reformuler l'accord, fixer les prochaines étapes ou prendre congé). C'est le cadre de référence pour tout appel professionnel sortant.", memo:'C-R-O-C : Contact → Raison → Objectif → Conclusion' },
          { titre:'Écoute active à distance', contenu:"À distance, <b>l'écoute active</b> compense l'absence de langage non-verbal. Techniques : <b>reformulation</b> (« Si je comprends bien… »), <b>silences bienveillants</b> (laisser le client s'exprimer), <b>questions ouvertes</b> (« Qu'est-ce qui vous a conduit à nous contacter ? »), <b>signaux verbaux</b> (« Je comprends », « Tout à fait »). Elle permet de cerner le besoin réel, souvent différent du besoin exprimé.", memo:'Écoute active = reformulation + silence + questions ouvertes + signaux verbaux' },
          { titre:'Traitement des réclamations et litiges', contenu:"Une réclamation bien traitée fidélise davantage qu'une vente sans problème. Processus en 5 étapes : <b>1</b> Accueillir (calmer, écouter sans interrompre) → <b>2</b> Reformuler (montrer qu'on a compris) → <b>3</b> Traiter (proposer une solution concrète) → <b>4</b> Conclure (obtenir l'accord du client) → <b>5</b> Assurer le suivi (relance, vérification de satisfaction). Toute réclamation doit être tracée dans le CRM.", memo:'Réclamation bien gérée = client fidélisé. Accueil → Reformulation → Solution → Accord → Suivi' },
          { titre:'Gestion des objections à distance', contenu:"Les objections sont des freins exprimés par le client. Méthode en 3 temps : <b>Accuser réception</b> (ne jamais contredire frontalement), <b>Reformuler</b> (transformer l'objection en question), <b>Argumenter</b> (répondre avec un argument adapté). Objections courantes : « C'est trop cher » → valoriser le ROI / « J'ai déjà un fournisseur » → différencier. En sortant, anticiper les objections dans le script.", memo:'Accuser réception → Reformuler → Argumenter = les 3 temps de l\'objection' },
          { titre:'Rédaction d\'e-mails professionnels', contenu:"Un email professionnel suit une structure précise : <b>objet clair et précis</b> (ex : « Suite à votre demande du 12/05 — Dossier n°456 »), <b>formule d'appel</b>, <b>contexte en 1-2 phrases</b>, <b>corps du message</b> (paragraphes courts, une idée par paragraphe), <b>appel à l'action</b> (« Merci de me confirmer… »), <b>formule de politesse</b> et <b>signature complète</b>. Délai de réponse : 24h maximum en B2C, 48h en B2B.", memo:'Objet → Appel → Contexte → Corps → Action → Politesse → Signature' },
          { titre:'RGPD et traitement des données clients', contenu:"Le <b>RGPD</b> s'applique à toutes les données clients collectées par le CRC. Obligations : collecter uniquement les données nécessaires (<b>minimisation</b>), informer le client de leur utilisation (<b>transparence</b>), obtenir le <b>consentement</b> (opt-in explicite pour le marketing), permettre la <b>portabilité</b> et le <b>droit à l'oubli</b>. Toute prospection téléphonique doit vérifier le fichier <b>Bloctel</b> (opposition des particuliers aux appels commerciaux).", memo:'RGPD CRC : minimisation + consentement + Bloctel + droit à l\'oubli' },
          { titre:'Consentement opt-in / opt-out', contenu:"<b>Opt-in</b> : le client doit <b>accepter activement</b> de recevoir des communications (case à cocher non pré-cochée). Obligatoire pour les emails et SMS marketing (RGPD). <b>Opt-out</b> : le client peut refuser à tout moment (lien de désinscription obligatoire en bas de chaque email). <b>Double opt-in</b> : confirmation de l'inscription par email = meilleure pratique, liste plus qualifiée. En B2B, l'opt-out suffit si le message concerne l'activité professionnelle.", memo:'Opt-in = j\'accepte | Opt-out = je refuse. Double opt-in = confirmation email.' },
        ]
      },
      {
        id:'B3', num:3, titre:'Indicateurs de performance (KPIs)',
        points:[
          { titre:'Taux de décroché et taux d\'abandon', contenu:"<b>Taux de décroché</b> = (Appels décrochés / Appels reçus) × 100. Objectif minimum : 80 % des appels décrochés en moins de 20 secondes. <b>Taux d'abandon</b> = (Appels abandonnés avant décroché / Appels reçus) × 100. Un taux d'abandon > 5 % signale un sous-effectif ou un problème d'organisation. Ces deux KPIs mesurent l'<b>accessibilité</b> du CRC.", memo:'Décroché > 80 % | Abandon < 5 % = seuils de référence' },
          { titre:'DMT — Durée Moyenne de Traitement', contenu:"<b>DMT</b> (ou AHT — Average Handling Time) = temps d'appel + temps post-appel (mise à jour CRM, saisie). Se calcule : Temps total de traitement / Nombre d'appels traités. Une DMT trop longue = inefficacité ou manque de formation. Une DMT trop courte = qualité insuffisante. La DMT cible dépend de la complexité des demandes traitées (ex : 3 min pour un SAV simple, 8 min pour un litige).", memo:'DMT = temps appel + temps post-appel. Ni trop long ni trop court.' },
          { titre:'FCR — First Call Resolution', contenu:"<b>FCR</b> (Résolution au premier contact) = (Demandes résolues dès le 1er contact / Total des demandes) × 100. Indicateur clé de qualité : un FCR élevé (> 70 %) réduit les coûts (moins de rappels), améliore la satisfaction client et libère du temps téléacteur. Se mesure via enquête post-appel (« Votre problème a-t-il été résolu en un seul contact ? ») ou suivi CRM.", memo:'FCR > 70 % = excellente résolution. Chaque rappel inutile coûte cher.' },
          { titre:'NPS, CSAT et CES', contenu:"<b>NPS (Net Promoter Score)</b> = % Promoteurs (notes 9-10) − % Détracteurs (notes 0-6). Mesure la <b>fidélité et la recommandation</b>. Interprétation : > 0 correct, > 50 excellent. <b>CSAT (Customer Satisfaction Score)</b> = % clients satisfaits (notes 4-5/5). Mesure la satisfaction <b>immédiate</b> après une interaction. <b>CES (Customer Effort Score)</b> mesure la facilité de résolution — prédit mieux la rétention que le CSAT.", memo:'NPS = fidélité long terme | CSAT = satisfaction immédiate | CES = effort ressenti' },
          { titre:'Scoring RFM', contenu:"Le <b>scoring RFM</b> évalue chaque client sur 3 critères : <b>R</b>écence (depuis quand n'a-t-il pas acheté ?), <b>F</b>réquence (combien d'achats sur la période ?), <b>M</b>ontant (chiffre d'affaires généré). Chaque critère reçoit une note (1 à 5). Un client avec score élevé (ex : R5-F5-M5) est un client VIP à fidéliser. Un client R1 est à risque de churn — à recontacter en priorité.", memo:'RFM : Récence + Fréquence + Montant → identifier les meilleurs clients et les à-risque' },
          { titre:'Tableaux de bord et reporting', contenu:"Un <b>tableau de bord</b> centralise les KPIs clés en temps réel pour piloter l'activité du CRC (ex : appels en cours, temps d'attente, DMT, taux de décroché). Le <b>reporting</b> est une synthèse périodique (hebdo/mensuelle) destinée au management. Il doit être <b>SMART</b> : indicateurs clairs, comparés aux objectifs, avec analyse des écarts et plan d'action correctif.", memo:'Tableau de bord = temps réel | Reporting = synthèse périodique + analyse écarts' },
        ]
      },
      {
        id:'B5', num:5, titre:'Recrutement et management d\'équipe',
        points:[
          { titre:'Fiche de poste téléacteur', contenu:"La <b>fiche de poste</b> décrit : l'intitulé du poste, le service et le responsable hiérarchique, les <b>missions principales</b> (traitement des appels entrants/sortants, saisie CRM, respect des scripts…), les <b>compétences requises</b> (aisance téléphonique, maîtrise du CRM, gestion du stress), le niveau de formation souhaité et les conditions (horaires, rémunération, lieu). Elle sert de base à l'offre d'emploi et aux entretiens.", memo:'Fiche de poste = missions + compétences + conditions. Base de tout recrutement.' },
          { titre:'Processus de recrutement', contenu:"Étapes : <b>1</b> Analyse du besoin (remplacement, création de poste) → <b>2</b> Rédaction fiche de poste → <b>3</b> Diffusion offre (Indeed, Pôle Emploi, LinkedIn, APEC) → <b>4</b> Tri des CV → <b>5</b> Entretiens (téléphonique de présélection + en face-à-face ou visio) → <b>6</b> Tests (jeux de rôle, mise en situation téléphonique) → <b>7</b> Sélection et proposition → <b>8</b> Intégration. Le secteur CRC a un turnover de 40-50 % : le recrutement doit être rigoureux.", memo:'8 étapes : Besoin → Fiche → Offre → Tri → Entretiens → Tests → Sélection → Intégration' },
          { titre:'Intégration (onboarding)', contenu:"L'<b>onboarding</b> est la période d'intégration du nouveau téléacteur : accueil, présentation de l'équipe et des outils (CRM, ACD), formation aux scripts et procédures, période de double-écoute (écoute les appels d'un collègue expérimenté), puis écoute supervisée. Un bon onboarding réduit le turnover et raccourcit la montée en compétences. Durée standard : 1 à 4 semaines selon la complexité du poste.", memo:'Onboarding : accueil → formation → double-écoute → autonomie supervisée' },
          { titre:'Plan de formation (AFEST, e-learning)', contenu:"<b>AFEST</b> (Action de Formation En Situation de Travail) : formation directement sur le poste, en conditions réelles, avec un tuteur. <b>E-learning</b> : formation en ligne, asynchrone, idéale pour les équipes à distance. <b>Plan de formation</b> : inventaire des besoins → choix du dispositif → budget → calendrier → évaluation. Les téléacteurs ont besoin de formations régulières (mise à jour scripts, nouveaux outils, gestion du stress).", memo:'AFEST = formation sur le tas | E-learning = à distance asynchrone' },
          { titre:'Management et motivation des téléacteurs', contenu:"Le management d'une équipe CRC doit combiner : <b>objectifs clairs et atteignables</b> (SMART), <b>outils de suivi en temps réel</b> (wallboard), <b>feedback régulier</b> (entretiens individuels, double-écoute), <b>reconnaissance</b> (challenges, primes sur objectifs), <b>cohésion d'équipe</b> (réunions courtes, rituels d'équipe). À distance (télétravail) : renforcer les rituels virtuels, outils collaboratifs (Teams, Slack), communication proactive.", memo:'Manager CRC : objectifs SMART + suivi + feedback + reconnaissance + cohésion' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════
  //  COMPÉTENCE 2 — Relation client digitale
  // ══════════════════════════════════════════
  {
    id:'C2', num:2,
    titre:'Animer la relation client digitale',
    icon:'📱',
    color:{ bg:'#F5F3FF', solid:'#7C3AED', ink:'#4C1D95', soft:'#DDD6FE', text:'#fff' },
    blocs:[
      {
        id:'B4', num:4, titre:'Médias et réseaux sociaux',
        points:[
          { titre:'Usages professionnels des réseaux sociaux', contenu:"Chaque plateforme a ses codes et son audience cible. <b>LinkedIn</b> : réseau B2B, contenu professionnel, idéal pour la prospection et le personal branding. <b>Instagram</b> : visuel, storytelling, cible 18-35 ans, B2C. <b>Facebook</b> : large audience, publicité ciblée, communautés/groupes. <b>TikTok</b> : vidéos courtes, GenZ, viral, format natif (UGC). <b>YouTube</b> : tutoriels, longform, référencement. En entreprise, chaque canal doit être choisi en fonction de la cible, de l'objectif et des ressources disponibles.", memo:'LinkedIn = B2B | Instagram = visuel B2C | TikTok = GenZ viral | Facebook = communauté' },
          { titre:'Community management', contenu:"Le <b>community manager</b> anime et gère les communautés en ligne autour d'une marque. Sa règle d'or : <b>30 % création de contenu, 70 % interaction</b> (réponses, likes, partages, conversations). Missions : publier selon le calendrier éditorial, répondre aux commentaires et messages, modérer, gérer les crises, faire la veille concurrentielle, mesurer les performances (engagement, portée, impressions).", memo:'CM = 30 % création + 70 % interaction. Toujours répondre aux abonnés.' },
          { titre:'E-réputation', contenu:"L'<b>e-réputation</b> est l'image de marque numérique d'une entreprise, construite par ses propres contenus ET par ce que disent les autres (avis Google, Trustpilot, forums, réseaux sociaux, articles de presse). Elle se surveille via des outils de veille (Google Alerts, Mention, Talkwalker). Une e-réputation négative peut déstabiliser tout un CRC (baisse des appels entrants de qualité, hausse des réclamations).", memo:'E-réputation = tout ce que dit le web sur toi — y compris ce que TU ne contrôles pas' },
          { titre:'Gestion des avis négatifs', contenu:"Règle : répondre à <b>tous</b> les avis (positifs et négatifs), rapidement (< 24h). Face à un avis négatif : <b>remercier</b> pour le retour, <b>s'excuser</b> si justifié, <b>expliquer</b> brièvement, <b>proposer une solution</b> hors ligne (email ou téléphone). Ne jamais : se défendre agressivement, ignorer, supprimer sans raison. Ne jamais acheter de faux avis (risque légal + perte de crédibilité quand découvert).", memo:'Avis négatif : Remercier → S\'excuser → Expliquer → Proposer solution offline' },
          { titre:'Calendrier éditorial', contenu:"Le <b>calendrier éditorial</b> planifie les publications : date, heure, plateforme, type de contenu (photo, vidéo, story, reel, article…), thème, objectif et KPI associé. Il garantit la régularité (algorithmes favorisent la constance) et la cohérence de la stratégie de contenu. Il doit prévoir des temps forts (fêtes, temps forts du secteur) et laisser de la place pour le contenu réactif (actualité, UGC).", memo:'Calendrier éditorial = régularité + cohérence + anticipation des temps forts' },
          { titre:'Stratégie de contenu et marketing d\'influence', contenu:"Le <b>content marketing</b> consiste à créer et diffuser du contenu utile, informatif ou divertissant pour attirer et fidéliser une audience sans vendre directement. <b>Marketing d'influence</b> : collaboration avec des créateurs de contenu (influenceurs) dont l'audience correspond à la cible. Types : nano (< 10 K), micro (10-100 K), macro (> 100 K). Avantage : authenticité perçue. Risque : mauvais alignement des valeurs.", memo:'Content marketing = attirer sans vendre | Influence = crédibilité via un tiers' },
          { titre:'Veille concurrentielle digitale', contenu:"La <b>veille concurrentielle</b> surveille les actions digitales des concurrents : leur contenu publié, leurs publicités, leur positionnement SEO, leurs offres, leurs avis clients. Outils : <b>Google Alerts</b> (surveillance des mentions), <b>SimilarWeb</b> (trafic web), <b>Facebook Ad Library</b> (publicités des concurrents), <b>SEMrush</b> (mots-clés). Elle permet d'ajuster sa stratégie et d'anticiper les évolutions du marché.", memo:'Veille = surveiller les concurrents pour adapter sa stratégie. Outils : Alerts, SimilarWeb, SEMrush' },
        ]
      },
      {
        id:'B6', num:6, titre:'Communication digitale',
        points:[
          { titre:'Méthode AIDA', contenu:"<b>AIDA</b> est le modèle de base de toute communication persuasive : <b>A</b>ttention (capter le regard avec un visuel ou accroche fort), <b>I</b>ntérêt (montrer que le message est pertinent pour la cible), <b>D</b>ésir (faire naître l'envie, valoriser les bénéfices), <b>A</b>ction (appel à l'action clair : « Découvrez », « Inscrivez-vous », « Commandez »). S'applique aux emails, pubs, landing pages, posts, scripts téléphoniques.", memo:'AIDA : Attention → Intérêt → Désir → Action = cadre de toute communication persuasive' },
          { titre:'Inbound vs outbound marketing', contenu:"<b>Outbound (push)</b> : l'entreprise va chercher les clients — publicité, prospection téléphonique, cold email, affichage. Inconvénient : intrusif, coûteux, efficacité en baisse. <b>Inbound (pull)</b> : les clients viennent à l'entreprise grâce à du contenu utile — SEO, blog, réseaux sociaux, podcast, vidéos. Avantage : confiance, coût par lead plus faible sur le long terme, leads plus qualifiés. Stratégie optimale : inbound pour construire + outbound pour accélérer.", memo:'Outbound = aller chercher le client | Inbound = faire venir le client. Les deux se complètent.' },
          { titre:'Email marketing et newsletters', contenu:"L'<b>email marketing</b> a le meilleur ROI de tous les canaux digitaux (42 € pour 1 € investi). Clés du succès : <b>segmentation</b> de la liste (pas d'envoi massif non ciblé), <b>personnalisation</b> (prénom, offre adaptée), <b>objet percutant</b> (A/B test), <b>call-to-action visible</b>, <b>lien de désinscription</b> obligatoire (RGPD). KPIs : taux d'ouverture (objectif > 20 %), taux de clic (objectif > 3 %), taux de désinscription.", memo:'Email = meilleur ROI digital. Segmentation + Personnalisation + Objet percutant = clés du succès' },
          { titre:'SEA et publicité en ligne', contenu:"<b>SEA (Search Engine Advertising)</b> : publicités payantes sur les moteurs de recherche (Google Ads). Apparaissent en haut des résultats — visibilité immédiate. Coût : CPC (Coût Par Clic). <b>Display</b> : bannières visuelles sur des sites partenaires (ciblage par centres d'intérêt, retargeting). <b>Social Ads</b> : publicités sur les réseaux sociaux (Facebook Ads, LinkedIn Ads). Avantage SEA : résultats rapides. Inconvénient : arrêt = disparition. À combiner avec le SEO.", memo:'SEA = payant + immédiat | SEO = gratuit + long terme. CTR = Clics / Affichages × 100' },
          { titre:'Marketing automation', contenu:"Le <b>marketing automation</b> automatise les envois en fonction du comportement de l'utilisateur. Exemples : email de bienvenue automatique à l'inscription, relance après abandon de panier, séquence de nurturing pour les leads, email d'anniversaire, relance après inactivité. Outils : Brevo (Sendinblue), HubSpot, Mailchimp. Avantage : communication personnalisée à grande échelle, sans effort manuel.", memo:'Automation = bon message + bonne personne + bon moment, automatiquement' },
          { titre:'Charte éditoriale et content marketing', contenu:"La <b>charte éditoriale</b> définit la voix de marque : ton (formel, proche, humoristique…), thèmes abordés, formules autorisées et interdites, fréquence de publication, hashtags officiels. Le <b>content marketing</b> inclut : <b>blog</b> (SEO, expertise), <b>podcast</b> (fidélité, intimité), <b>vidéo</b> (engagement élevé, reach viral). Ces formats attirent sans prospecter — ils positionnent l'entreprise comme <b>experte</b> dans son domaine.", memo:'Charte éditoriale = ADN éditorial de la marque. Blog + Podcast + Vidéo = piliers du content' },
          { titre:'RGPD et communication (opt-in, cookies)', contenu:"En communication digitale, le RGPD impose : <b>opt-in explicite</b> avant tout envoi email marketing (case non pré-cochée), <b>lien de désinscription</b> dans chaque email, <b>bandeau cookies</b> conforme sur chaque site (consentement avant dépôt de cookies non essentiels), politique de confidentialité accessible. Les <b>cookies</b> trackers (pub, analytics) nécessitent le consentement. Les cookies fonctionnels sont exemptés.", memo:'RGPD digital : opt-in email + bandeau cookies + désinscription facile' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════
  //  COMPÉTENCE 3 — E-commerce
  // ══════════════════════════════════════════
  {
    id:'C3', num:3,
    titre:'Développer la relation client en e-commerce',
    icon:'🛒',
    color:{ bg:'#FFF7ED', solid:'#EA580C', ink:'#7C2D12', soft:'#FED7AA', text:'#fff' },
    blocs:[
      {
        id:'B7', num:7, titre:'Site internet et référencement',
        points:[
          { titre:'Architecture d\'un site web', contenu:"L'<b>arborescence</b> d'un site est sa structure hiérarchique (pages, sous-pages). Une bonne architecture respecte la règle des <b>3 clics</b> (accéder à n'importe quelle information en 3 clics max), facilite le crawl par Google et améliore l'expérience utilisateur. Types de sites : <b>vitrine</b> (présentation de l'entreprise), <b>e-commerce</b> (vente en ligne), <b>blog</b>, <b>plateforme</b>. CMS populaires : WordPress, PrestaShop (e-commerce).", memo:'Arborescence = structure du site. Règle des 3 clics = accessibilité maximale.' },
          { titre:'SEO — référencement naturel', contenu:"Le <b>SEO (Search Engine Optimization)</b> améliore le positionnement d'un site dans les résultats de recherche <b>organiques</b> (non payants). Trois piliers : <b>technique</b> (vitesse, responsive, HTTPS, sitemap), <b>contenu</b> (textes riches en mots-clés pertinents, balises correctement renseignées), <b>popularité</b> (backlinks de qualité via le netlinking). Le SEO est un investissement long terme : résultats en 3 à 6 mois.", memo:'SEO = Technique + Contenu + Popularité. Long terme, gratuit, durable.' },
          { titre:'Balises SEO : Hn, méta-titre, méta-description', contenu:"<b>Balises Hn</b> (H1, H2, H3…) : structurent le contenu de la page. Le <b>H1</b> (un seul par page) indique le sujet principal à Google. Les H2/H3 organisent les sous-parties. <b>Méta-titre</b> (title tag) : texte affiché dans l'onglet du navigateur et dans les résultats Google. Max 60 caractères. <b>Méta-description</b> : résumé cliquable sous le titre dans Google. Max 160 caractères. Ces balises sont fondamentales pour le SEO.", memo:'H1 = sujet principal | Méta-titre = 60 car. | Méta-description = 160 car.' },
          { titre:'Mots-clés et netlinking', contenu:"Les <b>mots-clés</b> sont les requêtes saisies par les internautes. Stratégie : cibler des mots-clés <b>longue traîne</b> (ex : « chaussures de randonnée femme imperméable ») plutôt que des mots génériques (« chaussures ») — moins de concurrence, plus qualifiés. Le <b>netlinking</b> (link building) consiste à obtenir des <b>backlinks</b> (liens entrants) depuis d'autres sites de qualité — signal fort pour Google. Outil : SEMrush, Ahrefs.", memo:'Longue traîne = moins concurrence + plus qualifié | Netlinking = backlinks de qualité' },
          { titre:'UX et ergonomie d\'un site', contenu:"L'<b>UX (User Experience)</b> désigne la qualité de l'expérience vécue par l'utilisateur sur un site. Critères : <b>lisibilité</b> (typographie, contraste), <b>navigation intuitive</b> (menus clairs, fil d'Ariane), <b>rapidité de chargement</b> (< 3 secondes), <b>responsive design</b> (adapté mobile), <b>accessibilité</b> (WCAG — normes pour les personnes handicapées). Un site ergonomique réduit le taux de rebond et augmente le taux de conversion.", memo:'UX = lisibilité + navigation + vitesse + mobile + accessibilité' },
          { titre:'Google Analytics et KPIs de trafic', contenu:"<b>Google Analytics</b> (ou GA4) mesure le trafic et le comportement des visiteurs. KPIs clés : <b>Sessions</b> (visites), <b>Utilisateurs uniques</b>, <b>Taux de rebond</b> (% visiteurs qui quittent après une seule page — objectif < 40 %), <b>Durée moyenne de session</b>, <b>Pages par session</b>, <b>Sources de trafic</b> (organique, direct, social, payant). Ces données guident les décisions d'optimisation.", memo:'GA4 : Sessions + Rebond (<40%) + Durée + Sources. Taux de rebond = 1 page / Total visites × 100' },
          { titre:'Charte graphique et responsive design', contenu:"La <b>charte graphique</b> définit l'identité visuelle numérique : palette de couleurs (max 3 couleurs), typographies (max 2 polices), logo et ses déclinaisons, iconographie et styles d'image. Elle garantit la cohérence visuelle sur tous les supports. Le <b>responsive design</b> adapte automatiquement l'affichage à tous les écrans (mobile, tablette, desktop). Depuis 2019, Google indexe d'abord la version mobile (Mobile First Index).", memo:'Charte graphique = cohérence visuelle | Responsive = adaptatif tous écrans. Mobile First!' },
        ]
      },
      {
        id:'B8', num:8, titre:'E-commerce : vente et fidélisation en ligne',
        points:[
          { titre:'Fonctionnement d\'un site e-commerce', contenu:"Un site e-commerce permet de <b>vendre en ligne</b> via un catalogue produits, un panier, un tunnel de paiement sécurisé et un système de gestion des commandes. Il repose sur un <b>CMS e-commerce</b> (PrestaShop, Shopify, WooCommerce). Le back-office gère le stock, les commandes, les retours et la relation client. La performance se mesure par le <b>taux de conversion</b>.", memo:'E-commerce = catalogue + panier + paiement sécurisé + back-office commandes' },
          { titre:'Fiche produit optimisée', contenu:"Une <b>fiche produit</b> efficace contient : <b>titre SEO</b> (mot-clé principal + descriptif), <b>photos HD</b> multiples (plusieurs angles, zoom, mise en situation), <b>description complète</b> (bénéfices + caractéristiques techniques), <b>prix clair</b>, <b>disponibilité stock</b>, <b>appel à l'action</b> (bouton « Ajouter au panier »), <b>avis clients</b> (augmentent la conversion de 30 %), <b>produits associés</b> (cross-selling). La fiche produit est le cœur du SEO e-commerce.", memo:'Fiche produit : titre SEO + photos HD + description + avis + CTA + cross-sell' },
          { titre:'Tunnel de conversion', contenu:"Le <b>tunnel de conversion</b> (ou entonnoir) représente les étapes du parcours d'achat : <b>Visite</b> → <b>Consultation produit</b> → <b>Ajout au panier</b> → <b>Paiement</b> → <b>Confirmation</b>. À chaque étape des utilisateurs abandonnent. Objectif : identifier les points de friction et les optimiser. Le <b>taux d'abandon de panier</b> moyen est de 70 % — il est réductible par les emails de relance automatiques.", memo:'Visite → Produit → Panier → Paiement → Confirmation. Abandon moyen = 70 %' },
          { titre:'Paiement en ligne et sécurité', contenu:"Le paiement en ligne doit être <b>sécurisé</b> : protocole <b>HTTPS/SSL</b> (cadenas dans l'URL), <b>3D Secure</b> (authentification à 2 facteurs), conformité <b>PCI-DSS</b> (norme de sécurité des données de paiement). Options : carte bancaire, PayPal, virement, paiement en plusieurs fois. Afficher les logos de sécurité et les moyens de paiement acceptés <b>avant</b> l'étape de paiement rassure le client et réduit l'abandon.", memo:'HTTPS + 3D Secure + PCI-DSS = sécurité paiement. Afficher logos de confiance.' },
          { titre:'Logistique e-commerce et gestion des retours', contenu:"La <b>logistique</b> couvre : stockage (entrepôt propre ou dropshipping), préparation des commandes, choix des transporteurs (Colissimo, Chronopost, UPS, Mondial Relay), délais annoncés et tenus, suivi de colis (email automatique). La <b>gestion des retours</b> (reverse logistics) est cruciale : politique de retour claire et gratuite = facteur de conversion (70 % des acheteurs lisent la politique de retour avant d'acheter).", memo:'Logistique : stock + prépa + transporteur + suivi. Retour gratuit = facteur de conversion.' },
          { titre:'RGPD e-commerce : CGV, mentions légales, cookies', contenu:"Un site e-commerce doit obligatoirement afficher : <b>CGV</b> (Conditions Générales de Vente) claires et accessibles, <b>mentions légales</b> (identité de l'entreprise, SIRET, responsable de publication), <b>politique de confidentialité</b> (traitement des données), <b>bandeau cookies</b> conforme. Le <b>droit de rétractation</b> de 14 jours doit être clairement mentionné. Sans CGV, les transactions ne sont pas juridiquement protégées.", memo:'CGV + Mentions légales + Confidentialité + Cookies + Rétractation 14j = obligations légales' },
          { titre:'KPIs e-commerce', contenu:"Indicateurs essentiels : <b>Taux de conversion</b> = Ventes / Visiteurs × 100 (objectif e-commerce : 2-4 %). <b>Panier moyen</b> = CA / Nb commandes. <b>CAC</b> (Coût d'Acquisition Client) = Dépenses marketing / Nouveaux clients. <b>CLV</b> (Customer Lifetime Value) = Panier moyen × Fréquence × Durée relation − Coûts. <b>Taux d'abandon panier</b> = Paniers abandonnés / Paniers créés × 100. <b>Churn</b> = Clients perdus / Total clients × 100.", memo:'Conversion = Ventes/Visiteurs×100 | CAC = Budget/Nouveaux clients | CLV = valeur vie client' },
          { titre:'Fidélisation en ligne', contenu:"Fidéliser coûte 5 à 7 fois moins cher qu'acquérir. Leviers : <b>programme de fidélité</b> (points, statuts VIP, récompenses), <b>email marketing personnalisé</b> (relances, offres anniversaire), <b>retargeting</b> (publicités ciblant les visiteurs qui n'ont pas acheté — via cookies ou liste email), <b>communauté de marque</b> (espace clients, forum, événements), <b>SAV de qualité</b> (résolution rapide = meilleur vecteur de fidélité). Objectif : transformer l'acheteur occasionnel en ambassadeur.", memo:'Fidélisation < 5-7× acquisition. Fidélité = programme + email + retargeting + SAV excellent' },
        ]
      },
    ]
  },

  // ══════════════════════════════════════════
  //  MÉTHODOLOGIE DE L'ÉPREUVE E5A
  // ══════════════════════════════════════════
  {
    id:'CM', num:4,
    titre:'Méthodologie de l\'épreuve E5A',
    icon:'📋',
    color:{ bg:'#F8FAFC', solid:'#334155', ink:'#0F172A', soft:'#E2E8F0', text:'#fff' },
    blocs:[
      {
        id:'BM', num:0, titre:'Méthode et stratégie d\'examen',
        points:[
          { titre:'Structure de l\'épreuve (3h)', contenu:"L'épreuve E5A dure <b>3 heures</b> et est composée de 3 dossiers : <b>Dossier 1</b> — Questions de compréhension sur la relation client à distance (analyse de documents, cas pratiques). <b>Dossier 2</b> — Questions appliquées sur les outils digitaux, les indicateurs ou la communication (souvent des calculs de KPIs). <b>Dossier 3</b> — Question d'argumentation (~50 % de la note) : problématique professionnelle à développer avec une intro, 2-3 arguments illustrés, une conclusion opérationnelle.", memo:'3h = Dossier 1 (compréhension) + Dossier 2 (outils/KPIs) + Dossier 3 (argumentation 50%)' },
          { titre:'Lecture active des annexes (10-15 min)', contenu:"Avant d'écrire quoi que ce soit : <b>identifier l'entreprise</b> (secteur, taille, contexte), <b>survoler TOUTES les annexes</b> (tableau KPIs, extrait CRM, posts réseaux sociaux, avis clients, données marché), <b>annoter chaque annexe</b> (thème, type de données). Puis lire les questions pour savoir quelles annexes exploiter. Ne jamais commencer à répondre avant d'avoir une vision d'ensemble. Cette étape évite les erreurs d'interprétation.", memo:'10-15 min : entreprise + survol annexes + annotation + lecture questions AVANT d\'écrire' },
          { titre:'Dossier 3 : la question d\'argumentation', contenu:"La question d\'argumentation représente environ <b>50 % de la note</b>. Structure attendue : <b>Introduction</b> (reformuler la problématique, annoncer le plan en 2-3 axes) → <b>2 ou 3 arguments</b> (chacun avec : énoncé clair + développement + exemple concret tiré du cas ou de la réalité) → <b>Conclusion opérationnelle</b> (résumer la réponse + recommandation concrète). +2 pts accordés pour un vocabulaire métier maîtrisé et une présentation rigoureuse.", memo:'Intro (problématique + plan) → 2-3 arguments + exemples → Conclusion opérationnelle. +2pts pro' },
          { titre:'Calculs de KPIs — erreurs classiques', contenu:"Erreurs les plus fréquentes : <b>confondre taux de marque et taux de marge</b> (formules différentes, voir fiche calculs), <b>oublier les unités</b> (€, %, unités), <b>calculer sans interpréter</b> (chaque résultat doit être commenté : « Ce taux de 3,2 % est en dessous de l'objectif de 5 %, ce qui indique… »), <b>mélanger les périodes</b> (comparer N avec N-1, pas N avec N-2). Toujours vérifier l'ordre de grandeur du résultat.", memo:'Calculs : unités + formule correcte + interprétation commerciale = 3 étapes obligatoires' },
          { titre:'Gestion du temps (3h)', contenu:"Répartition conseillée : <b>15 min</b> lecture active des annexes → <b>45 min</b> Dossier 1 → <b>45 min</b> Dossier 2 (dont calculs) → <b>60 min</b> Dossier 3 → <b>15 min</b> relecture et corrections. Si en retard à 2h : <b>aller à l'essentiel</b>, esquisse des réponses manquantes plutôt que laisser des pages blanches. Une copie complète avec des arguments moyens > copie incomplète avec arguments brillants.", memo:'15 min annexes | 45 Dos.1 | 45 Dos.2 | 60 Dos.3 | 15 relecture. Complet > parfait.' },
          { titre:'Vocabulaire métier et +2 points', contenu:"Le jury accorde <b>+2 points</b> aux copies qui utilisent correctement le vocabulaire professionnel. À placer naturellement : CRM, KPI, FCR, NPS, CSAT, omnicanal, conversion, CAC, CLV, RFM, SEO/SEA, UX, AIDA, charte éditoriale, RGPD, opt-in… Autres critères : <b>présentation soignée</b> (titres, alinéas, listes), <b>écriture lisible</b>, <b>structure visible</b>. La forme compte autant que le fond pour ce bonus.", memo:'+2pts = vocabulaire métier + présentation soignée + structure visible + écriture lisible' },
        ]
      },
    ]
  },
];

// ──────────────────────────────────────────────────────────
// FORMULES DE CALCUL
// ──────────────────────────────────────────────────────────
window.E5A_FORMULES = [
  {
    categorie:'💰 Performance commerciale & rentabilité',
    couleur:{ bg:'#F0FDF4', solid:'#16A34A', soft:'#BBF7D0', ink:'#14532D' },
    formules:[
      { nom:'Marge Commerciale (Brute)', formule:'Prix Vente HT − Coût Achat HT', ex:'PV = 100 € · CA = 60 € → Marge = 40 €' },
      { nom:'Taux de Marque (%)', formule:'(Marge / Prix Vente HT) × 100', ex:'40 / 100 × 100 = 40 %' },
      { nom:'Taux de Marge (%)', formule:'(Marge / Coût Achat HT) × 100', ex:'40 / 60 × 100 = 66,7 %' },
      { nom:'Coefficient Multiplicateur', formule:'Prix Vente TTC / Prix Achat HT', ex:'120 / 60 = 2' },
      { nom:'Seuil de Rentabilité', formule:'Charges Fixes / Taux de Marge sur Coût Variable', ex:'SR = 50 000 / 0,4 = 125 000 €' },
      { nom:'Taux d\'Évolution (%)', formule:'((Valeur Finale − Valeur Initiale) / Valeur Initiale) × 100', ex:'(130 − 100) / 100 × 100 = +30 %' },
    ]
  },
  {
    categorie:'📊 Performance digitale & prospection',
    couleur:{ bg:'#EFF6FF', solid:'#2563EB', soft:'#BFDBFE', ink:'#1E40AF' },
    formules:[
      { nom:'Taux de Clic (CTR %)', formule:'(Nb Clics / Nb Affichages) × 100', ex:'500 clics / 10 000 affichages = 5 %' },
      { nom:'Taux de Transformation (%)', formule:'(Nb Ventes ou leads / Trafic total) × 100', ex:'50 ventes / 2 000 visites = 2,5 %' },
      { nom:'Taux de Rebond (%)', formule:'(Visites 1 seule page / Total visites) × 100', ex:'800 / 2 000 = 40 %' },
      { nom:'Coût Acquisition Client (CAC)', formule:'Coût total campagne / Nb nouveaux clients', ex:'5 000 € / 50 clients = 100 € / client' },
      { nom:'Taux de Décroché (%)', formule:'(Appels décrochés / Appels reçus) × 100', ex:'240 / 300 = 80 %' },
      { nom:'DMT (Durée Moy. de Traitement)', formule:'Temps total de traitement / Nb appels traités', ex:'600 min / 150 appels = 4 min/appel' },
      { nom:'FCR — First Call Resolution (%)', formule:'(Demandes résolues 1er contact / Total demandes) × 100', ex:'140 / 200 = 70 %' },
    ]
  },
  {
    categorie:'🤝 Valeur & fidélisation client',
    couleur:{ bg:'#FFF7ED', solid:'#EA580C', soft:'#FED7AA', ink:'#7C2D12' },
    formules:[
      { nom:'NPS (Net Promoter Score)', formule:'% Promoteurs (notes 9-10) − % Détracteurs (notes 0-6)', ex:'40 % − 15 % = NPS 25 (correct)' },
      { nom:'CSAT (Score de Satisfaction %)', formule:'(Clients satisfaits notes 4-5 / Total répondants) × 100', ex:'80 / 100 = 80 %' },
      { nom:'CLV (Customer Lifetime Value)', formule:'(Panier Moy. × Fréquence × Durée relation) − Coûts', ex:'(50 × 4 × 3) − 200 = 400 €' },
      { nom:'Taux d\'Attrition (Churn %)', formule:'(Clients perdus / Total clients début période) × 100', ex:'50 / 500 = 10 %' },
      { nom:'Taux d\'Abandon de Panier (%)', formule:'(Paniers abandonnés / Paniers créés) × 100', ex:'700 / 1000 = 70 %' },
    ]
  },
];

// ──────────────────────────────────────────────────────────
// FLASHCARDS
// ──────────────────────────────────────────────────────────
window.E5A_FLASH = [
  // C1
  { id:'f01', comp:'C1', q:'Quelle est la différence entre stratégie omnicanale et multicanale ?', r:'Multicanal = plusieurs canaux indépendants (silos). Omnicanal = tous les canaux interconnectés et synchronisés pour une expérience fluide et continue quel que soit le point de contact.', ex:'Démarrer une réclamation par email et la continuer par téléphone sans répéter = omnicanal.' },
  { id:'f02', comp:'C1', q:'Qu\'est-ce que la technique CROC ?', r:'Contact → Raison → Objectif → Conclusion. Cadre structuré pour les appels sortants professionnels.', ex:'Contact : « Bonjour M. Dupont, je suis Jean de SociétéX » → Raison : « Je vous appelle suite à… »' },
  { id:'f03', comp:'C1', q:'Qu\'est-ce que le FCR ?', r:'First Call Resolution : % de demandes résolues dès le 1er contact. FCR = (Résolutions 1er contact / Total demandes) × 100. Objectif > 70 %.', ex:'Si 140 demandes sur 200 sont résolues du 1er coup → FCR = 70 %.' },
  { id:'f04', comp:'C1', q:'Comment calculer le NPS ?', r:'NPS = % Promoteurs (notes 9-10) − % Détracteurs (notes 0-6). Passifs (7-8) ignorés. Echelle : -100 à +100. >50 = excellent.', ex:'40 % promoteurs − 15 % détracteurs = NPS 25.' },
  { id:'f05', comp:'C1', q:'Qu\'est-ce que le scoring RFM ?', r:'Récence (dernière commande) + Fréquence (nb achats) + Montant (CA généré). Chaque critère noté de 1 à 5. Permet de segmenter les clients par valeur et d\'adapter les actions marketing.', ex:'Client R5-F5-M5 = VIP à chouchouter. Client R1 = risque de churn → relancer en priorité.' },
  { id:'f06', comp:'C1', q:'Quelle est la différence entre CSAT et CES ?', r:'CSAT = satisfaction immédiate après interaction (ne prédit pas la fidélité). CES (Customer Effort Score) = facilité de résolution. Le CES prédit mieux la rétention car les clients fuient les parcours compliqués.', ex:'Un client satisfait mais qui a galéré 45 min → CSAT ok mais CES mauvais → risque de churn.' },
  { id:'f07', comp:'C1', q:'Quelle est la différence entre CRC internalisé et externalisé ?', r:'Internalisé = géré en interne (meilleur contrôle qualité, cohérence culture d\'entreprise). Externalisé = confié à un prestataire (plus flexible, coûts réduits mais moins de contrôle).', ex:'Teleperformance = prestataire CRC externalisé pour de nombreuses grandes marques.' },
  { id:'f08', comp:'C1', q:'Qu\'est-ce que l\'opt-in et l\'opt-out ?', r:'Opt-in : consentement explicite du client avant envoi (obligatoire RGPD email marketing). Opt-out : possibilité de se désabonner à tout moment (lien obligatoire dans chaque email).', ex:'Case à cocher non pré-cochée = opt-in. Lien "se désabonner" en bas d\'email = opt-out.' },
  { id:'f09', comp:'C1', q:'Comment calculer la DMT ?', r:'DMT (Durée Moyenne de Traitement) = Temps total de traitement / Nombre d\'appels traités. Inclut temps d\'appel + temps post-appel (CRM).', ex:'600 min traitées pour 150 appels → DMT = 4 min/appel.' },
  { id:'f10', comp:'C1', q:'Quelle est la règle du taux de décroché ?', r:'Objectif standard : 80 % des appels décrochés en moins de 20 secondes. Taux d\'abandon acceptable : < 5 %. Ces KPIs mesurent l\'accessibilité du CRC.', ex:'Si 300 appels reçus et 240 décrochés → taux de décroché = 80 %.' },
  { id:'f11', comp:'C1', q:'Qu\'est-ce que Bloctel ?', r:'Liste d\'opposition au démarchage téléphonique des particuliers. Toute prospection téléphonique doit vérifier cette liste au préalable, sous peine d\'amende. Obligatoire dans le cadre du RGPD et de la loi Hamon.', ex:'Avant une campagne d\'appels sortants, nettoyer le fichier avec Bloctel.' },
  // C2
  { id:'f12', comp:'C2', q:'Qu\'est-ce que la méthode AIDA ?', r:'Attention → Intérêt → Désir → Action. Cadre de toute communication persuasive (email, pub, post, script).', ex:'Accroche visuelle (A) → Problème résolu (I) → Bénéfices concrets (D) → « Inscrivez-vous » (A).' },
  { id:'f13', comp:'C2', q:'Quelle est la différence entre inbound et outbound marketing ?', r:'Outbound (push) : aller chercher le client (cold call, pub, email masse). Inbound (pull) : faire venir le client grâce à du contenu utile (SEO, blog, réseaux). Les deux se complètent.', ex:'Une publicité Google Ads = outbound. Un article de blog bien référencé = inbound.' },
  { id:'f14', comp:'C2', q:'Quel est le ROI de l\'email marketing ?', r:'L\'email marketing a le meilleur ROI de tous les canaux : 42 € générés pour 1 € investi. Clés : segmentation, personnalisation, objet percutant, CTA clair.', ex:'Taux d\'ouverture cible > 20 %. Taux de clic cible > 3 %.' },
  { id:'f15', comp:'C2', q:'Quelle est la règle d\'or du community management ?', r:'30 % création de contenu + 70 % interaction (réponses, commentaires, conversations). Répondre aux abonnés est plus important que poster fréquemment.', ex:'Mieux vaut répondre à 50 commentaires qu\'écrire 5 nouveaux posts sans interaction.' },
  { id:'f16', comp:'C2', q:'Qu\'est-ce que l\'e-réputation ?', r:'Image numérique d\'une entreprise construite par SES contenus ET par ce que disent les tiers (avis, forums, articles, RS). Se surveille avec Google Alerts, Mention, Talkwalker.', ex:'Une série d\'avis Google 1 étoile non répondus = e-réputation dégradée.' },
  { id:'f17', comp:'C2', q:'Comment gérer un avis négatif en ligne ?', r:'Répondre < 24h. Structure : Remercier → S\'excuser si justifié → Expliquer → Proposer solution offline. Ne jamais supprimer, ignorer ou répondre agressivement. Ne jamais acheter de faux avis.', ex:'« Merci pour votre retour. Nous sommes désolés… Contactez-nous à contact@… »' },
  { id:'f18', comp:'C2', q:'Qu\'est-ce qu\'un calendrier éditorial ?', r:'Outil de planification des publications : date, heure, plateforme, type de contenu, thème, objectif et KPI associé. Garantit régularité et cohérence de la stratégie de contenu.', ex:'Lundi = article LinkedIn | Mercredi = Reel Instagram | Vendredi = story produit.' },
  // C3
  { id:'f19', comp:'C3', q:'Quelle est la formule du taux de conversion ?', r:'Taux de conversion = (Nb Ventes / Nb Visiteurs) × 100. Objectif e-commerce : 2 à 4 %.', ex:'50 ventes / 2 000 visiteurs = 2,5 % de taux de conversion.' },
  { id:'f20', comp:'C3', q:'Quelle est la différence entre SEO et SEA ?', r:'SEO (organique) : résultats naturels, gratuit mais long terme (3-6 mois). SEA (payant) : Google Ads, résultats immédiats mais coût par clic, disparaît si on arrête de payer. Les deux se complètent.', ex:'Lancer une campagne = SEA pour visibilité immédiate + SEO pour pérennité.' },
  { id:'f21', comp:'C3', q:'Que sont les balises H1 et la méta-description ?', r:'H1 : balise HTML indiquant le sujet principal de la page (une seule par page). Méta-description : résumé cliquable dans Google (max 160 car.). Essentiels pour le SEO on-page.', ex:'H1 : « Chaussures de randonnée imperméables femme » | Méta : 160 caractères de description.' },
  { id:'f22', comp:'C3', q:'Comment calculer le CAC ?', r:'CAC (Coût d\'Acquisition Client) = Coût total campagne / Nb nouveaux clients acquis. À comparer au CLV : si CLV > CAC, le modèle est rentable.', ex:'5 000 € de budget / 50 nouveaux clients = CAC = 100 €/client.' },
  { id:'f23', comp:'C3', q:'Qu\'est-ce que le tunnel de conversion ?', r:'Succession d\'étapes du parcours d\'achat : Visite → Consultation produit → Ajout panier → Paiement → Confirmation. Identifier et réduire les abandons à chaque étape est l\'objectif de l\'optimisation e-commerce.', ex:'Taux d\'abandon panier moyen = 70 %. Relance email automatique = +5 à 10 % de conversion.' },
  { id:'f24', comp:'C3', q:'Qu\'est-ce que le retargeting ?', r:'Technique publicitaire qui cible les internautes ayant déjà visité un site sans acheter. Les publicités les "suivent" sur d\'autres sites (via cookies). Très efficace pour les paniers abandonnés.', ex:'Visiter un site de chaussures → voir des pubs chaussures sur Instagram = retargeting.' },
  { id:'f25', comp:'C3', q:'Pourquoi la politique de retour est-elle un facteur de conversion ?', r:'70 % des acheteurs lisent la politique de retour avant d\'acheter. Une politique de retour gratuite et simple réduit la peur du risque et augmente le taux de conversion.', ex:'Amazon Prime : retours gratuits = facteur clé de confiance et de conversion.' },
  // Méthodologie
  { id:'f26', comp:'CM', q:'Combien vaut le Dossier 3 en E5A ?', r:'Le Dossier 3 (question d\'argumentation) représente environ 50 % de la note totale. Il faut y consacrer environ 60 minutes sur 3 heures.', ex:'Intro (problématique + plan) + 2-3 arguments illustrés + conclusion opérationnelle.' },
  { id:'f27', comp:'CM', q:'Quels sont les +2 points accordés par le jury E5A ?', r:'Le jury accorde +2 points aux copies présentant : vocabulaire métier maîtrisé, présentation soignée (titres, alinéas), structure claire et écriture lisible. La forme compte autant que le fond.', ex:'Utiliser : CRM, NPS, CSAT, FCR, omnicanal, conversion, CAC, SEO/SEA, AIDA…' },
];

// ──────────────────────────────────────────────────────────
// FILL-IN-THE-BLANK
// ──────────────────────────────────────────────────────────
window.E5A_FILL = [
  { id:'fi01', comp:'C1', avant:'La technique', trou:'CROC', apres:'structure les appels sortants en 4 étapes : Contact, Raison, Objectif, Conclusion.', indice:'4 lettres = 4 étapes', thematique:'Appels' },
  { id:'fi02', comp:'C1', avant:'Le taux de décroché doit dépasser', trou:'80 %', apres:"des appels décrochés en moins de 20 secondes.", indice:'objectif standard CRC', thematique:'KPIs' },
  { id:'fi03', comp:'C1', avant:'Le FCR mesure le pourcentage de demandes résolues dès le', trou:'premier contact', apres:'. L\'objectif est supérieur à 70 %.', indice:'1er = first', thematique:'KPIs' },
  { id:'fi04', comp:'C1', avant:'Le NPS se calcule : % Promoteurs (9-10) −', trou:'% Détracteurs (0-6)', apres:'. Les passifs (7-8) sont ignorés.', indice:'les mécontents', thematique:'KPIs satisfaction' },
  { id:'fi05', comp:'C1', avant:'Le scoring RFM évalue les clients selon leur Récence, leur', trou:'Fréquence', apres:'et leur Montant.', indice:'combien de fois ils achètent', thematique:'Segmentation' },
  { id:'fi06', comp:'C1', avant:'La stratégie', trou:'omnicanale', apres:'connecte et synchronise tous les canaux pour offrir une expérience fluide et continue.', indice:'≠ multicanal', thematique:'Stratégie' },
  { id:'fi07', comp:'C1', avant:'Avant toute prospection téléphonique vers des particuliers, il faut vérifier le fichier', trou:'Bloctel', apres:'pour respecter le RGPD.', indice:'liste d\'opposition', thematique:'RGPD' },
  { id:'fi08', comp:'C2', avant:'La méthode', trou:'AIDA', apres:'décrit les 4 étapes d\'une communication persuasive : Attention, Intérêt, Désir, Action.', indice:'4 lettres', thematique:'Communication' },
  { id:'fi09', comp:'C2', avant:'L\'email marketing génère un ROI de', trou:'42 €', apres:"pour 1 € investi — le meilleur parmi tous les canaux digitaux.", indice:'quarante-deux', thematique:'Email' },
  { id:'fi10', comp:'C2', avant:'En community management, la règle est', trou:'30 % création', apres:'de contenu et 70 % interaction avec la communauté.', indice:'minorité création, majorité interaction', thematique:'Community' },
  { id:'fi11', comp:'C2', avant:'Le marketing', trou:'inbound', apres:'attire les clients grâce à du contenu utile (SEO, blog, réseaux sociaux) plutôt que de les solliciter directement.', indice:'pull ≠ push', thematique:'Marketing' },
  { id:'fi12', comp:'C3', avant:'Le taux de conversion se calcule : (Nb Ventes / Nb Visiteurs) ×', trou:'100', apres:'. L\'objectif e-commerce est de 2 à 4 %.', indice:'× pour obtenir un %', thematique:'E-commerce KPIs' },
  { id:'fi13', comp:'C3', avant:'La méta-description ne doit pas dépasser', trou:'160 caractères', apres:'pour être affichée correctement dans les résultats Google.', indice:'cent soixante', thematique:'SEO' },
  { id:'fi14', comp:'C3', avant:'Le taux d\'abandon de panier est en moyenne de', trou:'70 %', apres:'— les relances email automatiques permettent de récupérer une partie de ces ventes perdues.', indice:'soixante-dix', thematique:'E-commerce' },
  { id:'fi15', comp:'C3', avant:'Le CAC se calcule : Coût total campagne /', trou:'Nb nouveaux clients', apres:'acquis sur la période.', indice:'pour qui a-t-on dépensé ?', thematique:'KPIs digitaux' },
  { id:'fi16', comp:'C3', avant:'Sur un site e-commerce, le protocole', trou:'HTTPS', apres:'(cadenas dans l\'URL) est obligatoire pour sécuriser les transactions.', indice:'S = secure', thematique:'Sécurité e-commerce' },
  { id:'fi17', comp:'C3', avant:'Le SEO repose sur 3 piliers : la technique, le contenu et la', trou:'popularité', apres:'(backlinks de qualité via le netlinking).', indice:'ce que les autres disent de vous', thematique:'SEO' },
  { id:'fi18', comp:'CM', avant:'Le Dossier 3 de l\'épreuve E5A représente environ', trou:'50 %', apres:'de la note totale et nécessite une intro, 2-3 arguments illustrés et une conclusion opérationnelle.', indice:'la moitié', thematique:'Méthode' },
];

// ──────────────────────────────────────────────────────────
// MATCHING
// ──────────────────────────────────────────────────────────
window.E5A_MATCH = [
  {
    id:'m1', comp:'C1', titre:'KPI → Ce qu\'il mesure',
    paires:[
      { g:'Taux de décroché', d:'Accessibilité du CRC (> 80 %)' },
      { g:'FCR', d:'Résolution au 1er contact (> 70 %)' },
      { g:'DMT', d:'Durée Moyenne de Traitement d\'un appel' },
      { g:'NPS', d:'Probabilité de recommandation (Promoteurs − Détracteurs)' },
      { g:'CSAT', d:'Satisfaction immédiate après interaction' },
      { g:'Taux d\'abandon', d:'% d\'appels raccrochés avant décroché (< 5 %)' },
    ]
  },
  {
    id:'m2', comp:'C1', titre:'Acronyme → Définition',
    paires:[
      { g:'CRC', d:'Centre de Relation Client' },
      { g:'CRM', d:'Customer Relationship Management' },
      { g:'ACD', d:'Automatic Call Distribution' },
      { g:'CTI', d:'Couplage Téléphonie-Informatique' },
      { g:'SVI', d:'Serveur Vocal Interactif' },
    ]
  },
  {
    id:'m3', comp:'C2', titre:'Concept → Exemple',
    paires:[
      { g:'Inbound marketing', d:'Article de blog SEO qui attire des prospects' },
      { g:'Outbound marketing', d:'Cold call téléphonique ou pub Google Ads' },
      { g:'Marketing automation', d:'Email de relance auto après abandon panier' },
      { g:'Retargeting', d:'Pub Instagram ciblant un visiteur non-acheteur' },
      { g:'AIDA', d:'Attention → Intérêt → Désir → Action' },
    ]
  },
  {
    id:'m4', comp:'C3', titre:'Formule → Résultat',
    paires:[
      { g:'CTR = (Clics / Affichages) × 100', d:'Taux de clic publicitaire' },
      { g:'CAC = Budget / Nouveaux clients', d:'Coût par client acquis' },
      { g:'Taux de rebond = 1 page / Total × 100', d:'% de visiteurs qui quittent sans interagir' },
      { g:'CLV = (Panier × Fréquence × Durée) − Coûts', d:'Valeur vie client estimée' },
      { g:'Churn = Clients perdus / Total × 100', d:'Taux d\'attrition (clients perdus)' },
    ]
  },
  {
    id:'m5', comp:'C3', titre:'Outil numérique → Fonction',
    paires:[
      { g:'Google Analytics (GA4)', d:'Analyser le trafic et le comportement sur un site' },
      { g:'SEMrush', d:'Analyse SEO, mots-clés et concurrents' },
      { g:'PrestaShop', d:'CMS e-commerce open source' },
      { g:'HubSpot', d:'CRM + marketing automation B2B' },
      { g:'Brevo (Sendinblue)', d:'Email marketing et automation' },
    ]
  },
];

// ──────────────────────────────────────────────────────────
// SUJETS D'ARGUMENTATION
// ──────────────────────────────────────────────────────────
window.E5A_ESSAI = [
  { id:'e1', comps:['C1'], q:'En quoi la stratégie omnicanale représente-t-elle un avantage concurrentiel pour un CRC ?', pistes:['Définir omnicanal vs multicanal', 'Expérience client continue et personnalisée (CRM central)', 'Réduction des coûts de traitement (FCR amélioré)', 'Exemples : CRC bancaire, SAV e-commerce', 'Limites et prérequis (investissement SI, formation)'] },
  { id:'e2', comps:['C1'], q:'Comment le management peut-il réduire le turnover élevé (40-50 %) dans les CRC ?', pistes:['Causes du turnover : stress, horaires, faible rémunération, monotonie', 'Levier 1 : recrutement ciblé + onboarding de qualité', 'Levier 2 : formation continue (AFEST, e-learning)', 'Levier 3 : management bienveillant + objectifs SMART + reconnaissance', 'Levier 4 : conditions de travail et qualité de vie (flex, télétravail)'] },
  { id:'e3', comps:['C1','C2'], q:'Dans quelle mesure le RGPD est-il un frein ou une opportunité pour la relation client ?', pistes:['Frein : restrictions opt-in, Bloctel, coût de mise en conformité', 'Opportunité : confiance client renforcée, données qualifiées', 'Impact sur les campagnes outbound (obligation Bloctel)', 'Données first-party vs données tierces', 'Conclusion : le RGPD force la qualité plutôt que la quantité'] },
  { id:'e4', comps:['C2'], q:'Pourquoi l\'e-réputation est-elle un enjeu stratégique pour une entreprise ?', pistes:['E-réputation = image construite par l\'entreprise ET par les tiers', 'Impact sur l\'acquisition : 90 % des consommateurs lisent les avis avant achat', 'Impact sur la rétention et le recrutement', 'Outils de surveillance (Google Alerts, Mention)', 'Gestion de crise : méthode de réponse aux avis négatifs'] },
  { id:'e5', comps:['C2','C3'], q:'En quoi l\'inbound marketing est-il plus efficace que l\'outbound marketing dans un contexte digital ?', pistes:['Outbound : intrusif, coûteux, ROI décroissant', 'Inbound : SEO, content, RS = leads qualifiés et confiance', 'ROI email marketing (42:1)', 'Complémentarité : SEA pour l\'immédiat + SEO pour le long terme', 'Limites inbound : délais, expertise requise, budget création contenu'] },
  { id:'e6', comps:['C3'], q:'Quels sont les leviers pour améliorer le taux de conversion d\'un site e-commerce ?', pistes:['Taux de conversion moyen : 2-4 % — marges d\'amélioration importantes', 'Levier 1 : UX et ergonomie (navigation, vitesse, responsive)', 'Levier 2 : fiche produit optimisée (photos, avis, cross-sell)', 'Levier 3 : tunnel de paiement simplifié (3D Secure visible, options variées)', 'Levier 4 : réassurance (politique retour, avis, badges sécurité)', 'Levier 5 : retargeting et relances paniers abandonnés'] },
  { id:'e7', comps:['C3'], q:'La fidélisation client est-elle plus rentable que l\'acquisition pour un site e-commerce ?', pistes:['Coût fidélisation = 5-7× moins cher qu\'acquisition', 'CLV : valeur sur la durée vs coût d\'acquisition ponctuel', 'Leviers : programme fidélité, email marketing, retargeting, SAV', 'Limite : croissance nécessite aussi de l\'acquisition (nouveaux marchés)', 'Conclusion : équilibre entre les deux selon le stade de développement'] },
  { id:'e8', comps:['C1','C2','C3'], q:'Comment le numérique transforme-t-il la relation client dans les entreprises ?', pistes:['CRC omnicanal : interconnexion des canaux via CRM', 'RS et community : proximité et réactivité accrues', 'E-commerce : désintermédiation et personnalisation', 'Data : segmentation RFM, scoring, automation', 'Défis : RGPD, dépendance technologique, compétences'] },
];
