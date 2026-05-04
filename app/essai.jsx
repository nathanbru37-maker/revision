// Vue Sujets d'essai — méthodologie CUGEX complète + indices progressifs

function EssaiView({ back }) {
  const sujets = window.REVISION_ESSAIS;
  const [idx, setIdx] = React.useState(0);
  const [revealed, setRevealed] = React.useState({});
  const [showMethode, setShowMethode] = React.useState(false);

  const sujet = sujets[idx];

  function goTo(i) {
    setIdx(i);
    setRevealed({});
  }
  function toggle(key) { setRevealed(r => ({ ...r, [key]: !r[key] })); }

  const HINT_STEPS = [
    { key:'notions',     icon:'🔑', label:'Étape 1 — Définir les notions clés',      color:'oklch(0.55 0.13 200)' },
    { key:'accroche',    icon:'💡', label:'Étape 2 — Choisir une accroche',           color:'oklch(0.55 0.13 75)'  },
    { key:'pb',          icon:'❓', label:'Étape 3 — Formuler la problématique',       color:'oklch(0.52 0.14 300)' },
    { key:'plan',        icon:'📋', label:'Étape 4 — Construire le plan',              color:'oklch(0.55 0.13 165)' },
    { key:'refs',        icon:'📚', label:'Étape 5 — Recenser les références clés',    color:'oklch(0.50 0.13 30)'  },
    { key:'correction',  icon:'✍️', label:'Étape 6 — Voir la correction complète',    color:'oklch(0.45 0.10 280)' },
  ];

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '24px 20px 80px' }}>
      <TopNav back={back} title="Sujets d'essai" />

      {/* Subject card */}
      <PaperCard style={{
        padding: 32,
        background: 'linear-gradient(135deg, oklch(0.96 0.04 280), oklch(0.94 0.06 260))',
        border: '1.5px solid oklch(0.84 0.08 280)',
        marginBottom: 16,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position:'absolute', right:-16, top:-16, width:120, height:120, opacity:0.08,
          fontFamily:'var(--font-display)', fontSize:120, fontWeight:800, color:'oklch(0.40 0.12 280)', lineHeight:1 }}>
          {idx + 1}
        </div>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:11, fontWeight:700, letterSpacing:1.5,
          color:'oklch(0.45 0.12 280)', textTransform:'uppercase', marginBottom:10 }}>
          Sujet {idx + 1} / {sujets.length}
        </div>
        <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(19px, 2.8vw, 26px)', fontWeight:700,
          lineHeight:1.25, color:'oklch(0.20 0.06 280)', textWrap:'balance', marginBottom:20 }}>
          « {sujet.q} »
        </div>

        {/* Nav */}
        <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
          <Btn variant="ghost" color="oklch(0.45 0.10 280)" onClick={() => goTo((idx - 1 + sujets.length) % sujets.length)}>← Précédent</Btn>
          <Btn variant="ghost" color="oklch(0.45 0.10 280)" onClick={() => goTo((idx + 1) % sujets.length)}>Suivant →</Btn>
          <Btn variant="solid" color="oklch(0.45 0.10 280)"
            onClick={() => goTo(Math.floor(Math.random() * sujets.length))}>↻ Aléatoire</Btn>
          <Btn variant="soft" color="oklch(0.55 0.13 165)"
            onClick={() => setShowMethode(m => !m)}>
            {showMethode ? '✕ Méthode' : '📖 Méthode générale'}
          </Btn>
        </div>
      </PaperCard>

      {/* Methode generale panel */}
      {showMethode && <MethodeGenerale onClose={() => setShowMethode(false)} />}

      {/* Info banner */}
      <div style={{ padding:'10px 16px', borderRadius:10, background:'oklch(0.97 0.03 75)',
        border:'1px solid oklch(0.88 0.08 75)', fontSize:13, color:'oklch(0.40 0.08 75)', marginBottom:20 }}>
        💡 <strong>Conseil CUGEX</strong> : tente chaque étape par toi-même avant de révéler l'indice. La compréhension vient de l'effort, pas de la lecture passive.
      </div>

      {/* Progressive hint sections */}
      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        {HINT_STEPS.map(step => (
          <HintSection key={step.key} step={step} sujet={sujet}
            open={!!revealed[step.key]} onToggle={() => toggle(step.key)} />
        ))}
      </div>
    </div>
  );
}

