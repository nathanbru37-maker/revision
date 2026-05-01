// Hub — main menu / dashboard with rich visuals
function Hub({ state, setMode, setAxe }) {
  const data = window.REVISION_DATA;
  const I = window.SVGIllu;

  const modes = [
    { id: 'axes', label: 'Carte mentale', desc: 'Explorer les 3 axes du cours', svg: I.spiral, color: 'oklch(0.55 0.13 165)' },
    { id: 'resources', label: 'Bibliothèque', desc: 'Toutes les œuvres expliquées', svg: I.arch, color: 'oklch(0.55 0.13 320)' },
    { id: 'chrono', label: 'Chronologie', desc: 'Replacer œuvres & événements', svg: I.sun, color: 'oklch(0.55 0.13 200)' },
    { id: 'matching', label: 'Memory', desc: 'Associer œuvre, citation, auteur', svg: I.paw, color: 'oklch(0.52 0.14 275)' },
    { id: 'fill', label: 'Texte à trous', desc: 'Compléter chiffres, dates, mots', svg: I.banner, color: 'oklch(0.55 0.13 30)' },
    { id: 'flash', label: 'Révision rapide', desc: '5 min pour réviser l\'essentiel', svg: I.butterfly, color: 'oklch(0.62 0.13 75)' },
    { id: 'essai', label: 'Sujets d\'essai', desc: 'Tirer un sujet aléatoire', svg: I.bird, color: 'oklch(0.45 0.10 280)' },
  ];

  const axeAnimal = { axe1: I.elephant, axe2: I.cat, axe3: I.fish };
  const axeGlyph = { axe1: I.axeGlyph1, axe2: I.axeGlyph2, axe3: I.axeGlyph3 };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px 80px' }}>
      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 28, flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 64, height: 64, color: 'oklch(0.55 0.13 165)' }}
            dangerouslySetInnerHTML={{ __html: I.elephant('oklch(0.55 0.13 165)') }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px, 5vw, 52px)', lineHeight: 1.05, letterSpacing: -1.5, color: 'oklch(0.22 0.02 280)' }}>
              L'Homme &amp; l'Animal
            </div>
            <div style={{ marginTop: 6, color: 'oklch(0.45 0.02 280)', fontSize: 15 }}>
              BTS · Culture Générale · Révision interactive
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Stat icon="✦" label="XP" value={state.xp} color="oklch(0.65 0.13 75)" />
          <Stat icon="🔥" label="Série" value={state.streak} suffix="j" color="oklch(0.55 0.13 200)" />
          <Stat icon="🏅" label="Badges" value={state.badges.length} suffix={`/${data.badges.length}`} color="oklch(0.55 0.14 150)" />
        </div>
      </div>

      {/* Daily question */}
      <PaperCard style={{ padding: 22, marginBottom: 24, background: 'linear-gradient(135deg, oklch(0.97 0.04 75), oklch(0.95 0.05 95))', border: '1.5px solid oklch(0.86 0.08 80)', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', right: -10, top: -10, width: 110, height: 110, opacity: 0.4 }}
          dangerouslySetInnerHTML={{ __html: I.sun('oklch(0.65 0.13 75)') }} />
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', position: 'relative' }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, color: 'oklch(0.45 0.10 70)', textTransform: 'uppercase' }}>Question du jour</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, marginTop: 4, color: 'oklch(0.22 0.02 280)' }}>
              {dailyQuestion()}
            </div>
          </div>
          <Btn variant="solid" color="oklch(0.55 0.13 75)" onClick={() => setMode('essai')}>Répondre →</Btn>
        </div>
      </PaperCard>

      {/* Axes with rich illustrations */}
      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Les 3 axes du cours</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
          {data.axes.map(a => {
            const c = AXE_COLORS[a.color];
            const animal = axeAnimal[a.id];
            const glyph = axeGlyph[a.id];
            return (
              <PaperCard key={a.id} onClick={() => { setAxe(a.id); setMode('axes'); }}
                style={{
                  padding: 0, cursor: 'pointer', overflow: 'hidden',
                  background: c.bg,
                  border: `1.5px solid color-mix(in oklch, ${c.solid} 20%, transparent)`,
                }}
                className="hov-lift"
              >
                <div style={{ position: 'relative', height: 120, background: `linear-gradient(135deg, color-mix(in oklch, ${c.solid} 22%, white), color-mix(in oklch, ${c.solid} 8%, white))`, overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', right: -20, top: -10, width: 140, height: 140, opacity: 0.5 }}
                    dangerouslySetInnerHTML={{ __html: glyph(c.solid) }} />
                  <div style={{ position: 'absolute', left: 20, bottom: 10, width: 80, height: 64 }}
                    dangerouslySetInnerHTML={{ __html: animal(c.solid) }} />
                  <div style={{ position: 'absolute', left: 16, top: 14, fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, color: c.solid, letterSpacing: 1.5, background: 'white', padding: '3px 10px', borderRadius: 999 }}>AXE {a.num}</div>
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, lineHeight: 1.15, color: c.ink, marginBottom: 8, textWrap: 'balance' }}>{a.title}</div>
                  <div style={{ fontSize: 13, color: 'oklch(0.40 0.04 280)', lineHeight: 1.45, fontStyle: 'italic' }}>{a.question}</div>
                  <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: c.solid, fontWeight: 600 }}>
                    {state.visited[a.id] ? '✓ Visité' : '→ Découvrir'}
                  </div>
                </div>
              </PaperCard>
            );
          })}
        </div>
      </div>

      {/* Modes */}
      <SectionLabel>Modes de révision</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 32 }}>
        {modes.map(m => (
          <PaperCard key={m.id} onClick={() => setMode(m.id)}
            className="hov-lift"
            style={{ padding: 18, cursor: 'pointer', display: 'flex', gap: 14, alignItems: 'center', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: `color-mix(in oklch, ${m.color} 14%, white)`,
              display: 'grid', placeItems: 'center', flexShrink: 0,
              color: m.color,
            }}>
              <div style={{ width: 32, height: 32 }} dangerouslySetInnerHTML={{ __html: m.svg(m.color) }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'oklch(0.22 0.02 280)' }}>{m.label}</div>
              <div style={{ fontSize: 12, color: 'oklch(0.50 0.02 280)', marginTop: 2 }}>{m.desc}</div>
            </div>
          </PaperCard>
        ))}
      </div>

      {/* Badges */}
      <SectionLabel>Badges</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
        {data.badges.map(b => {
          const earned = state.badges.includes(b.id);
          return (
            <div key={b.id} style={{
              padding: 14, borderRadius: 14,
              background: earned ? 'linear-gradient(135deg, oklch(0.95 0.06 80), oklch(0.94 0.08 70))' : 'white',
              border: earned ? '1.5px solid oklch(0.78 0.12 75)' : '1px dashed oklch(0.85 0.005 80)',
              opacity: earned ? 1 : 0.55, textAlign: 'center',
            }}>
              <div style={{ fontSize: 28, filter: earned ? 'none' : 'grayscale(0.8)' }}>{b.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 13, marginTop: 6, color: 'oklch(0.22 0.02 280)' }}>{b.label}</div>
              <div style={{ fontSize: 11, color: 'oklch(0.50 0.02 280)', marginTop: 2 }}>{b.desc}</div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 36, fontSize: 12, color: 'oklch(0.55 0.02 280)', textAlign: 'center' }}>
        <button onClick={() => { if (confirm('Réinitialiser tous tes scores ?')) { window.RevStore.reset(); location.reload(); } }}
          style={{ background: 'transparent', border: 'none', color: 'oklch(0.55 0.02 280)', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'inherit' }}>
          Réinitialiser ma progression
        </button>
      </div>
    </div>
  );
}

function Stat({ icon, label, value, suffix, color }) {
  return (
    <div style={{
      background: 'white', padding: '8px 14px', borderRadius: 999,
      border: '1px solid oklch(0.94 0.005 80)',
      display: 'flex', alignItems: 'center', gap: 8,
      boxShadow: '0 2px 6px -3px rgba(0,0,0,0.1)',
    }}>
      <span style={{ fontSize: 18, color }}>{icon}</span>
      <span style={{ fontWeight: 800, fontSize: 18, color: 'oklch(0.22 0.02 280)' }}>{value}{suffix || ''}</span>
      <span style={{ fontSize: 11, color: 'oklch(0.50 0.02 280)', textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 600 }}>{label}</span>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: 'oklch(0.45 0.02 280)', textTransform: 'uppercase', marginBottom: 12 }}>
      {children}
    </div>
  );
}

function dailyQuestion() {
  const qs = window.REVISION_DATA.essais;
  const day = Math.floor(Date.now() / 86400000);
  return qs[day % qs.length];
}

window.Hub = Hub;
