// Jeu connaissances culturelles — 3 modes : QCM + "Qu'est-ce que cache ce sujet ?" + Méthodologie
// primary:true = l'une des 28 références prioritaires (liste maître) — primary:false = secondaire

const CULTURE_QCM = [
  // ── SECONDAIRES ──────────────────────────────────────────────────────────
  { primary:false, q:"Qui est l'auteur de Maus ?", choices:["Art Spiegelman","George Orwell","Jack London","La Fontaine"], correct:0, expl:"Art Spiegelman a publié Maus en 1986 (tome 1) et 1992 (tome 2). Roman graphique représentant les Juifs en souris et les Nazis en chats pour raconter l'Holocauste." },
  { primary:false, q:"Dans Maus, quel animal représente les Juifs ?", choices:["Des souris","Des cochons","Des lapins","Des rats"], correct:0, expl:"Les Juifs = souris, les Nazis = chats, les Polonais = cochons. Spiegelman reprend la rhétorique nazie qui déshumanisait les Juifs en les animalisant — pour mieux la dénoncer." },
  { primary:false, q:"En quelle année a été signée la Déclaration de Cambridge sur la Conscience animale ?", choices:["2012","2015","2005","2000"], correct:0, expl:"En 2012, des neuroscientifiques de Cambridge ont affirmé que les mammifères, oiseaux et céphalopodes possèdent les substrats neurologiques de la conscience. Étape majeure dans la reconnaissance de la vie intérieure des animaux." },
  { primary:false, q:"Qui a publié 'La Libération animale' en 1975 ?", choices:["Peter Singer","Tom Regan","Jane Goodall","Donna Haraway"], correct:0, expl:"Peter Singer, philosophe australien, a fondé le mouvement de libération animale avec ce livre. Il y développe le concept de 'spécisme' — une discrimination arbitraire fondée sur l'appartenance à une espèce." },
  { primary:false, q:"Que représentent les Polonais dans Maus de Spiegelman ?", choices:["Des cochons","Des renards","Des chiens","Des lapins"], correct:0, expl:"Dans Maus, les Polonais sont représentés en cochons. Ce système de représentation animale reflète les hiérarchies raciales et les rapports de force de l'époque nazie." },
  { primary:false, q:"Depuis quand existe l'éthologie comme science à part entière ?", choices:["Depuis 1920","Depuis 1850","Depuis 1970","Depuis 2000"], correct:0, expl:"L'éthologie — science du comportement animal — s'est structurée dans les années 1920-1930 avec Konrad Lorenz et Nikolaas Tinbergen (Prix Nobel 1973). Elle étudie les comportements dans leur milieu naturel." },
  { primary:false, q:"Que signifient les '3R' dans l'expérimentation animale ?", choices:["Replace, Reduce, Refine","Rights, Rules, Reason","Research, Regulate, Respond","Rethink, Reform, Restrict"], correct:0, expl:"Les 3R encadrent l'expérimentation animale : remplacer l'animal par des alternatives quand c'est possible, réduire le nombre d'animaux, raffiner les procédures pour minimiser la souffrance." },
  { primary:false, q:"Qui est l'auteur de Croc-Blanc (1906) ?", choices:["Jack London","George Orwell","Victor Hugo","Émile Zola"], correct:0, expl:"Jack London raconte la vie d'un loup-chien entre la sauvagerie du Grand Nord canadien et la domestication humaine. Ce roman narrativise la subjectivité animale avec une précision comportementale remarquable." },
  { primary:false, q:"Qu'est-ce que le 'spécisme' ?", choices:["Discrimination fondée sur l'appartenance à une espèce","Respect de toutes les espèces","Étude scientifique des espèces","Protection des espèces menacées"], correct:0, expl:"Terme forgé par Peter Singer (1975) : discriminer arbitrairement la souffrance animale — la traiter comme moins importante que la souffrance humaine, sans justification rationnelle." },
  { primary:false, q:"Selon la FAO (2013), quel pourcentage des émissions mondiales de GES représente l'élevage ?", choices:["14,5 %","5 %","30 %","2 %"], correct:0, expl:"Selon la FAO (2013), l'élevage représente 14,5 % des émissions mondiales de GES — davantage que tous les transports réunis. Un chiffre central dans le débat sur l'élevage industriel." },
  { primary:false, q:"Qui a peint 'Le Lièvre' en 1502 ?", choices:["Albrecht Dürer","Léonard de Vinci","Michel-Ange","Rembrandt"], correct:0, expl:"Dürer (1471-1528) a peint ce lièvre aquarellé avec une précision quasi-scientifique. Chaque poil, chaque reflet dans l'œil — un hommage à la beauté de l'animal réel." },
  { primary:false, q:"Qu'est-ce que la zoothérapie ?", choices:["Utilisation thérapeutique des animaux","Étude scientifique des animaux","Protection juridique des animaux","Élevage biologique des animaux"], correct:0, expl:"La zoothérapie utilise des animaux (chiens, chevaux, dauphins) dans des contextes thérapeutiques. Elle réduit le stress, l'anxiété et améliore le bien-être des personnes âgées, autistes ou dépressives." },
  { primary:false, q:"Quel pourcentage d'ADN partageons-nous avec le chimpanzé ?", choices:["98,7 %","75 %","50 %","99,9 %"], correct:0, expl:"Nous partageons environ 98,7 % de notre ADN avec le chimpanzé — notre plus proche parent biologique. Argument central de ceux qui réclament une protection juridique renforcée pour les grands singes." },
  { primary:false, q:"Quelle est la citation de Schopenhauer sur les animaux ?", choices:["Celui qui est cruel envers les animaux ne peut être un homme bon","Jusqu'à ce qu'on ait aimé un animal, une partie de notre âme reste endormie","La question est : peuvent-ils souffrir ?","On peut juger le cœur d'un homme à la façon dont il traite les animaux"], correct:0, expl:"Schopenhauer affirmait que la compassion pour les animaux révèle la bonté morale générale. La façon dont quelqu'un traite un être sans défense révèle son caractère profond." },
  { primary:false, q:"Quel roman de George Orwell utilise des animaux pour critiquer le stalinisme ?", choices:["La Ferme des animaux (1945)","Maus (1986)","Croc-Blanc (1906)","Le Livre de la Jungle (1894)"], correct:0, expl:"La Ferme des animaux (1945) d'Orwell raconte une révolution d'animaux qui renverse les fermiers humains, avant que les cochons n'instaurent un régime aussi tyrannique. Satire du totalitarisme stalinien." },
  { primary:false, q:"Qui est Ganesh dans l'hindouisme ?", choices:["Dieu à tête d'éléphant, fils de Shiva","Dieu à tête de singe, compagnon de Rama","Dieu à tête de taureau, maître du tonnerre","Dieu à tête de serpent, gardien du cosmos"], correct:0, expl:"Ganesh est l'une des divinités les plus vénérées de l'hindouisme. Sa tête d'éléphant symbolise la sagesse et le dépassement des obstacles — l'animal élevé au rang du divin." },
  { primary:false, q:"Aristote définit l'homme comme 'animal…' — complète.", choices:["politique (zôon politikon)","rationnel (zôon logikon)","social (zôon koinônikon)","conscient (zôon noêtikon)"], correct:0, expl:"Aristote définit l'homme comme 'zôon politikon' dans La Politique. Ce qui distingue l'homme des autres animaux est le logos (raison et langage), permettant de vivre en cité et de distinguer le juste de l'injuste." },
  { primary:false, q:"Quelle expérience Harry Harlow réalisa-t-il dans les années 1950 sur des singes rhésus ?", choices:["Des bébés singes préféraient une mère en tissu (sans nourriture) à une mère en fil de fer (avec biberon)","Des bébés singes apprenaient par imitation, sans récompense alimentaire","Des singes rhésus reconnaissaient leur propre image dans un miroir","Des singes utilisaient des outils en métal pour résoudre des problèmes"], correct:0, expl:"Harry Harlow (Université du Wisconsin, 1958) installe deux mères artificielles : l'une en fil de fer avec biberon, l'autre en tissu doux sans nourriture. Les bébés singes passent 17h/24 avec la mère en tissu. Résultat révolutionnaire : le besoin d'attachement affectif (contact comfort) prime sur la nourriture. L'animal révèle une vérité universelle sur l'amour." },
  { primary:false, q:"Quel concept psychologique les expériences de Harry Harlow sur les singes rhésus ont-elles contribué à fonder ?", choices:["La théorie de l'attachement (le besoin affectif prime sur la nourriture)","Le conditionnement opérant (apprentissage par récompense)","L'empreinte comportementale (suivre le premier être vu)","La mémoire épisodique chez les primates"], correct:0, expl:"Les résultats de Harlow ont directement inspiré la théorie de l'attachement de John Bowlby : l'enfant (humain ou animal) a besoin de sécurité affective plus encore que de nourriture. Ses expériences d'isolation (pit of despair) montrent aussi les ravages du manque d'affection — chez l'animal comme chez l'homme." },

  // ── PRIMAIRES — 🔬 CONNAÎTRE L'ANIMAL ────────────────────────────────────
  { primary:true, q:"Quel pourcentage des animaux utilisés en laboratoire sont des rongeurs (souris et rats) ?", choices:["Plus de 80 %","Environ 50 %","Environ 30 %","Moins de 10 %"], correct:0, expl:"Les souris et rats représentent plus de 80 % des animaux utilisés en expérimentation scientifique. Leur proximité génétique avec l'humain en fait des modèles biologiques privilégiés — mais cela pose la question éthique : peut-on connaître l'homme en étudiant l'animal ?" },
  { primary:true, q:"Qui a publié 'De l'origine des espèces' en 1859 ?", choices:["Charles Darwin","Aristote","Descartes","Peter Singer"], correct:0, expl:"Darwin démontre que les espèces évoluent par sélection naturelle et que l'homme et les grands singes descendent d'un ancêtre commun. Comprendre l'animal, c'est dès lors se comprendre soi-même." },
  { primary:true, q:"Quel médecin a théorisé la vivisection (opération sur animaux vivants sans anesthésie) dans un ouvrage de 1865 ?", choices:["Claude Bernard","Louis Pasteur","René Descartes","Charles Darwin"], correct:0, expl:"Claude Bernard (Introduction à l'étude de la médecine expérimentale, 1865) pratique et théorise la vivisection. Il considère l'animal comme un outil de connaissance, ce qui déclenche dès le XIXe siècle de vifs débats éthiques." },
  { primary:true, q:"Quel était le nom du chimpanzé envoyé dans l'espace par la NASA le 31 janvier 1961 ?", choices:["Ham","Laïka","Albert","Pépi"], correct:0, expl:"Ham est le premier grand singe envoyé dans l'espace, avant les astronautes humains. Son vol précède celui d'Alan Shepard de quelques mois. L'animal est utilisé comme substitut humain pour tester les conditions spatiales." },
  { primary:true, q:"Quelle découverte de Jane Goodall (1960) a remis en cause la frontière entre l'homme et l'animal ?", choices:["Les chimpanzés fabriquent et utilisent des outils","Les chimpanzés parlent une langue structurée","Les chimpanzés reconnaissent leur image dans un miroir","Les chimpanzés peuvent lire des symboles"], correct:0, expl:"Goodall observe en Tanzanie que les chimpanzés taillent des brindilles pour extraire des termites. Jusque-là, l'utilisation d'outils était considérée comme le propre de l'homme — une définition qui s'effondre." },
  { primary:true, q:"Quel article du Code civil français (2015) reconnaît les animaux comme êtres sensibles ?", choices:["Art. 515-14","Art. L214","Art. 3R","Art. 999-1"], correct:0, expl:"L'article 515-14 du Code civil (loi du 16 février 2015) reconnaît les animaux comme 'êtres vivants doués de sensibilité'. Avant 2015, ils étaient des 'biens meubles'. L'association L214 tire son nom de l'art. L214 du Code rural qui interdit les mauvais traitements." },
  { primary:true, q:"En quoi consiste la 'Boîte de Skinner' (années 1930) ?", choices:["Un animal appuie sur un levier pour obtenir de la nourriture — conditionnement opérant","Un animal est conditionné par des chocs électriques aléatoires","Un animal est privé de nourriture puis nourri à intervalles fixes","Un animal est exposé à des sons pour tester son audition"], correct:0, expl:"B.F. Skinner place un rat (ou pigeon) dans une boîte avec un levier. En appuyant dessus, l'animal reçoit de la nourriture. Cette expérience fonde le conditionnement opérant : apprentissage par récompense/punition — une influence majeure sur la psychologie." },
  { primary:true, q:"À quoi travaille le Pr Grégoire Courtine dans ses recherches impliquant des animaux ?", choices:["Réparation de la moelle épinière par stimulation électrique, testée sur des rongeurs","Développement de vaccins à partir de cellules de primates","Étude du comportement social des loups en meute","Thérapie génique testée sur des chimpanzés"], correct:0, expl:"Le Pr Courtine travaille sur la réparation de la moelle épinière par implants électriques, d'abord testés sur des rongeurs paralysés, puis sur des humains. L'animal est le passage obligé avant l'application médicale." },
  { primary:true, q:"Depuis quand l'Union européenne interdit-elle les tests de produits cosmétiques sur les animaux ?", choices:["2013","2005","2000","1999"], correct:0, expl:"L'UE a interdit en 2013 la vente de tout cosmétique testé sur les animaux. Ce tournant éthique marque la reconnaissance que faire souffrir un animal pour un rouge à lèvres est moralement injustifiable." },

  // ── PRIMAIRES — 🎨 IMAGINER L'ANIMAL ─────────────────────────────────────
  { primary:true, q:"Quelle est la date approximative des peintures de la grotte Chauvet ?", choices:["-35 000 av. J.-C.","-17 000 av. J.-C.","-5 000 av. J.-C.","5 000 av. J.-C."], correct:0, expl:"La grotte Chauvet (Ardèche) date d'environ -35 000 ans — l'un des plus anciens témoignages d'art humain. Les peintures représentent essentiellement des animaux : lions, rhinocéros, mammouths." },
  { primary:true, q:"Dans quelle grotte de la préhistoire a-t-on trouvé des peintures datant de -17 000 ans ?", choices:["Lascaux","Chauvet","Altamira","Cosquer"], correct:0, expl:"Lascaux (Dordogne) date d'environ -17 000 ans. Plus de 600 peintures et 1 500 gravures représentant chevaux, aurochs, cerfs, bisons. La grotte Chauvet est plus ancienne (-35 000)." },
  { primary:true, q:"En quelle année La Fontaine a-t-il publié ses premières Fables ?", choices:["1668","1789","1492","1848"], correct:0, expl:"Les Fables de La Fontaine (1668-1694) utilisent l'anthropomorphisme animal pour critiquer indirectement la cour de Louis XIV. L'animal devient un prétexte pour se comprendre soi-même." },
  { primary:true, q:"Que représente un 'animal totem' dans les cultures amérindiennes ?", choices:["Un animal spirituel qui protège et définit un individu ou un clan","Un animal apprivoisé utilisé lors des cérémonies","Un animal chassé lors d'un rite de passage","Un animal représenté sur les monnaies tribales"], correct:0, expl:"Dans les cultures animistes et amérindiennes, chaque personne ou clan est lié à un animal totem qui le protège et le définit. L'animal est sacralisé, imaginé comme intermédiaire entre le monde humain et le monde spirituel." },
  { primary:true, q:"Qui est Anubis dans la mythologie égyptienne ?", choices:["Dieu à tête de chacal, gardien des morts","Dieu à tête de chat, gardien du foyer","Dieu à tête d'ibis, dieu du savoir","Dieu à tête d'éléphant, dieu de la chance"], correct:0, expl:"Anubis, à tête de chacal, guide les âmes vers l'au-delà — c'est un animal psychopompe. Bastet (chat) protège le foyer, Thot (ibis) est le dieu du savoir." },
  { primary:true, q:"Qu'est-ce qu'un animal psychopompe ?", choices:["Un animal qui guide les âmes vers l'au-delà","Un animal utilisé en zoothérapie","Un animal hybride mi-humain","Un animal totem en Afrique"], correct:0, expl:"Les animaux psychopompes (du grec 'guide d'âme') accompagnent les morts vers l'au-delà dans de nombreuses cultures : Anubis (chacal) en Égypte, Cerbère (chien à trois têtes) en Grèce, le cheval dans les traditions nordiques." },
  { primary:true, q:"Quel est le nom du chien d'Ulysse dans l'Odyssée d'Homère ?", choices:["Argos","Cerbère","Achille","Priam"], correct:0, expl:"Argos reconnaît Ulysse après 20 ans d'absence — le seul à l'avoir reconnu — et meurt de joie aussitôt. L'un des symboles les plus puissants de la fidélité animale dans la littérature." },
  { primary:true, q:"Pourquoi John Steinbeck a-t-il intitulé son roman 'Des souris et des hommes' (1937) ?", choices:["En référence à un poème de Robert Burns sur une souris dont le nid est détruit","En référence aux expériences de laboratoire sur les souris","En hommage à la souris comme symbole de rusticité américaine","En référence à une fable de La Fontaine"], correct:0, expl:"Le titre reprend un vers du poème 'To a Mouse' de Robert Burns (1785) : 'Les plans les mieux pensés des souris et des hommes tournent souvent mal.' L'animal symbolise la vulnérabilité face à un monde qui nous écrase." },
  { primary:true, q:"Dans 'Sans famille' (1878) d'Hector Malot, quel rôle jouent les animaux auprès de Rémi ?", choices:["Ils sont ses seuls compagnons et sa famille de substitution","Ils sont des animaux sauvages qu'il apprivoise progressivement","Ils sont des outils de travail dans les mines de charbon","Ils symbolisent la menace de la nature sauvage"], correct:0, expl:"Rémi voyage avec la troupe d'animaux savants de Vitalis (le chien Capi, le singe Joli-Cœur). Abandonnés par les humains, les animaux deviennent sa vraie famille — solidarité interespèces qui comble le vide affectif." },
  { primary:true, q:"Quel est le titre de la sculpture de Louise Bourgeois représentant une araignée géante (1999) ?", choices:["Maman","Croc-Blanc","Méduse","Totem"], correct:0, expl:"'Maman' (1999) est une araignée de bronze monumentale (~9 m). Elle réimagine l'araignée — souvent perçue comme effrayante — en figure protectrice, symbole de la mère tisseuse. Vision radicalement nouvelle de la bête." },
  { primary:true, q:"Que symbolise l'œuvre 'Le dompteur de panthère' de Jean Velbert (musée des Beaux-Arts de Tours) ?", choices:["La fascination humaine pour la domination de l'animal sauvage","La cohabitation pacifique entre l'homme et le monde animal","La dénonciation de la cruauté des cirques","L'admiration pour la beauté naturelle des grands félins"], correct:0, expl:"Cette sculpture illustre la fascination humaine pour la maîtrise de l'animal sauvage. Dompter, c'est vouloir contrôler une nature qui nous dépasse — mais c'est aussi une violence symbolique sur le vivant." },
  { primary:true, q:"Que dit la Genèse (Bible) sur la relation entre l'homme et l'animal ?", choices:["Dieu donne à l'homme la domination sur les animaux","L'homme et l'animal sont créés égaux par Dieu","L'animal est sacré et ne peut être tué","L'homme descend des animaux selon la Bible"], correct:0, expl:"Dans la Genèse (1:28), Dieu donne à l'homme la 'domination' sur les animaux. Cette vision a profondément structuré le rapport occidental. L'Arche de Noé montre cependant une responsabilité de l'homme envers toutes les espèces." },
  { primary:true, q:"Quel animal vivait avec le poète anarchiste Léo Ferré ?", choices:["Un chimpanzé nommé Pépi","Un loup nommé Noir","Un corbeau nommé Edgar","Un perroquet nommé Rimbaud"], correct:0, expl:"Léo Ferré vivait avec Pépi, un chimpanzé qu'il considérait comme un membre de sa famille. Pour ce chanteur anarchiste, refuser toute hiérarchie — même entre espèces — était cohérent avec sa philosophie." },

  // ── PRIMAIRES — 🤔 COMPRENDRE L'ANIMAL ───────────────────────────────────
  { primary:true, q:"Quelle est la thèse centrale de Descartes sur les animaux ?", choices:["L'animal est une machine sans âme","L'animal est conscient comme l'homme","L'animal mérite des droits","L'animal est supérieur à l'homme"], correct:0, expl:"Dans le Discours de la méthode (1637), Descartes soutient que les animaux sont de simples automates sans âme ni pensée. Leurs cris de douleur ne sont que des mécanismes, comme le bruit d'une horloge brisée." },
  { primary:true, q:"Qui a dit : 'La grandeur d'une nation se juge à la façon dont elle traite ses animaux' ?", choices:["Gandhi","Kant","Schopenhauer","Anatole France"], correct:0, expl:"Cette citation de Gandhi place le traitement des animaux au cœur de la morale collective. Une société qui maltraite les animaux révèle quelque chose d'inquiétant sur ses valeurs profondes." },
  { primary:true, q:"Pourquoi les scientifiques étudient-ils le mécanisme d'hibernation de l'ours ?", choices:["Pour comprendre comment il conserve sa masse musculaire sans bouger pendant des mois","Pour analyser sa résistance au froid extrême","Pour étudier son système immunitaire en hiver","Pour comprendre comment il se nourrit sans manger"], correct:0, expl:"L'ours dort plusieurs mois sans perdre sa masse musculaire. Les scientifiques étudient ce mécanisme pour soigner les patients alités longtemps ou les astronautes en apesanteur — du biomimétisme médical." },
  { primary:true, q:"Qui a formalisé le concept de 'biomimétisme' en 1997 ?", choices:["Janine Benyus","Charles Darwin","Jane Goodall","Claude Bernard"], correct:0, expl:"Janine Benyus (1997) : s'inspirer des solutions du vivant au fil de l'évolution. Exemples : le Velcro (crochet de bardane), les façades imitant la peau de requin, les drones inspirés des oiseaux. Comprendre l'animal = 3,8 milliards d'années d'ingénierie naturelle." },
  { primary:true, q:"Que sont les 'NAC' et que révèlent-ils sur notre rapport à l'animal ?", choices:["Des animaux exotiques comme l'iguane ou le crocodile, témoignant d'une fascination pour le sauvage","Des animaux virtuels (jeux vidéo) qui remplacent les animaux réels","Des races créées par sélection génétique","Des robots animaux utilisés en zoothérapie"], correct:0, expl:"Les NAC (iguanes, crocodiles, serpents...) sont des animaux sauvages élevés comme animaux de compagnie. Ce phénomène révèle nos projections et désirs plus que notre compréhension réelle du vivant." },
  { primary:true, q:"Pourquoi la pêche au chalut est-elle critiquée comme emblème d'un rapport utilitaire à l'animal ?", choices:["Elle dévaste les fonds marins et capture des espèces non ciblées","Elle épuise les réserves de plancton nécessaires aux baleines","Elle utilise des substances chimiques nocives pour les poissons","Elle détruit les récifs coralliens par les ancres des bateaux"], correct:0, expl:"Le chalutage de fond détruit les écosystèmes benthiques et capture massivement des espèces non ciblées (dauphins, tortues, requins). Emblème d'un rapport purement utilitaire à l'animal marin, sans considération pour l'équilibre des espèces." },
  { primary:true, q:"Qu'est-ce qui distingue principalement l'élevage écologique de l'élevage industriel ?", choices:["Il respecte les comportements naturels de l'animal : espace, alimentation saine, socialisation","Il utilise uniquement des bâtiments en bois","Il pratique uniquement l'élevage de bovins","Il interdit toute forme d'abattage de l'animal"], correct:0, expl:"L'élevage écologique part du principe que comprendre les besoins naturels de l'animal améliore son bien-être et la qualité des produits. Réconciliation entre utilité économique et respect du vivant." },
  { primary:true, q:"Quelle association française publie des images d'abattoirs pour dénoncer l'élevage industriel ?", choices:["L214","WWF","PETA","SPE"], correct:0, expl:"L214 publie régulièrement des images de caméra cachée dans les abattoirs et élevages. Son nom vient de l'article L214 du Code rural qui reconnaît les animaux comme êtres sensibles." },
];

