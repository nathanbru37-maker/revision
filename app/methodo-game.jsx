// Jeu de méthodologie — 3 mini-jeux : Reconstitue l'intro / Identifie le passage / Vrai ou Faux

// ── Données ──────────────────────────────────────────────────────────────

const INTRO_EXERCICES = [
  {
    sujet: "Les animaux ont-ils des droits ?",
    elements: [
      { id:'a', type:'Accroche', text:"En 2015, l'article 515-14 du Code civil français reconnaissait enfin les animaux comme « êtres vivants doués de sensibilité ». Pourtant, ce même texte les maintient sous le régime des biens." },
      { id:'b', type:'Sujet reformulé', text:"Peut-on dire que les animaux possèdent ou devraient posséder des droits ?" },
      { id:'c', type:'Reformulation', text:"Autrement dit, sur quel fondement peut-on légitimement accorder des droits à des êtres non-humains, et jusqu'où peut aller cette reconnaissance ?" },
      { id:'d', type:'Annonce du plan', text:"Nous verrons d'abord que des arguments solides fondent l'idée de droits animaliers (I), avant d'examiner les obstacles philosophiques et pratiques (II), pour proposer enfin une protection renforcée adaptée (III)." },
    ],
    ordre: ['a','b','c','d']
  },
  {
    sujet: "L'homme est-il un animal comme les autres ?",
    elements: [
      { id:'a', type:'Accroche', text:"En 1859, Darwin publiait De l'origine des espèces, démontrant que l'homme et les grands singes descendent d'un ancêtre commun. Les recherches sur l'ADN ont depuis confirmé que nous partageons 98,7 % de notre génome avec le chimpanzé." },
      { id:'b', type:'Sujet reformulé', text:"Peut-on dire que l'homme n'est qu'un animal parmi les autres, sans caractéristique fondamentalement distinctive ?" },
      { id:'c', type:'Reformulation', text:"Autrement dit, si l'homme partage une origine commune avec les autres animaux, existe-t-il des traits proprement humains qui justifient une distinction — et cette distinction crée-t-elle une responsabilité envers les autres vivants ?" },
      { id:'d', type:'Annonce du plan', text:"Nous verrons d'abord que l'homme partage une continuité profonde avec les autres animaux (I), avant d'examiner les caractéristiques proprement humaines (II), pour montrer enfin que cette distinction crée une responsabilité morale particulière (III)." },
    ],
    ordre: ['a','b','c','d']
  },
  {
    sujet: "L'art permet-il de mieux comprendre notre rapport aux animaux ?",
    elements: [
      { id:'a', type:'Accroche', text:"Il y a 35 000 ans, des hommes de Cro-Magnon pénétraient dans la grotte Chauvet pour y peindre des lions, des rhinocéros, des mammouths. Ces premières traces d'art humain connu ne représentent pas des humains — elles représentent des animaux." },
      { id:'b', type:'Sujet reformulé', text:"Peut-on dire que l'art nous aide à mieux comprendre la relation complexe que l'homme entretient avec l'animal ?" },
      { id:'c', type:'Reformulation', text:"Autrement dit, au-delà de la simple représentation, l'œuvre d'art révèle-t-elle quelque chose d'essentiel sur la façon dont l'homme perçoit, utilise et se lie à l'animal ?" },
      { id:'d', type:'Annonce du plan', text:"Nous verrons d'abord que l'art révèle nos fantasmes et projections sur l'animal (I), avant d'examiner comment il critique nos comportements envers lui (II), pour montrer enfin qu'il est un lieu d'empathie et de rencontre (III)." },
    ],
    ordre: ['a','b','c','d']
  },
];

