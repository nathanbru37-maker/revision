// Chronology — drag/click to place œuvres on a timeline
function ChronoView({ state, updateState, back }) {
  const all = window.REVISION_DATA.chronology;
  const [round, setRound] = React.useState(0);
  const [items, setItems] = React.useState(() => pickRound(all));
  const [placed, setPlaced] = React.useState({});  // id -> bucket index
  const [revealed, setRevealed] = React.useState(false);
  const [score, setScore] = React.useState(0);

  function pickRound(pool) {
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 8);
    return shuffled.sort((a, b) => a.year - b.year);
  }

  // Buckets : centuries / periods
  const buckets = [
    { label: 'Antiquité', range: [-50000, 500] },
    { label: 'Moyen Âge', range: [500, 1500] },
    { label: 'XVI–XVIIIᵉ', range: [1500, 1800] },
    { label: 'XIXᵉ', range: [1800, 1900] },
    { label: 'XXᵉ', range: [1900, 2000] },
    { label: 'XXIᵉ', range: [2000, 3000] },
  ];

  const correctBucket = item => buckets.findIndex(b => item.year >= b.range[0] && item.year < b.range[1]);

  const [pool, setPool] = React.useState(() => items.map((it, i) => ({ ...it, _id: i })));
  const [draggingId, setDraggingId] = React.useState(null);

  function place(itemId, bucketIdx) {
    setPlaced(p => ({ ...p, [itemId]: bucketIdx }));
  }
  function unplace(itemId) {
    setPlaced(p => { const np = { ...p }; delete np[itemId]; return np; });
  }

  function reveal() {
    let s = 0;
    pool.forEach(it => { if (placed[it._id] === correctBucket(it)) s++; });
    setScore(s);
    setRevealed(true);
    const ns = { ...state, xp: state.xp + s * 3 };
    if (s >= 6 && !ns.badges.includes('chrono_master')) ns.badges = [...ns.badges, 'chrono_master'];
    if (!ns.badges.includes('first')) ns.badges = [...ns.badges, 'first'];
    updateState(window.RevStore.bumpStreak(ns), `+${s * 3} XP — ${s}/${pool.length} bien placés !`);
  }

  function newRound() {
    const next = pickRound(all);
    setItems(next);
    setPool(next.map((it, i) => ({ ...it, _id: i })));
    setPlaced({});
    setRevealed(false);
    setScore(0);
    setRound(r => r + 1);
  }

  const remaining = pool.filter(it => placed[it._id] === undefined);

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px 80px' }}>
      <TopNav back={back} title="Chronologie · Replace les œuvres" />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 18 }}>
        <div style={{ fontSize: 14, color: 'oklch(0.40 0.02 280)' }}>
          Glisse ou clique pour placer chaque œuvre dans la bonne période.
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {!revealed
            ? <Btn variant="solid" color="oklch(0.55 0.13 200)" onClick={reveal} disabled={remaining.length > 0}>Vérifier</Btn>
            : <Btn variant="solid" color="oklch(0.55 0.14 150)" onClick={newRound}>Nouvelle manche →</Btn>}
        </div>
      </div>

      {/* Pool */}
      {remaining.length > 0 && (
        <PaperCard style={{ padding: 16, marginBottom: 16, background: 'oklch(0.97 0.005 80)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: 'oklch(0.45 0.02 280)', textTransform: 'uppercase', marginBottom: 8 }}>À placer ({remaining.length})</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {remaining.map(it => (
              <ChronoCard key={it._id} item={it}
                onClick={() => {/* mobile: tap then tap bucket */ window.__chronoSelected = it._id; setDraggingId(it._id); }}
                onDragStart={() => setDraggingId(it._id)}
                draggable={!revealed}
                selected={draggingId === it._id}
              />
            ))}
          </div>
        </PaperCard>
      )}

      {/* Buckets */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 12 }}>
        {buckets.map((b, i) => {
          const inBucket = pool.filter(it => placed[it._id] === i);
          return (
            <div key={i}
              onDragOver={e => e.preventDefault()}
              onDrop={e => { e.preventDefault(); if (draggingId !== null && !revealed) { place(draggingId, i); setDraggingId(null); } }}
              onClick={() => { if (draggingId !== null && !revealed) { place(draggingId, i); setDraggingId(null); } }}
              style={{
                background: 'white', borderRadius: 14, padding: 12,
                border: `2px dashed ${draggingId !== null ? 'oklch(0.55 0.13 200)' : 'oklch(0.92 0.005 80)'}`,
                minHeight: 140, transition: 'border-color .15s ease',
              }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: 1, color: 'oklch(0.45 0.02 280)', textTransform: 'uppercase', marginBottom: 8, textAlign: 'center' }}>
                {b.label}
              </div>
              <div style={{ display: 'grid', gap: 6 }}>
                {inBucket.map(it => {
                  const correct = correctBucket(it) === i;
                  return (
                    <div key={it._id}
                      onClick={e => { e.stopPropagation(); if (!revealed) unplace(it._id); }}
                      style={{
                        padding: '8px 10px', borderRadius: 8, fontSize: 12.5,
                        background: revealed ? (correct ? 'oklch(0.92 0.08 145)' : 'oklch(0.94 0.05 28)') : 'oklch(0.96 0.02 250)',
                        border: revealed ? `1.5px solid ${correct ? 'oklch(0.55 0.15 145)' : 'oklch(0.55 0.13 200)'}` : '1px solid oklch(0.90 0.02 250)',
                        cursor: revealed ? 'default' : 'pointer',
                      }}>
                      <div style={{ fontWeight: 700, color: 'oklch(0.25 0.05 280)' }}>{it.label}</div>
                      {revealed && (
                        <div style={{ fontSize: 11, marginTop: 3, color: correct ? 'oklch(0.40 0.10 145)' : 'oklch(0.40 0.10 28)', fontWeight: 600 }}>
                          {correct ? '✓' : '✗'} {fmtYear(it.year)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {revealed && (
        <PaperCard style={{ marginTop: 18, padding: 20, textAlign: 'center', background: score >= 6 ? 'linear-gradient(135deg, oklch(0.95 0.06 145), oklch(0.92 0.10 130))' : 'white' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'oklch(0.22 0.02 280)' }}>
            {score}/{pool.length} bien placés
          </div>
          <div style={{ fontSize: 14, marginTop: 4, color: 'oklch(0.45 0.02 280)' }}>
            +{score * 3} XP {score >= 6 ? '— Maître du temps 🏅' : ''}
          </div>
        </PaperCard>
      )}
    </div>
  );
}

function ChronoCard({ item, onClick, onDragStart, draggable, selected }) {
  return (
    <div
      draggable={draggable}
      onDragStart={onDragStart}
      onClick={onClick}
      style={{
        padding: '8px 12px', borderRadius: 10, cursor: 'grab',
        background: selected ? 'oklch(0.55 0.13 200)' : 'white',
        color: selected ? 'white' : 'oklch(0.25 0.02 280)',
        fontSize: 13, fontWeight: 600,
        border: '1px solid oklch(0.90 0.005 80)',
        boxShadow: '0 2px 6px -3px rgba(0,0,0,0.15)',
        userSelect: 'none',
      }}>
      {item.label}
    </div>
  );
}

function fmtYear(y) {
  if (y < 0) return `${Math.abs(y).toLocaleString('fr-FR')} av. J.-C.`;
  return y.toString();
}

window.ChronoView = ChronoView;