// ── Quiz Auteurs & Œuvres ─────────────────────────────────────────────────
// sens: 'auteur→oeuvre' | 'oeuvre→auteur'

const AUTEUR_OEUVRE_QCM = [
  { sens:'oeuvre→auteur', q:"Qui a publié 'La Libération animale' en 1975 ?", choices:["Peter Singer","Tom Regan","Jane Goodall","Donna Haraway"], correct:0, expl:"Peter Singer, philosophe australien, fonde le mouvement de libération animale. Il y forge le concept de spécisme et défend que toute souffrance animale inutile est moralement injustifiable." },
  { sens:'auteur→oeuvre', q:"Quelle œuvre Charles Darwin a-t-il publiée en 1859 ?", choices:["De l'origine des espèces","La Libération animale","Introduction à la médecine expérimentale","La Ferme des animaux"], correct:0, expl:"De l'origine des espèces (1859) révolutionne la biologie en démontrant l'évolution par sélection naturelle et la descendance commune de l'homme et des grands singes." },
  { sens:'oeuvre→auteur', q:"Qui a créé la bande dessinée 'Maus' (1986) ?", choices:["Art Spiegelman","George Orwell","Jack London","La Fontaine"], correct:0, expl:"Art Spiegelman raconte l'Holocauste via une métaphore animale : les Juifs = souris, les Nazis = chats, les Polonais = cochons. Prix Pulitzer 1992." },
  { sens:'auteur→oeuvre', q:"Quel roman Jack London a-t-il écrit sur un loup-chien en 1906 ?", choices:["Croc-Blanc","La Ferme des animaux","La Libération animale","Sans famille"], correct:0, expl:"Croc-Blanc (1906) narre le monde du point de vue d'un loup-chien entre la sauvagerie du Grand Nord et la domestication — narration à hauteur d'animal, précision comportementale remarquable." },
  { sens:'auteur→oeuvre', q:"George Orwell a écrit une satire du stalinisme avec des animaux en 1945. Laquelle ?", choices:["La Ferme des animaux","Maus","Croc-Blanc","La Libération animale"], correct:0, expl:"La Ferme des animaux (1945) : des cochons s'emparent du pouvoir après avoir chassé les humains, avant de devenir aussi tyranniques qu'eux. Satire glaçante du totalitarisme stalinien." },
  { sens:'oeuvre→auteur', q:"Qui a écrit 'Sans famille' (1878) ?", choices:["Hector Malot","Victor Hugo","Charles Dickens","Émile Zola"], correct:0, expl:"Hector Malot raconte Rémi, orphelin voyageant avec les animaux savants de Vitalis (chien Capi, singe Joli-Cœur). Les animaux deviennent sa famille de substitution — solidarité inter-espèces." },
  { sens:'auteur→oeuvre', q:"Quelle sculpture monumentale Louise Bourgeois a-t-elle réalisée en 1999 ?", choices:["Maman (araignée géante)","La Victoire de Samothrace","Le Penseur","Le Dompteur de panthère"], correct:0, expl:"'Maman' (1999) est une araignée de bronze d'environ 9 m. L'araignée — souvent perçue comme effrayante — devient figure protectrice. Vision radicalement nouvelle de la bête." },
  { sens:'oeuvre→auteur', q:"Qui a peint 'Le Lièvre' avec une précision quasi-scientifique en 1502 ?", choices:["Albrecht Dürer","Léonard de Vinci","Michel-Ange","Rembrandt"], correct:0, expl:"Dürer (1471-1528) réalise cette aquarelle avec une minutie scientifique — chaque poil, chaque reflet dans l'œil. Un hommage à la beauté et à la réalité de l'animal." },
  { sens:'auteur→oeuvre', q:"En quelle année La Fontaine a-t-il publié ses premières Fables ?", choices:["1668","1789","1492","1848"], correct:0, expl:"Les Fables de La Fontaine (1668-1694) utilisent l'anthropomorphisme animal pour critiquer indirectement la cour de Louis XIV. L'animal devient un miroir moral de l'homme." },
  { sens:'oeuvre→auteur', q:"'Introduction à l'étude de la médecine expérimentale' (1865) est l'œuvre de ?", choices:["Claude Bernard","Louis Pasteur","René Descartes","Pierre Curie"], correct:0, expl:"Claude Bernard théorise et pratique la vivisection. Il considère l'animal comme un outil de connaissance indispensable — déclenchant des débats éthiques dès le XIXe siècle." },
  { sens:'auteur→oeuvre', q:"Dans quel ouvrage Descartes (1637) soutient-il que les animaux sont de simples automates ?", choices:["Discours de la méthode","Critique de la raison pure","L'Éthique","Les Méditations métaphysiques"], correct:0, expl:"Dans le Discours de la méthode (1637), Descartes défend la thèse de l'animal-machine : les cris de douleur ne sont que des mécanismes, comme le bruit d'une horloge brisée." },
  { sens:'oeuvre→auteur', q:"'The Case for Animal Rights' (1983) est l'œuvre de ?", choices:["Tom Regan","Peter Singer","Donna Haraway","Jane Goodall"], correct:0, expl:"Tom Regan (1983) : les animaux sont des 'sujets d'une vie' avec croyances, désirs, mémoire — ils ont une valeur inhérente et méritent des droits propres, indépendamment de leur utilité." },
  { sens:'oeuvre→auteur', q:"Le concept de 'biomimétisme' (1997) a été formalisé par ?", choices:["Janine Benyus","Charles Darwin","Jane Goodall","Claude Bernard"], correct:0, expl:"Janine Benyus formalise le biomimétisme en 1997 : s'inspirer des solutions du vivant. Velcro = bardane, façades = peau de requin. L'animal = 3,8 milliards d'années d'ingénierie naturelle." },
  { sens:'oeuvre→auteur', q:"'When Species Meet' (2008) a été écrit par ?", choices:["Donna Haraway","Peter Singer","Tom Regan","Jane Goodall"], correct:0, expl:"Donna Haraway propose une éthique du 'care' inter-espèces — un modèle de relation homme-animal fondé sur la co-évolution et la responsabilité mutuelle." },
  { sens:'oeuvre→auteur', q:"Qui a écrit 'Le Livre de la Jungle' (1894) ?", choices:["Rudyard Kipling","Jack London","Jules Verne","Alexandre Dumas"], correct:0, expl:"Le Livre de la Jungle (1894) de Kipling met en scène Mowgli, enfant élevé par des loups. L'animal y est éducateur et tuteur — inversion de la hiérarchie habituelle homme-animal." },
  { sens:'auteur→oeuvre', q:"Quelle découverte Jane Goodall a-t-elle faite en observant les chimpanzés de Gombe (1960) ?", choices:["L'utilisation d'outils","Le langage des signes","La reconnaissance dans un miroir","La transmission culturelle intergénérationnelle"], correct:0, expl:"Goodall observe que les chimpanzés taillent des brindilles pour extraire des termites. L'utilisation d'outils, jusqu'alors considérée comme proprement humaine, s'effondre comme frontière absolue." },
  { sens:'oeuvre→auteur', q:"Le documentaire 'Blackfish' (2013) sur les orques captives a été réalisé par ?", choices:["Gabriela Cowperthwaite","Michael Moore","Werner Herzog","Nicolas Philibert"], correct:0, expl:"Blackfish (Cowperthwaite, 2013) révèle les conditions de vie des orques chez SeaWorld et a déclenché un mouvement mondial contre la captivité des cétacés — l'art documentaire change les lois." },
  { sens:'oeuvre→auteur', q:"'La Filiation de l'homme' (1871), suite de De l'origine des espèces, est l'œuvre de ?", choices:["Charles Darwin","Alfred Russel Wallace","Thomas Huxley","Claude Bernard"], correct:0, expl:"Darwin (1871) y examine spécifiquement l'origine humaine et les facultés mentales des animaux. Il ne nie pas les spécificités humaines : il les inscrit dans une continuité, pas une rupture absolue." },
  { sens:'auteur→oeuvre', q:"Peter Singer et Paola Cavalieri ont lancé en 1993 ?", choices:["Le Projet Grand Singe","La Déclaration de Cambridge","La règle des 3R","La Libération animale"], correct:0, expl:"Le Projet Grand Singe (1993) réclame des droits fondamentaux pour chimpanzés, gorilles, orangs-outans et bonobos : droit à la vie, à la liberté, à ne pas être torturé." },
  { sens:'oeuvre→auteur', q:"'Maman', l'araignée géante de bronze (~9 m), est une sculpture de ?", choices:["Louise Bourgeois","Camille Claudel","Niki de Saint-Phalle","Damien Hirst"], correct:0, expl:"Louise Bourgeois (1911-2010) réimagine l'araignée — souvent perçue comme effrayante — en figure protectrice et maternelle. Vision radicalement nouvelle de la bête dans l'art contemporain." },
  { sens:'auteur→oeuvre', q:"Dans quel poème (1785) Robert Burns évoque-t-il une souris dont le nid est détruit, inspirant Steinbeck ?", choices:["To a Mouse","The Raven","Ode to a Nightingale","La Jeune Captive"], correct:0, expl:"'To a Mouse' (Burns, 1785) : 'Les plans les mieux pensés des souris et des hommes tournent souvent mal.' Ce vers inspire le titre Des souris et des hommes (Steinbeck, 1937)." },
  { sens:'oeuvre→auteur', q:"L'article 'The Nature of Love' (1958) — démontrant que les bébés singes préfèrent une mère en tissu sans nourriture à une mère en fil de fer avec biberon — est l'œuvre de ?", choices:["Harry Harlow","B.F. Skinner","Konrad Lorenz","Frans de Waal"], correct:0, expl:"Harry Harlow (1958) prouve que l'attachement affectif (contact comfort) prime sur la nourriture chez les singes rhésus. Ce résultat fonde la théorie de l'attachement (Bowlby) et montre que la vie émotionnelle des primates est aussi fondamentale que leur biologie — contre la thèse cartésienne de l'animal-machine." },
];