const IDENTIFIE_EXERCICES = [
  { text:"Gandhi écrivait : « La grandeur d'une nation et son progrès moral se jugent à la façon dont elle traite les animaux. » Cette citation nous invite à interroger le rapport moral entre l'homme et l'animal.", type:'Accroche', expl:"C'est une accroche par citation d'auteur — elle introduit le thème et accroche l'attention. Elle ne formule pas encore la problématique." },
  { text:"Peut-on dire que l'animal est capable d'entretenir avec l'homme une véritable relation d'amitié ?", type:'Sujet reformulé', expl:"C'est le sujet reformulé (étape ② de la méthode CUGEX) — le sujet original est réécrit en supprimant 'Pensez-vous' et en commençant par 'Peut-on dire que...'." },
  { text:"Autrement dit, le lien qui unit l'homme à son animal peut-il atteindre la profondeur et la réciprocité d'une amitié authentique, ou reste-t-il fondamentalement asymétrique ?", type:'Reformulation', expl:"C'est la reformulation (étape ③) — elle commence par 'Autrement dit' et révèle l'enjeu et la tension du sujet." },
  { text:"Nous verrons d'abord que l'animal manifeste des qualités réelles de compagnon fidèle (I), avant d'examiner les limites philosophiques d'une telle amitié (II), pour montrer enfin que ce lien unique enrichit notre conception de l'amitié (III).", type:'Annonce du plan', expl:"C'est l'annonce du plan (étape ④) — elle structure l'essai en 3 parties et s'articule avec 'Nous verrons d'abord... avant... pour montrer enfin...'." },
  { text:"L'animal offre à l'homme un soutien affectif dont les effets thérapeutiques sont aujourd'hui scientifiquement documentés. En effet, la zoothérapie démontre que la présence d'un chien réduit le cortisol (hormone du stress). La Déclaration de Cambridge (2012) confirme que les mammifères possèdent les substrats neurologiques de la conscience.", type:'Argument développé (AER)', expl:"C'est un paragraphe de développement construit selon la méthode AER : Argument (soutien affectif) + Explication (effet sur le cortisol) + Référence (Déclaration de Cambridge 2012)." },
  { text:"En définitive, si l'amitié au sens aristotélicien strict exige une réciprocité consciente que l'animal ne peut pleinement offrir, la relation homme-animal n'en est pas moins réelle et moralement engageante. Peut-être convient-il de sortir de nos catégories exclusivement humaines pour reconnaître ce lien dans ses propres termes. N'est-ce pas là que réside la vraie question ?", type:'Conclusion', expl:"C'est une conclusion : elle répond à la problématique (bilan), puis ouvre vers une question plus large. Elle tranche sans être dogmatique." },
  { text:"Si l'animal manifeste des qualités réelles de compagnon, il convient cependant d'examiner les limites philosophiques d'une telle analogie avec l'amitié humaine.", type:'Transition', expl:"C'est une transition entre deux parties — elle résume la partie précédente ('Si...') et annonce la suivante ('il convient cependant...'). Toujours 1 ou 2 phrases." },
  { text:"Selon la FAO (2013), l'élevage représente 14,5 % des émissions mondiales de gaz à effet de serre — davantage que tous les transports réunis. Chaque année, plus de 80 milliards d'animaux terrestres sont tués pour l'alimentation humaine.", type:'Accroche', expl:"Accroche par chiffres — des données frappantes qui interpellent immédiatement le lecteur. Elle ne pose pas encore la problématique." },
  { text:"Autrement dit, face aux dommages éthiques et environnementaux de l'élevage intensif, faut-il envisager une prohibition totale, ou plutôt une transformation progressive de nos pratiques ?", type:'Reformulation', expl:"C'est une reformulation (étape ③ CUGEX) — elle commence par 'Autrement dit' et révèle la tension du sujet : interdiction radicale ou transformation graduelle ?" },
  { text:"L'anthropomorphisme n'est pas uniquement une distorsion : il sert aussi à critiquer l'homme lui-même. La Fontaine (1668) prête aux animaux nos vices pour dénoncer la cour de Louis XIV. Spiegelman (1986) utilise les souris et les chats pour raconter l'Holocauste. L'animal est ici un prétexte littéraire — un miroir moral.", type:'Argument développé (AER)', expl:"Paragraphe AER : Argument (l'anthropomorphisme comme critique) + Explication (sert à dénoncer) + Références (La Fontaine 1668, Maus 1986)." },
];

const VRAI_FAUX = [
  { affirm:"L'introduction doit faire entre 6 et 10 lignes, en 1 seul paragraphe compact.", correct:true, expl:"Selon la méthode CUGEX, l'introduction est un paragraphe compact de 6 à 10 lignes. Elle ne doit pas être découpée en plusieurs alinéas." },
  { affirm:"On peut commencer sa conclusion par 'En conclusion,'.", correct:false, expl:"La formule 'En conclusion,' est trop scolaire et à éviter. Préférez 'En définitive,', 'Ainsi,', 'Au terme de cette réflexion,' ou encore une formule plus personnelle." },
  { affirm:"La méthode AER signifie : Affirmation, Explication, Référence.", correct:false, expl:"Presque ! Il s'agit de Argument (ou Affirmation), Explication, Référence culturelle. Certains professeurs l'appellent AEI (Affirmation, Explication, Illustration)." },
  { affirm:"Il faut sauter 2 lignes entre chaque grande partie du développement.", correct:true, expl:"La mise en page CUGEX prévoit de sauter 2 lignes entre l'introduction et la partie I, entre I et II, et entre II et la conclusion. Les alinéas marquent les sous-parties à l'intérieur de chaque partie." },
  { affirm:"L'accroche peut être une citation, un chiffre, une liste ou un paradoxe.", correct:true, expl:"L'accroche a plusieurs formes possibles selon la méthode CUGEX : citation d'auteur, chiffre marquant, liste évocatrice, paradoxe, fait d'actualité. L'essentiel est d'accrocher l'attention." },
  { affirm:"La problématique doit être formulée comme une affirmation, pas comme une question.", correct:false, expl:"La problématique doit être une QUESTION ouverte — elle pose l'enjeu du sujet sans y répondre. C'est la question à laquelle l'essai va répondre progressivement." },
  { affirm:"Le plan dialectique oppose une thèse, une antithèse, puis propose une synthèse.", correct:true, expl:"Le plan dialectique (thèse / antithèse / synthèse) est le plus courant en CGE. Il explore deux positions contradictoires avant de dépasser leur opposition dans une synthèse plus nuancée." },
  { affirm:"L'annonce du plan doit citer les titres exacts des parties (I, II, III).", correct:false, expl:"L'annonce du plan reformule les idées principales sans forcément citer les titres exacts. Elle utilise des formules comme 'Nous verrons d'abord... avant de... pour montrer enfin...'." },
  { affirm:"La conclusion doit absolument se terminer par une ouverture (question plus large).", correct:true, expl:"La conclusion comporte 2 temps : la synthèse (réponse à la problématique) + l'ouverture (vers une question plus vaste). L'ouverture montre que la réflexion ne s'arrête pas là." },
  { affirm:"On peut utiliser 'je' dans un essai de Culture Générale.", correct:false, expl:"En CGE, on évite le 'je' trop personnel. On utilise 'nous', 'on', ou des tournures impersonnelles ('Il semble que...', 'L'on peut considérer que...'). Le 'je' peut être accepté dans certains contextes, mais la prudence est de mise." },
  { affirm:"La référence culturelle (R dans AER) doit toujours inclure l'auteur et la date.", correct:true, expl:"Une bonne référence culturelle précise l'auteur, le titre de l'œuvre et la date si possible. Ex : 'Peter Singer, La Libération animale (1975)'. Plus la référence est précise, plus elle est convaincante." },
  { affirm:"On peut faire un plan en 2 parties (I et II) au lieu de 3.", correct:true, expl:"Un plan en 2 parties est tout à fait acceptable en CGE si les deux parties sont bien équilibrées et couvrent bien le sujet. L'essentiel est la cohérence du propos, pas le nombre de parties." },
];

