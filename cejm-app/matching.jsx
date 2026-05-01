// Matching auteurs ↔ théories — CEJM
function CejmMatchingView({ state, updateState, back }) {
  const pairs = window.CEJM_DATA.auteurs;

  function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

  const [shuffledR, setShuffledR] = React.useState(() => shuffle(pairs.map((p, i) => ({ ...p, idx: i }))));
  const [selectedL, setL] = React.useState(null);
  const [selectedR, setR] = React.useState(null);
  const [matched, setMatched] = React.useState({});
  const [wrong, setWrong]     = React.useState(null);
  const [done, setDone]       = React.useState(false);
  const [startTime]           = React.useState(Date.now());

  React.useEffect(() => {
    if (selectedL !== null && selectedR !== null) {
      if (selectedL === selectedR) {
        setMatched(m => ({ ...m, [selectedL]: true }));
        setL(null); setR(null);
      } else {
        setWrong({ l: selectedL, r: selectedR });
        setTimeout(() => { setL(null); setR(null); setWrong(null); }, 600);
      }
    }
  }, [selectedL, selectedR]);

  React.useEffect(() => {
    if (Object.keys(matched).length === pairs.length && pairs.length > 0 && !done) {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setDone(true);
      const xp = pairs.length * 2;
      const ns = { ...state, xp: state.xp + xp, matchDone: true };
      if (!ns.badges.includes('matcher')) ns.badges = [...ns.badges, 'matcher'];
      if (!ns.badges.includes('first'))   ns.badges = [...ns.badges, 'first'];
      if (ns.xp >= 100 && !ns.badges.includes('century')) ns.badges = [...ns.badges, 'century'];
      updateState(window.CejmStore.bumpStreak(ns), `+${xp} XP — Terminé en ${elapsed}s !`);
    }
  }, [matched]);

  function reset() {
    setMatched({}); setL(null); setR(null); setDone(false);
    setShuffledR(shuffle(pairs.map((p, i) => ({ ...p, idx: i }))));
  }

  const progress = Object.keys(matched).length;

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px 80px' }}>
      <CejmTopNav back={back} title="Associer les auteurs" subtitle="Clique sur un auteur puis sur sa théorie" />

      <CejmPaperCard style={{ padding: '12px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 14 }}>
        <CejmProgressBar value={progress} max={pairs.length} color={ASPECT_COLORS.forest.solid} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, color: ASPECT_COLORS.forest.solid, whiteSpace: 'nowrap' }}>
          {progress} / {pairs.length}
        </span>
      </CejmPaperCard>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {/* Colonne gauche — auteurs */}
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: 'oklch(0.45 0.02 280)', textTransform: 'uppercase', marginBottom: 10 }}>
            Auteurs
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            {pairs.map((p, i) => {
              const isMatched  = matched[i];
              const isSelected = selectedL === i;
              const isWrong    = wrong?.l === i;
              return (
                <button key={i} onClick={() => { if (!isMatched) setL(i); }} disabled={isMatched}
                  style={{
                    padding: '12px 16px', borderRadius: 12, fontFamily: 'inherit', fontSize: 14, fontWeight: 600,
                    textAlign: 'left', cursor: isMatched ? 'default' : 'pointer',
                    background: isMatched ? ASPECT_COLORS.forest.bg : isSelected ? ASPECT_COLORS.forest.solid : isWrong ? 'oklch(0.90 0.10 25)' : 'white',
                    color:      isMatched ? ASPECT_COLORS.forest.ink : isSelected ? 'white' : isWrong ? 'oklch(0.35 0.16 25)' : 'oklch(0.25 0.02 280)',
                    border:     isMatched ? `1.5px solid ${ASPECT_COLORS.forest.solid}` : '1.5px solid oklch(0.92 0.005 80)',
                    boxShadow:  isSelected ? `0 6px 16px -6px ${ASPECT_COLORS.forest.solid}` : '0 2px 6px -3px rgba(0,0,0,0.08)',
                    transition: 'all .15s ease',
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}>
                  {isMatched && <span>✓</span>}
                  {p.left}
                </button>
              );
            })}
          </div>
        </div>

        {/* Colonne droite — théories */}
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: 'oklch(0.45 0.02 280)', textTransform: 'uppercase', marginBottom: 10 }}>
            Théories &amp; contributions
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            {shuffledR.map((p) => {
              const isMatched  = matched[p.idx];
              const isSelected = selectedR === p.idx;
              const isWrong    = wrong?.r === p.idx;
              return (
                <button key={p.idx} onClick={() => { if (!isMatched) setR(p.idx); }} disabled={isMatched}
                  style={{
                    padding: '12px 16px', borderRadius: 12, fontFamily: 'inherit', fontSize: 13,
                    textAlign: 'left', cursor: isMatched ? 'default' : 'pointer', lineHeight: 1.4,
                    background: isMatched ? ASPECT_COLORS.indigo.bg : isSelected ? ASPECT_COLORS.indigo.solid : isWrong ? 'oklch(0.90 0.10 25)' : 'white',
                    color:      isMatched ? ASPECT_COLORS.indigo.ink : isSelected ? 'white' : isWrong ? 'oklch(0.35 0.16 25)' : 'oklch(0.25 0.02 280)',
                    border:     isMatched ? `1.5px solid ${ASPECT_COLORS.indigo.solid}` : '1.5px solid oklch(0.92 0.005 80)',
                    boxShadow:  isSelected ? `0 6px 16px -6px ${ASPECT_COLORS.indigo.solid}` : '0 2px 6px -3px rgba(0,0,0,0.08)',
                    transition: 'all .15s ease',
                    display: 'flex', gap: 10, alignItems: 'flex-start',
                  }}>
                  {isMatched && <span style={{ flexShrink: 0 }}>✓</span>}
                  <span dangerouslySetInnerHTML={{ __html: p.right }} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {done && (
        <CejmPaperCard style={{ marginTop: 24, padding: 28, textAlign: 'center', background: 'linear-gradient(135deg, oklch(0.94 0.07 145), oklch(0.92 0.10 130))' }}>
          <div style={{ fontSize: 40 }}>🎉</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'oklch(0.25 0.08 145)', marginTop: 8 }}>
            Tous les auteurs associés !
          </div>
          <div style={{ marginTop: 16, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CejmBtn color={ASPECT_COLORS.forest.solid} onClick={reset}>Recommencer ↺</CejmBtn>
            <CejmBtn variant="ghost" color={ASPECT_COLORS.forest.solid} onClick={back}>Retour au hub</CejmBtn>
          </div>
        </CejmPaperCard>
      )}
    </div>
  );
}

window.CejmMatchingView = CejmMatchingView;