// ── Données "Qu'est-ce que cache ce sujet ?" ─────────────────────────────
// primary:true = référence de la liste des 28 prioritaires

const CACHE_SUJETS = [
  {
    sujet: "Pensez-vous que l'animal puisse être considéré comme un véritable ami pour l'homme ?",
    refs: [
      { primary:true,  ref:"Argos, le chien d'Ulysse (Odyssée, Homère, ~VIIIe s. av. J.-C.)", correct:true, why:"Symbole de la fidélité absolue — l'animal qui reconnaît son maître après 20 ans." },
      { primary:false, ref:"Déclaration de Cambridge sur la Conscience (2012)", correct:true, why:"Base scientifique : les animaux ont une conscience émotionnelle, donc un lien affectif réel est possible." },
      { primary:false, ref:"Zoothérapie — chiens et chevaux thérapeutiques", correct:true, why:"Prouve le soutien affectif concret de l'animal — qualité amicale mesurable." },
      { primary:false, ref:"Jack London, Croc-Blanc (1906)", correct:true, why:"Illustre la construction progressive d'un lien entre l'homme et le loup — vers la confiance mutuelle." },
      { primary:true,  ref:"Peintures rupestres — Grotte Chauvet (-35 000 av. J.-C.)", correct:false, why:"L'art rupestre parle du rapport à l'animal sacré, pas d'un lien d'amitié. Hors sujet ici." },
      { primary:false, ref:"FAO (2013) — 14,5 % des GES liés à l'élevage", correct:false, why:"Concerne l'impact environnemental de l'élevage, pas la relation affective." },
      { primary:false, ref:"Aristote — 3 types d'amitié (Éthique à Nicomaque)", correct:true, why:"Définit l'amitié — indispensable pour questionner si l'animal peut l'atteindre." },
      { primary:false, ref:"Donna Haraway, When Species Meet (2008)", correct:true, why:"Propose une 'éthique du care' inter-espèces — un modèle de lien homme-animal." },
    ]
  },
  {
    sujet: "Faut-il interdire l'élevage industriel ?",
    refs: [
      { primary:false, ref:"FAO (2013) — l'élevage représente 14,5 % des GES mondiaux", correct:true, why:"Argument environnemental central — chiffre frappant pour une accroche." },
      { primary:false, ref:"Peter Singer, La Libération animale (1975)", correct:true, why:"La sensibilité des animaux d'élevage rend leur souffrance moralement inacceptable." },
      { primary:true,  ref:"L214 — images d'abattoirs français", correct:true, why:"Preuve documentaire des conditions réelles de l'élevage industriel en France." },
      { primary:false, ref:"Règle des 3R (Replace, Reduce, Refine)", correct:true, why:"Alternative à l'interdiction totale : réformer progressivement les pratiques." },
      { primary:true,  ref:"Argos, le chien d'Ulysse (Odyssée)", correct:false, why:"Concerne la relation affective, pas l'industrie alimentaire." },
      { primary:false, ref:"Maus (Spiegelman, 1986)", correct:false, why:"Animalisation des Juifs par les nazis — hors sujet pour l'élevage." },
      { primary:false, ref:"Déclaration de Cambridge (2012)", correct:true, why:"Les animaux d'élevage sont conscients et sensibles — fondement du débat moral." },
      { primary:true,  ref:"Élevage écologique — plein air, sans antibiotiques", correct:true, why:"Alternative concrète à l'élevage industriel — compromis entre économie et éthique." },
    ]
  },
  {
    sujet: "Les animaux ont-ils des droits ?",
    refs: [
      { primary:true,  ref:"Art. 515-14 du Code civil (France, 2015) — animaux êtres sensibles", correct:true, why:"La France reconnaît les animaux comme êtres sensibles — premier pas vers des droits." },
      { primary:false, ref:"Peter Singer — le spécisme (La Libération animale, 1975)", correct:true, why:"Argument philosophique central : discriminer les animaux est aussi injustifiable que le racisme." },
      { primary:false, ref:"Tom Regan, The Case for Animal Rights (1983)", correct:true, why:"Les animaux sont 'sujets d'une vie' — ils méritent des droits pour eux-mêmes." },
      { primary:false, ref:"Règle des 3R — expérimentation animale", correct:true, why:"Protection pratique existante — forme de droit déjà accordé aux animaux de laboratoire." },
      { primary:true,  ref:"Peintures rupestres — Grotte Chauvet (-35 000)", correct:false, why:"L'art préhistorique témoigne d'un rapport sacré à l'animal, pas de droits juridiques." },
      { primary:true,  ref:"Fables de La Fontaine (1668)", correct:false, why:"L'anthropomorphisme moral ne concerne pas directement les droits juridiques des animaux." },
      { primary:false, ref:"Déclaration de Cambridge (2012)", correct:true, why:"La conscience prouvée fonde la légitimité d'une protection — base scientifique des droits." },
      { primary:false, ref:"Bentham : 'peuvent-ils souffrir ?'", correct:true, why:"La souffrance — et non la raison — comme critère du droit à la protection." },
    ]
  },
  {
    sujet: "L'art permet-il de mieux comprendre notre rapport aux animaux ?",
    refs: [
      { primary:true,  ref:"Peintures rupestres — Grotte Chauvet (-35 000 av. J.-C.)", correct:true, why:"Les premières traces d'art humain sont des animaux — preuve que l'art et l'animal sont liés dès les origines." },
      { primary:false, ref:"Albrecht Dürer, Le Lièvre (1502)", correct:true, why:"Observation minutieuse = art comme moyen de voir l'animal tel qu'il est vraiment." },
      { primary:true,  ref:"Fables de La Fontaine (1668)", correct:true, why:"L'anthropomorphisme littéraire révèle nos projections sur les animaux — critique morale via l'animal." },
      { primary:false, ref:"Art Spiegelman, Maus (1986)", correct:true, why:"L'animalisation utilisée pour dénoncer la déshumanisation — l'art critique nos comportements envers l'animal." },
      { primary:false, ref:"Jack London, Croc-Blanc (1906)", correct:true, why:"Le roman donne accès à la subjectivité animale — empathie littéraire = compréhension du rapport à l'animal." },
      { primary:false, ref:"FAO (2013) — élevage et GES", correct:false, why:"Chiffre économique/environnemental — pas directement lié à la question du rapport via l'art." },
      { primary:true,  ref:"Louise Bourgeois, Maman (1999)", correct:true, why:"L'araignée monumentale trouble nos frontières affectives envers l'animal — art et rapport émotionnel." },
      { primary:false, ref:"Blackfish (documentaire, 2013)", correct:true, why:"Cinéma documentaire qui a changé le regard public sur les orques en captivité — art = prise de conscience." },
    ]
  },
  {
    sujet: "Manger de la viande est-il un acte moralement neutre ?",
    refs: [
      { primary:false, ref:"Peter Singer — le spécisme (1975)", correct:true, why:"Consommer un être sensible dont on reconnaît la souffrance est moralement chargé." },
      { primary:false, ref:"FAO (2013) — l'élevage représente 14,5 % des GES", correct:true, why:"L'impact environnemental de l'acte alimentaire individuel — responsabilité collective." },
      { primary:true,  ref:"L214 — conditions d'élevage en France", correct:true, why:"Acheter un produit d'élevage intensif = financer ces pratiques — engagement moral indirect." },
      { primary:false, ref:"Déclaration de Cambridge (2012)", correct:true, why:"Si les animaux souffrent consciemment, leur tuer sans nécessité engage une responsabilité." },
      { primary:true,  ref:"Peintures rupestres Chauvet — traces de chasse préhistorique", correct:true, why:"L'homme est omnivore depuis -35 000 ans — argument pour la 'naturalité' de l'acte." },
      { primary:false, ref:"Maus (Spiegelman)", correct:false, why:"Animalisation politique — sans lien direct avec la consommation alimentaire." },
      { primary:false, ref:"Aristote — types d'amitié", correct:false, why:"Hors sujet — concerne la relation affective, pas l'alimentation." },
      { primary:false, ref:"Viande cellulaire — 1er burger in vitro (2013)", correct:true, why:"Alternative technologique qui pourrait rendre l'acte moralement neutre à l'avenir." },
    ]
  },
  {
    sujet: "L'expérimentation animale est-elle moralement justifiable ?",
    refs: [
      { primary:true,  ref:"Claude Bernard — vivisection (1865)", correct:true, why:"Père de l'expérimentation in vivo : l'animal comme outil indispensable de la connaissance médicale." },
      { primary:true,  ref:"Les rongeurs — plus de 80 % des animaux de labo", correct:true, why:"Données concrètes sur l'ampleur du phénomène — argument pour un débat éthique ancré dans la réalité." },
      { primary:true,  ref:"Ham, chimpanzé de la NASA (1961)", correct:true, why:"L'animal utilisé comme substitut humain pour tester l'intolérable — quelle différence de statut moral ?" },
      { primary:true,  ref:"Pr Courtine — stimulation électrique, moelle épinière", correct:true, why:"Cas concret : l'expérimentation animale a permis à des paraplégiques de remarcher." },
      { primary:true,  ref:"Interdit tests cosmétiques sur animaux (UE, 2013)", correct:true, why:"La société trace une limite : toute expérimentation n'est pas justifiable moralement." },
      { primary:true,  ref:"Boîte de Skinner — conditionnement opérant (années 1930)", correct:true, why:"L'expérience fondatrice de la psychologie comportementale — outil de connaissance majeur." },
      { primary:false, ref:"Harry Harlow — mère en fil de fer vs mère en tissu (1958)", correct:true, why:"Parmi les expériences les plus controversées éthiquement : des bébés singes rhésus délibérément séparés de leur mère pour tester les limites du besoin affectif — un trauma psychologique assumé au nom de la science." },
      { primary:true,  ref:"Fables de La Fontaine (1668)", correct:false, why:"L'anthropomorphisme littéraire n'a pas de lien direct avec l'expérimentation scientifique." },
      { primary:true,  ref:"Animal totem — cultures amérindiennes", correct:false, why:"Vision spirituelle de l'animal — hors du cadre de l'expérimentation scientifique." },
    ]
  },
  {
    sujet: "Peut-on apprendre de l'animal ?",
    refs: [
      { primary:true,  ref:"Jane Goodall — chimpanzés et outils (1960)", correct:true, why:"L'observation de l'animal dans son milieu révèle des capacités insoupçonnées — l'animal nous apprend sur nous-mêmes." },
      { primary:true,  ref:"Biomimétisme — Janine Benyus (1997)", correct:true, why:"L'ingénierie s'inspire du vivant : le Velcro, les façades anti-frottement, les drones. L'animal = modèle technique." },
      { primary:true,  ref:"Ours en hibernation — bio-inspiration médicale", correct:true, why:"Conserver la masse musculaire sans bouger inspire la médecine pour les patients alités." },
      { primary:true,  ref:"Darwin — sélection naturelle (1859)", correct:true, why:"Comprendre l'évolution animale, c'est comprendre les mécanismes du vivant — y compris humain." },
      { primary:true,  ref:"Boîte de Skinner — conditionnement opérant", correct:true, why:"L'étude du comportement animal a fondé toute la psychologie de l'apprentissage humain." },
      { primary:false, ref:"Harry Harlow — attachement affectif chez les singes rhésus (1958)", correct:true, why:"En étudiant des primates, Harlow découvre une loi universelle sur l'amour : le besoin d'attachement prime sur la nourriture. Ce que l'animal révèle sur lui-même nous révèle sur nous-mêmes." },
      { primary:true,  ref:"Léo Ferré et Pépi le chimpanzé", correct:false, why:"Relation affective et philosophique — pas directement un apprentissage technique ou scientifique." },
      { primary:true,  ref:"Descartes — animal-machine (1637)", correct:false, why:"Si l'animal est une machine sans conscience, il n'y a rien à apprendre de lui — argument contraire." },
      { primary:true,  ref:"NAC — Nouveaux Animaux de Compagnie", correct:false, why:"Phénomène de mode révélant nos projections — l'inverse d'un vrai apprentissage de l'animal." },
    ]
  },
];

// ── Questions ouvertes — jeu de cours (PDF cugex) ────────────────────────