const VRAI_FAUX_SYNTHESE = [
  { affirm:"En synthèse de documents, on peut exprimer son opinion personnelle.", correct:false, expl:"La synthèse est un exercice objectif : on reformule les idées des documents sans prendre parti. L'opinion personnelle est réservée à la 2ème partie (essai). Tout 'je pense que...' est une faute." },
  { affirm:"En synthèse, on organise les idées par document (doc 1 puis doc 2 puis doc 3).", correct:false, expl:"On organise les idées par thème, pas par document. Le plan thématique est la règle absolue : regrouper dans une même partie toutes les idées des différents docs qui traitent du même sujet." },
  { affirm:"Reformuler signifie reprendre les idées d'un document avec ses propres mots.", correct:true, expl:"La reformulation est le cœur de la synthèse : s'approprier l'idée et la reconstruire dans sa propre langue. Le copier-coller déguisé (paraphrase) prouve qu'on n'a pas vraiment compris — il est sanctionné." },
  { affirm:"On doit indiquer la source de chaque idée dans la synthèse (Doc. 1, Doc. 2...).", correct:true, expl:"Chaque idée doit être attribuée à sa source : 'Selon le document 1...', 'D'après le document 3...' ou '(Doc. 1)' en fin de phrase. C'est une exigence formelle incontournable." },
  { affirm:"L'introduction de la synthèse contient une accroche littéraire, comme dans l'essai.", correct:false, expl:"Non — l'introduction de synthèse présente le corpus (nombre de docs, nature, thème commun) puis annonce le plan thématique. Pas d'accroche poétique : c'est neutre, factuel, structuré." },
  { affirm:"La synthèse doit se terminer par une conclusion avec ouverture personnelle.", correct:false, expl:"La synthèse ne comporte pas de conclusion personnelle. Elle se termine avec le développement — ou par une très brève phrase de clôture neutre et objective. Pas d'avis, pas d'ouverture 'je'." },
  { affirm:"Le nombre de mots de la synthèse est libre.", correct:false, expl:"La synthèse respecte un nombre de mots imposé — généralement 200-250 mots par document (4 documents = 800-1 000 mots). Le dépassement et le sous-dépassement sont pénalisés." },
  { affirm:"On peut citer textuellement une phrase du document à condition de la mettre entre guillemets.", correct:true, expl:"Les citations courtes sont autorisées si elles sont entre guillemets et attribuées à leur source. Mais elles ne remplacent pas la reformulation — elles la complètent ponctuellement." },
  { affirm:"La paraphrase (recopier les phrases du doc en changeant quelques mots) est équivalente à la reformulation.", correct:false, expl:"Non : la paraphrase est une faute grave. Reformuler = comprendre l'idée et la reconstruire. Paraphraser = copier-coller déguisé. Le correcteur le repère immédiatement et le sanctionne." },
  { affirm:"La synthèse doit intégrer des idées de tous les documents fournis.", correct:true, expl:"Un document non exploité est une faute grave. Chaque document du corpus doit être représenté dans le développement — même un document plus difficile doit être mentionné au moins partiellement." },
  { affirm:"On peut utiliser 'je' dans une synthèse de documents.", correct:false, expl:"La synthèse est impersonnelle — on utilise 'on', 'les auteurs montrent que...', des tournures passives. Le 'je' introduit une subjectivité incompatible avec la neutralité requise." },
  { affirm:"Un plan en 2 parties thématiques est acceptable pour une synthèse.", correct:true, expl:"Un plan en 2 parties est tout à fait valide si les deux axes couvrent bien les idées du corpus. L'essentiel : chaque partie doit mobiliser plusieurs documents, pas un seul." },
];

// ── Composant principal ───────────────────────────────────────────────────

function MethodoGameView({ state, updateState, back }) {
  const [subMode, setSubMode] = React.useState(null);

  if (!subMode) return <MethodoMenu back={back} setSubMode={setSubMode} />;
  if (subMode === 'ordre') return <GameOrdre back={() => setSubMode(null)} state={state} updateState={updateState} />;
  if (subMode === 'identifie') return <GameIdentifie back={() => setSubMode(null)} state={state} updateState={updateState} />;
  if (subMode === 'vraifaux') return <GameVraiFaux back={() => setSubMode(null)} state={state} updateState={updateState} />;
  if (subMode === 'synthese') return <GameVraiFauxSynthese back={() => setSubMode(null)} state={state} updateState={updateState} />;
  return null;
}

