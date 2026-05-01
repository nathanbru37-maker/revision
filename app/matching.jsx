// Memory / matching game
function MatchingView({ state, updateState, back }) {
  const sets = window.REVISION_DATA.matching;
  const [setKey, setSetKey] = React.useState('oeuvre_sens');
  const setOptions = [
    { key: 'oeuvre_sens', label: 'Œuvre ↔ Signification' },
    { key: 'citation_auteur', label: 'Citation ↔ Auteur' },
    { key: 'symbole_evangeliste', label: 'Évangéliste ↔ Symbole' },
    { key: 'dieu_animal', label: 'Dieu ↔ Animal' },
    { key: 'courant_definition', label: 'Courant ↔ Définition' },
  ];
  const [pairs, setPairs] = React.useState(() => sets[setKey]);
  const [selectedL, setSelectedL] = React.useState(null);
  const [selectedR, setSelectedR] = React.useState(null);
  const [matched, setMatched] = React.useState({});
  const [wrong, setWrong] = React.useState(null);
  const [startTime, setStartTime] = React.useState(Date.now());
  const [done, setDone] = React.useState(false);
  const [shuffledR, setShuffledR] = React.useState(() => shuffle(sets[setKey].map((p, i) => ({ ...p, idx: i }))));

  function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

  React.useEffect(() => {
    const p = sets[setKey];
    setPairs(p);
    setShuffledR(shuffle(p.map((x, i) => ({ ...x, idx: i }))));
    setMatched({}); setSelectedL(null); setSelectedR(null); setDone(false);
    setStartTime(Date.now());
  }, [setKey]);

  React.useEffect(() => {
    if (selectedL !== null && selectedR !== null) {
      if (selectedL === selectedR) {
        setMatched(m => ({ ...m, [selectedL]: true }));
        setSelectedL(null); setSelectedR(null);
      } else {
        setWrong({ l: selectedL, r: selectedR });
        setTimeout(() => { setSelectedL(null); setSelectedR(null); setWrong(null); }, 600);
      }
    }
  }, [selectedL, selectedR]);

  React.useEffect(() => {
    if (Object.keys(matched).length === pairs.length && pairs.length > 0 && !done) {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setDone(true);
      const xp = pairs.length * 2;
      const ns = { ...state, xp: state.xp + xp };
      if (elapsed < 30 && !ns.badges.includes('memory')) ns.badges = [...ns.badges, 'memory'];
      if (!ns.badges.includes('first')) ns.badges = [...ns.badges, 'first'];
      updateState(window.RevStore.bumpStreak(ns), `+${xp} XP — Terminé en ${elapsed}s !`);
    }
  }, [matched]);

  function reset() {
    setMatched({}); setSelectedL(null); setSelectedR(null); setDone(false);
    setShuffledR(shuffle(pairs.map((x, i) => ({ ...x, idx: i }))));
    setStartTime(Date.now());
  }

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px 80px' }}>
      <TopNav back={back} title="Memory · Associe les paires" />

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {setOptions.map(o => (
          <button key={o.key} onClick={() => setSetKey(o.key)}
            style={{
              padding: '8px 14px', borderRadius: 999, border: 'none', cursor: 'pointer',
              background: o.key === setKey ? 'oklch(0.55 0.16 250)' : 'white',
              color: o.key === setKey ? 'white' : 'oklch(0.30 0.02 280)',
              fontWeight: 600, fontSize: 13, fontFamily: 'inherit',
              border: o.key === setKey ? 'none' : '1px solid oklch(0.92 0.005 80)',
            }}>{o.label}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <Column title="Items" items={pairs.map((p, i) => ({ text: p.left, idx: i }))}
          selected={selectedL} matched={matched} wrong={wrong?.l}
          onPick={i => { if (!matched[i]) setSelectedL(i); }}
          color="oklch(0.55 0.16 250)" />
        <Column title="Réponses" items={shuffledR.map(p => ({ text: p.right, idx: p.idx }))}
          selected={selectedR} matched={matched} wrong={wrong?.r}
          onPick={i => { if (!matched[i]) setSelectedR(i); }}
          color="oklch(0.55 0.13 200)" />
      </div>

      {done && (
        <PaperCard style={{ marginTop: 18, padding: 22, textAlign: 'center', background: 'linear-gradient(135deg, oklch(0.95 0.06 145), oklch(0.92 0.10 130))' }}>
          <div style={{ fontSize: 32, marginBottom: 6 }}>🎉</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'oklch(0.25 0.06 145)' }}>
            Toutes les paires trouvées !
          </div>
          <div style={{ marginTop: 14 }}>
            <Btn variant="solid" color="oklch(0.55 0.14 150)" onClick={reset}>Recommencer →</Btn>
          </div>
        </PaperCard>
      )}
    </div>
  );
}

function Column({ title, items, selected, matched, wrong, onPick, color }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: 'oklch(0.45 0.02 280)', textTransform: 'uppercase', marginBottom: 8 }}>{title}</div>
      <div style={{ display: 'grid', gap: 8 }}>
        {items.map(it => {
          const isMatched = matched[it.idx];
          const isSelected = selected === it.idx;
          const isWrong = wrong === it.idx;
          return (
            <button key={it.idx} onClick={() => onPick(it.idx)} disabled={isMatched}
              style={{
                padding: '12px 14px', borderRadius: 12, fontFamily: 'inherit', fontSize: 14,
                textAlign: 'left', cursor: isMatched ? 'default' : 'pointer',
                border: 'none', lineHeight: 1.4,
                background: isMatched ? 'oklch(0.94 0.06 145)' : isSelected ? color : isWrong ? 'oklch(0.88 0.10 28)' : 'white',
                color: isMatched ? 'oklch(0.30 0.10 145)' : isSelected ? 'white' : 'oklch(0.25 0.02 280)',
                opacity: isMatched ? 0.7 : 1,
                boxShadow: isSelected ? `0 6px 16px -6px ${color}` : '0 2px 6px -3px rgba(0,0,0,0.1)',
                outline: isMatched ? '1.5px solid oklch(0.55 0.15 145)' : `1px solid oklch(0.92 0.005 80)`,
                fontWeight: isMatched ? 700 : 500,
                transition: 'all .15s ease',
              }}>
              {isMatched && <span style={{ marginRight: 8 }}>✓</span>}
              <span dangerouslySetInnerHTML={{ __html: it.text }} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

window.MatchingView = MatchingView;