function HintSection({ step, sujet, open, onToggle }) {
  return (
    <div style={{ borderRadius:14, overflow:'hidden',
      border:`1.5px solid ${open ? step.color : 'oklch(0.90 0.005 280)'}`,
      background: open ? 'white' : 'oklch(0.985 0.003 280)',
      transition:'border-color .2s ease',
    }}>
      {/* Header */}
      <button onClick={onToggle} style={{
        width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'14px 20px', background:'transparent', border:'none', cursor:'pointer',
        fontFamily:'var(--font-ui)', textAlign:'left', gap:12,
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <span style={{ fontSize:20 }}>{step.icon}</span>
          <span style={{ fontWeight:700, fontSize:14.5, color: open ? step.color : 'oklch(0.35 0.02 280)' }}>
            {step.label}
          </span>
        </div>
        <span style={{ fontSize:18, color: open ? step.color : 'oklch(0.60 0.02 280)',
          transform: open ? 'rotate(180deg)' : 'none', transition:'transform .2s ease' }}>▾</span>
      </button>

      {/* Content */}
      {open && (
        <div style={{ padding:'0 20px 20px', borderTop:`1px solid oklch(0.93 0.01 280)` }}>
          <HintContent step={step} sujet={sujet} />
        </div>
      )}
    </div>
  );
}

function HintContent({ step, sujet }) {
  switch (step.key) {
    case 'notions': return <NotionsContent sujet={sujet} />;
    case 'accroche': return <AccrocheContent sujet={sujet} />;
    case 'pb': return <PbContent sujet={sujet} />;
    case 'plan': return <PlanContent sujet={sujet} />;
    case 'refs': return <RefsContent sujet={sujet} />;
    case 'correction': return <CorrectionContent sujet={sujet} />;
    default: return null;
  }
}

function NotionsContent({ sujet }) {
  return (
    <div>
      <p style={{ fontSize:13, color:'oklch(0.45 0.02 280)', marginTop:12, marginBottom:14 }}>
        <strong>Méthode :</strong> avant tout, analyse les mots importants du sujet. Définis chaque notion-clé — cela délimite le champ de ta réflexion et évite le hors-sujet.
      </p>
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {sujet.notions.map((n, i) => (
          <div key={i} style={{ padding:'12px 16px', borderRadius:10, background:'oklch(0.96 0.03 200)',
            border:'1px solid oklch(0.88 0.06 200)' }}>
            <div style={{ fontFamily:'var(--font-mono)', fontWeight:700, fontSize:13,
              color:'oklch(0.35 0.12 200)', marginBottom:4 }}>
              {n.mot}
            </div>
            <div style={{ fontSize:13.5, lineHeight:1.55, color:'oklch(0.30 0.02 280)' }}
              dangerouslySetInnerHTML={{ __html: n.def }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AccrocheContent({ sujet }) {
  const all = window.CUGEX_CITATIONS;
  return (
    <div>
      <p style={{ fontSize:13, color:'oklch(0.45 0.02 280)', marginTop:12, marginBottom:12 }}>
        <strong>Méthode :</strong> l'accroche doit <em>accrocher</em> — surprendre, intriguer ou émouvoir. Choisis parmi : citation d'auteur, chiffre marquant, fait d'actualité, paradoxe, liste évocatrice.
      </p>
      <div style={{ padding:'14px 18px', borderRadius:10, background:'oklch(0.97 0.03 75)',
        border:'1px solid oklch(0.88 0.10 75)', marginBottom:14 }}>
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:1, color:'oklch(0.45 0.10 75)',
          textTransform:'uppercase', marginBottom:8 }}>Accroche suggérée pour ce sujet</div>
        <div style={{ fontSize:15, lineHeight:1.5, color:'oklch(0.25 0.04 280)', fontStyle:'italic' }}
          dangerouslySetInnerHTML={{ __html: '«&nbsp;' + sujet.accroche + '&nbsp;»' }} />
      </div>
      <div style={{ fontSize:13, color:'oklch(0.45 0.02 280)', marginBottom:8, fontWeight:600 }}>
        Autres citations mobilisables pour ce thème :
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
        {all.slice(0, 4).map((c, i) => (
          <div key={i} style={{ padding:'8px 12px', borderRadius:8, background:'oklch(0.97 0.01 280)',
            border:'1px solid oklch(0.91 0.005 280)', fontSize:13, lineHeight:1.5, color:'oklch(0.30 0.02 280)' }}>
            <em>«&nbsp;{c.texte}&nbsp;»</em>
            <span style={{ color:'oklch(0.50 0.02 280)', marginLeft:6 }}>— {c.auteur}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PbContent({ sujet }) {
  return (
    <div>
      <p style={{ fontSize:13, color:'oklch(0.45 0.02 280)', marginTop:12, marginBottom:14 }}>
        <strong>Méthode CUGEX :</strong> après l'accroche, écris le sujet en enlevant "diriez-vous" / "pensez-vous" → <em>"Peut-on dire que..."</em>. Puis reformule en commençant par <em>"Autrement dit..."</em>.
      </p>

      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        <div style={{ padding:'12px 16px', borderRadius:10, background:'oklch(0.96 0.04 300)',
          border:'1px solid oklch(0.86 0.08 300)' }}>
          <div style={{ fontSize:11, fontWeight:700, letterSpacing:1, color:'oklch(0.40 0.12 300)',
            textTransform:'uppercase', marginBottom:6 }}>② Sujet reformulé ("Peut-on dire que…")</div>
          <div style={{ fontSize:14.5, lineHeight:1.5, color:'oklch(0.22 0.04 280)' }}>
            {sujet.sujet_reformule}
          </div>
        </div>

        <div style={{ padding:'12px 16px', borderRadius:10, background:'oklch(0.96 0.04 300)',
          border:'1px solid oklch(0.86 0.08 300)' }}>
          <div style={{ fontSize:11, fontWeight:700, letterSpacing:1, color:'oklch(0.40 0.12 300)',
            textTransform:'uppercase', marginBottom:6 }}>③ Reformulation ("Autrement dit…")</div>
          <div style={{ fontSize:14.5, lineHeight:1.5, color:'oklch(0.22 0.04 280)', fontStyle:'italic' }}>
            {sujet.reformulation}
          </div>
        </div>

        <div style={{ padding:12, borderRadius:10, background:'oklch(0.97 0.02 280)', fontSize:12.5,
          color:'oklch(0.45 0.02 280)', border:'1px solid oklch(0.91 0.005 280)', lineHeight:1.5 }}>
          <strong>Note :</strong> la problématique n'est pas simplement une reformulation — elle doit révéler l'<em>enjeu</em> du sujet, la tension entre deux points de vue légitimes.
        </div>
      </div>
    </div>
  );
}

function PlanContent({ sujet }) {
  const { plan } = sujet;
  const typeColor = {
    'Dialectique (thèse / antithèse / synthèse)': 'oklch(0.52 0.14 300)',
    'Thématique (3 angles complémentaires)': 'oklch(0.55 0.13 165)',
    'Analytique / progressif (du passé au présent)': 'oklch(0.55 0.13 200)',
    'Dialectique': 'oklch(0.52 0.14 300)',
  };
  const c = typeColor[plan.type] || 'oklch(0.52 0.14 300)';

  return (
    <div>
      <p style={{ fontSize:13, color:'oklch(0.45 0.02 280)', marginTop:12, marginBottom:12 }}>
        <strong>Méthode :</strong> propose un plan à partir des éléments du cours qui correspondent au sujet. Chaque sous-partie = <strong>Argument + Explication + Référence culturelle</strong> (méthode AER).
      </p>
      <div style={{ padding:'8px 14px', borderRadius:8, background:`color-mix(in oklch, ${c} 10%, white)`,
        border:`1px solid color-mix(in oklch, ${c} 25%, white)`, display:'inline-flex',
        alignItems:'center', gap:8, marginBottom:16 }}>
        <span style={{ fontSize:12, fontWeight:700, color:c, textTransform:'uppercase', letterSpacing:1 }}>
          Type de plan :
        </span>
        <span style={{ fontSize:13, fontWeight:600, color:c }}>{plan.type}</span>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
        {plan.parties.map((p, pi) => (
          <div key={pi} style={{ borderRadius:12, border:`1.5px solid color-mix(in oklch, ${c} 20%, white)`,
            overflow:'hidden' }}>
            <div style={{ padding:'10px 16px', background:`color-mix(in oklch, ${c} 10%, white)`,
              display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:12, fontWeight:700, color:c,
                background:'white', padding:'2px 10px', borderRadius:999 }}>{p.num}</span>
              <span style={{ fontWeight:700, fontSize:14, color:'oklch(0.22 0.04 280)' }}>{p.titre}</span>
            </div>
            <div style={{ padding:'12px 16px', display:'flex', flexDirection:'column', gap:10 }}>
              {p.sousparties.map((sp, si) => (
                <div key={si} style={{ padding:'10px 14px', borderRadius:9,
                  background:'oklch(0.985 0.003 280)', border:'1px solid oklch(0.92 0.005 280)' }}>
                  <div style={{ fontSize:13.5, fontWeight:700, color:'oklch(0.25 0.04 280)', marginBottom:4 }}>
                    {sp.arg}
                  </div>
                  <div style={{ fontSize:13, color:'oklch(0.40 0.02 280)', lineHeight:1.5, marginBottom:4 }}>
                    {sp.expl}
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                    <span style={{ fontSize:11, fontFamily:'var(--font-mono)', color:'oklch(0.50 0.10 30)',
                      background:'oklch(0.96 0.04 30)', padding:'2px 8px', borderRadius:999, fontWeight:600 }}>
                      📚 {sp.ref}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop:14, padding:'10px 14px', borderRadius:9, background:'oklch(0.96 0.03 75)',
        fontSize:12.5, color:'oklch(0.40 0.08 75)', border:'1px solid oklch(0.88 0.08 75)' }}>
        <strong>④ Annonce du plan dans l'introduction :</strong> "Nous verrons d'abord que {plan.parties[0]?.titre?.toLowerCase()} (I), avant d'examiner {plan.parties[1]?.titre?.toLowerCase()} (II){plan.parties[2] ? `, pour montrer enfin que ${plan.parties[2]?.titre?.toLowerCase()} (III)` : ''}."
      </div>
    </div>
  );
}

function RefsContent({ sujet }) {
  return (
    <div>
      <p style={{ fontSize:13, color:'oklch(0.45 0.02 280)', marginTop:12, marginBottom:14 }}>
        <strong>Méthode — Étape 3 CUGEX :</strong> recense les éléments du cours qui correspondent au sujet et pourraient donner lieu à des arguments. Ces références culturelles <em>appuient</em> tes arguments — elles ne les remplacent pas.
      </p>
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {sujet.refs_cles.map((r, i) => (
          <div key={i} style={{ padding:'10px 14px', borderRadius:9,
            background:'oklch(0.97 0.03 30)', border:'1px solid oklch(0.89 0.07 30)',
            display:'flex', alignItems:'flex-start', gap:10 }}>
            <span style={{ fontSize:16, flexShrink:0 }}>📚</span>
            <span style={{ fontSize:13.5, color:'oklch(0.28 0.05 280)', lineHeight:1.45 }}>{r}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CorrectionContent({ sujet }) {
  const { correction } = sujet;
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:16 }}>

      <div style={{ padding:'14px 18px', borderRadius:12, background:'oklch(0.96 0.04 280)',
        border:'1.5px solid oklch(0.84 0.10 280)' }}>
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:1.2, color:'oklch(0.40 0.12 280)',
          textTransform:'uppercase', marginBottom:10 }}>
          Introduction rédigée (modèle)
        </div>
        <div style={{ fontSize:14, lineHeight:1.7, color:'oklch(0.22 0.03 280)',
          fontFamily:'Georgia, serif', borderLeft:'3px solid oklch(0.70 0.12 280)', paddingLeft:14 }}>
          {correction.intro}
        </div>
        <div style={{ marginTop:10, padding:'8px 12px', borderRadius:8, background:'oklch(0.92 0.04 280)',
          fontSize:12, color:'oklch(0.40 0.10 280)', lineHeight:1.5 }}>
          <strong>Structure :</strong> Accroche → Sujet reformulé ("Peut-on dire...") → Reformulation ("Autrement dit...") → Annonce du plan
        </div>
      </div>

      <div style={{ padding:'14px 18px', borderRadius:12, background:'oklch(0.96 0.04 165)',
        border:'1.5px solid oklch(0.84 0.08 165)' }}>
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:1.2, color:'oklch(0.35 0.12 165)',
          textTransform:'uppercase', marginBottom:10 }}>
          Paragraphe de développement rédigé (méthode AER)
        </div>
        <div style={{ fontSize:13.5, lineHeight:1.7, color:'oklch(0.22 0.03 280)',
          fontFamily:'Georgia, serif', borderLeft:'3px solid oklch(0.60 0.12 165)', paddingLeft:14 }}
          dangerouslySetInnerHTML={{ __html: correction.para_modele }} />
        <div style={{ marginTop:10, padding:'8px 12px', borderRadius:8, background:'oklch(0.91 0.04 165)',
          fontSize:12, color:'oklch(0.35 0.10 165)', lineHeight:1.5 }}>
          <strong>Structure AER :</strong> <strong>A</strong>rgument (idée principale) → <strong>E</strong>xplication (pourquoi/comment) → <strong>R</strong>éférence culturelle (œuvre, auteur, date)
        </div>
      </div>

      <div style={{ padding:'14px 18px', borderRadius:12, background:'oklch(0.96 0.03 50)',
        border:'1.5px solid oklch(0.86 0.08 50)' }}>
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:1.2, color:'oklch(0.40 0.10 50)',
          textTransform:'uppercase', marginBottom:10 }}>
          Conclusion (modèle)
        </div>
        <div style={{ fontSize:14, lineHeight:1.7, color:'oklch(0.22 0.03 280)',
          fontFamily:'Georgia, serif', borderLeft:'3px solid oklch(0.65 0.12 50)', paddingLeft:14 }}>
          {correction.conclusion}
        </div>
        <div style={{ marginTop:10, padding:'8px 12px', borderRadius:8, background:'oklch(0.92 0.04 50)',
          fontSize:12, color:'oklch(0.40 0.08 50)', lineHeight:1.5 }}>
          <strong>Structure :</strong> Synthèse (réponse à la problématique) → Ouverture (vers une question plus large) — 1 paragraphe compact de 6 à 10 lignes
        </div>
      </div>

      <MiseEnPage />
    </div>
  );
}

function MiseEnPage() {
  return (
    <div style={{ padding:'14px 18px', borderRadius:12, background:'oklch(0.97 0.01 280)',
      border:'1px solid oklch(0.89 0.005 280)' }}>
      <div style={{ fontSize:12, fontWeight:700, letterSpacing:1, color:'oklch(0.45 0.02 280)',
        textTransform:'uppercase', marginBottom:10 }}>📐 Rappel mise en page (CUGEX)</div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))', gap:8 }}>
        {[
          ['Introduction', '1 paragraphe compact · 6 à 10 lignes'],
          ['Entre les parties', 'Sauter 2 lignes'],
          ['Paragraphes du développement', 'Alinéas pour marquer les sous-parties'],
          ['Conclusion', '1 paragraphe · réponse tranchée'],
        ].map(([titre, desc]) => (
          <div key={titre} style={{ padding:'8px 12px', borderRadius:8,
            background:'oklch(0.93 0.005 280)', border:'1px solid oklch(0.87 0.005 280)' }}>
            <div style={{ fontWeight:700, fontSize:12, color:'oklch(0.35 0.02 280)', marginBottom:3 }}>{titre}</div>
            <div style={{ fontSize:12, color:'oklch(0.50 0.02 280)' }}>{desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MethodeGenerale({ onClose }) {
  return (
    <div style={{ marginBottom:16, borderRadius:16, border:'2px solid oklch(0.75 0.12 165)',
      background:'white', overflow:'hidden' }}>
      <div style={{ padding:'16px 20px', background:'oklch(0.94 0.05 165)',
        display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:17,
          color:'oklch(0.25 0.10 165)' }}>
          📖 Méthodologie générale de l'essai (CGE BTS)
        </div>
        <button onClick={onClose} style={{ background:'transparent', border:'none',
          cursor:'pointer', fontSize:18, color:'oklch(0.40 0.08 165)' }}>✕</button>
      </div>

      <div style={{ padding:'20px 24px', display:'flex', flexDirection:'column', gap:16 }}>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:10 }}>
          {[
            { num:'①', titre:'Analyser le sujet', desc:'Souligne les mots importants. Définis chaque notion-clé. Repère ce que le sujet met en tension.', color:'oklch(0.55 0.13 200)' },
            { num:'②', titre:'Recenser les connaissances', desc:'Liste tous les éléments du cours qui touchent au sujet. Inclus les œuvres, auteurs, lois, chiffres, citations.', color:'oklch(0.55 0.13 75)' },
            { num:'③', titre:'Organiser en plan', desc:'Classe tes connaissances en 2 ou 3 parties. Choisis le type de plan adapté au sujet.', color:'oklch(0.52 0.14 300)' },
            { num:'④', titre:'Rédiger sur la copie', desc:'Introduction compacte (6-10 lignes), puis développement (alinéas), puis conclusion.', color:'oklch(0.55 0.13 165)' },
          ].map(step => (
            <div key={step.num} style={{ padding:'12px 14px', borderRadius:10,
              background:`color-mix(in oklch, ${step.color} 8%, white)`,
              border:`1px solid color-mix(in oklch, ${step.color} 20%, white)` }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:18, fontWeight:700,
                color:step.color, marginBottom:6 }}>{step.num}</div>
              <div style={{ fontWeight:700, fontSize:13, color:'oklch(0.22 0.04 280)', marginBottom:4 }}>{step.titre}</div>
              <div style={{ fontSize:12.5, color:'oklch(0.40 0.02 280)', lineHeight:1.5 }}>{step.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ borderTop:'1px solid oklch(0.92 0.005 280)', paddingTop:14 }}>
          <div style={{ fontWeight:700, fontSize:13, color:'oklch(0.30 0.04 280)', marginBottom:10 }}>
            Structure de l'introduction
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {[
              { n:'①', label:'Accroche', desc:'Citation / Chiffre marquant / Liste évocatrice / Paradoxe / Fait d\'actualité' },
              { n:'②', label:'Sujet reformulé', desc:'"Peut-on dire que…" — reformule sans "diriez-vous" ni "pensez-vous"' },
              { n:'③', label:'Reformulation', desc:'"Autrement dit…" — montre l\'enjeu et la tension du sujet' },
              { n:'④', label:'Annonce du plan', desc:'"Nous verrons d\'abord… avant de… pour montrer enfin…"' },
            ].map(s => (
              <div key={s.n} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:12, fontWeight:700,
                  color:'oklch(0.40 0.12 165)', background:'oklch(0.92 0.05 165)',
                  padding:'2px 8px', borderRadius:999, flexShrink:0 }}>{s.n}</span>
                <div>
                  <span style={{ fontWeight:700, fontSize:13, color:'oklch(0.25 0.04 280)' }}>{s.label} — </span>
                  <span style={{ fontSize:13, color:'oklch(0.40 0.02 280)' }}>{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop:'1px solid oklch(0.92 0.005 280)', paddingTop:14 }}>
          <div style={{ fontWeight:700, fontSize:13, color:'oklch(0.30 0.04 280)', marginBottom:8 }}>
            Méthode AER — chaque sous-partie du développement
          </div>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            {[
              { l:'A', t:'Affirmation', d:'L\'argument principal de la sous-partie, en 1 phrase claire' },
              { l:'E', t:'Explication', d:'Développe pourquoi/comment — articule l\'argument' },
              { l:'R', t:'Référence', d:'Œuvre, auteur, date, chiffre qui illustre et valide l\'argument' },
            ].map(s => (
              <div key={s.l} style={{ flex:'1', minWidth:140, padding:'10px 14px', borderRadius:10,
                background:'oklch(0.96 0.04 165)', border:'1px solid oklch(0.86 0.08 165)' }}>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:20, fontWeight:800,
                  color:'oklch(0.40 0.12 165)', marginBottom:4 }}>{s.l}</div>
                <div style={{ fontWeight:700, fontSize:12.5, color:'oklch(0.25 0.06 165)', marginBottom:4 }}>{s.t}</div>
                <div style={{ fontSize:12, color:'oklch(0.40 0.04 280)', lineHeight:1.4 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding:'10px 14px', borderRadius:10, background:'oklch(0.96 0.04 50)',
          border:'1px solid oklch(0.88 0.08 50)', fontSize:13, color:'oklch(0.35 0.08 50)' }}>
          <strong>Conclusion :</strong> propose une synthèse de ta pensée, en tranchant vraiment pour répondre à la problématique. Termine par une ouverture vers une question plus large.
        </div>
      </div>
    </div>
  );
}

window.EssaiView = EssaiView;