function MethodoMenu({ back, setSubMode }) {
  const modes = [
    { key:'ordre', icon:'🔢', title:'Reconstitue l\'introduction', desc:'4 blocs mélangés à remettre dans le bon ordre en cliquant : Accroche, Sujet reformulé, Reformulation, Annonce du plan.', color:'oklch(0.55 0.13 200)' },
    { key:'identifie', icon:'🔎', title:'Identifie le passage', desc:'Un extrait s\'affiche. Tu dois dire si c\'est une accroche, une reformulation, un argument, une transition ou une conclusion.', color:'oklch(0.55 0.13 165)' },
    { key:'vraifaux', icon:'✓✗', title:'Vrai ou Faux — Essai (2ème partie)', desc:'12 affirmations sur les règles de l\'essai CGE : problématique, plan, AER, conclusion. Vrai ou faux ?', color:'oklch(0.50 0.13 30)' },
    { key:'synthese', icon:'📄', title:'Vrai ou Faux — Synthèse (1ère partie)', desc:'12 affirmations sur les règles de la synthèse de documents : objectivité, plan thématique, reformulation, sources. Vrai ou faux ?', color:'oklch(0.52 0.13 165)' },
  ];
  return (
    <div style={{ maxWidth:760, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Jeu de méthodologie" />
      <PaperCard style={{ padding:22, marginBottom:20, background:'linear-gradient(135deg, oklch(0.96 0.03 165), oklch(0.94 0.05 145))',
        border:'1.5px solid oklch(0.84 0.08 155)' }}>
        <div style={{ fontFamily:'var(--font-display)', fontSize:22, fontWeight:700,
          color:'oklch(0.22 0.08 155)', marginBottom:6 }}>Maîtrise la méthode</div>
        <div style={{ fontSize:13.5, color:'oklch(0.35 0.05 155)', lineHeight:1.6 }}>
          3 mini-jeux pour automatiser les réflexes de l'essai CGE. La méthode doit devenir un réflexe — pas une check-list à relire chaque fois.
        </div>
      </PaperCard>
      <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
        {modes.map(m => (
          <PaperCard key={m.key} onClick={() => setSubMode(m.key)} className="hov-lift" style={{
            padding:20, cursor:'pointer', display:'flex', alignItems:'center', gap:16,
            border:`1.5px solid color-mix(in oklch, ${m.color} 18%, white)`,
          }}>
            <div style={{ width:56, height:56, borderRadius:16, flexShrink:0, display:'grid', placeItems:'center',
              background:`color-mix(in oklch, ${m.color} 12%, white)`, fontSize:24 }}>
              {m.icon}
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:700, fontSize:16, color:'oklch(0.22 0.02 280)', marginBottom:4 }}>{m.title}</div>
              <div style={{ fontSize:13, color:'oklch(0.45 0.02 280)', lineHeight:1.5 }}>{m.desc}</div>
            </div>
            <span style={{ fontSize:20, color:m.color, flexShrink:0 }}>→</span>
          </PaperCard>
        ))}
      </div>
    </div>
  );
}

// ── Game 1 : Reconstitue l'introduction ──────────────────────────────────

