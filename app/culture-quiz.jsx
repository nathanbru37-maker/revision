// Jeu connaissances culturelles — 2 modes : QCM classique + "Qu'est-ce que cache ce sujet ?"

const CULTURE_QCM = [
  { q:"Qui est l'auteur de Maus ?", choices:["Art Spiegelman","George Orwell","Jack London","La Fontaine"], correct:0, expl:"Art Spiegelman a publié Maus en 1986 (tome 1) et 1992 (tome 2). C'est un roman graphique qui représente les Juifs en souris et les Nazis en chats pour raconter l'Holocauste." },
  { q:"Dans Maus, quel animal représente les Juifs ?", choices:["Des souris","Des cochons","Des lapins","Des rats"], correct:0, expl:"Les Juifs = souris, les Nazis = chats, les Polonais = cochons. Spiegelman reprend la rhétorique nazie qui déshumanisait les Juifs en les animalisant — pour mieux la dénoncer." },
  { q:"Quelle est la date approximative des peintures de la grotte Chauvet ?", choices:["-35 000 av. J.-C.","-17 000 av. J.-C.","-5 000 av. J.-C.","5 000 av. J.-C."], correct:0, expl:"La grotte Chauvet, en Ardèche, date d'environ -35 000 ans. C'est l'un des plus anciens témoignages d'art humain. Les peintures représentent essentiellement des animaux : lions, rhinocéros, mammouths." },
  { q:"Qui est Anubis dans la mythologie égyptienne ?", choices:["Dieu à tête de chacal, gardien des morts","Dieu à tête de chat, gardien du foyer","Dieu à tête d'ibis, dieu du savoir","Dieu à tête d'éléphant, dieu de la chance"], correct:0, expl:"Anubis est représenté avec une tête de chacal. Il guide les âmes vers l'au-delà et veille sur les morts — c'est un animal psychopompe. Bastet (chat) protège le foyer, Thot (ibis) est le dieu du savoir." },
  { q:"Quelle est la thèse centrale de Descartes sur les animaux ?", choices:["L'animal est une machine sans âme","L'animal est conscient comme l'homme","L'animal mérite des droits","L'animal est supérieur à l'homme"], correct:0, expl:"Dans le Discours de la méthode (1637), Descartes soutient que les animaux sont de simples automates — des machines complexes sans âme ni pensée. Leurs cris de douleur ne sont que des mécanismes, comme le bruit d'une horloge brisée." },
  { q:"En quelle année a été signée la Déclaration de Cambridge sur la Conscience animale ?", choices:["2012","2015","2005","2000"], correct:0, expl:"En 2012, des neuroscientifiques de Cambridge ont signé une déclaration affirmant que les mammifères, oiseaux et céphalopodes possèdent les substrats neurologiques de la conscience. Une étape majeure dans la reconnaissance de la vie intérieure des animaux." },
  { q:"Qui a publié 'La Libération animale' en 1975 ?", choices:["Peter Singer","Tom Regan","Jane Goodall","Donna Haraway"], correct:0, expl:"Peter Singer, philosophe australien, a fondé le mouvement de libération animale avec ce livre. Il y développe le concept de 'spécisme' — une discrimination arbitraire fondée sur l'appartenance à une espèce." },
  { q:"Qu'est-ce qu'un animal psychopompe ?", choices:["Un animal qui guide les âmes vers l'au-delà","Un animal utilisé en zoothérapie","Un animal hybride mi-humain","Un animal totem en Afrique"], correct:0, expl:"Les animaux psychopompes (du grec 'guide d'âme') accompagnent les morts vers l'au-delà dans de nombreuses cultures. Ex : Anubis (chacal) en Égypte, le chameau dans 'Psyché psychopompe'." },
  { q:"Quel est le nom du chien d'Ulysse dans l'Odyssée d'Homère ?", choices:["Argos","Cerbère","Achille","Priam"], correct:0, expl:"Argos est le chien d'Ulysse. Il le reconnaît après 20 ans d'absence — le seul à l'avoir reconnu — et meurt de joie aussitôt. C'est un des symboles les plus puissants de la fidélité animale dans la littérature." },
  { q:"Quel article du Code civil français (2015) reconnaît les animaux comme êtres sensibles ?", choices:["Art. 515-14","Art. L214","Art. 3R","Art. 999-1"], correct:0, expl:"L'article 515-14 du Code civil, issu de la loi du 16 février 2015, reconnaît enfin les animaux comme 'êtres vivants doués de sensibilité'. Auparavant, ils étaient traités comme de simples 'biens meubles'." },
  { q:"Que représentent les Polonais dans Maus de Spiegelman ?", choices:["Des cochons","Des renards","Des chiens","Des lapins"], correct:0, expl:"Dans Maus, les Polonais sont représentés en cochons — un choix qui ne flatte pas non plus les alliés potentiels des Juifs. Ce système de représentation animale reflète les hiérarchies raciales et les rapports de force de l'époque." },
  { q:"En quelle année La Fontaine a-t-il publié ses Fables ?", choices:["1668","1789","1492","1848"], correct:0, expl:"Les Fables de La Fontaine ont été publiées en 1668 (livres I à VI). Elles utilisent l'anthropomorphisme animal pour critiquer indirectement la cour de Louis XIV — une satire sociale déguisée en littérature pour enfants." },
  { q:"Depuis quand existe l'éthologie comme science à part entière ?", choices:["Depuis 1920","Depuis 1850","Depuis 1970","Depuis 2000"], correct:0, expl:"L'éthologie — science du comportement animal — s'est structurée dans les années 1920-1930 avec des pionniers comme Konrad Lorenz et Nikolaas Tinbergen (Prix Nobel 1973). Elle étudie les comportements animaux dans leur milieu naturel." },
  { q:"Qui a publié 'De l'origine des espèces' en 1859 ?", choices:["Charles Darwin","Aristote","Descartes","Peter Singer"], correct:0, expl:"Charles Darwin, naturaliste britannique, a démontré dans cet ouvrage que les espèces évoluent par sélection naturelle et que l'homme et les grands singes descendent d'un ancêtre commun. Une révolution dans notre rapport à l'animal." },
  { q:"Que signifient les '3R' dans l'expérimentation animale ?", choices:["Replace, Reduce, Refine","Rights, Rules, Reason","Research, Regulate, Respond","Rethink, Reform, Restrict"], correct:0, expl:"Les 3R (Replace, Reduce, Refine) encadrent l'expérimentation animale : remplacer l'animal par des alternatives quand c'est possible, réduire le nombre d'animaux utilisés, raffiner les procédures pour minimiser la souffrance." },
  { q:"Quel est le titre de la sculpture de Louise Bourgeois représentant une araignée géante (1999) ?", choices:["Maman","Croc-Blanc","Méduse","Totem"], correct:0, expl:"'Maman' (1999) est une araignée de bronze monumentale de Louise Bourgeois, exposée dans plusieurs musées du monde. Elle incarne à la fois la peur que suscite l'araignée et la figure protectrice de la mère tisseuse." },
  { q:"Qui est l'auteur de Croc-Blanc (1906) ?", choices:["Jack London","George Orwell","Victor Hugo","Émile Zola"], correct:0, expl:"Jack London (1906) raconte la vie d'un loup-chien entre la sauvagerie du Grand Nord canadien et la domestication humaine. Ce roman narrativise la subjectivité animale avec une précision comportementale remarquable." },
  { q:"Qu'est-ce que le 'spécisme' ?", choices:["Discrimination fondée sur l'appartenance à une espèce","Respect de toutes les espèces","Étude scientifique des espèces","Protection des espèces menacées"], correct:0, expl:"Terme forgé par Peter Singer (1975), le spécisme désigne la discrimination arbitraire fondée sur l'appartenance à une espèce — traiter la souffrance animale comme moins importante que la souffrance humaine, sans justification rationnelle." },
  { q:"Selon la FAO (2013), quel pourcentage des émissions mondiales de GES représente l'élevage ?", choices:["14,5 %","5 %","30 %","2 %"], correct:0, expl:"Selon le rapport 'Livestock's Long Shadow' de la FAO (2013), l'élevage représente 14,5% des émissions mondiales de gaz à effet de serre — davantage que tous les transports réunis. Un chiffre central dans le débat sur l'élevage industriel." },
  { q:"Qui a dit : 'La grandeur d'une nation se juge à la façon dont elle traite ses animaux' ?", choices:["Gandhi","Kant","Schopenhauer","Anatole France"], correct:0, expl:"Cette citation est attribuée à Gandhi. Elle est très souvent utilisée comme accroche dans les essais sur le bien-être animal ou les droits des animaux — une phrase forte, courte et immédiatement évocatrice." },
  { q:"Qui a peint 'Le Lièvre' en 1502 ?", choices:["Albrecht Dürer","Léonard de Vinci","Michel-Ange","Rembrandt"], correct:0, expl:"Albrecht Dürer (1471-1528), peintre et graveur allemand de la Renaissance, a peint ce lièvre aquarellé avec une précision quasi-scientifique. Chaque poil, chaque reflet dans l'œil est rendu avec un soin extrême — un hommage à la beauté de l'animal réel." },
  { q:"Qu'est-ce que la zoothérapie ?", choices:["Utilisation thérapeutique des animaux","Étude scientifique des animaux","Protection juridique des animaux","Élevage biologique des animaux"], correct:0, expl:"La zoothérapie (ou thérapie assistée par l'animal) utilise des animaux — chiens, chevaux, dauphins — dans des contextes thérapeutiques. Les études montrent qu'elle réduit le stress, l'anxiété et améliore le bien-être des personnes âgées, autistes ou dépressives." },
  { q:"Quel pourcentage d'ADN partageons-nous avec le chimpanzé ?", choices:["98,7 %","75 %","50 %","99,9 %"], correct:0, expl:"Nous partageons environ 98,7% de notre ADN avec le chimpanzé — notre plus proche parent biologique. C'est l'argument central de ceux qui réclament une protection juridique renforcée pour les grands singes." },
  { q:"Quelle association française publie des images d'abattoirs pour dénoncer l'élevage industriel ?", choices:["L214","WWF","PETA","SPE"], correct:0, expl:"L214 est une association française de protection animale qui publie régulièrement des images tournées en caméra cachée dans les abattoirs et élevages. Son nom vient de l'article L214 du Code rural qui reconnaît les animaux comme êtres sensibles." },
  { q:"Quelle est la citation de Schopenhauer sur les animaux ?", choices:["Celui qui est cruel envers les animaux ne peut être un homme bon","Jusqu'à ce qu'on ait aimé un animal, une partie de notre âme reste endormie","La question est : peuvent-ils souffrir ?","On peut juger le cœur d'un homme à la façon dont il traite les animaux"], correct:0, expl:"Schopenhauer affirmait que la compassion pour les animaux est liée à la bonté morale générale. La façon dont quelqu'un traite un être sans défense révèle son caractère profond." },
  { q:"Quel roman de George Orwell utilise des animaux pour critiquer le stalinisme ?", choices:["La Ferme des animaux (1945)","Maus (1986)","Croc-Blanc (1906)","Le Livre de la Jungle (1894)"], correct:0, expl:"La Ferme des animaux (1945) d'Orwell raconte une révolution d'animaux qui renverse les fermiers humains, avant que les cochons n'instaurent un régime aussi tyrannique. C'est une satire du totalitarisme stalinien." },
  { q:"Qui est Ganesh dans l'hindouisme ?", choices:["Dieu à tête d'éléphant, fils de Shiva","Dieu à tête de singe, compagnon de Rama","Dieu à tête de taureau, maître du tonnerre","Dieu à tête de serpent, gardien du cosmos"], correct:0, expl:"Ganesh est l'une des divinités les plus vénérées de l'hindouisme. Sa tête d'éléphant symbolise la sagesse, l'intelligence et le dépassement des obstacles. C'est un exemple d'animal élevé au rang du divin." },
  { q:"Quelle est l'année de publication de 'La Ferme des animaux' d'Orwell ?", choices:["1945","1984","1948","1933"], correct:0, expl:"La Ferme des animaux a été publiée en 1945, à la fin de la Seconde Guerre mondiale. Orwell y critique le stalinisme soviétique à travers une fable animale. Le livre fut longtemps censuré dans les pays communistes." },
  { q:"Aristote définit l'homme comme 'animal…' — complète.", choices:["politique (zôon politikon)","rationnel (zôon logikon)","social (zôon koinônikon)","conscient (zôon noêtikon)"], correct:0, expl:"Aristote définit l'homme comme 'zôon politikon' — animal politique — dans La Politique. Ce qui distingue l'homme des autres animaux est le logos (raison et langage), qui lui permet de distinguer le juste de l'injuste et de vivre en cité." },
  { q:"Dans quelle grotte célèbre de la préhistoire a-t-on trouvé des peintures animales datant de -17 000 ans ?", choices:["Lascaux","Chauvet","Altamira","Cosquer"], correct:0, expl:"La grotte de Lascaux (Dordogne, France) date d'environ -17 000 ans. Elle est ornée de plus de 600 peintures et 1 500 gravures représentant principalement des animaux : chevaux, aurochs, cerfs, bisons. La grotte Chauvet est plus ancienne (-35 000)." },
];