const QUESTIONS_OUVERTES = [
  // ── 🔬 CONNAÎTRE L'ANIMAL ─────────────────────────────────────────────────
  { cat:'science', tag:"Jane Goodall, 1960",
    q:"Nommez l'éthologue anglaise qui découvrit en 1960, en Tanzanie, que les chimpanzés fabriquaient et utilisaient des outils.",
    r:"Jane Goodall — en observant les chimpanzés de Gombe, elle voit des individus tailler des brindilles pour extraire des termites. L'utilisation d'outils, jusque-là considérée comme le propre de l'homme, s'effondre comme frontière absolue." },
  { cat:'science', tag:"Boîte de Skinner, 1930",
    q:"Quelle expérience des années 1930 réalisée par B.F. Skinner montra que les rats apprennent par récompense — et fonda toute la psychologie comportementale ?",
    r:"La boîte de Skinner — un rat (ou pigeon) apprend à appuyer sur un levier pour obtenir de la nourriture. Cela fonde le conditionnement opérant : apprentissage par renforcement positif ou négatif." },
  { cat:'science', tag:"Ham, NASA, 1961",
    q:"Comment s'appelle le chimpanzé envoyé dans l'espace par les Américains le 31 janvier 1961, avant les astronautes humains ?",
    r:"Ham — premier grand singe dans l'espace, quelques mois avant Alan Shepard. Il sert de substitut humain pour tester les conditions spatiales. L'animal utilisé avant l'homme : quelle différence de statut moral cela implique-t-il ?" },
  { cat:'science', tag:"Laïka, 1957",
    q:"Qui est le premier être vivant envoyé dans l'espace, en 1957, et quel fut son destin tragique ?",
    r:"Laïka, une chienne soviétique à bord de Spoutnik 2. Elle mourut dans l'espace quelques heures après le lancement — sans aucune possibilité de retour prévue dès le départ." },
  { cat:'science', tag:"Darwin, 1859",
    q:"Quel scientifique anglais du XIXe siècle théorisa l'évolution par sélection naturelle et démontra la descendance commune de l'homme et des grands singes ?",
    r:"Charles Darwin — De l'origine des espèces (1859). La frontière absolue entre l'homme et l'animal s'effondre : si nous descendons d'un ancêtre commun, comprendre l'animal c'est se comprendre soi-même." },
  { cat:'science', tag:"Descartes, animal-machine, 1637",
    q:"Quelle conception du XVIIe siècle assimile l'animal à une machine sans âme ni conscience, dont les cris ne sont que des mécanismes ?",
    r:"L'animal-machine de Descartes (Discours de la méthode, 1637). Les animaux sont comparés à des horloges brisées : leurs cris de douleur ne sont que du bruit mécanique, sans souffrance réelle." },
  { cat:'science', tag:"Règle des 3R",
    q:"Expliquez la règle des 3R qui encadre l'expérimentation animale.",
    r:"Replace : remplacer l'animal par des alternatives si possible. Reduce : réduire le nombre d'animaux utilisés. Refine : raffiner les procédures pour minimiser la souffrance. Ces 3R guident aujourd'hui toute recherche éthique." },
  { cat:'science', tag:"In vivo / in vitro / in silico",
    q:"Expliquez la différence entre la recherche in vivo, in vitro et in silico dans le contexte de l'expérimentation. Par quoi la science peut-elle remplacer l'animal ?",
    r:"In vivo = sur un organisme vivant. In vitro = en éprouvette (cultures cellulaires, organoïdes). In silico = simulation informatique. Ces deux dernières permettent de réduire l'expérimentation animale." },
  { cat:'science', tag:"Claude Bernard, vivisection, 1865",
    q:"Pourquoi les expériences du médecin français Claude Bernard sur des animaux vivants sans anesthésie (1865) nous paraissent-elles aujourd'hui monstrueuses ?",
    r:"Bernard pratiquait la vivisection : il prélevait le foie d'animaux vivants sans anesthésie pour étudier la glycémie. La théorie cartésienne de l'animal-machine légitimait alors ces pratiques — mais la Déclaration de Cambridge (2012) a depuis prouvé une sensibilité animale réelle." },
  { cat:'science', tag:"Rongeurs, >80 % des animaux de labo",
    q:"Quels animaux représentent plus de 80 % de ceux utilisés en laboratoire, et pourquoi sont-ils choisis ?",
    r:"Les souris et les rats, en raison de leur proximité génétique avec l'homme (~85 % des gènes codants partagés). Ce fait illustre l'utilisation de l'animal comme outil de la connaissance humaine." },
  { cat:'science', tag:"L214, Code Rural",
    q:"Qu'est-ce que l'article L214 du Code Rural dans le droit français, et pourquoi une association en a-t-elle tiré son nom ?",
    r:"L'art. L214 du Code Rural reconnaît les animaux comme « êtres sensibles ». L'association L214 s'en inspire pour dénoncer l'élevage industriel. En 2015, l'art. 515-14 du Code civil a renforcé cette reconnaissance." },
  { cat:'science', tag:"Pr Courtine, moelle épinière",
    q:"Pourquoi le Pr Courtine, chercheur suisse, a-t-il provoqué des lésions à la colonne vertébrale de souris ?",
    r:"Pour tester des implants électriques capables de rétablir la marche chez des rongeurs paralysés, avant de l'appliquer sur des patients humains paraplégiques. L'animal est le passage obligé avant l'application médicale." },
  { cat:'science', tag:"Élevage écologique",
    q:"Donnez 3 caractéristiques d'un élevage écologique qui le distinguent de l'élevage industriel.",
    r:"1) Espace suffisant (plein air, densité réduite). 2) Alimentation naturelle et saine (sans OGM ni antibiotiques préventifs). 3) Respect des comportements naturels (socialisation, accès à l'extérieur)." },
  { cat:'science', tag:"Biomimétisme, Benyus, 1997",
    q:"Expliquez la différence entre bio-inspiration et biomimétisme. Donnez un exemple concret.",
    r:"Bio-inspiration = s'inspirer d'un principe du vivant pour innover. Biomimétisme = reproduire exactement le mécanisme biologique. Ex : le Velcro imite les crochets de la bardane (biomimétisme). Janine Benyus a formalisé ce concept en 1997." },
  { cat:'science', tag:"Loi, industrie pharmaceutique, animaux",
    q:"À quoi la loi contraint-elle l'industrie pharmaceutique avant la mise sur le marché d'un nouveau médicament, en lien avec les animaux ?",
    r:"Des tests précliniques sur des animaux sont légalement obligatoires (règle des 3R) pour s'assurer de l'innocuité du produit avant les essais sur l'homme. La tension entre nécessité médicale et souffrance animale y est maximale." },
  { cat:'science', tag:"Harry Harlow, mère fil de fer vs tissu, 1958",
    q:"Quelles expériences Harry Harlow mena-t-il sur des singes rhésus dans les années 1950-60, et que révèlent-elles sur le rapport entre l'homme et l'animal ?",
    r:"Harlow (Université du Wisconsin) place des bébés singes face à deux mères artificielles : l'une en fil de fer avec biberon, l'autre en tissu doux sans nourriture. Les bébés passent 17h/24 avec la mère en tissu : le besoin d'attachement affectif (contact comfort) prime sur la nourriture. Ces résultats fondent la théorie de l'attachement (Bowlby) et prouvent que les primates ont une vie émotionnelle complexe — contre la thèse cartésienne de l'animal-machine. Éthiquement, ses expériences d'isolation (pit of despair) comptent parmi les plus controversées de l'histoire de la psychologie : l'animal délibérément traumatisé pour comprendre l'homme." },

  // ── 🎨 IMAGINER L'ANIMAL ──────────────────────────────────────────────────
  { cat:'art', tag:"Peintures rupestres, Chauvet, Lascaux",
    q:"Expliquez ce qu'est une peinture rupestre et citez deux sites préhistoriques emblématiques.",
    r:"Peinture réalisée sur la paroi d'une grotte préhistorique, représentant essentiellement des animaux. Sites : grotte Chauvet (Ardèche, -35 000 ans) et Lascaux (Dordogne, -17 000 ans). Ces œuvres témoignent d'un rapport sacré à l'animal dès l'origine de l'art humain." },
  { cat:'art', tag:"La Fontaine, Fables, 1668",
    q:"Citez une fable de La Fontaine, son sens moral, et expliquez comment l'animal y sert à parler de l'homme.",
    r:"Ex : « Le Corbeau et le Renard » (Fables, 1668) — le corbeau perd son fromage par vanité. La Fontaine utilise l'anthropomorphisme animal pour critiquer indirectement la cour de Louis XIV. L'animal est un miroir moral de l'homme." },
  { cat:'art', tag:"Sans famille, Malot, 1878",
    q:"Présentez le roman Sans famille d'Hector Malot (1878) et le rôle que jouent les animaux pour le personnage de Rémi.",
    r:"Rémi, orphelin vagabond, voyage avec la troupe d'animaux savants de Vitalis : le chien Capi et le singe Joli-Cœur. Abandonnés par les humains, ces animaux deviennent sa vraie famille de substitution — solidarité inter-espèces qui comble le vide affectif." },
  { cat:'art', tag:"Germinal, Zola, chevaux de mine",
    q:"Quel rôle jouent les animaux dans Germinal d'Émile Zola (1885) et que symbolisent-ils ?",
    r:"Les chevaux de mine (comme Bataille) ne remontent jamais à la surface, enfermés comme les mineurs. Condamnés au même enfer souterrain, ils symbolisent l'exploitation de tout être vivant par le capitalisme industriel." },
  { cat:'art', tag:"Steinbeck, Des souris et des hommes, 1937",
    q:"Dans quel roman américain le personnage de Curley révèle-t-il son attachement à son chien, et que préfigure l'abattage de ce chien ?",
    r:"Des souris et des hommes, John Steinbeck (1937). Le chien de Candy est abattu malgré les protestations de son maître — ce sort préfigure celui de Lennie. L'animal révèle ce que l'homme a de plus vulnérable face à un monde qui écrase les faibles." },
  { cat:'art', tag:"Léo Ferré, Pépi",
    q:"Quel chanteur français anarchiste vivait avec une femelle chimpanzé qu'il considérait comme un membre de sa famille ?",
    r:"Léo Ferré — il vivait avec Pépi, cohérent avec sa philosophie anarchiste qui refuse toute hiérarchie, même entre espèces. Ce choix de vie illustre un effacement radical de la frontière homme-animal." },
  { cat:'art', tag:"Argos, Ulysse, Odyssée",
    q:"Comment s'appelle le chien d'Ulysse dans l'Odyssée d'Homère, et que se passe-t-il lors du retour de son maître ?",
    r:"Argos — il reconnaît Ulysse après 20 ans d'absence et meurt de joie aussitôt. Seul être à l'avoir reconnu, il incarne la fidélité animale absolue. L'un des symboles les plus puissants du lien homme-animal dans la littérature." },
  { cat:'art', tag:"Actéon, Diane/Artémis",
    q:"Quel héros de la mythologie gréco-romaine est métamorphosé en cerf et dévoré par ses propres chiens ? Par quel ordre et pour quelle raison ?",
    r:"Actéon — puni par Diane/Artémis pour avoir surpris la déesse nue au bain. Sa métamorphose en cerf illustre la frontière fragile entre homme et animal dans la mythologie : la transgression du regard sur le divin se paye de sa nature humaine." },
  { cat:'art', tag:"Anubis, dieux égyptiens hybrides",
    q:"Citez un dieu égyptien hybride mi-homme mi-animal, expliquez son rôle et ce que cette hybridité symbolise.",
    r:"Anubis (tête de chacal) guide les âmes vers l'au-delà — animal psychopompe. Horus (tête de faucon) est le dieu du ciel ; Bastet (tête de chat) protège le foyer. Ces hybrides révèlent que l'animal est sacré : intermédiaire entre le divin et l'humain." },
  { cat:'art', tag:"Évangélistes, tétramorphes",
    q:"Chez les chrétiens, 3 des 4 évangélistes sont représentés par un animal (les tétramorphes). Donnez 1 exemple avec son symbole.",
    r:"Saint Marc = le lion (courage, résurrection), Saint Luc = le taureau (sacrifice), Saint Jean = l'aigle (contemplation divine). Ces symboles viennent d'une vision du prophète Ézéchiel — l'animal porte une signification spirituelle profonde." },
  { cat:'art', tag:"Animal totem, cultures animistes",
    q:"Qu'est-ce qu'un animal totem dans les cultures animistes et amérindiennes ?",
    r:"Animal spirituel qui protège et définit un individu ou un clan. Sacralisé, il est perçu comme intermédiaire entre le monde humain et le monde spirituel. Chaque individu lui est lié dès la naissance — rapport radicalement différent de la domination occidentale." },
  { cat:'art', tag:"Louise Bourgeois, Maman, 1999",
    q:"Que représente la sculpture « Maman » de Louise Bourgeois (1999) et pourquoi renverse-t-elle notre rapport à l'animal ?",
    r:"Une araignée géante de bronze (~9 m), réinterprétée comme figure maternelle protectrice — tisseuse de liens, à la fois imposante et douce. L'animal habituellement effrayant devient symbole de tendresse et de protection : vision radicalement nouvelle de la bête." },
  { cat:'art', tag:"Jean Véber, dompteuse de panthère",
    q:"Décrivez le tableau « La dompteuse de panthère » de Jean Véber (Musée des Beaux-Arts de Tours) et expliquez son sens.",
    r:"Une dompteuse de cirque maîtrise une panthère sauvage. Cette scène illustre la fascination humaine pour la domination de l'animal sauvage — mais aussi la violence symbolique exercée sur le vivant, maintenu par la force hors de son milieu naturel." },
  { cat:'art', tag:"Brunette, Jules Renard",
    q:"Citez une vache personnage de Jules Renard et expliquez ce qui lui arrive.",
    r:"Brunette, dans les Histoires naturelles de Jules Renard. Elle est vendue/abattue par son maître, mettant fin au lien affectif qui s'était noué. La dépendance économique détruit la relation — l'animal est toujours subordonné à l'utilité." },
  { cat:'art', tag:"Mayas, création de l'homme",
    q:"Quel récit les Mayas faisaient-ils de la création de l'homme par les dieux, et que dit-il de notre rapport à l'animal ?",
    r:"Les dieux ont créé l'homme à partir du maïs, après avoir échoué avec la boue (trop mou) et le bois (sans mémoire). L'homme n'est pas fait d'un matériau animal — il est d'une nature distincte, liée à la végétation." },
  { cat:'art', tag:"Genèse, Bible, domination",
    q:"Quelle place la Bible, à travers la Genèse, accorde-t-elle à l'homme par rapport aux animaux ?",
    r:"Dieu donne à l'homme la domination sur toutes les espèces (Genèse 1:28). Adam nomme les animaux, leur donnant une identité. L'Arche de Noé illustre cependant une responsabilité de l'homme envers la vie animale." },
  { cat:'art', tag:"Animaux dans l'Odyssée, classification",
    q:"Proposez une classification des différents types d'animaux présents dans l'Odyssée d'Homère.",
    r:"On distingue : (1) animaux domestiques et fidèles (Argos, troupeaux de Télémaque) ; (2) animaux sauvages ou monstrueux (Scylla, les sirènes-oiseaux) ; (3) animaux liés aux dieux ou à la métamorphose (Circé transforme les hommes en cochons). L'animal est à la frontière de l'humain et du divin." },
  { cat:'art', tag:"Tableau avec animaux (Dürer, Véber...)",
    q:"Citez un tableau qui met en scène des animaux et expliquez ce qu'il révèle sur notre regard.",
    r:"Ex : Le Lièvre d'Albrecht Dürer (1502) — aquarelle d'une précision quasi-scientifique, chaque poil, chaque reflet dans l'œil. L'art comme moyen de voir l'animal tel qu'il est vraiment, sans projection. Ou La dompteuse de panthère de Jean Véber — fascination pour la domination du sauvage." },

  // ── 🤔 COMPRENDRE L'ANIMAL ────────────────────────────────────────────────
  { cat:'societe', tag:"Domestique vs animal de compagnie",
    q:"Expliquez la différence entre un animal domestique et un animal de compagnie.",
    r:"Animal domestique = espèce sélectionnée génétiquement sur des générations pour vivre avec l'homme (chien, chat, vache). Animal de compagnie = choix individuel de garder un animal chez soi, domestique ou non (y compris les NAC). Le premier est le résultat d'une co-évolution ; le second est un rapport affectif ou de mode." },
  { cat:'societe', tag:"Gandhi",
    q:"Qui a dit : « On reconnaît la grandeur d'une nation à la manière dont elle traite ses animaux » ?",
    r:"Gandhi — cette citation place le traitement des animaux au cœur de la morale collective. Une société qui maltraite les animaux révèle quelque chose d'inquiétant sur ses valeurs profondes." },
  { cat:'societe', tag:"NAC, Nouveaux Animaux de Compagnie",
    q:"Qu'est-ce qu'un NAC ? Donnez un exemple et expliquez ce que ce phénomène révèle sur notre rapport à l'animal.",
    r:"NAC = Nouvel Animal de Compagnie — animal exotique ou sauvage élevé comme compagnie : iguane, varan, serpent, crocodile. Ce phénomène révèle une fascination pour le sauvage et une méconnaissance des besoins réels de l'animal." },
  { cat:'societe', tag:"Obésité des chiens, USA",
    q:"Aux États-Unis, environ 59 % des chiens sont obèses. VRAI ou FAUX ? Que révèle ce chiffre sur notre rapport à l'animal ?",
    r:"VRAI. Ce chiffre illustre une suranthropomorphisation de l'animal de compagnie : on lui prête nos habitudes alimentaires et nos comportements humains, au détriment de ses besoins naturels. L'animal devient un reflet de nos propres excès." },
  { cat:'societe', tag:"Funérailles animaux, Chine/USA",
    q:"D'après le Courrier International, quelle pratique se développe en Chine et aux États-Unis après la mort d'un animal domestique ?",
    r:"Des funérailles avec cérémonie, embaumement, crémation rituelle — parfois dans des espaces dédiés comme pour les humains. Signe d'une humanisation croissante de l'animal de compagnie : l'animal entre dans l'espace du deuil." },
  { cat:'societe', tag:"Poussettes pour animaux, Corée du Sud",
    q:"En Corée du Sud, quel objet destiné à l'origine aux bébés est vendu à 58 % pour des animaux de compagnie ?",
    r:"Des poussettes — signe de l'anthropomorphisation extrême des animaux de compagnie, traités comme des enfants. Ce phénomène illustre la dissolution de la frontière entre l'humain et l'animal dans les sociétés contemporaines." },
  { cat:'societe', tag:"Associations de protection animale",
    q:"Quel point commun entre « 30 millions d'amis », le WWF, « Animal Testing » et L214 ?",
    r:"Ce sont des associations ou organismes de protection des animaux, avec des approches différentes : affective (30 millions d'amis), environnementale (WWF), éthique contre les tests cosmétiques (Animal Testing), militante et documentaire (L214)." },
  { cat:'societe', tag:"Industrie animaux de compagnie, +45 % en 2030",
    q:"Donnez 5 exemples relevant de l'industrie mondiale des animaux de compagnie, secteur en croissance de +45 % d'ici 2030.",
    r:"Alimentation spécialisée (bio, sans gluten), vêtements et accessoires, soins médicaux (vétérinaires, assurances santé), garderies et hôtels pour animaux, salons de toilettage — une industrie qui traite l'animal de compagnie comme un consommateur à part entière." },
  { cat:'societe', tag:"Viande, réchauffement climatique",
    q:"Citez 3 problèmes que la surconsommation de viande pose pour le réchauffement climatique.",
    r:"1) Déforestation pour les pâturages et cultures fourragères (soja). 2) Émissions de méthane par les ruminants (l'élevage = 14,5 % des GES mondiaux, FAO 2013). 3) Pollution des nappes phréatiques par les nitrates d'élevage." },
  { cat:'societe', tag:"Alternatives à la viande",
    q:"Citez 2 alternatives à la consommation de viande et expliquez leur intérêt.",
    r:"1) Protéines végétales (légumineuses, tofu) — faible empreinte carbone, accessibles. 2) Insectes comestibles — riches en protéines, 12× moins de GES que le bœuf. 3) Viande in vitro — cultivée en laboratoire sans abattage (encore émergente à l'échelle industrielle)." },
  { cat:'societe', tag:"Santé, élevage industriel",
    q:"Pourquoi est-il meilleur pour la santé d'éviter la viande provenant d'élevage industriel ?",
    r:"Présence d'antibiotiques et d'hormones (risque de résistance bactérienne), alimentation non naturelle des animaux (OGM, farines), stress de l'animal qui dégrade la qualité de la viande (cortisol), risque bactérien accru (salmonelles, E. coli)." },
  { cat:'societe', tag:"Surpêche, océans vides 2050",
    q:"Pourquoi certains chercheurs avancent-ils le risque d'océans vides de poissons à l'horizon 2050 ?",
    r:"La surpêche industrielle (chalutage de fond qui détruit les écosystèmes benthiques et capture des espèces non ciblées) et la pollution des océans menacent l'équilibre des espèces marines — un effondrement possible de la chaîne alimentaire océanique." },
  { cat:'societe', tag:"Petit Paysan, 2017, épizootie",
    q:"Que raconte le film Petit Paysan (2017) d'Hubert Charuel et quel lien fait-il avec le thème ?",
    r:"Un jeune éleveur breton confronté à une épizootie (épidémie animale contagieuse) préfère dissimuler la maladie plutôt qu'abattre ses vaches. Son attachement dépasse la logique économique — l'animal de production devient un lien affectif existentiel." },
  { cat:'societe', tag:"Animal psychopompe",
    q:"Qu'est-ce qu'un animal psychopompe ? Donnez deux exemples dans des mythologies différentes.",
    r:"Animal qui guide les âmes vers l'au-delà dans les mythologies. Ex : Anubis (chacal) en Égypte, Cerbère (chien à trois têtes) en Grèce, le cheval dans les traditions nordiques. Ces animaux sacrent l'animal comme médiateur entre le monde des vivants et celui des morts." },
  { cat:'societe', tag:"Suisse, tests cosmétiques interdits",
    q:"Qu'est-ce qui est interdit en Suisse (avant la généralisation à toute l'UE en 2013) pour l'industrie cosmétique ?",
    r:"Les tests sur les animaux pour tout produit cosmétique. Ce tournant éthique illustre que la société a tracé une limite morale : faire souffrir un être sensible pour un rouge à lèvres est jugé injustifiable." },
];