function GameOrdre({ back, state, updateState }) {
  const exercices = React.useMemo(() => shuffleArr([...INTRO_EXERCICES]), []);
  const [ei, setEi] = React.useState(0);
  const [placed, setPlaced] = React.useState([]);
  const [done, setDone] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [checked, setChecked] = React.useState(false);

  const ex = exercices[ei];
  const available = ex.elements.filter(el => !placed.find(p => p.id === el.id));
  const shuffled = React.useMemo(() => shuffleArr([...ex.elements]), [ei]);
  const pool = shuffled.filter(el => !placed.find(p => p.id === el.id));

  function place(el) { if (!checked) setPlaced(p => [...p, el]); }
  function remove(i) { if (!checked) setPlaced(p => p.filter((_, idx) => idx !== i)); }

  function check() {
    const ok = placed.every((el, i) => el.id === ex.ordre[i]);
    if (ok) setScore(s => s + 1);
    setChecked(true);
  }

  function next() {
    setPlaced([]);
    setChecked(false);
    if (ei + 1 >= exercices.length) {
      const xp = score * 5;
      const ns = { ...state, xp: state.xp + xp };
      updateState(window.RevStore.bumpStreak(ns), `+${xp} XP — Intro reconstituée !`);
      setDone(true);
    } else {
      setEi(i => i + 1);
    }
  }

  if (done) return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Reconstitue l'introduction" />
      <ScoreCard score={score} max={exercices.length} back={back} color="oklch(0.55 0.13 200)" />
    </div>
  );

  const TYPES_COLOR = {
    'Accroche':'oklch(0.55 0.13 75)',
    'Sujet reformulé':'oklch(0.52 0.14 300)',
    'Reformulation':'oklch(0.55 0.13 200)',
    'Annonce du plan':'oklch(0.55 0.13 165)',
  };

  return (
    <div style={{ maxWidth:760, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Reconstitue l'introduction" />
      <div style={{ marginBottom:12 }}>
        <ProgressBar value={ei + 1} max={exercices.length} color="oklch(0.55 0.13 200)" />
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:5,
          fontSize:12, color:'oklch(0.50 0.02 280)', fontFamily:'var(--font-mono)' }}>
          <span>Exercice {ei + 1} / {exercices.length}</span>
          <span>Score : {score}</span>
        </div>
      </div>

      <PaperCard style={{ padding:18, marginBottom:16, background:'oklch(0.96 0.04 280)',
        border:'1.5px solid oklch(0.85 0.08 280)' }}>
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:1.2, color:'oklch(0.45 0.12 280)',
          textTransform:'uppercase', marginBottom:6 }}>Sujet</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize:16, fontWeight:700,
          color:'oklch(0.22 0.06 280)', lineHeight:1.3 }}>« {ex.sujet} »</div>
      </PaperCard>

      <div style={{ fontSize:13, color:'oklch(0.40 0.02 280)', marginBottom:10, fontWeight:600 }}>
        {checked ? 'Résultat :' : 'Clique les blocs dans le bon ordre pour reconstituer l\'introduction :'}
      </div>

      {/* Zone de dépôt */}
      <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:16 }}>
        {[0,1,2,3].map(i => {
          const el = placed[i];
          const c = el ? TYPES_COLOR[el.type] : 'oklch(0.88 0.005 280)';
          const isOk = checked && el && el.id === ex.ordre[i];
          const isBad = checked && el && el.id !== ex.ordre[i];
          return (
            <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
              <div style={{ width:28, height:28, borderRadius:8, background:`color-mix(in oklch, ${c} 15%, white)`,
                border:`2px solid ${c}`, display:'grid', placeItems:'center', flexShrink:0, marginTop:2,
                fontFamily:'var(--font-mono)', fontSize:13, fontWeight:700, color:c }}>
                {i+1}
              </div>
              {el ? (
                <div onClick={() => !checked && remove(i)} style={{
                  flex:1, padding:'10px 14px', borderRadius:10,
                  background: isBad ? 'oklch(0.93 0.05 25)' : isOk ? 'oklch(0.93 0.06 145)' : `color-mix(in oklch, ${c} 8%, white)`,
                  border: `2px solid ${isBad ? 'oklch(0.68 0.12 25)' : isOk ? 'oklch(0.68 0.12 145)' : c}`,
                  cursor: checked ? 'default' : 'pointer',
                }}>
                  <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:1,
                    color: isBad ? 'oklch(0.38 0.10 25)' : isOk ? 'oklch(0.32 0.12 145)' : c,
                    marginBottom:4 }}>
                    {el.type} {isBad ? '✗' : isOk ? '✓' : ''}
                  </div>
                  <div style={{ fontSize:13, lineHeight:1.5, color:'oklch(0.28 0.03 280)' }}>{el.text}</div>
                  {checked && isBad && (
                    <div style={{ marginTop:8, fontSize:12, color:'oklch(0.35 0.08 25)',
                      padding:'6px 10px', borderRadius:7, background:'oklch(0.96 0.03 25)' }}>
                      Attendu : <strong>{ex.ordre[i] === 'a' ? ex.elements[0].type : ex.ordre[i] === 'b' ? ex.elements[1].type : ex.ordre[i] === 'c' ? ex.elements[2].type : ex.elements[3].type}</strong>
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ flex:1, padding:'12px 14px', borderRadius:10, border:'2px dashed oklch(0.85 0.005 280)',
                  background:'oklch(0.985 0.003 280)', color:'oklch(0.60 0.02 280)', fontSize:13,
                  fontStyle:'italic' }}>
                  Clique un bloc ci-dessous pour le placer ici…
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Pool de blocs */}
      {!checked && pool.length > 0 && (
        <div>
          <div style={{ fontSize:12, fontWeight:700, color:'oklch(0.50 0.02 280)',
            textTransform:'uppercase', letterSpacing:1, marginBottom:8 }}>Blocs disponibles</div>
          <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:16 }}>
            {pool.map(el => {
              const c = TYPES_COLOR[el.type];
              return (
                <button key={el.id} onClick={() => place(el)} style={{
                  padding:'10px 14px', borderRadius:10, border:`2px solid color-mix(in oklch, ${c} 25%, white)`,
                  background:`color-mix(in oklch, ${c} 6%, white)`, cursor:'pointer',
                  textAlign:'left', fontFamily:'var(--font-ui)',
                }}>
                  <div style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:1,
                    color:c, marginBottom:4 }}>{el.type}</div>
                  <div style={{ fontSize:13, lineHeight:1.5, color:'oklch(0.30 0.02 280)' }}>{el.text}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {!checked ? (
        <Btn variant="solid" color="oklch(0.55 0.13 200)"
          onClick={check} disabled={placed.length < 4}>
          Vérifier mon ordre →
        </Btn>
      ) : (
        <div>
          <div style={{ padding:'12px 16px', borderRadius:10, marginBottom:12,
            background: placed.every((el, i) => el.id === ex.ordre[i]) ? 'oklch(0.93 0.06 145)' : 'oklch(0.94 0.04 25)',
            border:`1.5px solid ${placed.every((el, i) => el.id === ex.ordre[i]) ? 'oklch(0.70 0.12 145)' : 'oklch(0.72 0.12 25)'}`,
            fontSize:14, fontWeight:700,
            color: placed.every((el, i) => el.id === ex.ordre[i]) ? 'oklch(0.28 0.10 145)' : 'oklch(0.30 0.08 25)' }}>
            {placed.every((el, i) => el.id === ex.ordre[i])
              ? '✓ Parfait ! L\'ordre est correct.'
              : '✗ Pas tout à fait — regarde les corrections en rouge.'}
          </div>
          <Btn variant="solid" color="oklch(0.55 0.13 200)" onClick={next}>
            {ei + 1 >= exercices.length ? 'Voir mon score →' : 'Exercice suivant →'}
          </Btn>
        </div>
      )}
    </div>
  );
}

// ── Game 2 : Identifie le passage ─────────────────────────────────────────

function GameIdentifie({ back, state, updateState }) {
  const questions = React.useMemo(() => shuffleArr([...IDENTIFIE_EXERCICES]), []);
  const [qi, setQi] = React.useState(0);
  const [chosen, setChosen] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);

  const ALL_TYPES = ['Accroche','Sujet reformulé','Reformulation','Annonce du plan','Argument développé (AER)','Conclusion','Transition'];
  const q = questions[qi];

  function choose(t) {
    if (chosen) return;
    if (t === q.type) setScore(s => s + 1);
    setChosen(t);
  }

  function next() {
    setChosen(null);
    if (qi + 1 >= questions.length) {
      const xp = Math.round((score / questions.length) * 12);
      const ns = { ...state, xp: state.xp + xp };
      updateState(window.RevStore.bumpStreak(ns), `+${xp} XP — Identification terminée !`);
      setDone(true);
    } else {
      setQi(i => i + 1);
    }
  }

  if (done) return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Identifie le passage" />
      <ScoreCard score={score} max={questions.length} back={back} color="oklch(0.55 0.13 165)" />
    </div>
  );

  return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Identifie le passage" />
      <div style={{ marginBottom:12 }}>
        <ProgressBar value={qi + 1} max={questions.length} color="oklch(0.55 0.13 165)" />
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:5,
          fontSize:12, color:'oklch(0.50 0.02 280)', fontFamily:'var(--font-mono)' }}>
          <span>{qi + 1} / {questions.length}</span>
          <span>Score : {score}</span>
        </div>
      </div>

      <PaperCard style={{ padding:22, marginBottom:16, background:'oklch(0.975 0.01 280)' }}>
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:1.2, color:'oklch(0.45 0.02 280)',
          textTransform:'uppercase', marginBottom:10 }}>Ce passage est…</div>
        <div style={{ fontSize:15, lineHeight:1.65, color:'oklch(0.22 0.03 280)',
          fontFamily:'Georgia, serif', fontStyle:'italic',
          borderLeft:'3px solid oklch(0.80 0.005 280)', paddingLeft:14 }}>
          « {q.text} »
        </div>
      </PaperCard>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))', gap:8, marginBottom:16 }}>
        {ALL_TYPES.map(t => {
          const isChosen = chosen === t;
          const isCorrect = t === q.type;
          let bg = 'white', border = 'oklch(0.88 0.005 280)', color = 'oklch(0.30 0.02 280)';
          if (chosen) {
            if (isCorrect) { bg = 'oklch(0.93 0.06 145)'; border = 'oklch(0.65 0.15 145)'; color = 'oklch(0.25 0.10 145)'; }
            else if (isChosen) { bg = 'oklch(0.93 0.05 25)'; border = 'oklch(0.65 0.12 25)'; color = 'oklch(0.28 0.08 25)'; }
          }
          return (
            <button key={t} onClick={() => choose(t)} disabled={!!chosen} style={{
              padding:'12px 14px', borderRadius:10, border:`2px solid ${border}`, background:bg,
              color, fontFamily:'var(--font-ui)', fontSize:13, fontWeight:600,
              cursor: chosen ? 'default' : 'pointer', transition:'all .15s ease', textAlign:'center',
              display:'flex', alignItems:'center', justifyContent:'center', gap:6,
            }}>
              {chosen && isCorrect && '✓ '}{t}{chosen && isChosen && !isCorrect && ' ✗'}
            </button>
          );
        })}
      </div>

      {chosen && (
        <div>
          <div style={{ padding:'14px 18px', borderRadius:12,
            background: chosen === q.type ? 'oklch(0.95 0.05 145)' : 'oklch(0.96 0.04 25)',
            border:`1.5px solid ${chosen === q.type ? 'oklch(0.72 0.12 145)' : 'oklch(0.72 0.12 25)'}`,
            marginBottom:12, fontSize:13.5, lineHeight:1.6,
            color: chosen === q.type ? 'oklch(0.25 0.10 145)' : 'oklch(0.28 0.08 25)' }}>
            <strong>{chosen === q.type ? '✓ C\'est bien une ' + q.type + ' !' : '✗ Non — c\'est une ' + q.type + '.'}</strong><br />
            {q.expl}
          </div>
          <Btn variant="solid" color="oklch(0.55 0.13 165)" onClick={next}>
            {qi + 1 >= questions.length ? 'Voir mon score →' : 'Passage suivant →'}
          </Btn>
        </div>
      )}
    </div>
  );
}