const CACHE_SUJETS = [
  {
    sujet: "Pensez-vous que l'animal puisse être considéré comme un véritable ami pour l'homme ?",
    refs: [
      { ref:"Argos, le chien d'Ulysse (Odyssée, Homère)", correct:true, why:"Symbole de la fidélité absolue — l'animal qui reconnaît son maître après 20 ans." },
      { ref:"Déclaration de Cambridge sur la Conscience (2012)", correct:true, why:"Base scientifique : les animaux ont une conscience émotionnelle, donc un lien affectif réel est possible." },
      { ref:"Zoothérapie — chiens et chevaux thérapeutiques", correct:true, why:"Prouve le soutien affectif concret de l'animal — qualité amicale mesurable." },
      { ref:"Jack London, Croc-Blanc (1906)", correct:true, why:"Illustre la construction progressive d'un lien entre l'homme et le loup — vers la confiance mutuelle." },
      { ref:"Grotte Chauvet (-35 000 av. J.-C.)", correct:false, why:"L'art rupestre parle du rapport à l'animal sacré, pas du lien d'amitié. Hors sujet ici." },
      { ref:"FAO (2013) — 14,5% des GES liés à l'élevage", correct:false, why:"Concerne l'impact environnemental de l'élevage, pas la relation affective." },
      { ref:"Aristote — 3 types d'amitié (Éthique à Nicomaque)", correct:true, why:"Définit l'amitié — indispensable pour questionner si l'animal peut l'atteindre." },
      { ref:"Donna Haraway, When Species Meet (2008)", correct:true, why:"Propose une 'éthique du care' inter-espèces — un modèle de lien homme-animal." },
    ]
  },
  {
    sujet: "Faut-il interdire l'élevage industriel ?",
    refs: [
      { ref:"FAO (2013) — l'élevage représente 14,5% des GES mondiaux", correct:true, why:"Argument environnemental central — chiffre frappant pour une accroche." },
      { ref:"Peter Singer, La Libération animale (1975)", correct:true, why:"La sensibilité des animaux d'élevage rend leur souffrance moralement inacceptable." },
      { ref:"L214 — images d'abattoirs français", correct:true, why:"Preuve documentaire des conditions réelles de l'élevage industriel en France." },
      { ref:"Règle des 3R (Replace, Reduce, Refine)", correct:true, why:"Alternative à l'interdiction totale : réformer progressivement les pratiques." },
      { ref:"Argos, le chien d'Ulysse (Odyssée)", correct:false, why:"Concerne la relation affective, pas l'industrie alimentaire." },
      { ref:"Maus (Spiegelman, 1986)", correct:false, why:"Animalisation des Juifs par les nazis — hors sujet pour l'élevage." },
      { ref:"Déclaration de Cambridge (2012)", correct:true, why:"Les animaux d'élevage sont conscients et sensibles — fondement du débat moral." },
      { ref:"Viande cellulaire — 1er burger in vitro (2013)", correct:true, why:"Alternative technologique qui pourrait résoudre le problème sans interdiction." },
    ]
  },
  {
    sujet: "Les animaux ont-ils des droits ?",
    refs: [
      { ref:"Code civil, art. 515-14 (France, 2015)", correct:true, why:"La France reconnaît les animaux comme êtres sensibles — premier pas vers des droits." },
      { ref:"Peter Singer — le spécisme (La Libération animale, 1975)", correct:true, why:"Argument philosophique central : discriminer les animaux est aussi injustifiable que le racisme." },
      { ref:"Tom Regan, The Case for Animal Rights (1983)", correct:true, why:"Les animaux sont 'sujets d'une vie' — ils méritent des droits pour eux-mêmes." },
      { ref:"Règle des 3R — expérimentation animale", correct:true, why:"Protection pratique existante — forme de droit déjà accordé aux animaux de laboratoire." },
      { ref:"Grotte Chauvet (-35 000)", correct:false, why:"L'art préhistorique témoigne d'un rapport sacré à l'animal, pas de droits juridiques." },
      { ref:"La Fontaine, Fables (1668)", correct:false, why:"L'anthropomorphisme moral ne concerne pas directement les droits juridiques des animaux." },
      { ref:"Déclaration de Cambridge (2012)", correct:true, why:"La conscience prouvée fonde la légitimité d'une protection — base scientifique des droits." },
      { ref:"Bentham : 'peuvent-ils souffrir ?'", correct:true, why:"La souffrance — et non la raison — comme critère du droit à la protection." },
    ]
  },
  {
    sujet: "L'art permet-il de mieux comprendre notre rapport aux animaux ?",
    refs: [
      { ref:"Grotte Chauvet (-35 000 av. J.-C.)", correct:true, why:"Les premières traces d'art humain sont des animaux — preuve que l'art et l'animal sont liés dès les origines." },
      { ref:"Albrecht Dürer, Le Lièvre (1502)", correct:true, why:"Observation minutieuse = art comme moyen de voir l'animal tel qu'il est vraiment." },
      { ref:"La Fontaine, Fables (1668)", correct:true, why:"L'anthropomorphisme littéraire révèle nos projections sur les animaux — critique morale via l'animal." },
      { ref:"Art Spiegelman, Maus (1986)", correct:true, why:"L'animalisation utilisée pour dénoncer la déshumanisation — l'art critique nos comportements envers l'animal." },
      { ref:"Jack London, Croc-Blanc (1906)", correct:true, why:"Le roman donne accès à la subjectivité animale — empathie littéraire = compréhension du rapport à l'animal." },
      { ref:"FAO (2013) — élevage et GES", correct:false, why:"Chiffre économique/environnemental — pas directement lié à la question du rapport via l'art." },
      { ref:"Louise Bourgeois, Maman (1999)", correct:true, why:"L'araignée monumentale trouble nos frontières affectives envers l'animal — art et rapport émotionnel." },
      { ref:"Blackfish (documentaire, 2013)", correct:true, why:"Cinéma documentaire qui a changé le regard public sur les orques en captivité — art = prise de conscience." },
    ]
  },
  {
    sujet: "Manger de la viande est-il un acte moralement neutre ?",
    refs: [
      { ref:"Peter Singer — le spécisme (1975)", correct:true, why:"Consommer un être sensible dont on reconnaît la souffrance est moralement chargé." },
      { ref:"FAO (2013) — l'élevage représente 14,5% des GES", correct:true, why:"L'impact environnemental de l'acte alimentaire individuel — responsabilité collective." },
      { ref:"L214 — conditions d'élevage en France", correct:true, why:"Acheter un produit d'élevage intensif = financer ces pratiques — engagement moral indirect." },
      { ref:"Déclaration de Cambridge (2012)", correct:true, why:"Si les animaux souffrent consciemment, leur tuer sans nécessité engage une responsabilité." },
      { ref:"Grotte Chauvet — traces de chasse préhistorique", correct:true, why:"L'homme est omnivore depuis -35 000 ans — argument pour la 'naturalité' de l'acte." },
      { ref:"Maus (Spiegelman)", correct:false, why:"Animalisation politique — sans lien direct avec la consommation alimentaire." },
      { ref:"Aristote — types d'amitié", correct:false, why:"Hors sujet — concerne la relation affective, pas l'alimentation." },
      { ref:"Viande cellulaire — 1er burger in vitro (2013)", correct:true, why:"Alternative technologique qui pourrait rendre l'acte moralement neutre à l'avenir." },
    ]
  },
];

