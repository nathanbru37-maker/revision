// Cultural resources view — explained references
function ResourcesView({ back }) {
  const all = window.RESOURCES;
  const cats = ['Tous', ...new Set(all.map(r => r.cat))];
  const [cat, setCat] = React.useState('Tous');
  const [query, setQuery] = React.useState('');
  const [selected, setSelected] = React.useState(null);

  const filtered = all.filter(r => {
    if (cat !== 'Tous' && r.cat !== cat) return false;
    if (query) {
      const q = query.toLowerCase();
      return r.title.toLowerCase().includes(q) || r.summary.toLowerCase().includes(q) || (r.subtitle || '').toLowerCase().includes(q);
    }
    return true;
  });

  const catColor = c => ({
    'Littérature': 'oklch(0.65 0.13 75)',
    'Arts visuels': 'oklch(0.55 0.13 200)',
    'Sciences': 'oklch(0.52 0.14 275)',
    'Philosophie': 'oklch(0.55 0.13 320)',
    'Droit': 'oklch(0.50 0.12 250)',
    'Pop culture': 'oklch(0.60 0.14 30)',
  }[c] || 'oklch(0.45 0.04 280)');

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px 80px' }}>
      <TopNav back={back} title="Bibliothèque · Ressources culturelles" />

      <PaperCard style={{ padding: 20, marginBottom: 18, background: 'linear-gradient(135deg, oklch(0.96 0.04 75), oklch(0.95 0.05 50))', border: '1.5px solid oklch(0.86 0.08 70)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'oklch(0.30 0.08 60)' }}>
          Les œuvres et auteurs à connaître
        </div>
        <div style={{ marginTop: 4, color: 'oklch(0.40 0.05 60)', fontSize: 14 }}>
          Pour chaque référence : résumé, intérêt pour le thème, citation et pistes d'utilisation dans tes essais.
        </div>
      </PaperCard>

      <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="🔍 Rechercher…"
          style={{
            flex: '1 1 220px', padding: '10px 14px', borderRadius: 10,
            border: '1px solid oklch(0.92 0.005 80)', background: 'white',
            fontFamily: 'inherit', fontSize: 14, outline: 'none',
          }} />
      </div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 18, flexWrap: 'wrap' }}>
        {cats.map(c => (
          <button key={c} onClick={() => setCat(c)}
            style={{
              padding: '6px 12px', borderRadius: 999, border: 'none', cursor: 'pointer',
              background: cat === c ? catColor(c) : 'white',
              color: cat === c ? 'white' : 'oklch(0.30 0.02 280)',
              fontWeight: 600, fontSize: 12.5, fontFamily: 'inherit',
              border: cat === c ? 'none' : '1px solid oklch(0.92 0.005 80)',
            }}>{c}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
        {filtered.map(r => {
          const c = catColor(r.cat);
          return (
            <PaperCard key={r.id} onClick={() => setSelected(r)}
              className="hov-lift"
              style={{ padding: 18, cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: `color-mix(in oklch, ${c} 15%, white)`,
                  display: 'grid', placeItems: 'center', fontSize: 22,
                }}>{r.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: c, letterSpacing: 0.5 }}>{r.cat.toUpperCase()} · {r.date}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'oklch(0.22 0.02 280)', marginTop: 4, lineHeight: 1.2 }}>{r.title}</div>
                  {r.subtitle && <div style={{ fontSize: 12.5, color: 'oklch(0.50 0.02 280)', marginTop: 3, fontStyle: 'italic' }}>{r.subtitle}</div>}
                </div>
              </div>
              <div style={{ fontSize: 13, color: 'oklch(0.40 0.02 280)', marginTop: 12, lineHeight: 1.5,
                display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {r.summary}
              </div>
            </PaperCard>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: 40, color: 'oklch(0.50 0.02 280)' }}>Aucun résultat.</div>
      )}

      {selected && (
        <ResourceModal r={selected} catColor={catColor(selected.cat)} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

function ResourceModal({ r, catColor, onClose }) {
  React.useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, []);

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(20,15,40,0.45)',
      display: 'grid', placeItems: 'center', zIndex: 1000,
      padding: 20, animation: 'fadeIn .2s ease',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: 'white', borderRadius: 18, maxWidth: 720, width: '100%',
        maxHeight: '90vh', overflowY: 'auto',
        boxShadow: '0 30px 80px -20px rgba(20,15,40,0.4)',
      }}>
        <div style={{
          padding: '28px 28px 20px',
          background: `linear-gradient(135deg, color-mix(in oklch, ${catColor} 18%, white), color-mix(in oklch, ${catColor} 8%, white))`,
          borderBottom: `1px solid color-mix(in oklch, ${catColor} 20%, white)`,
        }}>
          <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: catColor, letterSpacing: 1 }}>{r.cat.toUpperCase()} · {r.date}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'oklch(0.22 0.02 280)', marginTop: 6, lineHeight: 1.15 }}>{r.title}</div>
              {r.subtitle && <div style={{ fontSize: 14, color: 'oklch(0.45 0.02 280)', marginTop: 4, fontStyle: 'italic' }}>{r.subtitle}</div>}
            </div>
            <button onClick={onClose} style={{
              background: 'white', border: 'none', cursor: 'pointer', borderRadius: 999,
              width: 36, height: 36, display: 'grid', placeItems: 'center',
              fontSize: 18, color: 'oklch(0.40 0.02 280)', flexShrink: 0,
              boxShadow: '0 2px 6px -2px rgba(0,0,0,0.15)',
            }}>×</button>
          </div>
        </div>

        <div style={{ padding: '24px 28px 28px' }}>
          <Section label="Résumé">{r.summary}</Section>
          <Section label="Pourquoi c'est important">{r.why}</Section>
          {r.quote && (
            <div style={{ marginTop: 16, padding: '16px 20px', background: 'oklch(0.97 0.02 75)',
              borderLeft: `4px solid ${catColor}`, borderRadius: '4px 12px 12px 4px',
              fontFamily: 'var(--font-display)', fontSize: 16, fontStyle: 'italic',
              color: 'oklch(0.30 0.05 280)', lineHeight: 1.5 }}>
              {r.quote}
            </div>
          )}
          {r.useFor && (
            <div style={{ marginTop: 18 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'oklch(0.45 0.02 280)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 8 }}>À mobiliser pour</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {r.useFor.map((u, i) => (
                  <span key={i} style={{
                    padding: '5px 11px', borderRadius: 999, fontSize: 12.5, fontWeight: 600,
                    background: `color-mix(in oklch, ${catColor} 12%, white)`,
                    color: catColor,
                    border: `1px solid color-mix(in oklch, ${catColor} 25%, transparent)`,
                  }}>{u}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div style={{ marginTop: 14 }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: 'oklch(0.45 0.02 280)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 15, lineHeight: 1.55, color: 'oklch(0.28 0.02 280)' }}>{children}</div>
    </div>
  );
}

window.ResourcesView = ResourcesView;