// ── Game 3 : Vrai ou Faux ─────────────────────────────────────────────────

function GameVraiFaux({ back, state, updateState }) {
  const questions = React.useMemo(() => shuffleArr([...VRAI_FAUX]), []);
  const [qi, setQi] = React.useState(0);
  const [chosen, setChosen] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);

  const q = questions[qi];

  function choose(val) {
    if (chosen !== null) return;
    if (val === q.correct) setScore(s => s + 1);
    setChosen(val);
  }

  function next() {
    setChosen(null);
    if (qi + 1 >= questions.length) {
      const xp = Math.round((score / questions.length) * 10);
      const ns = { ...state, xp: state.xp + xp };
      updateState(window.RevStore.bumpStreak(ns), `+${xp} XP — Vrai/Faux terminé !`);
      setDone(true);
    } else {
      setQi(i => i + 1);
    }
  }

  if (done) return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Vrai ou Faux" />
      <ScoreCard score={score} max={questions.length} back={back} color="oklch(0.50 0.13 30)" />
    </div>
  );

  return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Vrai ou Faux — Méthodologie" />
      <div style={{ marginBottom:12 }}>
        <ProgressBar value={qi + 1} max={questions.length} color="oklch(0.50 0.13 30)" />
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:5,
          fontSize:12, color:'oklch(0.50 0.02 280)', fontFamily:'var(--font-mono)' }}>
          <span>{qi + 1} / {questions.length}</span>
          <span>Score : {score}</span>
        </div>
      </div>

      <PaperCard style={{ padding:28, marginBottom:20, background:'oklch(0.975 0.01 280)',
        minHeight:120, display:'flex', alignItems:'center' }}>
        <div style={{ fontFamily:'var(--font-display)', fontSize:19, fontWeight:700,
          lineHeight:1.35, color:'oklch(0.22 0.04 280)', textWrap:'balance' }}>
          {q.affirm}
        </div>
      </PaperCard>

      <div style={{ display:'flex', gap:14, marginBottom:16 }}>
        {[true, false].map(val => {
          const isChosen = chosen === val;
          const isCorrect = val === q.correct;
          let bg, border, color;
          if (chosen !== null) {
            if (isCorrect) { bg = 'oklch(0.92 0.07 145)'; border = 'oklch(0.62 0.14 145)'; color = 'oklch(0.22 0.12 145)'; }
            else if (isChosen) { bg = 'oklch(0.92 0.06 25)'; border = 'oklch(0.62 0.14 25)'; color = 'oklch(0.25 0.10 25)'; }
            else { bg = 'oklch(0.97 0.005 280)'; border = 'oklch(0.88 0.005 280)'; color = 'oklch(0.55 0.02 280)'; }
          } else {
            bg = val ? 'oklch(0.97 0.03 145)' : 'oklch(0.97 0.03 25)';
            border = val ? 'oklch(0.80 0.10 145)' : 'oklch(0.80 0.10 25)';
            color = val ? 'oklch(0.35 0.12 145)' : 'oklch(0.35 0.10 25)';
          }
          return (
            <button key={String(val)} onClick={() => choose(val)} disabled={chosen !== null} style={{
              flex:1, padding:'20px 14px', borderRadius:14, border:`2px solid ${border}`, background:bg,
              color, fontFamily:'var(--font-display)', fontSize:22, fontWeight:800,
              cursor: chosen !== null ? 'default' : 'pointer', transition:'all .15s ease',
              display:'flex', flexDirection:'column', alignItems:'center', gap:4,
            }}>
              <span style={{ fontSize:32 }}>{val ? '✓' : '✗'}</span>
              <span>{val ? 'VRAI' : 'FAUX'}</span>
            </button>
          );
        })}
      </div>

      {chosen !== null && (
        <div>
          <div style={{ padding:'14px 18px', borderRadius:12,
            background: chosen === q.correct ? 'oklch(0.95 0.05 145)' : 'oklch(0.96 0.04 25)',
            border:`1.5px solid ${chosen === q.correct ? 'oklch(0.72 0.12 145)' : 'oklch(0.72 0.12 25)'}`,
            marginBottom:12, fontSize:13.5, lineHeight:1.6,
            color: chosen === q.correct ? 'oklch(0.25 0.10 145)' : 'oklch(0.28 0.08 25)' }}>
            <strong>{chosen === q.correct ? '✓ Correct !' : `✗ Faux — c'est ${q.correct ? 'VRAI' : 'FAUX'}.`}</strong><br />
            {q.expl}
          </div>
          <Btn variant="solid" color="oklch(0.50 0.13 30)" onClick={next}>
            {qi + 1 >= questions.length ? 'Voir mon score →' : 'Affirmation suivante →'}
          </Btn>
        </div>
      )}
    </div>
  );
}