function CultureQuizView({ state, updateState, back }) {
  const [subMode, setSubMode] = React.useState(null); // 'qcm' | 'cache'

  if (!subMode) return <CultureMenu back={back} setSubMode={setSubMode} />;
  if (subMode === 'qcm') return <QuizQCM back={() => setSubMode(null)} state={state} updateState={updateState} />;
  if (subMode === 'cache') return <QuizCache back={() => setSubMode(null)} state={state} updateState={updateState} />;
  return null;
}

function CultureMenu({ back, setSubMode }) {
  return (
    <div style={{ maxWidth:760, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Connaissances culturelles" />

      <PaperCard style={{ padding:24, marginBottom:20, background:'linear-gradient(135deg, oklch(0.96 0.04 30), oklch(0.94 0.06 50))',
        border:'1.5px solid oklch(0.86 0.10 45)' }}>
        <div style={{ fontFamily:'var(--font-display)', fontSize:22, fontWeight:700,
          color:'oklch(0.22 0.08 30)', marginBottom:8 }}>
          Apprends les références par cœur
        </div>
        <div style={{ fontSize:14, color:'oklch(0.35 0.05 30)', lineHeight:1.6 }}>
          Deux jeux pour ancrer les connaissances culturelles essentielles au brevet.<br />
          Chaque référence que tu connais = un argument que tu peux mobiliser dans un essai.
        </div>
      </PaperCard>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:16 }}>
        <ModeCard
          icon="🎯"
          title="QCM — Connaissances"
          desc="30 questions sur les auteurs, œuvres, dates et concepts clés du cours. 4 réponses proposées."
          color="oklch(0.55 0.13 200)"
          onClick={() => setSubMode('qcm')}
        />
        <ModeCard
          icon="🔍"
          title="Qu'est-ce que cache ce sujet ?"
          desc="Un sujet d'essai s'affiche. Tu identifies quelles références culturelles sont pertinentes — et lesquelles sont des pièges."
          color="oklch(0.52 0.14 300)"
          onClick={() => setSubMode('cache')}
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
      <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:18,
        color:'oklch(0.22 0.02 280)', marginBottom:8 }}>{title}</div>
      <div style={{ fontSize:13.5, color:'oklch(0.45 0.02 280)', lineHeight:1.55, marginBottom:16 }}>{desc}</div>
      <Btn variant="solid" color={color} onClick={onClick}>Commencer →</Btn>
    </PaperCard>
  );
}

