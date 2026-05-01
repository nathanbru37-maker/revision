// Explorateur de thèmes/aspects — CEJM
function CejmThemesView({ state, updateState, aspect, setAspect, back }) {
  const data = window.CEJM_DATA;
  const current = data.aspects.find(a => a.id === aspect) || data.aspects[0];
  const c = ASPECT_COLORS[current.color];

  React.useEffect(() => {
    if (!state.visited[current.id]) {
      const ns = { ...state, visited: { ...state.visited, [current.id]: true }, xp: state.xp + 5 };
      if (!ns.badges.includes(current.id)) ns.badges = [...ns.badges, current.id];
      if (!ns.badges.includes('first'))    ns.badges = [...ns.badges, 'first'];
      const allV = Object.values(ns.visited).every(Boolean);
      if (allV && !ns.badges.includes('all3')) ns.badges = [...ns.badges, 'all3'];
      updateState(window.CejmStore.bumpStreak(ns), '+5 XP — Aspect découvert !', c.solid);
    }
  }, [current.id]);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px 80px' }}>
      <CejmTopNav back={back} title="Cours & Thèmes" subtitle="Clique sur un chapitre pour le développer" />

      {/* Aspect selector */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {data.aspects.map(a => {
          const ac = ASPECT_COLORS[a.color];
          const active = a.id === current.id;
          return (
            <button key={a.id} onClick={() => setAspect(a.id)}
              style={{
                padding: '10px 18px', borderRadius: 12, border: 'none', cursor: 'pointer',
                background: active ? ac.solid : 'white', color: active ? 'white' : ac.ink,
                fontWeight: 700, fontSize: 14, fontFamily: 'inherit',
                boxShadow: active ? `0 4px 12px -4px ${ac.solid}` : '0 1px 4px rgba(0,0,0,0.05)',
                border: active ? 'none' : '1px solid oklch(0.92 0.005 80)',
                transition: 'all .15s ease',
              }}>
              <span style={{ marginRight: 8 }}>{a.icon}</span>
              <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.8, fontSize: 12, marginRight: 6 }}>ASPECT {a.num}</span>
              {a.label}
            </button>
          );
        })}
      </div>

      {/* Question centrale */}
      <CejmPaperCard style={{ padding: 26, background: c.bg, border: `1.5px solid color-mix(in oklch, ${c.solid} 25%, transparent)`, marginBottom: 22 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: c.solid }}>QUESTION CENTRALE</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 3.2vw, 30px)', fontWeight: 700, lineHeight: 1.2, color: c.ink, marginTop: 8 }}>
          {current.question}
        </div>
      </CejmPaperCard>

      {/* Chapitres */}
      <div style={{ display: 'grid', gap: 14 }}>
        {current.chapters.map((chap, i) => (
          <CejmChapterNode key={i} chapter={chap} index={i} color={c} />
        ))}
      </div>
    </div>
  );
}

function CejmChapterNode({ chapter, index, color }) {
  const [open, setOpen] = React.useState(index === 0);
  return (
    <CejmPaperCard style={{ overflow: 'hidden' }}>
      <button onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
          padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'inherit',
        }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10, flexShrink: 0,
          background: color.bg, color: color.solid,
          display: 'grid', placeItems: 'center', fontWeight: 800, fontFamily: 'var(--font-mono)', fontSize: 16,
        }}>{index + 1}</div>
        <div style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'oklch(0.22 0.02 280)' }}>
          {chapter.title}
        </div>
        <div style={{ fontSize: 20, color: color.solid, transform: open ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform .2s ease' }}>›</div>
      </button>

      {open && (
        <div style={{ padding: '0 20px 20px 20px' }}>
          <div style={{ height: 1, background: 'oklch(0.94 0.005 80)', marginBottom: 16 }} />
          <div style={{ display: 'grid', gap: 10 }}>
            {chapter.points.map((pt, j) => (
              <div key={j} style={{
                display: 'flex', gap: 14, padding: '12px 14px', borderRadius: 12,
                background: color.soft, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 7, flexShrink: 0, marginTop: 1,
                  background: color.bg, color: color.solid, display: 'grid', placeItems: 'center',
                  fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11,
                }}>{j + 1}</div>
                <div style={{ fontSize: 14.5, lineHeight: 1.6, color: 'oklch(0.28 0.02 280)' }}>{pt}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </CejmPaperCard>
  );
}

window.CejmThemesView = CejmThemesView;