// ── Points de méthodologie — ce qui ne s'improvise pas ───────────────────

const METHODO_POINTS = [
  {
    id: 1,
    icon: "❓",
    titre: "La problématique",
    soustitre: "Transformer le sujet en vraie question philosophique",
    danger: "Réciter des exemples sans poser de vraie question philosophique",
    piege: "« Je vais parler de l'homme et de l'animal... »",
    solution: "Transformer le sujet en une question tendue qui force à prendre position. Cherche la contradiction cachée dans le sujet.",
    astuce: "Formule : « En quoi [tension] implique-t-elle [enjeu profond] ? »",
    exemple: {
      sujet: "L'homme peut-il vivre sans l'animal ?",
      mauvais: "Comment l'homme se rapporte-t-il à l'animal dans sa vie quotidienne ?",
      bon: "En quoi notre dépendance à l'animal — pratique, affective, symbolique — révèle-t-elle l'impossibilité pour l'homme de se définir sans lui ?"
    },
    refs: ["Descartes (domination) ↔ Goodall (interdépendance)", "Genèse (domination) ↔ Loi 2015 (être sensible)"]
  },
  {
    id: 2,
    icon: "📋",
    titre: "Le plan structuré",
    soustitre: "Chaque partie répond à la problématique, pas juste liste des refs",
    danger: "Lister des références les unes après les autres sans logique argumentative",
    piege: "« I. Darwin / II. La Fontaine / III. Jane Goodall »",
    solution: "Chaque partie = une réponse partielle à la problématique. Les références illustrent l'argument — pas l'inverse.",
    astuce: "Teste chaque titre de partie : est-ce une réponse à ta problématique ? Oui → OK. Non → à retravailler.",
    exemple: {
      sujet: "L'animal est-il un outil ou un sujet ?",
      mauvais: "I. Darwin / II. Claude Bernard / III. Jane Goodall",
      bon: "I. L'animal comme outil de la connaissance humaine → II. La reconnaissance d'une sensibilité animale → III. Vers un statut moral et juridique de l'animal"
    },
    refs: ["I. Rongeurs, Claude Bernard, Ham → II. Décl. Cambridge, Loi 2015, Interdit cosmétiques → III. Biomimétisme, Gandhi, Élevage éco"]
  },
  {
    id: 3,
    icon: "🔍",
    titre: "L'analyse",
    soustitre: "Référence → implication → lien avec la problématique",
    danger: "Citer une référence sans expliquer ce qu'elle implique pour le sujet",
    piege: "« Jane Goodall a étudié les chimpanzés en Tanzanie. »",
    solution: "Toujours enchaîner : fait → ce que ça implique → lien avec la problématique.",
    astuce: "Formule AER : Argument (référence) + Explication (implication) + Reformulation (lien problématique).",
    exemple: {
      sujet: null,
      mauvais: "Jane Goodall a observé que les chimpanzés utilisaient des outils.",
      bon: "Jane Goodall (1960) découvre que les chimpanzés fabriquent des outils → cela remet en cause la définition de l'homme comme seul être rationnel → si l'animal pense et crée, comment justifier qu'on le traite comme un simple objet ?"
    },
    refs: ["Boîte de Skinner → l'animal apprend comme l'homme → le libre-arbitre est-il proprement humain ?", "Ham (1961) → l'animal subit avant l'homme → quelle différence de statut moral ?"]
  },
  {
    id: 4,
    icon: "⚖️",
    titre: "La nuance",
    soustitre: "Confronter des points de vue opposés — la marque d'une pensée mature",
    danger: "Soutenir un seul point de vue sans confronter les opposés",
    piege: "« L'animal souffre donc il faut le protéger. Toutes mes références le prouvent. »",
    solution: "Pour chaque affirmation forte, cherche la contre-affirmation. Deux positions contradictoires peuvent chacune avoir de la valeur.",
    astuce: "Utilise « Certes... / Mais... / Il faut cependant... » pour structurer la nuance sans t'y perdre.",
    exemple: {
      sujet: null,
      mauvais: "L'animal souffre, donc toute expérimentation est injuste.",
      bon: "Descartes (1637) considère l'animal comme une machine sans souffrance réelle — vision qui a longtemps justifié l'expérimentation. Mais Goodall (1960) et la Déclaration de Cambridge (2012) prouvent une intelligence et une sensibilité animales. Faut-il interdire toute expérimentation, ou la réguler — comme le font les 3R ?"
    },
    refs: ["Descartes (animal-machine) ↔ Goodall (intelligence)", "Claude Bernard (l'animal outil) ↔ Interdit cosmétiques UE 2013", "Genèse (domination) ↔ Gandhi (baromètre moral)"]
  },
  {
    id: 5,
    icon: "🎯",
    titre: "La conclusion",
    soustitre: "Réponse personnelle + ouverture — pas juste un résumé",
    danger: "Résumer sans apporter de réponse personnelle ni nuancée",
    piege: "« En conclusion, il y a des avantages et des inconvénients dans notre rapport à l'animal. »",
    solution: "Résoudre la tension de la problématique. Prendre position — de façon nuancée, mais ferme. Ouvrir sur une question plus large.",
    astuce: "Structure : bilan (réponse à la problématique) + position nuancée + ouverture sur un enjeu plus vaste.",
    exemple: {
      sujet: null,
      mauvais: "En conclusion, notre rapport à l'animal est complexe et évolue avec le temps.",
      bon: "Notre rapport à l'animal est le miroir de notre rapport à l'altérité : reconnaître aujourd'hui la sensibilité animale — via la loi de 2015, Goodall ou l'interdiction des tests cosmétiques — c'est définir un humanisme fondé sur la responsabilité, non la domination. Ouverture : cette évolution concernera-t-elle demain les intelligences artificielles ?"
    },
    refs: ["Loi 2015 + Goodall + Interdit cosmétiques → progression historique", "Gandhi comme fil rouge moral de la conclusion", "Biomimétisme comme modèle de relation non-dominante"]
  },
];

// ── Vue principale ────────────────────────────────────────────────────────

function CultureQuizView({ state, updateState, back }) {
  const [subMode, setSubMode] = React.useState(null);

  if (!subMode) return <CultureMenu back={back} setSubMode={setSubMode} />;
  if (subMode === 'qcm') return <QuizQCM back={() => setSubMode(null)} state={state} updateState={updateState} />;
  if (subMode === 'cache') return <QuizCache back={() => setSubMode(null)} state={state} updateState={updateState} />;
  if (subMode === 'methodo') return <MethodoReview back={() => setSubMode(null)} />;
  if (subMode === 'auteur') return <QuizAuteurOeuvre back={() => setSubMode(null)} state={state} updateState={updateState} />;
  if (subMode === 'ouvert') return <QuizOuvert back={() => setSubMode(null)} state={state} updateState={updateState} />;
  if (subMode === 'ecrire') return <QuizEcrire back={() => setSubMode(null)} state={state} updateState={updateState} />;
  return null;
}

function CultureMenu({ back, setSubMode }) {
  const nPrimary = CULTURE_QCM.filter(q => q.primary).length;
  const nSecondary = CULTURE_QCM.filter(q => !q.primary).length;

  return (
    <div style={{ maxWidth:800, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Connaissances culturelles" />

      <PaperCard style={{ padding:24, marginBottom:20,
        background:'linear-gradient(135deg, oklch(0.96 0.04 30), oklch(0.94 0.06 50))',
        border:'1.5px solid oklch(0.86 0.10 45)' }}>
        <div style={{ fontFamily:'var(--font-display)', fontSize:22, fontWeight:700,
          color:'oklch(0.22 0.08 30)', marginBottom:8 }}>
          Prépare tes références par cœur
        </div>
        <div style={{ fontSize:13.5, color:'oklch(0.35 0.05 30)', lineHeight:1.6 }}>
          <span style={{ display:'inline-block', background:'oklch(0.93 0.12 75)',
            border:'1px solid oklch(0.80 0.14 75)', borderRadius:6, padding:'2px 8px',
            fontSize:12, fontWeight:700, color:'oklch(0.40 0.12 75)', marginRight:6 }}>
            ★ {nPrimary} prioritaires
          </span>
          à maîtriser absolument ·{' '}
          <span style={{ display:'inline-block', background:'oklch(0.93 0.01 280)',
            border:'1px solid oklch(0.84 0.005 280)', borderRadius:6, padding:'2px 8px',
            fontSize:12, fontWeight:700, color:'oklch(0.50 0.02 280)', marginRight:6 }}>
            {nSecondary} secondaires
          </span>
          pour enrichir ta culture générale.
        </div>
      </PaperCard>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:16 }}>
        <ModeCard
          icon="🎯"
          title="QCM — Connaissances"
          desc={`${CULTURE_QCM.length} questions sur les auteurs, œuvres, dates et concepts. Filtre par type : prioritaires ou secondaires.`}
          color="oklch(0.55 0.13 200)"
          onClick={() => setSubMode('qcm')}
        />
        <ModeCard
          icon="🔍"
          title="Qu'est-ce que cache ce sujet ?"
          desc="Un sujet d'essai s'affiche. Identifie les références pertinentes — et les pièges. Les refs prioritaires sont signalées."
          color="oklch(0.52 0.14 300)"
          onClick={() => setSubMode('cache')}
        />
        <ModeCard
          icon="📝"
          title="Méthodologie de l'essai"
          desc="5 erreurs fatales à ne pas commettre : problématique, plan, analyse, nuance, conclusion. Exemples concrets inclus."
          color="oklch(0.50 0.16 45)"
          onClick={() => setSubMode('methodo')}
        />
        <ModeCard
          icon="📚"
          title="Auteurs & Œuvres"
          desc={`${AUTEUR_OEUVRE_QCM.length} questions dans les deux sens : qui a écrit quelle œuvre ? Quelle œuvre pour quel auteur ? Dates incluses.`}
          color="oklch(0.52 0.14 280)"
          onClick={() => setSubMode('auteur')}
        />
        <ModeCard
          icon="💬"
          title="Questions de cours"
          desc={`${QUESTIONS_OUVERTES.length} questions ouvertes — lis la question, réponds à voix haute, révèle la réponse modèle et auto-évalue-toi.`}
          color="oklch(0.50 0.12 240)"
          onClick={() => setSubMode('ouvert')}
        />
        <ModeCard
          icon="✍️"
          title="Mode Écriture"
          desc={`${CULTURE_QCM.length + AUTEUR_OEUVRE_QCM.length} questions sans choix multiples — rédige ta réponse librement, puis révèle la correction et auto-évalue-toi.`}
          color="oklch(0.48 0.16 160)"
          onClick={() => setSubMode('ecrire')}
        />
      </div>
    </div>
  );
}

function ModeCard({ icon, title, desc, color, onClick }) {
  return (
    <PaperCard onClick={onClick} className="hov-lift" style={{
      padding:24, cursor:'pointer',
      border:`1.5px solid color-mix(in oklch, ${color} 20%, white)`,
    }}>
      <div style={{ fontSize:36, marginBottom:12 }}>{icon}</div>
      <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:17,
        color:'oklch(0.22 0.02 280)', marginBottom:8 }}>{title}</div>
      <div style={{ fontSize:13, color:'oklch(0.45 0.02 280)', lineHeight:1.55, marginBottom:16 }}>{desc}</div>
      <Btn variant="solid" color={color} onClick={onClick}>Commencer →</Btn>
    </PaperCard>
  );
}

// ── QCM Mode ──────────────────────────────────────────────────────────────

const QCM_FILTERS = [
  { key:'all',       label:'Toutes',        count: CULTURE_QCM.length },
  { key:'primary',   label:'★ Prioritaires', count: CULTURE_QCM.filter(q=>q.primary).length },
  { key:'secondary', label:'Secondaires',    count: CULTURE_QCM.filter(q=>!q.primary).length },
];

