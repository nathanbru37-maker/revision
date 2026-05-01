// Mind map view of axes
function AxesView({ state, updateState, axe, setAxe, back }) {
  const data = window.REVISION_DATA;
  const current = data.axes.find(a => a.id === axe) || data.axes[0];
  const c = AXE_COLORS[current.color];

  React.useEffect(() => {
    if (!state.visited[current.id]) {
      const ns = { ...state, visited: { ...state.visited, [current.id]: true }, xp: state.xp + 5 };
      const allVisited = Object.values(ns.visited).every(Boolean);
      if (allVisited && !ns.badges.includes('all_axes')) ns.badges = [...ns.badges, 'all_axes'];
      if (!ns.badges.includes('first')) ns.badges = [...ns.badges, 'first'];
      updateState(ns, '+5 XP — Axe découvert !');
    }
  }, [current.id]);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px 80px' }}>
      <TopNav back={back} title={`Axe ${current.num}`} />

      {/* Axe selector */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {data.axes.map(a => {
          const ac = AXE_COLORS[a.color];
          const active = a.id === current.id;
          return (
            <button key={a.id} onClick={() => setAxe(a.id)}
              style={{
                padding: '10px 16px', borderRadius: 12, border: 'none', cursor: 'pointer',
                background: active ? ac.solid : 'white',
                color: active ? 'white' : ac.ink,
                fontWeight: 700, fontSize: 14, fontFamily: 'inherit',
                boxShadow: active ? `0 4px 12px -4px ${ac.solid}` : '0 1px 4px rgba(0,0,0,0.05)',
                border: active ? 'none' : '1px solid oklch(0.94 0.005 80)',
                transition: 'all .15s ease',
              }}>
              <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.8, marginRight: 6 }}>AXE {a.num}</span>
              <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>{a.icon}</span>
            </button>
          );
        })}
      </div>

      {/* Central question */}
      <PaperCard style={{ padding: 28, background: c.bg, border: `1.5px solid color-mix(in oklch, ${c.solid} 25%, transparent)`, marginBottom: 22 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: c.solid }}>QUESTION CENTRALE</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 700, lineHeight: 1.15, color: c.ink, marginTop: 8, textWrap: 'balance' }}>
          {current.question}
        </div>
      </PaperCard>

      {/* Chapters as expandable nodes */}
      <div style={{ display: 'grid', gap: 14 }}>
        {current.chapters.map((chap, i) => (
          <ChapterNode key={i} chapter={chap} index={i} color={c} />
        ))}
      </div>
    </div>
  );
}

function ChapterNode({ chapter, index, color }) {
  const [open, setOpen] = React.useState(index === 0);
  return (
    <PaperCard style={{ overflow: 'hidden' }}>
      <button onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
          padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'inherit',
        }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, flexShrink: 0,
          background: color.bg, color: color.solid,
          display: 'grid', placeItems: 'center', fontWeight: 800, fontFamily: 'var(--font-mono)',
        }}>{index + 1}</div>
        <div style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: 'oklch(0.22 0.02 280)' }}>
          {chapter.title}
        </div>
        <div style={{ fontSize: 18, color: color.solid, transform: open ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform .2s ease' }}>›</div>
      </button>
      {open && (
        <div style={{ padding: '0 20px 20px 70px', display: 'grid', gap: 10 }}>
          {chapter.points.map((pt, j) => (
            <div key={j} style={{
              padding: '10px 14px', borderLeft: `3px solid ${color.solid}`,
              background: color.soft, borderRadius: '4px 10px 10px 4px',
              fontSize: 14.5, lineHeight: 1.5, color: 'oklch(0.30 0.02 280)',
            }} dangerouslySetInnerHTML={{ __html: pt }} />
          ))}
        </div>
      )}
    </PaperCard>
  );
}

function TopNav({ back, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
      <button onClick={back} style={{
        background: 'white', border: '1px solid oklch(0.92 0.005 80)', borderRadius: 10,
        padding: '8px 14px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: 14,
        color: 'oklch(0.30 0.02 280)',
      }}>← Hub</button>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: 'oklch(0.45 0.02 280)', textTransform: 'uppercase' }}>{title}</div>
    </div>
  );
}

window.AxesView = AxesView;
window.TopNav = TopNav;
