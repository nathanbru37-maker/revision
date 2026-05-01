// Documents & fiches manuscrites — CEJM
function CejmDocsView({ back }) {
  const [lightbox, setLb] = React.useState(null);

  const maps = [
    { src: 'cejm-assets/attentes-cejm.jpg',     label: 'Les attentes en CEJM',                   badge: '📋 Méthode',  color: ASPECT_COLORS.indigo },
    { src: 'cejm-assets/theme-2-regulation.png', label: 'Thème 2 · La régulation économique',      badge: '📈 Éco',      color: ASPECT_COLORS.indigo },
    { src: 'cejm-assets/theme-3-combinaison.png',label: 'Thème 3 · La combinaison productive',     badge: '📈 Éco',      color: ASPECT_COLORS.indigo },
    { src: 'cejm-assets/theme-1-salaires.png',   label: 'Thème 1 · Salaires & droit du travail',   badge: '⚖️ Droit',   color: ASPECT_COLORS.forest },
    { src: 'cejm-assets/theme-4-management.png', label: 'Thème 4/5 · Pratiques managériales',      badge: '🎯 Mgmt',     color: ASPECT_COLORS.amber  },
    { src: 'cejm-assets/theme-6-detail.jpg',     label: 'Thème 6 · Choix stratégiques (détaillé)', badge: '🎯 Mgmt',     color: ASPECT_COLORS.amber  },
    { src: 'cejm-assets/theme-6-ch7-ch8.jpg',    label: 'Thème 6 · Chapitres 7 & 8',               badge: '🎯 Mgmt',     color: ASPECT_COLORS.amber  },
    { src: 'cejm-assets/numerique.png',           label: 'Impact du numérique sur l\'entreprise',   badge: '📡 Transv.',  color: ASPECT_COLORS.indigo },
  ];

  const docs = [
    { href: 'cejm-assets/cours-cejm.pdf',      icon: '📄', name: 'Cours CEJM',           desc: 'Document principal du cours' },
    { href: 'cejm-assets/notes-cejm.pdf',       icon: '📋', name: 'Notes de cours',       desc: 'Notes et exercices complémentaires' },
    { href: 'cejm-assets/revision-cejm.docx',   icon: '📝', name: 'Révision CEJM.docx',  desc: 'Fiche de révision rédigée' },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px 80px' }}>
      <CejmTopNav back={back} title="Mes documents" subtitle="Fiches manuscrites et ressources téléchargeables" />

      {/* Fiches */}
      <CejmSectionLabel>Fiches &amp; Cartes mentales ({maps.length})</CejmSectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14, marginBottom: 40 }}>
        {maps.map((m, i) => (
          <CejmPaperCard key={i} onClick={() => setLb(m)}
            className="hov-lift"
            style={{ cursor: 'zoom-in', overflow: 'hidden', padding: 0 }}>
            <div style={{ position: 'relative', background: 'oklch(0.94 0.01 85)', aspectRatio: '4/3', overflow: 'hidden' }}>
              <img src={m.src} alt={m.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .3s ease' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
              <div style={{ position: 'absolute', top: 8, right: 8, background: 'white', borderRadius: 8, padding: '3px 9px', fontSize: 11, fontWeight: 700, boxShadow: '0 2px 8px rgba(0,0,0,.12)', color: m.color.ink }}>
                🔍 Agrandir
              </div>
            </div>
            <div style={{ padding: '12px 16px', borderTop: '1px solid oklch(0.94 0.005 80)', display: 'flex', gap: 10, alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 6, background: m.color.bg, color: m.color.ink, whiteSpace: 'nowrap' }}>
                {m.badge}
              </span>
              <span style={{ fontSize: 13, fontWeight: 500, color: 'oklch(0.28 0.02 280)', lineHeight: 1.3 }}>{m.label}</span>
            </div>
          </CejmPaperCard>
        ))}
      </div>

      {/* Documents */}
      <CejmSectionLabel>Documents téléchargeables</CejmSectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
        {docs.map((d, i) => (
          <CejmPaperCard key={i} style={{ padding: 20, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{ fontSize: 28, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{d.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{d.name}</div>
              <div style={{ fontSize: 13, color: 'oklch(0.50 0.02 280)', marginBottom: 14, lineHeight: 1.4 }}>{d.desc}</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {d.href.endsWith('.pdf') && (
                  <a href={d.href} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
                    <CejmBtn color={ASPECT_COLORS.indigo.solid} style={{ fontSize: 13, padding: '7px 14px' }}>Ouvrir →</CejmBtn>
                  </a>
                )}
                <a href={d.href} download style={{ textDecoration: 'none' }}>
                  <CejmBtn variant="ghost" color={ASPECT_COLORS.indigo.solid} style={{ fontSize: 13, padding: '7px 14px' }}>Télécharger</CejmBtn>
                </a>
              </div>
            </div>
          </CejmPaperCard>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLb(null)} style={{
          position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(8,6,18,0.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, cursor: 'zoom-out',
        }}>
          <button onClick={() => setLb(null)} style={{
            position: 'fixed', top: 16, right: 20, background: 'rgba(255,255,255,.12)',
            border: 'none', color: 'white', fontSize: '1.2rem', width: 38, height: 38,
            borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>✕</button>
          <img src={lightbox.src} alt={lightbox.label} onClick={e => e.stopPropagation()}
            style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: 10, objectFit: 'contain',
              boxShadow: '0 30px 80px rgba(0,0,0,.6)',
              animation: 'lbIn .2s ease',
            }} />
          <div style={{
            position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)',
            background: 'rgba(255,255,255,.1)', color: 'rgba(255,255,255,.85)',
            fontSize: '.85rem', padding: '6px 16px', borderRadius: 999, backdropFilter: 'blur(8px)', whiteSpace: 'nowrap',
          }}>{lightbox.label}</div>
        </div>
      )}
    </div>
  );
}

window.CejmDocsView = CejmDocsView;