function QuizQCM({ back, state, updateState }) {
  const [filter, setFilter] = React.useState('all');
  const [started, setStarted] = React.useState(false);

  if (!started) {
    return (
      <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
        <TopNav back={back} title="QCM — Connaissances" />
        <PaperCard style={{ padding:28, marginBottom:20,
          background:'linear-gradient(135deg, oklch(0.97 0.02 200), oklch(0.95 0.04 220))',
          border:'1.5px solid oklch(0.85 0.08 200)' }}>
          <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:700,
            color:'oklch(0.22 0.06 200)', marginBottom:16 }}>
            Choisis le type de questions
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {QCM_FILTERS.map(f => (
              <button key={f.key} onClick={() => setFilter(f.key)} style={{
                padding:'14px 18px', borderRadius:12, textAlign:'left',
                border: filter === f.key ? '2px solid oklch(0.55 0.13 200)' : '2px solid oklch(0.88 0.005 280)',
                background: filter === f.key ? 'oklch(0.93 0.06 200)' : 'white',
                cursor:'pointer', display:'flex', alignItems:'center', gap:12,
                fontFamily:'var(--font-ui)', transition:'all .15s ease',
              }}>
                <span style={{
                  width:20, height:20, borderRadius:'50%', flexShrink:0,
                  border: filter === f.key ? '6px solid oklch(0.55 0.13 200)' : '2px solid oklch(0.75 0.01 280)',
                  background: 'white',
                }} />
                <div>
                  <div style={{ fontWeight:700, fontSize:14,
                    color: filter === f.key ? 'oklch(0.28 0.09 200)' : 'oklch(0.28 0.02 280)' }}>
                    {f.label}
                    {f.key === 'primary' && (
                      <span style={{ marginLeft:8, fontSize:11, fontWeight:600,
                        background:'oklch(0.93 0.12 75)', color:'oklch(0.40 0.12 75)',
                        padding:'2px 6px', borderRadius:4 }}>
                        À maîtriser absolument
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize:12, color:'oklch(0.50 0.02 280)', marginTop:2 }}>
                    {f.count} question{f.count > 1 ? 's' : ''}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </PaperCard>
        <Btn variant="solid" color="oklch(0.55 0.13 200)" onClick={() => setStarted(true)}>
          Commencer →
        </Btn>
      </div>
    );
  }

  return <QuizQCMGame back={back} state={state} updateState={updateState} filter={filter} />;
}

function QuizQCMGame({ back, state, updateState, filter }) {
  const questions = React.useMemo(() => {
    const pool = filter === 'primary' ? CULTURE_QCM.filter(q => q.primary)
               : filter === 'secondary' ? CULTURE_QCM.filter(q => !q.primary)
               : CULTURE_QCM;
    return shuffle([...pool]).map(shuffleChoices);
  }, [filter]);

  const [qi, setQi] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);

  function choose(i) {
    if (selected !== null) return;
    setSelected(i);
    if (i === questions[qi].correct) setScore(s => s + 1);
  }

  function next() {
    setSelected(null);
    if (qi + 1 >= questions.length) {
      const xp = Math.round((score / questions.length) * 15);
      const ns = { ...state, xp: state.xp + xp };
      updateState(window.RevStore.bumpStreak(ns), `+${xp} XP — QCM terminé !`);
      setDone(true);
    } else {
      setQi(q => q + 1);
    }
  }

  if (done) return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="QCM — Connaissances" />
      <PaperCard style={{ padding:40, textAlign:'center',
        background:'linear-gradient(135deg, oklch(0.96 0.06 75), oklch(0.94 0.10 60))' }}>
        <div style={{ fontSize:48, marginBottom:8 }}>🏆</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize:28, fontWeight:700,
          color:'oklch(0.30 0.10 60)', marginBottom:8 }}>
          {score} / {questions.length}
        </div>
        <div style={{ fontSize:15, color:'oklch(0.40 0.07 60)', marginBottom:16 }}>
          {score >= questions.length * 0.8 ? 'Excellent ! Tu maîtrises ces références.' :
           score >= questions.length * 0.5 ? 'Bien ! Quelques lacunes à combler.' :
           'Continue d\'apprendre — ces références sont essentielles.'}
        </div>
        <Btn variant="solid" color="oklch(0.55 0.13 200)" onClick={back}>Retour →</Btn>
      </PaperCard>
    </div>
  );

  const q = questions[qi];

  return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="QCM — Connaissances" />
      <div style={{ marginBottom:16 }}>
        <ProgressBar value={qi + 1} max={questions.length} color="oklch(0.55 0.13 200)" />
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:6,
          fontSize:12, color:'oklch(0.50 0.02 280)', fontFamily:'var(--font-mono)' }}>
          <span>{qi + 1} / {questions.length}</span>
          <span>Score : {score}</span>
        </div>
      </div>

      <PaperCard style={{ padding:24, marginBottom:16, background:'oklch(0.975 0.01 280)' }}>
        {q.primary && (
          <div style={{ display:'inline-flex', alignItems:'center', gap:4,
            background:'oklch(0.93 0.12 75)', border:'1px solid oklch(0.80 0.14 75)',
            borderRadius:6, padding:'2px 8px', fontSize:11, fontWeight:700,
            color:'oklch(0.40 0.12 75)', marginBottom:10 }}>
            ★ Référence prioritaire
          </div>
        )}
        <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:700,
          lineHeight:1.3, color:'oklch(0.22 0.04 280)', textWrap:'balance' }}>
          {q.q}
        </div>
      </PaperCard>

      <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:16 }}>
        {q.choices.map((c, i) => {
          const isSelected = selected === i;
          const isCorrect = i === q.correct;
          let bg = 'white', border = 'oklch(0.88 0.005 280)', color = 'oklch(0.25 0.02 280)';
          if (selected !== null) {
            if (isCorrect) { bg = 'oklch(0.93 0.06 145)'; border = 'oklch(0.65 0.15 145)'; color = 'oklch(0.25 0.10 145)'; }
            else if (isSelected) { bg = 'oklch(0.93 0.06 25)'; border = 'oklch(0.65 0.15 25)'; color = 'oklch(0.30 0.10 25)'; }
          }
          return (
            <button key={i} onClick={() => choose(i)} disabled={selected !== null} style={{
              padding:'13px 18px', borderRadius:12, border:`2px solid ${border}`,
              background:bg, color, fontFamily:'var(--font-ui)', fontSize:14,
              textAlign:'left', cursor: selected !== null ? 'default' : 'pointer',
              display:'flex', alignItems:'center', gap:10, transition:'all .15s ease',
            }}>
              <span style={{ fontFamily:'var(--font-mono)', fontWeight:700, fontSize:12,
                color: selected !== null && isCorrect ? 'oklch(0.40 0.12 145)' : 'oklch(0.55 0.02 280)',
                flexShrink:0 }}>{['A','B','C','D'][i]}</span>
              <span style={{ fontWeight: (selected !== null && isCorrect) ? 700 : 400 }}>{c}</span>
              {selected !== null && isCorrect && <span style={{ marginLeft:'auto' }}>✓</span>}
              {selected !== null && isSelected && !isCorrect && <span style={{ marginLeft:'auto' }}>✗</span>}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div>
          <div style={{ padding:'14px 18px', borderRadius:12,
            background: selected === q.correct ? 'oklch(0.95 0.05 145)' : 'oklch(0.96 0.04 25)',
            border:`1.5px solid ${selected === q.correct ? 'oklch(0.75 0.12 145)' : 'oklch(0.75 0.12 25)'}`,
            marginBottom:12, fontSize:13.5, lineHeight:1.6,
            color: selected === q.correct ? 'oklch(0.25 0.10 145)' : 'oklch(0.28 0.08 25)' }}>
            <strong>{selected === q.correct ? '✓ Correct !' : '✗ Raté.'}</strong><br />
            {q.expl}
          </div>
          <Btn variant="solid" color="oklch(0.55 0.13 200)" onClick={next}>
            {qi + 1 >= questions.length ? 'Voir le score →' : 'Question suivante →'}
          </Btn>
        </div>
      )}
    </div>
  );
}

// ── Question cachée Mode ────────────────────────────────────────────────

function QuizCache({ back, state, updateState }) {
  const items = React.useMemo(() => shuffle([...CACHE_SUJETS]), []);
  const [qi, setQi] = React.useState(0);
  const [selected, setSelected] = React.useState(new Set());
  const [revealed, setRevealed] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);

  const item = items[qi];
  const refs = React.useMemo(() => shuffle([...item.refs]), [qi]);

  function toggle(i) {
    if (revealed) return;
    setSelected(s => {
      const n = new Set(s);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });
  }

  function validate() {
    const correct = refs.filter((r, i) => selected.has(i) && r.correct).length;
    const wrong = refs.filter((r, i) => selected.has(i) && !r.correct).length;
    const pts = Math.max(0, correct - wrong);
    setScore(s => s + pts);
    setRevealed(true);
  }

  function next() {
    setSelected(new Set());
    setRevealed(false);
    if (qi + 1 >= items.length) {
      const xp = score * 2;
      const ns = { ...state, xp: state.xp + xp };
      updateState(window.RevStore.bumpStreak(ns), `+${xp} XP — Jeu terminé !`);
      setDone(true);
    } else {
      setQi(q => q + 1);
    }
  }

  if (done) return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Qu'est-ce que cache ce sujet ?" />
      <PaperCard style={{ padding:40, textAlign:'center',
        background:'linear-gradient(135deg, oklch(0.96 0.05 300), oklch(0.94 0.08 280))' }}>
        <div style={{ fontSize:48, marginBottom:8 }}>🎓</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize:26, fontWeight:700,
          color:'oklch(0.25 0.10 280)', marginBottom:8 }}>Score total : {score} pts</div>
        <div style={{ fontSize:14, color:'oklch(0.40 0.06 280)', marginBottom:16 }}>
          Tu sais maintenant quelles références mobiliser pour chaque sujet !
        </div>
        <Btn variant="solid" color="oklch(0.52 0.14 300)" onClick={back}>Retour →</Btn>
      </PaperCard>
    </div>
  );

  return (
    <div style={{ maxWidth:780, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Qu'est-ce que cache ce sujet ?" />

      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10 }}>
        <ProgressBar value={qi + 1} max={items.length} color="oklch(0.52 0.14 300)" />
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:12,
        fontSize:12, color:'oklch(0.50 0.02 280)', fontFamily:'var(--font-mono)' }}>
        <span>Sujet {qi + 1} / {items.length}</span>
        <span>Score : {score}</span>
      </div>

      <div style={{ display:'flex', gap:8, marginBottom:12 }}>
        <span style={{ fontSize:11, fontWeight:700, padding:'3px 8px', borderRadius:5,
          background:'oklch(0.93 0.12 75)', color:'oklch(0.40 0.12 75)',
          border:'1px solid oklch(0.80 0.14 75)' }}>★ Prioritaire</span>
        <span style={{ fontSize:11, color:'oklch(0.40 0.02 280)' }}>= dans tes 28 références à maîtriser absolument</span>
      </div>

      <PaperCard style={{ padding:22, marginBottom:14,
        background:'linear-gradient(135deg, oklch(0.96 0.04 280), oklch(0.94 0.05 260))',
        border:'1.5px solid oklch(0.85 0.08 280)' }}>
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:1.2, color:'oklch(0.45 0.12 280)',
          textTransform:'uppercase', marginBottom:8 }}>Sujet d'essai</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize:17, fontWeight:700,
          lineHeight:1.3, color:'oklch(0.20 0.06 280)', textWrap:'balance' }}>
          « {item.sujet} »
        </div>
      </PaperCard>

      <div style={{ fontSize:13, color:'oklch(0.40 0.02 280)', marginBottom:12, fontWeight:600 }}>
        {revealed ? 'Résultat :' : 'Coche toutes les références pertinentes pour ce sujet :'}
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:16 }}>
        {refs.map((r, i) => {
          const isSelected = selected.has(i);
          let bg = isSelected ? 'oklch(0.93 0.04 300)' : 'white';
          let border = isSelected ? 'oklch(0.70 0.12 300)' : 'oklch(0.88 0.005 280)';
          let label = null;
          if (revealed) {
            if (r.correct && isSelected) { bg = 'oklch(0.93 0.06 145)'; border = 'oklch(0.65 0.12 145)'; label = '✓ Pertinent'; }
            else if (r.correct && !isSelected) { bg = 'oklch(0.94 0.05 75)'; border = 'oklch(0.70 0.12 75)'; label = '→ Oubliée'; }
            else if (!r.correct && isSelected) { bg = 'oklch(0.93 0.05 25)'; border = 'oklch(0.65 0.12 25)'; label = '✗ Piège'; }
            else { bg = 'oklch(0.98 0.002 280)'; border = 'oklch(0.91 0.003 280)'; }
          }
          return (
            <button key={i} onClick={() => toggle(i)} disabled={revealed} style={{
              padding:'12px 16px', borderRadius:11, border:`2px solid ${border}`, background:bg,
              fontFamily:'var(--font-ui)', fontSize:13.5, textAlign:'left',
              cursor: revealed ? 'default' : 'pointer', transition:'all .15s ease',
              display:'flex', alignItems:'flex-start', gap:10,
            }}>
              <span style={{ width:20, height:20, borderRadius:6, border:'2px solid currentColor',
                flexShrink:0, display:'grid', placeItems:'center', marginTop:1,
                background: isSelected ? 'oklch(0.52 0.14 300)' : 'transparent',
                color: isSelected ? 'white' : 'oklch(0.65 0.02 280)',
                fontSize:12, fontWeight:700 }}>
                {isSelected ? '✓' : ''}
              </span>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:600, color:'oklch(0.22 0.04 280)', marginBottom:2,
                  display:'flex', alignItems:'center', gap:6, flexWrap:'wrap' }}>
                  {r.ref}
                  {r.primary && (
                    <span style={{ fontSize:10, fontWeight:700, padding:'1px 5px', borderRadius:4,
                      background:'oklch(0.93 0.12 75)', color:'oklch(0.40 0.12 75)',
                      border:'1px solid oklch(0.80 0.14 75)', flexShrink:0 }}>★</span>
                  )}
                </div>
                {revealed && (
                  <div style={{ fontSize:12.5, lineHeight:1.5, marginTop:2,
                    color: r.correct ? 'oklch(0.30 0.08 145)' : 'oklch(0.40 0.06 25)' }}>
                    {r.why}
                  </div>
                )}
              </div>
              {revealed && label && (
                <span style={{ fontSize:12, fontWeight:700, flexShrink:0, padding:'2px 8px', borderRadius:999,
                  background: r.correct ? (isSelected ? 'oklch(0.80 0.12 145)' : 'oklch(0.85 0.10 75)') : 'oklch(0.82 0.10 25)',
                  color: r.correct ? (isSelected ? 'oklch(0.25 0.12 145)' : 'oklch(0.30 0.10 70)') : 'oklch(0.30 0.10 25)',
                }}>
                  {label}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {!revealed ? (
        <Btn variant="solid" color="oklch(0.52 0.14 300)" onClick={validate}
          disabled={selected.size === 0}>
          Valider mes choix →
        </Btn>
      ) : (
        <Btn variant="solid" color="oklch(0.52 0.14 300)" onClick={next}>
          {qi + 1 >= items.length ? 'Voir mon score →' : 'Sujet suivant →'}
        </Btn>
      )}
    </div>
  );
}

// ── Méthodologie de l'essai ────────────────────────────────────────────────

function MethodoReview({ back }) {
  const [current, setCurrent] = React.useState(0); // index dans METHODO_POINTS
  const [revealed, setRevealed] = React.useState(false);
  const [scores, setScores] = React.useState({}); // id → 'ok' | 'review'
  const [done, setDone] = React.useState(false);

  const point = METHODO_POINTS[current];
  const isLast = current === METHODO_POINTS.length - 1;

  function handleAssess(val) {
    const newScores = { ...scores, [point.id]: val };
    setScores(newScores);
    if (isLast) {
      setDone(true);
    } else {
      setCurrent(c => c + 1);
      setRevealed(false);
    }
  }

  if (done) {
    const toReview = METHODO_POINTS.filter(p => scores[p.id] === 'review');
    const mastered = METHODO_POINTS.filter(p => scores[p.id] === 'ok');
    return (
      <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
        <TopNav back={back} title="Méthodologie de l'essai" />
        <PaperCard style={{ padding:32,
          background:'linear-gradient(135deg, oklch(0.96 0.05 45), oklch(0.94 0.08 35))',
          border:'1.5px solid oklch(0.84 0.10 45)' }}>
          <div style={{ fontSize:40, marginBottom:12 }}>📊</div>
          <div style={{ fontFamily:'var(--font-display)', fontSize:22, fontWeight:700,
            color:'oklch(0.25 0.10 40)', marginBottom:16 }}>
            Bilan méthodologie
          </div>
          {mastered.length > 0 && (
            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:13, fontWeight:700, color:'oklch(0.30 0.12 145)',
                marginBottom:8 }}>Maîtrisé ✓</div>
              {mastered.map(p => (
                <div key={p.id} style={{ display:'flex', alignItems:'center', gap:8,
                  padding:'8px 12px', borderRadius:8, background:'oklch(0.95 0.05 145)',
                  marginBottom:6, fontSize:13.5, fontWeight:600, color:'oklch(0.28 0.10 145)' }}>
                  {p.icon} {p.titre}
                </div>
              ))}
            </div>
          )}
          {toReview.length > 0 && (
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:13, fontWeight:700, color:'oklch(0.35 0.12 25)',
                marginBottom:8 }}>À retravailler ↺</div>
              {toReview.map(p => (
                <div key={p.id} style={{ display:'flex', alignItems:'center', gap:8,
                  padding:'8px 12px', borderRadius:8, background:'oklch(0.95 0.05 25)',
                  marginBottom:6, fontSize:13.5, fontWeight:600, color:'oklch(0.32 0.10 25)' }}>
                  {p.icon} {p.titre}
                  <span style={{ fontSize:12, color:'oklch(0.42 0.08 25)' }}>— {p.soustitre}</span>
                </div>
              ))}
            </div>
          )}
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            <Btn variant="solid" color="oklch(0.50 0.16 45)" onClick={() => {
              setCurrent(0); setRevealed(false); setScores({}); setDone(false);
            }}>Recommencer →</Btn>
            <Btn variant="ghost" color="oklch(0.50 0.16 45)" onClick={back}>Retour au menu</Btn>
          </div>
        </PaperCard>
      </div>
    );
  }

  return (
    <div style={{ maxWidth:720, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Méthodologie de l'essai" />

      <div style={{ marginBottom:16 }}>
        <ProgressBar value={current + 1} max={METHODO_POINTS.length} color="oklch(0.50 0.16 45)" />
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:5,
          fontSize:12, color:'oklch(0.50 0.02 280)', fontFamily:'var(--font-mono)' }}>
          <span>Point {current + 1} / {METHODO_POINTS.length}</span>
          <span>{METHODO_POINTS.filter(p => scores[p.id]).length} évalués</span>
        </div>
      </div>

      {/* Carte principale */}
      <PaperCard style={{ padding:28, marginBottom:16,
        background:'linear-gradient(135deg, oklch(0.97 0.03 45), oklch(0.95 0.05 35))',
        border:'1.5px solid oklch(0.84 0.10 45)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
          <span style={{ fontSize:32 }}>{point.icon}</span>
          <div>
            <div style={{ fontFamily:'var(--font-display)', fontSize:20, fontWeight:700,
              color:'oklch(0.25 0.10 40)' }}>
              {point.id}. {point.titre}
            </div>
            <div style={{ fontSize:13, color:'oklch(0.42 0.08 40)', marginTop:2 }}>
              {point.soustitre}
            </div>
          </div>
        </div>

        <div style={{ padding:'12px 16px', borderRadius:10, background:'oklch(0.93 0.07 25)',
          border:'1px solid oklch(0.80 0.12 25)', marginBottom:14 }}>
          <div style={{ fontSize:11, fontWeight:700, color:'oklch(0.45 0.12 25)',
            textTransform:'uppercase', letterSpacing:1, marginBottom:6 }}>Erreur fréquente</div>
          <div style={{ fontSize:13.5, fontWeight:600, color:'oklch(0.30 0.10 25)', marginBottom:4 }}>
            {point.danger}
          </div>
          <div style={{ fontSize:12.5, color:'oklch(0.40 0.08 25)', fontStyle:'italic' }}>
            Ex. : {point.piege}
          </div>
        </div>

        {!revealed ? (
          <Btn variant="solid" color="oklch(0.50 0.16 45)" onClick={() => setRevealed(true)}>
            Voir la solution et les exemples →
          </Btn>
        ) : (
          <div>
            <div style={{ padding:'14px 16px', borderRadius:10, background:'oklch(0.93 0.06 145)',
              border:'1px solid oklch(0.75 0.12 145)', marginBottom:14 }}>
              <div style={{ fontSize:11, fontWeight:700, color:'oklch(0.35 0.12 145)',
                textTransform:'uppercase', letterSpacing:1, marginBottom:6 }}>Ce qu'il faut faire</div>
              <div style={{ fontSize:13.5, fontWeight:600, color:'oklch(0.25 0.10 145)',
                lineHeight:1.55, marginBottom:8 }}>
                {point.solution}
              </div>
              <div style={{ fontSize:12.5, color:'oklch(0.30 0.08 145)', background:'oklch(0.88 0.08 145)',
                padding:'8px 12px', borderRadius:7, fontFamily:'var(--font-mono)' }}>
                💡 {point.astuce}
              </div>
            </div>

            {/* Exemple comparatif */}
            <div style={{ marginBottom:14 }}>
              {point.exemple.sujet && (
                <div style={{ fontSize:12, fontWeight:600, color:'oklch(0.45 0.06 280)',
                  marginBottom:8, fontStyle:'italic' }}>
                  Sujet : « {point.exemple.sujet} »
                </div>
              )}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                <div style={{ padding:'12px 14px', borderRadius:10, background:'oklch(0.95 0.04 25)',
                  border:'1px solid oklch(0.82 0.09 25)' }}>
                  <div style={{ fontSize:10, fontWeight:700, color:'oklch(0.50 0.10 25)',
                    textTransform:'uppercase', letterSpacing:0.8, marginBottom:6 }}>✗ À éviter</div>
                  <div style={{ fontSize:12.5, color:'oklch(0.35 0.08 25)', lineHeight:1.5, fontStyle:'italic' }}>
                    « {point.exemple.mauvais} »
                  </div>
                </div>
                <div style={{ padding:'12px 14px', borderRadius:10, background:'oklch(0.94 0.05 145)',
                  border:'1px solid oklch(0.78 0.12 145)' }}>
                  <div style={{ fontSize:10, fontWeight:700, color:'oklch(0.38 0.12 145)',
                    textTransform:'uppercase', letterSpacing:0.8, marginBottom:6 }}>✓ À faire</div>
                  <div style={{ fontSize:12.5, color:'oklch(0.28 0.10 145)', lineHeight:1.5 }}>
                    « {point.exemple.bon} »
                  </div>
                </div>
              </div>
            </div>

            {/* Références à mobiliser */}
            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:11, fontWeight:700, color:'oklch(0.45 0.02 280)',
                textTransform:'uppercase', letterSpacing:1, marginBottom:8 }}>
                Références à mobiliser pour illustrer
              </div>
              {point.refs.map((r, i) => (
                <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:8,
                  padding:'7px 12px', borderRadius:8, background:'oklch(0.96 0.01 280)',
                  border:'1px solid oklch(0.89 0.005 280)', marginBottom:6,
                  fontSize:12.5, color:'oklch(0.30 0.04 280)' }}>
                  <span style={{ color:'oklch(0.55 0.13 200)', fontWeight:700, marginTop:1 }}>→</span>
                  <span>{r}</span>
                </div>
              ))}
            </div>

            {/* Auto-évaluation */}
            <div style={{ borderTop:'1px solid oklch(0.88 0.01 280)', paddingTop:16 }}>
              <div style={{ fontSize:13, fontWeight:700, color:'oklch(0.40 0.04 280)', marginBottom:10 }}>
                Honnêtement, est-ce que tu maîtrises ce point ?
              </div>
              <div style={{ display:'flex', gap:10 }}>
                <button onClick={() => handleAssess('ok')} style={{
                  flex:1, padding:'12px 16px', borderRadius:10, border:'2px solid oklch(0.65 0.15 145)',
                  background:'oklch(0.93 0.07 145)', color:'oklch(0.25 0.12 145)',
                  fontFamily:'var(--font-ui)', fontWeight:700, fontSize:14, cursor:'pointer',
                }}>Oui, je maîtrise ✓</button>
                <button onClick={() => handleAssess('review')} style={{
                  flex:1, padding:'12px 16px', borderRadius:10, border:'2px solid oklch(0.65 0.12 25)',
                  background:'oklch(0.93 0.06 25)', color:'oklch(0.28 0.10 25)',
                  fontFamily:'var(--font-ui)', fontWeight:700, fontSize:14, cursor:'pointer',
                }}>À retravailler ↺</button>
              </div>
            </div>
          </div>
        )}
      </PaperCard>
    </div>
  );
}