// ── Game 4 : Vrai ou Faux — Synthèse (1ère partie) ───────────────────────

function GameVraiFauxSynthese({ back, state, updateState }) {
  const questions = React.useMemo(() => shuffleArr([...VRAI_FAUX_SYNTHESE]), []);
  const [qi, setQi] = React.useState(0);
  const [chosen, setChosen] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);

  const q = questions[qi];

  function choose(val) {
    if (chosen !== null) return;
    if (val === q.correct) setScore(s => s + 1);
    setChosen(val);
  }

  function next() {
    setChosen(null);
    if (qi + 1 >= questions.length) {
      const xp = Math.round((score / questions.length) * 10);
      const ns = { ...state, xp: state.xp + xp };
      updateState(window.RevStore.bumpStreak(ns), `+${xp} XP — Synthèse Vrai/Faux terminé !`);
      setDone(true);
    } else {
      setQi(i => i + 1);
    }
  }

  if (done) return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Synthèse — Vrai ou Faux" />
      <ScoreCard score={score} max={questions.length} back={back} color="oklch(0.52 0.13 165)" />
    </div>
  );

  return (
    <div style={{ maxWidth:700, margin:'0 auto', padding:'24px 20px 80px' }}>
      <TopNav back={back} title="Synthèse (1ère partie) — Vrai ou Faux" />

      <PaperCard style={{ padding:'12px 18px', marginBottom:14,
        background:'linear-gradient(135deg, oklch(0.96 0.03 165), oklch(0.94 0.05 145))',
        border:'1.5px solid oklch(0.84 0.08 155)' }}>
        <div style={{ fontSize:12.5, color:'oklch(0.32 0.08 155)', lineHeight:1.55 }}>
          <strong>1ère partie — Synthèse de documents :</strong> objectivité, plan thématique, reformulation, attribution des sources, contrainte de mots.
        </div>
      </PaperCard>

      <div style={{ marginBottom:12 }}>
        <ProgressBar value={qi + 1} max={questions.length} color="oklch(0.52 0.13 165)" />
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:5,
          fontSize:12, color:'oklch(0.50 0.02 280)', fontFamily:'var(--font-mono)' }}>
          <span>{qi + 1} / {questions.length}</span>
          <span>Score : {score}</span>
        </div>
      </div>

      <PaperCard style={{ padding:28, marginBottom:20, background:'oklch(0.975 0.01 280)',
        minHeight:120, display:'flex', alignItems:'center' }}>
        <div style={{ fontFamily:'var(--font-display)', fontSize:19, fontWeight:700,
          lineHeight:1.35, color:'oklch(0.22 0.04 280)', textWrap:'balance' }}>
          {q.affirm}
        </div>
      </PaperCard>

      <div style={{ display:'flex', gap:14, marginBottom:16 }}>
        {[true, false].map(val => {
          const isChosen = chosen === val;
          const isCorrect = val === q.correct;
          let bg, border, color;
          if (chosen !== null) {
            if (isCorrect) { bg = 'oklch(0.92 0.07 145)'; border = 'oklch(0.62 0.14 145)'; color = 'oklch(0.22 0.12 145)'; }
            else if (isChosen) { bg = 'oklch(0.92 0.06 25)'; border = 'oklch(0.62 0.14 25)'; color = 'oklch(0.25 0.10 25)'; }
            else { bg = 'oklch(0.97 0.005 280)'; border = 'oklch(0.88 0.005 280)'; color = 'oklch(0.55 0.02 280)'; }
          } else {
            bg = val ? 'oklch(0.97 0.03 145)' : 'oklch(0.97 0.03 25)';
            border = val ? 'oklch(0.80 0.10 145)' : 'oklch(0.80 0.10 25)';
            color = val ? 'oklch(0.35 0.12 145)' : 'oklch(0.35 0.10 25)';
          }
          return (
            <button key={String(val)} onClick={() => choose(val)} disabled={chosen !== null} style={{
              flex:1, padding:'20px 14px', borderRadius:14, border:`2px solid ${border}`, background:bg,
              color, fontFamily:'var(--font-display)', fontSize:22, fontWeight:800,
              cursor: chosen !== null ? 'default' : 'pointer', transition:'all .15s ease',
              display:'flex', flexDirection:'column', alignItems:'center', gap:4,
            }}>
              <span style={{ fontSize:32 }}>{val ? '✓' : '✗'}</span>
              <span>{val ? 'VRAI' : 'FAUX'}</span>
            </button>
          );
        })}
      </div>

      {chosen !== null && (
        <div>
          <div style={{ padding:'14px 18px', borderRadius:12,
            background: chosen === q.correct ? 'oklch(0.95 0.05 145)' : 'oklch(0.96 0.04 25)',
            border:`1.5px solid ${chosen === q.correct ? 'oklch(0.72 0.12 145)' : 'oklch(0.72 0.12 25)'}`,
            marginBottom:12, fontSize:13.5, lineHeight:1.6,
            color: chosen === q.correct ? 'oklch(0.25 0.10 145)' : 'oklch(0.28 0.08 25)' }}>
            <strong>{chosen === q.correct ? '✓ Correct !' : `✗ Faux — c'est ${q.correct ? 'VRAI' : 'FAUX'}.`}</strong><br />
            {q.expl}
          </div>
          <Btn variant="solid" color="oklch(0.52 0.13 165)" onClick={next}>
            {qi + 1 >= questions.length ? 'Voir mon score →' : 'Affirmation suivante →'}
          </Btn>
        </div>
      )}
    </div>
  );
}

// ── Composants utilitaires ───────────────────────────────────────────────

function ScoreCard({ score, max, back, color }) {
  const pct = Math.round((score / max) * 100);
  const msg = pct >= 80 ? 'Excellent ! La méthode n\'a plus de secrets pour toi.' :
              pct >= 50 ? 'Bien ! Quelques règles à consolider.' :
              'Relis la méthode CUGEX et recommence — ça viendra !';
  return (
    <PaperCard style={{ padding:40, textAlign:'center',
      background:'linear-gradient(135deg, oklch(0.96 0.04 75), oklch(0.94 0.06 60))' }}>
      <div style={{ fontSize:48, marginBottom:8 }}>🎯</div>
      <div style={{ fontFamily:'var(--font-display)', fontSize:30, fontWeight:800,
        color:'oklch(0.28 0.10 60)', marginBottom:6 }}>{score} / {max}</div>
      <div style={{ fontSize:16, color:'oklch(0.40 0.07 60)', marginBottom:20 }}>{msg}</div>
      <Btn variant="solid" color={color} onClick={back}>Retour aux jeux →</Btn>
    </PaperCard>
  );
}

function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

window.MethodoGameView = MethodoGameView;
