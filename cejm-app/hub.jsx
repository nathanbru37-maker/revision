// Hub CEJM — tableau de bord
function CejmHub({ state, setMode, setAspect }) {
  const data = window.CEJM_DATA;

  const modes = [
    { id: 'themes',   icon: '🗺️', label: 'Cours & Thèmes',    desc: 'Explore les 3 aspects en détail', color: ASPECT_COLORS.indigo.solid },
    { id: 'flash',    icon: '⚡', label: 'Flashcards',        desc: 'Révise les notions clés',         color: ASPECT_COLORS.amber.solid  },
    { id: 'quiz',     icon: '🧠', label: 'Quiz',              desc: 'QCM sur les 3 aspects',           color: 'oklch(0.55 0.16 300)'    },
    { id: 'matching', icon: '🔗', label: 'Associer auteurs',  desc: 'Qui a dit quoi ?',                color: ASPECT_COLORS.forest.solid },
    { id: 'essai',    icon: '✍️', label: 'Sujet du jour',     desc: 'Tire un sujet aléatoire',         color: 'oklch(0.52 0.14 30)'     },
    { id: 'docs',     icon: '📂', label: 'Mes documents',     desc: 'Fiches, PDFs et cartes mentales', color: 'oklch(0.45 0.10 280)'    },
  ];

  const allVisited = Object.values(state.visited).every(Boolean);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px 80px' }}>

      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <a href="index.html" style={{ fontSize: 13, color: 'oklch(0.50 0.02 280)', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 10, opacity: 0.7 }}>
            ← Accueil
          </a>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 50px)', lineHeight: 1.05, letterSpacing: -1.5, color: 'oklch(0.22 0.02 280)' }}>
            CEJM
          </div>
          <div style={{ marginTop: 6, color: 'oklch(0.45 0.02 280)', fontSize: 15 }}>
            BTS · Culture Éco, Juridique &amp; Managériale · Révision interactive
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <CejmStatPill icon="✦" label="XP" value={state.xp} color="oklch(0.65 0.14 75)" />
          <CejmStatPill icon="🔥" label="Série" value={state.streak} suffix="j" color="oklch(0.55 0.16 300)" />
          <CejmStatPill icon="🏅" label="Badges" value={state.badges.length} suffix={`/${data.badges.length}`} color={ASPECT_COLORS.forest.solid} />
        </div>
      </div>

      {/* Question du jour */}
      <CejmPaperCard style={{ padding: 22, marginBottom: 28, background: 'linear-gradient(135deg, oklch(0.95 0.05 255), oklch(0.93 0.07 240))', border: '1.5px solid oklch(0.83 0.10 255)' }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, color: ASPECT_COLORS.indigo.solid, textTransform: 'uppercase' }}>Sujet du jour</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, marginTop: 6, color: ASPECT_COLORS.indigo.ink, lineHeight: 1.3 }}>
              « {data.sujets[Math.floor(Date.now() / 86400000) % data.sujets.length]} »
            </div>
          </div>
          <CejmBtn color={ASPECT_COLORS.indigo.solid} onClick={() => setMode('essai')}>Répondre →</CejmBtn>
        </div>
      </CejmPaperCard>

      {/* 3 Aspects */}
      <div style={{ marginBottom: 32 }}>
        <CejmSectionLabel>Les 3 aspects du CEJM</CejmSectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
          {data.aspects.map(a => {
            const c = ASPECT_COLORS[a.color];
            const visited = state.visited[a.id];
            return (
              <CejmPaperCard key={a.id}
                onClick={() => { setAspect(a.id); setMode('themes'); }}
                className="hov-lift"
                style={{ padding: 0, cursor: 'pointer', overflow: 'hidden', background: c.bg, border: `1.5px solid color-mix(in oklch, ${c.solid} 22%, transparent)` }}>
                <div style={{ position: 'relative', height: 90, background: `linear-gradient(135deg, color-mix(in oklch, ${c.solid} 18%, white), color-mix(in oklch, ${c.solid} 6%, white))` }}>
                  <div style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', fontSize: 44, lineHeight: 1, opacity: 0.6 }}>{a.icon}</div>
                  <div style={{ position: 'absolute', left: 16, top: 14, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: c.solid, letterSpacing: 1.5, background: 'white', padding: '3px 10px', borderRadius: 999 }}>ASPECT {a.num}</div>
                </div>
                <div style={{ padding: '18px 20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: c.ink, marginBottom: 6 }}>{a.label}</div>
                  <div style={{ fontSize: 13, color: 'oklch(0.42 0.04 280)', lineHeight: 1.45, fontStyle: 'italic' }}>{a.question}</div>
                  <div style={{ marginTop: 12, fontSize: 12, color: c.solid, fontWeight: 600 }}>
                    {visited ? '✓ Visité' : '→ Explorer'}
                  </div>
                </div>
              </CejmPaperCard>
            );
          })}
        </div>
      </div>

      {/* Modes */}
      <CejmSectionLabel>Modes de révision</CejmSectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 32 }}>
        {modes.map(m => (
          <CejmPaperCard key={m.id} onClick={() => setMode(m.id)} className="hov-lift"
            style={{ padding: 18, cursor: 'pointer', display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, flexShrink: 0,
              background: `color-mix(in oklch, ${m.color} 13%, white)`,
              display: 'grid', placeItems: 'center', fontSize: 22,
            }}>{m.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'oklch(0.22 0.02 280)' }}>{m.label}</div>
              <div style={{ fontSize: 12, color: 'oklch(0.50 0.02 280)', marginTop: 2 }}>{m.desc}</div>
            </div>
          </CejmPaperCard>
        ))}
      </div>

      {/* Badges */}
      <CejmSectionLabel>Badges</CejmSectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginBottom: 32 }}>
        {data.badges.map(b => {
          const earned = state.badges.includes(b.id);
          return (
            <div key={b.id} style={{
              padding: 14, borderRadius: 14, textAlign: 'center',
              background: earned ? 'linear-gradient(135deg, oklch(0.95 0.06 80), oklch(0.94 0.08 70))' : 'white',
              border: earned ? '1.5px solid oklch(0.78 0.12 75)' : '1px dashed oklch(0.85 0.005 80)',
              opacity: earned ? 1 : 0.52,
            }}>
              <div style={{ fontSize: 26, filter: earned ? 'none' : 'grayscale(0.8)' }}>{b.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 12, marginTop: 6, color: 'oklch(0.22 0.02 280)' }}>{b.label}</div>
              <div style={{ fontSize: 11, color: 'oklch(0.50 0.02 280)', marginTop: 2 }}>{b.desc}</div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 10, fontSize: 12, color: 'oklch(0.55 0.02 280)', textAlign: 'center' }}>
        <button onClick={() => { if (confirm('Réinitialiser ta progression CEJM ?')) { window.CejmStore.reset(); location.reload(); } }}
          style={{ background: 'transparent', border: 'none', color: 'oklch(0.55 0.02 280)', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'inherit' }}>
          Réinitialiser ma progression
        </button>
      </div>
    </div>
  );
}

window.CejmHub = CejmHub;
