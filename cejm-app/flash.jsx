// Flashcards + Sujet d'essai — CEJM
function CejmFlashView({ state, updateState, back }) {
  const allCards = window.CEJM_DATA.flashcards;
  const cards = React.useMemo(() => [...allCards].sort(() => Math.random() - 0.5), []);

  const [idx, setIdx]       = React.useState(0);
  const [flipped, setFlip]  = React.useState(false);
  const [done, setDone]     = React.useState(false);
  const [skipped, setSkip]  = React.useState(0);
  const [known, setKnown]   = React.useState(0);

  function next(didKnow) {
    setFlip(false);
    if (didKnow) setKnown(k => k + 1);
    else setSkip(s => s + 1);
    if (idx + 1 >= cards.length) {
      const xp = 10;
      const ns = { ...state, xp: state.xp + xp, flashSessions: (state.flashSessions || 0) + 1 };
      if (!ns.badges.includes('flasher')) ns.badges = [...ns.badges, 'flasher'];
      if (!ns.badges.includes('first'))   ns.badges = [...ns.badges, 'first'];
      if (ns.xp >= 100 && !ns.badges.includes('century')) ns.badges = [...ns.badges, 'century'];
      updateState(window.CejmStore.bumpStreak(ns), `+${xp} XP — Session terminée !`);
      setDone(true);
    } else {
      setIdx(i => i + 1);
    }
  }

  if (done) {
    const total = cards.length;
    const pct = Math.round((known / total) * 100);
    return (
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '24px 20px 80px' }}>
        <CejmTopNav back={back} title="Flashcards" />
        <CejmPaperCard style={{ padding: 40, textAlign: 'center', background: 'linear-gradient(135deg, oklch(0.96 0.06 255), oklch(0.93 0.10 240))' }}>
          <div style={{ fontSize: 52 }}>{pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '📚'}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: ASPECT_COLORS.indigo.ink, marginTop: 12 }}>
            {pct >= 80 ? 'Excellent !' : pct >= 50 ? 'Bien joué !' : 'Continue à réviser !'}
          </div>
          <div style={{ marginTop: 10, fontSize: 15, color: ASPECT_COLORS.indigo.ink, opacity: 0.8 }}>
            {known} / {total} cartes maîtrisées · {pct} %
          </div>
          <div style={{ marginTop: 8 }}>
            <CejmProgressBar value={known} max={total} color={ASPECT_COLORS.indigo.solid} />
          </div>
          <div style={{ marginTop: 24, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CejmBtn color={ASPECT_COLORS.indigo.solid} onClick={() => { setIdx(0); setFlip(false); setDone(false); setKnown(0); setSkip(0); }}>
              Recommencer ↺
            </CejmBtn>
            <CejmBtn variant="ghost" color={ASPECT_COLORS.indigo.solid} onClick={back}>Retour au hub</CejmBtn>
          </div>
        </CejmPaperCard>
      </div>
    );
  }

  const card = cards[idx];
  const c = ASPECT_COLORS[card.aspect === 'eco' ? 'indigo' : card.aspect === 'droit' ? 'forest' : 'amber'];
  const aspectLabel = { eco: '📈 Économie', droit: '⚖️ Droit', mgmt: '🎯 Management' }[card.aspect];

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '24px 20px 80px' }}>
      <CejmTopNav back={back} title="Flashcards" subtitle={`${idx + 1} / ${cards.length}`} />

      <div style={{ marginBottom: 18 }}>
        <CejmProgressBar value={idx} max={cards.length} color={c.solid} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 12, color: 'oklch(0.50 0.02 280)' }}>
          <span style={{ fontFamily: 'var(--font-mono)' }}>{idx + 1} / {cards.length}</span>
          <span>✓ {known} maîtrisées</span>
        </div>
      </div>

      {/* Card flip */}
      <div onClick={() => setFlip(f => !f)} style={{ height: 300, perspective: 1500, cursor: 'pointer', marginBottom: 20 }}>
        <div style={{
          width: '100%', height: '100%', position: 'relative',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
          transition: 'transform .55s cubic-bezier(.2,.8,.2,1)',
        }}>
          {/* RECTO */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 18,
            backfaceVisibility: 'hidden',
            background: c.bg, border: `2px solid ${c.solid}`,
            padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'center',
            boxShadow: '0 12px 30px -12px rgba(20,15,40,0.2)',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: c.solid, fontFamily: 'var(--font-mono)' }}>
              NOTION · {aspectLabel}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: c.ink, marginTop: 14, lineHeight: 1.2 }}>
              {card.front}
            </div>
            <div style={{ marginTop: 20, fontSize: 13, color: 'oklch(0.45 0.05 280)', opacity: 0.7 }}>
              Touche pour révéler la définition →
            </div>
          </div>

          {/* VERSO */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 18,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'white', border: `2px solid ${c.solid}`,
            padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'center',
            boxShadow: '0 12px 30px -12px rgba(20,15,40,0.2)',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: c.solid, fontFamily: 'var(--font-mono)' }}>
              DÉFINITION
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.65, color: 'oklch(0.25 0.02 280)', marginTop: 12, whiteSpace: 'pre-line' }}>
              {card.back}
            </div>
          </div>
        </div>
      </div>

      {flipped && (
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <CejmBtn variant="soft" color="oklch(0.55 0.16 28)" onClick={() => next(false)} style={{ minWidth: 130 }}>
            À revoir 🔄
          </CejmBtn>
          <CejmBtn variant="solid" color={c.solid} onClick={() => next(true)} style={{ minWidth: 130 }}>
            Je sais ✓
          </CejmBtn>
        </div>
      )}
    </div>
  );
}