// ── Quiz Auteurs & Œuvres ─────────────────────────────────────────────────

function QuizAuteurOeuvre({ back, state, updateState }) {
  const questions = React.useMemo(() => shuffle([...AUTEUR_OEUVRE_QCM]).map(shuffleChoices), []);
  const [qi, setQi] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);

  function choose(i) {
    if (selected !== null) return;
    setSelected(i);
    if (i === questions[qi].correct) setScore(s => s + 1);
  }

  function next() {
    setSelected(null);
    if (qi + 1 >= questions.length) {
      const xp = Math.round((score / questions.length) * 15);
      const ns = { ...state, xp: state.xp + xp };
      updateState(window.RevStore.bumpStreak(ns), `+${xp} XP — Auteurs & Œuvres terminé !`);
      setDone(true);
    } else {
      setQi(q => q + 1);
    }
  }

  if (done) return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Auteurs & Œuvres" />
      <PaperCard style={{ padding:40, textAlign:'center',
        background:'linear-gradient(135deg, oklch(0.96 0.06 280), oklch(0.94 0.09 300))' }}>
        <div style={{ fontSize:48, marginBottom:8 }}>📚</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize:28, fontWeight:700,
          color:'oklch(0.28 0.12 280)', marginBottom:8 }}>
          {score} / {questions.length}
        </div>
        <div style={{ fontSize:15, color:'oklch(0.40 0.08 280)', marginBottom:16 }}>
          {score >= questions.length * 0.8 ? 'Parfait ! Tu maîtrises tes références.' :
           score >= questions.length * 0.5 ? 'Bien ! Continue à mémoriser auteurs et dates.' :
           'Relis la bibliothèque — auteurs, titres et dates sont essentiels à l\'oral et à l\'écrit.'}
        </div>
        <Btn variant="solid" color="oklch(0.52 0.14 280)" onClick={back}>Retour →</Btn>
      </PaperCard>
    </div>
  );

  const q = questions[qi];
  const DIRECTION_LABEL = {
    'auteur→oeuvre': '✍ Auteur → Œuvre',
    'oeuvre→auteur': '📖 Œuvre → Auteur',
  };

  return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Auteurs & Œuvres" />
      <div style={{ marginBottom:16 }}>
        <ProgressBar value={qi + 1} max={questions.length} color="oklch(0.52 0.14 280)" />
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:6,
          fontSize:12, color:'oklch(0.50 0.02 280)', fontFamily:'var(--font-mono)' }}>
          <span>{qi + 1} / {questions.length}</span>
          <span>Score : {score}</span>
        </div>
      </div>

      <PaperCard style={{ padding:24, marginBottom:16, background:'oklch(0.975 0.01 280)' }}>
        <div style={{ display:'inline-flex', alignItems:'center',
          background:'oklch(0.93 0.06 280)', border:'1px solid oklch(0.82 0.10 280)',
          borderRadius:6, padding:'2px 10px', fontSize:11, fontWeight:700,
          color:'oklch(0.38 0.12 280)', marginBottom:10 }}>
          {DIRECTION_LABEL[q.sens] || 'Question'}
        </div>
        <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:700,
          lineHeight:1.3, color:'oklch(0.22 0.04 280)', textWrap:'balance' }}>
          {q.q}
        </div>
      </PaperCard>

      <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:16 }}>
        {q.choices.map((c, i) => {
          const isSelected = selected === i;
          const isCorrect = i === q.correct;
          let bg = 'white', border = 'oklch(0.88 0.005 280)', color = 'oklch(0.25 0.02 280)';
          if (selected !== null) {
            if (isCorrect) { bg = 'oklch(0.93 0.06 145)'; border = 'oklch(0.65 0.15 145)'; color = 'oklch(0.25 0.10 145)'; }
            else if (isSelected) { bg = 'oklch(0.93 0.06 25)'; border = 'oklch(0.65 0.15 25)'; color = 'oklch(0.30 0.10 25)'; }
          }
          return (
            <button key={i} onClick={() => choose(i)} disabled={selected !== null} style={{
              padding:'13px 18px', borderRadius:12, border:`2px solid ${border}`,
              background:bg, color, fontFamily:'var(--font-ui)', fontSize:14,
              textAlign:'left', cursor: selected !== null ? 'default' : 'pointer',
              display:'flex', alignItems:'center', gap:10, transition:'all .15s ease',
            }}>
              <span style={{ fontFamily:'var(--font-mono)', fontWeight:700, fontSize:12,
                color: selected !== null && isCorrect ? 'oklch(0.40 0.12 145)' : 'oklch(0.55 0.02 280)',
                flexShrink:0 }}>{['A','B','C','D'][i]}</span>
              <span style={{ fontWeight: (selected !== null && isCorrect) ? 700 : 400 }}>{c}</span>
              {selected !== null && isCorrect && <span style={{ marginLeft:'auto' }}>✓</span>}
              {selected !== null && isSelected && !isCorrect && <span style={{ marginLeft:'auto' }}>✗</span>}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div>
          <div style={{ padding:'14px 18px', borderRadius:12,
            background: selected === q.correct ? 'oklch(0.95 0.05 145)' : 'oklch(0.96 0.04 25)',
            border:`1.5px solid ${selected === q.correct ? 'oklch(0.75 0.12 145)' : 'oklch(0.75 0.12 25)'}`,
            marginBottom:12, fontSize:13.5, lineHeight:1.6,
            color: selected === q.correct ? 'oklch(0.25 0.10 145)' : 'oklch(0.28 0.08 25)' }}>
            <strong>{selected === q.correct ? '✓ Correct !' : '✗ Raté.'}</strong><br />
            {q.expl}
          </div>
          <Btn variant="solid" color="oklch(0.52 0.14 280)" onClick={next}>
            {qi + 1 >= questions.length ? 'Voir le score →' : 'Question suivante →'}
          </Btn>
        </div>
      )}
    </div>
  );
}

// ── Questions ouvertes — composants ──────────────────────────────────────

const QO_CATS = [
  { key:'all',     label:'Toutes les questions',    icon:'📋',
    color:'oklch(0.50 0.12 240)' },
  { key:'science', label:'🔬 Connaître l\'animal',  icon:'🔬',
    color:'oklch(0.50 0.14 200)' },
  { key:'art',     label:'🎨 Imaginer l\'animal',   icon:'🎨',
    color:'oklch(0.50 0.14 300)' },
  { key:'societe', label:'🤔 Comprendre l\'animal', icon:'🤔',
    color:'oklch(0.50 0.16 45)' },
];