// ── QCM Mode ──────────────────────────────────────────────────────────────

function QuizQCM({ back, state, updateState }) {
  const questions = React.useMemo(() => shuffle([...CULTURE_QCM]), []);
  const [qi, setQi] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);

  function choose(i) {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === questions[qi].correct;
    if (correct) setScore(s => s + 1);
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
        <div style={{ fontSize:15, color:'oklch(0.40 0.07 60)', marginBottom:8 }}>
          {score >= questions.length * 0.8 ? 'Excellent ! Tu maîtrises les références.' :
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

      <PaperCard style={{ padding:28, marginBottom:16, background:'oklch(0.975 0.01 280)' }}>
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
    const missed = refs.filter((r, i) => !selected.has(i) && r.correct).length;
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
    <div style={{ maxWidth:760, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Qu'est-ce que cache ce sujet ?" />
      <div style={{ marginBottom:12 }}>
        <ProgressBar value={qi + 1} max={items.length} color="oklch(0.52 0.14 300)" />
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:5,
          fontSize:12, color:'oklch(0.50 0.02 280)', fontFamily:'var(--font-mono)' }}>
          <span>Sujet {qi + 1} / {items.length}</span>
          <span>Score : {score}</span>
        </div>
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
                <div style={{ fontWeight:600, color:'oklch(0.22 0.04 280)', marginBottom: revealed ? 4 : 0 }}>
                  {r.ref}
                </div>
                {revealed && (
                  <div style={{ fontSize:12.5, lineHeight:1.5,
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

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

window.CultureQuizView = CultureQuizView;