// Sujet d'essai CEJM
function CejmEssaiView({ back }) {
  const sujets = window.CEJM_DATA.sujets;
  const [idx, setIdx] = React.useState(() => Math.floor(Math.random() * sujets.length));
  const [showMethod, setShowMethod] = React.useState(false);

  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '24px 20px 80px' }}>
      <CejmTopNav back={back} title="Sujet du jour" />

      <CejmPaperCard style={{ padding: 36, background: 'linear-gradient(135deg, oklch(0.96 0.05 255), oklch(0.93 0.08 240))', border: '1.5px solid oklch(0.82 0.10 255)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: ASPECT_COLORS.indigo.solid }}>
          SUJET TIRÉ AU SORT
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 700, lineHeight: 1.2, color: ASPECT_COLORS.indigo.ink, marginTop: 12 }}>
          « {sujets[idx]} »
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <CejmBtn color={ASPECT_COLORS.indigo.solid} onClick={() => { setIdx(Math.floor(Math.random() * sujets.length)); setShowMethod(false); }}>
            ↻ Autre sujet
          </CejmBtn>
          <CejmBtn variant="ghost" color={ASPECT_COLORS.indigo.solid} onClick={() => setShowMethod(s => !s)}>
            {showMethod ? 'Masquer' : 'Voir'} la méthode
          </CejmBtn>
        </div>
      </CejmPaperCard>

      {showMethod && (
        <CejmPaperCard style={{ padding: 28, marginTop: 16 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'oklch(0.22 0.02 280)', marginBottom: 16 }}>
            Méthode de réponse CEJM
          </div>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              ['1. Comprendre la consigne', 'Repère les verbes d\'action (analyser, justifier, expliquer), les notions clés, les documents à mobiliser.'],
              ['2. Répondre à la consigne', 'Construis un plan (1 idée = 1 paragraphe). Pour chaque argument : Affirmer → Expliquer → Illustrer (AEI).'],
              ['3. Définir les notions', 'Donne une définition précise des concepts clés dès leur première apparition.'],
              ['4. Mobiliser les auteurs', 'Cite et explique la théorie de l\'auteur, puis applique-la au sujet. Ne pas réciter sans contextualiser.'],
              ['5. Conclure', 'Synthétise en 2-3 phrases. Tu peux ouvrir sur une perspective (numérique, mondialisation, RSE...).'],
            ].map(([t, d]) => (
              <div key={t} style={{ padding: '12px 16px', background: 'oklch(0.97 0.02 255)', borderRadius: 12, borderLeft: `3px solid ${ASPECT_COLORS.indigo.solid}` }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: ASPECT_COLORS.indigo.ink }}>{t}</div>
                <div style={{ fontSize: 13.5, color: 'oklch(0.35 0.02 280)', marginTop: 4, lineHeight: 1.5 }}>{d}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, padding: '16px 18px', background: ASPECT_COLORS.amber.bg, borderRadius: 12, border: `1px solid color-mix(in oklch, ${ASPECT_COLORS.amber.solid} 25%, transparent)` }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: ASPECT_COLORS.amber.ink, marginBottom: 8 }}>Auteurs à connaître absolument</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Porter', 'Mintzberg', 'Chandler', 'Ansoff', 'Simon', 'Maslow', 'Herzberg', 'Likert', 'Drucker', 'Taylor', 'Fayol', 'Schumpeter', 'Keynes', 'Freeman'].map(a => (
                <span key={a} style={{ padding: '3px 10px', background: 'white', borderRadius: 999, fontSize: 12, fontWeight: 600, color: ASPECT_COLORS.amber.ink, border: `1px solid color-mix(in oklch, ${ASPECT_COLORS.amber.solid} 30%, transparent)` }}>
                  {a}
                </span>
              ))}
            </div>
          </div>
        </CejmPaperCard>
      )}
    </div>
  );
}

window.CejmFlashView = CejmFlashView;
window.CejmEssaiView = CejmEssaiView;