function QuizOuvert({ back, state, updateState }) {
  const [filter, setFilter] = React.useState(null);

  if (!filter) {
    const counts = {
      all:     QUESTIONS_OUVERTES.length,
      science: QUESTIONS_OUVERTES.filter(q => q.cat === 'science').length,
      art:     QUESTIONS_OUVERTES.filter(q => q.cat === 'art').length,
      societe: QUESTIONS_OUVERTES.filter(q => q.cat === 'societe').length,
    };
    return (
      <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
        <TopNav back={back} title="Questions de cours" />
        <PaperCard style={{ padding:22, marginBottom:20,
          background:'linear-gradient(135deg, oklch(0.97 0.02 240), oklch(0.95 0.04 220))',
          border:'1.5px solid oklch(0.85 0.08 240)' }}>
          <div style={{ fontFamily:'var(--font-display)', fontSize:17, fontWeight:700,
            color:'oklch(0.22 0.06 240)', marginBottom:6 }}>
            Révision à voix haute
          </div>
          <div style={{ fontSize:13, color:'oklch(0.40 0.04 240)', lineHeight:1.6 }}>
            Lis la question, formule ta réponse à voix haute, puis révèle la réponse modèle. Auto-évalue-toi honnêtement.
          </div>
        </PaperCard>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {QO_CATS.map(cat => (
            <button key={cat.key} onClick={() => setFilter(cat.key)} style={{
              padding:'16px 20px', borderRadius:12, textAlign:'left',
              border:'2px solid oklch(0.88 0.005 280)', background:'white',
              cursor:'pointer', fontFamily:'var(--font-ui)',
            }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div style={{ fontWeight:700, fontSize:15, color:'oklch(0.22 0.04 280)' }}>
                  {cat.label}
                </div>
                <span style={{ fontSize:12, fontFamily:'var(--font-mono)',
                  background:'oklch(0.93 0.02 280)', padding:'2px 8px', borderRadius:5,
                  color:'oklch(0.45 0.03 280)' }}>
                  {counts[cat.key]} questions
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return <QuizOuvertGame back={back} state={state} updateState={updateState} filter={filter} />;
}

function QuizOuvertGame({ back, state, updateState, filter }) {
  const questions = React.useMemo(() => {
    const pool = filter === 'all'
      ? [...QUESTIONS_OUVERTES]
      : QUESTIONS_OUVERTES.filter(q => q.cat === filter);
    return shuffle(pool);
  }, [filter]);

  const catColor = { science:'oklch(0.50 0.14 200)', art:'oklch(0.50 0.14 300)', societe:'oklch(0.50 0.16 45)', all:'oklch(0.50 0.12 240)' };
  const catBg   = { science:'oklch(0.93 0.06 200)', art:'oklch(0.92 0.05 300)', societe:'oklch(0.93 0.07 45)' };
  const catInk  = { science:'oklch(0.28 0.10 200)', art:'oklch(0.28 0.10 300)', societe:'oklch(0.28 0.12 45)' };
  const catBorder={ science:'oklch(0.78 0.10 200)', art:'oklch(0.78 0.10 300)', societe:'oklch(0.78 0.14 45)' };
  const catLabel = { science:'🔬 Connaître', art:'🎨 Imaginer', societe:'🤔 Comprendre' };
  const color = catColor[filter] || 'oklch(0.50 0.12 240)';

  const [qi, setQi] = React.useState(0);
  const [revealed, setRevealed] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const [done, setDone] = React.useState(false);

  function assess(val) {
    const newResults = [...results, val];
    setResults(newResults);
    if (qi + 1 >= questions.length) {
      const known = newResults.filter(r => r === 'ok').length;
      const xp = Math.round((known / questions.length) * 15);
      const ns = { ...state, xp: state.xp + xp };
      updateState(window.RevStore.bumpStreak(ns), `+${xp} XP — Questions terminées !`);
      setDone(true);
    } else {
      setQi(q => q + 1);
      setRevealed(false);
    }
  }

  if (done) {
    const known = results.filter(r => r === 'ok').length;
    const toReview = questions.filter((q, i) => results[i] === 'review');
    return (
      <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
        <TopNav back={back} title="Questions de cours" />
        <PaperCard style={{ padding:32,
          background:'linear-gradient(135deg, oklch(0.96 0.05 240), oklch(0.94 0.08 220))',
          border:'1.5px solid oklch(0.84 0.10 240)' }}>
          <div style={{ fontSize:40, marginBottom:12 }}>📊</div>
          <div style={{ fontFamily:'var(--font-display)', fontSize:22, fontWeight:700,
            color:'oklch(0.25 0.10 240)', marginBottom:6 }}>
            {known} / {questions.length} maîtrisées
          </div>
          <div style={{ fontSize:14, color:'oklch(0.40 0.06 240)', marginBottom:20 }}>
            {known >= questions.length * 0.8 ? 'Excellent ! Tu maîtrises bien ces connaissances.' :
             known >= questions.length * 0.5 ? 'Bien ! Quelques questions à retravailler.' :
             'Continue à réviser — ces questions sont au cœur du sujet.'}
          </div>
          {toReview.length > 0 && (
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:12, fontWeight:700, color:'oklch(0.40 0.08 25)',
                textTransform:'uppercase', letterSpacing:1, marginBottom:10 }}>
                À revoir ({toReview.length})
              </div>
              {toReview.map((q, i) => (
                <div key={i} style={{ padding:'8px 12px', borderRadius:8,
                  background:'oklch(0.95 0.04 25)', border:'1px solid oklch(0.82 0.08 25)',
                  marginBottom:6, fontSize:13, color:'oklch(0.30 0.08 25)' }}>
                  <strong>{q.tag}</strong>
                </div>
              ))}
            </div>
          )}
          <Btn variant="solid" color={color} onClick={back}>Retour au menu</Btn>
        </PaperCard>
      </div>
    );
  }

  const q = questions[qi];

  return (
    <div style={{ maxWidth:720, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Questions de cours" />

      <div style={{ marginBottom:16 }}>
        <ProgressBar value={qi + 1} max={questions.length} color={color} />
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:5,
          fontSize:12, color:'oklch(0.50 0.02 280)', fontFamily:'var(--font-mono)' }}>
          <span>Question {qi + 1} / {questions.length}</span>
          <span>{results.filter(r => r === 'ok').length} connues · {results.filter(r => r === 'review').length} à revoir</span>
        </div>
      </div>

      <PaperCard style={{ padding:28, marginBottom:16, background:'oklch(0.975 0.01 280)' }}>
        {q.cat !== 'all' && (
          <div style={{ marginBottom:14 }}>
            <span style={{ fontSize:11, fontWeight:700, padding:'3px 8px', borderRadius:5,
              background: catBg[q.cat] || 'oklch(0.92 0.02 280)',
              color: catInk[q.cat] || 'oklch(0.30 0.02 280)',
              border: `1px solid ${catBorder[q.cat] || 'oklch(0.80 0.01 280)'}` }}>
              {catLabel[q.cat] || q.cat}
            </span>
          </div>
        )}
        <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:700,
          lineHeight:1.35, color:'oklch(0.22 0.04 280)', textWrap:'balance' }}>
          {q.q}
        </div>
      </PaperCard>

      {!revealed ? (
        <Btn variant="solid" color={color} onClick={() => setRevealed(true)}>
          Voir la réponse →
        </Btn>
      ) : (
        <div>
          <div style={{ padding:'18px 20px', borderRadius:12, marginBottom:14,
            background:'oklch(0.96 0.03 145)', border:'1.5px solid oklch(0.78 0.10 145)' }}>
            <div style={{ fontSize:11, fontWeight:700, color:'oklch(0.35 0.10 145)',
              textTransform:'uppercase', letterSpacing:1, marginBottom:8 }}>Réponse</div>
            <div style={{ fontSize:14, lineHeight:1.65, color:'oklch(0.22 0.06 145)' }}>
              {q.r}
            </div>
          </div>
          <div style={{ fontSize:13, fontWeight:700, color:'oklch(0.40 0.04 280)', marginBottom:10 }}>
            Est-ce que tu avais les éléments essentiels ?
          </div>
          <div style={{ display:'flex', gap:10 }}>
            <button onClick={() => assess('ok')} style={{
              flex:1, padding:'13px 16px', borderRadius:10, border:'2px solid oklch(0.65 0.15 145)',
              background:'oklch(0.93 0.07 145)', color:'oklch(0.25 0.12 145)',
              fontFamily:'var(--font-ui)', fontWeight:700, fontSize:14, cursor:'pointer',
            }}>Je savais ✓</button>
            <button onClick={() => assess('review')} style={{
              flex:1, padding:'13px 16px', borderRadius:10, border:'2px solid oklch(0.65 0.12 25)',
              background:'oklch(0.93 0.06 25)', color:'oklch(0.28 0.10 25)',
              fontFamily:'var(--font-ui)', fontWeight:700, fontSize:14, cursor:'pointer',
            }}>À revoir ✗</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Mode Écriture ─────────────────────────────────────────────────────────

const ECRIRE_FILTERS = [
  { key:'all',     label:'Tout mélanger',          desc:'QCM connaissances + Auteurs & Œuvres',  count: CULTURE_QCM.length + AUTEUR_OEUVRE_QCM.length },
  { key:'primary', label:'★ Prioritaires',          desc:'Les 28 références à maîtriser absolument', count: CULTURE_QCM.filter(q=>q.primary).length },
  { key:'ao',      label:'Auteurs & Œuvres',        desc:'Qui a écrit quoi ? Dates incluses',      count: AUTEUR_OEUVRE_QCM.length },
];

function QuizEcrire({ back, state, updateState }) {
  const [filter, setFilter] = React.useState('all');
  const [started, setStarted] = React.useState(false);

  if (!started) {
    return (
      <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
        <TopNav back={back} title="Mode Écriture" />
        <PaperCard style={{ padding:28, marginBottom:20,
          background:'linear-gradient(135deg, oklch(0.97 0.02 160), oklch(0.95 0.04 150))',
          border:'1.5px solid oklch(0.85 0.08 160)' }}>
          <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:700,
            color:'oklch(0.22 0.08 160)', marginBottom:8 }}>
            Réponds sans filet
          </div>
          <div style={{ fontSize:13, color:'oklch(0.38 0.06 160)', lineHeight:1.6 }}>
            Aucun choix multiple. Rédige ta réponse dans le champ, puis révèle la correction et auto-évalue-toi honnêtement.
          </div>
        </PaperCard>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
          {ECRIRE_FILTERS.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)} style={{
              padding:'14px 18px', borderRadius:12, textAlign:'left',
              border: filter === f.key ? '2px solid oklch(0.48 0.16 160)' : '2px solid oklch(0.88 0.005 280)',
              background: filter === f.key ? 'oklch(0.93 0.06 160)' : 'white',
              cursor:'pointer', display:'flex', alignItems:'center', gap:12,
              fontFamily:'var(--font-ui)', transition:'all .15s ease',
            }}>
              <span style={{
                width:20, height:20, borderRadius:'50%', flexShrink:0,
                border: filter === f.key ? '6px solid oklch(0.48 0.16 160)' : '2px solid oklch(0.75 0.01 280)',
                background:'white',
              }} />
              <div>
                <div style={{ fontWeight:700, fontSize:14,
                  color: filter === f.key ? 'oklch(0.26 0.10 160)' : 'oklch(0.28 0.02 280)' }}>
                  {f.label}
                </div>
                <div style={{ fontSize:12, color:'oklch(0.50 0.02 280)', marginTop:2 }}>
                  {f.desc} · {f.count} questions
                </div>
              </div>
            </button>
          ))}
        </div>
        <Btn variant="solid" color="oklch(0.48 0.16 160)" onClick={() => setStarted(true)}>
          Commencer →
        </Btn>
      </div>
    );
  }

  return <QuizEcrireGame back={back} state={state} updateState={updateState} filter={filter} />;
}

function QuizEcrireGame({ back, state, updateState, filter }) {
  const color = 'oklch(0.48 0.16 160)';

  const questions = React.useMemo(() => {
    let pool;
    if (filter === 'primary') {
      pool = CULTURE_QCM.filter(q => q.primary).map(q => ({ ...q, _src:'qcm' }));
    } else if (filter === 'ao') {
      pool = AUTEUR_OEUVRE_QCM.map(q => ({ ...q, _src:'ao' }));
    } else {
      pool = [
        ...CULTURE_QCM.map(q => ({ ...q, _src:'qcm' })),
        ...AUTEUR_OEUVRE_QCM.map(q => ({ ...q, _src:'ao' })),
      ];
    }
    return shuffle(pool);
  }, [filter]);

  const [qi, setQi] = React.useState(0);
  const [input, setInput] = React.useState('');
  const [revealed, setRevealed] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const [done, setDone] = React.useState(false);

  function assess(val) {
    const nr = [...results, val];
    setResults(nr);
    if (qi + 1 >= questions.length) {
      const known = nr.filter(r => r === 'ok').length;
      const xp = Math.round((known / questions.length) * 15);
      const ns = { ...state, xp: state.xp + xp };
      updateState(window.RevStore.bumpStreak(ns), `+${xp} XP — Mode Écriture terminé !`);
      setDone(true);
    } else {
      setQi(q => q + 1);
      setInput('');
      setRevealed(false);
    }
  }

  if (done) {
    const known = results.filter(r => r === 'ok').length;
    const toReview = questions.filter((_, i) => results[i] === 'review');
    return (
      <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
        <TopNav back={back} title="Mode Écriture" />
        <PaperCard style={{ padding:32,
          background:'linear-gradient(135deg, oklch(0.96 0.05 160), oklch(0.94 0.08 150))',
          border:'1.5px solid oklch(0.84 0.10 160)' }}>
          <div style={{ fontSize:40, marginBottom:12 }}>✍️</div>
          <div style={{ fontFamily:'var(--font-display)', fontSize:22, fontWeight:700,
            color:'oklch(0.25 0.10 160)', marginBottom:6 }}>
            {known} / {questions.length} maîtrisées
          </div>
          <div style={{ fontSize:14, color:'oklch(0.40 0.06 160)', marginBottom:20 }}>
            {known >= questions.length * 0.8 ? 'Excellent ! Tu maîtrises ces références.' :
             known >= questions.length * 0.5 ? 'Bien ! Quelques lacunes à combler.' :
             'Continue à retravailler — l\'écrit sans aide, c\'est l\'objectif.'}
          </div>
          {toReview.length > 0 && (
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:12, fontWeight:700, color:'oklch(0.40 0.08 25)',
                textTransform:'uppercase', letterSpacing:1, marginBottom:10 }}>
                À revoir ({toReview.length})
              </div>
              {toReview.map((q, i) => (
                <div key={i} style={{ padding:'8px 12px', borderRadius:8,
                  background:'oklch(0.95 0.04 25)', border:'1px solid oklch(0.82 0.08 25)',
                  marginBottom:6, fontSize:13, color:'oklch(0.30 0.08 25)' }}>
                  {q.q.length > 80 ? q.q.slice(0, 80) + '…' : q.q}
                </div>
              ))}
            </div>
          )}
          <Btn variant="solid" color={color} onClick={back}>Retour au menu</Btn>
        </PaperCard>
      </div>
    );
  }

  const q = questions[qi];
  const correctText = q.choices[q.correct];

  return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Mode Écriture" />

      <div style={{ marginBottom:16 }}>
        <ProgressBar value={qi + 1} max={questions.length} color={color} />
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:5,
          fontSize:12, color:'oklch(0.50 0.02 280)', fontFamily:'var(--font-mono)' }}>
          <span>{qi + 1} / {questions.length}</span>
          <span>{results.filter(r => r === 'ok').length} connues · {results.filter(r => r === 'review').length} à revoir</span>
        </div>
      </div>

      <PaperCard style={{ padding:24, marginBottom:16, background:'oklch(0.975 0.01 280)' }}>
        {q.primary && (
          <div style={{ display:'inline-flex', alignItems:'center', gap:4,
            background:'oklch(0.93 0.12 75)', border:'1px solid oklch(0.80 0.14 75)',
            borderRadius:6, padding:'2px 8px', fontSize:11, fontWeight:700,
            color:'oklch(0.40 0.12 75)', marginBottom:10 }}>
            ★ Référence prioritaire
          </div>
        )}
        {q._src === 'ao' && (
          <div style={{ display:'inline-flex', alignItems:'center',
            background:'oklch(0.93 0.06 280)', border:'1px solid oklch(0.82 0.10 280)',
            borderRadius:6, padding:'2px 10px', fontSize:11, fontWeight:700,
            color:'oklch(0.38 0.12 280)', marginBottom:10 }}>
            {q.sens === 'auteur→oeuvre' ? '✍ Auteur → Œuvre' : '📖 Œuvre → Auteur'}
          </div>
        )}
        <div style={{ fontFamily:'var(--font-display)', fontSize:18, fontWeight:700,
          lineHeight:1.35, color:'oklch(0.22 0.04 280)', textWrap:'balance' }}>
          {q.q}
        </div>
      </PaperCard>

      {!revealed ? (
        <div>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Écris ta réponse ici…"
            style={{ width:'100%', minHeight:90, padding:'14px 16px', borderRadius:12,
              border:'2px solid oklch(0.82 0.08 160)', fontSize:14,
              fontFamily:'var(--font-ui)', lineHeight:1.55, resize:'vertical',
              outline:'none', boxSizing:'border-box', background:'oklch(0.975 0.02 160)',
              color:'oklch(0.22 0.04 280)', transition:'border .15s' }}
          />
          <div style={{ marginTop:12 }}>
            <Btn variant="solid" color={color} onClick={() => setRevealed(true)}>
              Révéler la réponse →
            </Btn>
          </div>
        </div>
      ) : (
        <div>
          {input.trim() && (
            <div style={{ padding:'14px 18px', borderRadius:12, marginBottom:12,
              background:'oklch(0.97 0.01 280)', border:'1.5px solid oklch(0.86 0.005 280)',
              fontSize:13.5, lineHeight:1.6 }}>
              <div style={{ fontSize:11, fontWeight:700, color:'oklch(0.48 0.02 280)',
                textTransform:'uppercase', letterSpacing:1, marginBottom:6 }}>Ta réponse</div>
              <div style={{ color:'oklch(0.28 0.02 280)' }}>{input}</div>
            </div>
          )}
          <div style={{ padding:'16px 18px', borderRadius:12, marginBottom:14,
            background:'oklch(0.95 0.05 145)', border:'1.5px solid oklch(0.75 0.12 145)',
            fontSize:13.5, lineHeight:1.65, color:'oklch(0.22 0.08 145)' }}>
            <div style={{ fontSize:11, fontWeight:700, color:'oklch(0.35 0.12 145)',
              textTransform:'uppercase', letterSpacing:1, marginBottom:8 }}>Réponse attendue</div>
            <div style={{ fontWeight:700, marginBottom:6 }}>{correctText}</div>
            <div>{q.expl}</div>
          </div>
          <div style={{ fontSize:13, fontWeight:700, color:'oklch(0.40 0.04 280)', marginBottom:10 }}>
            Est-ce que tu avais les éléments essentiels ?
          </div>
          <div style={{ display:'flex', gap:10 }}>
            <button onClick={() => assess('ok')} style={{
              flex:1, padding:'13px 16px', borderRadius:10, border:'2px solid oklch(0.65 0.15 145)',
              background:'oklch(0.93 0.07 145)', color:'oklch(0.25 0.12 145)',
              fontFamily:'var(--font-ui)', fontWeight:700, fontSize:14, cursor:'pointer',
            }}>Je savais ✓</button>
            <button onClick={() => assess('review')} style={{
              flex:1, padding:'13px 16px', borderRadius:10, border:'2px solid oklch(0.65 0.12 25)',
              background:'oklch(0.93 0.06 25)', color:'oklch(0.28 0.10 25)',
              fontFamily:'var(--font-ui)', fontWeight:700, fontSize:14, cursor:'pointer',
            }}>À revoir ✗</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleChoices(q) {
  const pairs = q.choices.map((text, i) => ({ text, i }));
  shuffle(pairs);
  return {
    ...q,
    choices: pairs.map(p => p.text),
    correct: pairs.findIndex(p => p.i === q.correct),
    correctText: q.choices[q.correct],
  };
}

window.CultureQuizView = CultureQuizView;
