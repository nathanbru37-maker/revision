// Explorateur de thèmes/aspects — CEJM

/* ── Étiquette de type de section ─────────────────────────── */
function STypeLabel({ type, label, c }) {
  const names = {
    definition: 'DÉFINITION', points: 'POINTS CLÉS', table: 'TABLEAU',
    comparison: 'COMPARATIF', cards: 'FICHES', schema: 'SCHÉMA',
    acronym: 'ACRONYME', pyramid: 'PYRAMIDE', hierarchy: 'HIÉRARCHIE',
    formula: 'FORMULE', process: 'PROCESSUS', spectrum: 'ÉCHELLE',
  };
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 12 }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 700,
        letterSpacing: 1.8, color: c.solid, background: c.bg,
        padding: '3px 9px', borderRadius: 5, flexShrink: 0,
      }}>{names[type] || type.toUpperCase()}</span>
      {label && <span style={{ fontWeight: 700, fontSize: 15, color: 'oklch(0.22 0.02 280)', lineHeight: 1.3 }}>{label}</span>}
    </div>
  );
}

/* ── DÉFINITION ────────────────────────────────────────────── */
function DefSection({ s, c }) {
  return (
    <div>
      <STypeLabel type="definition" label={null} c={c} />
      <div style={{
        borderLeft: '4px solid ' + c.solid,
        padding: '14px 18px', background: c.soft,
        borderRadius: '0 14px 14px 0',
      }}>
        <div style={{ fontWeight: 800, fontSize: 15.5, color: c.ink, marginBottom: 7 }}>{s.term}</div>
        <div style={{ fontSize: 14, lineHeight: 1.68, color: 'oklch(0.28 0.02 280)' }}>{s.text}</div>
      </div>
    </div>
  );
}

/* ── POINTS CLÉS ────────────────────────────────────────────── */
function PointsSection({ s, c }) {
  return (
    <div>
      <STypeLabel type="points" label={s.label} c={c} />
      <div style={{ display: 'grid', gap: 7 }}>
        {s.items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', gap: 12, padding: '10px 14px',
            background: c.soft, borderRadius: 11, alignItems: 'flex-start',
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: 7, flexShrink: 0, marginTop: 1,
              background: c.bg, color: c.solid, display: 'grid', placeItems: 'center',
              fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 11,
            }}>{i + 1}</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.62, color: 'oklch(0.28 0.02 280)' }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── TABLEAU ────────────────────────────────────────────────── */
function TableSection({ s, c }) {
  return (
    <div>
      <STypeLabel type="table" label={s.label} c={c} />
      <div style={{ overflowX: 'auto', borderRadius: 14, border: '1.5px solid oklch(0.92 0.005 80)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr>
              {s.cols.map((col, i) => (
                <th key={i} style={{
                  padding: '11px 14px', textAlign: 'left',
                  background: c.bg, color: c.ink, fontWeight: 700,
                  borderBottom: '2px solid ' + c.solid, whiteSpace: 'nowrap', fontSize: 12,
                }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {s.rows.map((row, ri) => (
              <tr key={ri} style={{ background: ri % 2 === 0 ? 'white' : c.soft }}>
                {row.map((cell, ci) => (
                  <td key={ci} style={{
                    padding: '9px 14px', lineHeight: 1.45,
                    color: 'oklch(0.28 0.02 280)',
                    borderBottom: '1px solid oklch(0.95 0.005 80)',
                    fontWeight: ci === 0 ? 700 : 400,
                  }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── COMPARATIF ─────────────────────────────────────────────── */
function ComparisonSection({ s, c }) {
  const colColors = [c, ASPECT_COLORS['forest']];
  const c0 = s.cols.length === 4 ? [c, ASPECT_COLORS.forest, ASPECT_COLORS.amber, ASPECT_COLORS.indigo] : colColors;
  return (
    <div>
      <STypeLabel type="comparison" label={s.label} c={c} />
      <div style={{ overflowX: 'auto', borderRadius: 14, border: '1.5px solid oklch(0.92 0.005 80)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr>
              {s.cols.map((col, i) => {
                const cc = c0[i] || c;
                return (
                  <th key={i} style={{
                    padding: '12px 16px', textAlign: 'center',
                    background: cc.bg, color: cc.ink,
                    fontWeight: 700, fontSize: 13,
                    borderBottom: '2px solid ' + cc.solid,
                    width: (100 / s.cols.length) + '%',
                  }}>{col}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {s.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => {
                  const cc = c0[ci] || c;
                  return (
                    <td key={ci} style={{
                      padding: '9px 16px', textAlign: 'center', verticalAlign: 'middle',
                      lineHeight: 1.45, color: 'oklch(0.28 0.02 280)',
                      borderBottom: '1px solid oklch(0.95 0.005 80)',
                      background: ri % 2 === 0 ? 'white' : cc.soft,
                    }}>{cell}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {s.footer && (
        <div style={{
          marginTop: 10, padding: '9px 14px',
          background: 'oklch(0.96 0.02 80)', borderRadius: 10,
          fontSize: 13, color: 'oklch(0.35 0.02 280)', fontStyle: 'italic',
          lineHeight: 1.5,
        }}>{s.footer}</div>
      )}
    </div>
  );
}

/* ── FICHES (cards) ─────────────────────────────────────────── */
function CardsSection({ s, c }) {
  return (
    <div>
      <STypeLabel type="cards" label={s.label} c={c} />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
        gap: 10,
      }}>
        {s.items.map((item, i) => (
          <div key={i} style={{
            padding: '14px 15px',
            background: c.soft,
            borderRadius: 13,
            border: '1.5px solid color-mix(in oklch, ' + c.solid + ' 16%, transparent)',
          }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
            <div style={{ fontWeight: 700, fontSize: 13.5, color: c.ink, marginBottom: 6 }}>{item.title}</div>
            <div style={{ fontSize: 12.5, lineHeight: 1.55, color: 'oklch(0.38 0.02 280)' }}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SCHÉMA (branches simples ou avec groupes) ──────────────── */
function SchemaSection({ s, c }) {
  const hasGroups = s.branches[0] && s.branches[0].groups;

  if (hasGroups) {
    return (
      <div>
        <STypeLabel type="schema" label={s.label} c={c} />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 12,
        }}>
          {s.branches.map(function(branch, bi) {
            var bc = ASPECT_COLORS[branch.color] || c;
            return (
              <div key={bi} style={{
                borderRadius: 16,
                border: '1.5px solid color-mix(in oklch, ' + bc.solid + ' 22%, transparent)',
                overflow: 'hidden',
              }}>
                <div style={{ background: bc.bg, padding: '12px 18px', borderBottom: '1.5px solid color-mix(in oklch, ' + bc.solid + ' 22%, transparent)' }}>
                  <div style={{ fontWeight: 800, fontSize: 13, color: bc.ink, letterSpacing: 0.3 }}>{branch.label}</div>
                  {branch.sublabel && <div style={{ fontSize: 11, color: bc.solid, fontWeight: 600, marginTop: 2 }}>{branch.sublabel}</div>}
                </div>
                <div style={{ padding: '14px 16px', background: bc.soft, display: 'grid', gap: 14 }}>
                  {branch.groups.map(function(group, gi) {
                    return (
                      <div key={gi}>
                        <div style={{
                          fontFamily: 'var(--font-mono)', fontSize: 9.5, fontWeight: 700,
                          color: bc.solid, letterSpacing: 1.4, marginBottom: 8,
                          textTransform: 'uppercase',
                        }}>{group.label}</div>
                        <div style={{ display: 'grid', gap: 5 }}>
                          {group.items.map(function(item, ii) {
                            return (
                              <div key={ii} style={{
                                display: 'flex', gap: 8, alignItems: 'flex-start',
                                fontSize: 12.5, lineHeight: 1.5, color: 'oklch(0.28 0.02 280)',
                                padding: '5px 8px', background: 'white', borderRadius: 8,
                              }}>
                                <span style={{ color: bc.solid, flexShrink: 0, fontWeight: 700, marginTop: 1 }}>›</span>
                                <span>{item}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Branches simples
  return (
    <div>
      <STypeLabel type="schema" label={s.label} c={c} />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 12,
      }}>
        {s.branches.map(function(branch, bi) {
          var bc = ASPECT_COLORS[branch.color] || c;
          return (
            <div key={bi} style={{
              borderRadius: 14,
              border: '1.5px solid color-mix(in oklch, ' + bc.solid + ' 20%, transparent)',
              overflow: 'hidden',
            }}>
              <div style={{ background: bc.bg, padding: '11px 16px', borderBottom: '1.5px solid color-mix(in oklch, ' + bc.solid + ' 20%, transparent)' }}>
                <div style={{ fontWeight: 800, fontSize: 12.5, color: bc.ink, letterSpacing: 0.3 }}>{branch.label}</div>
              </div>
              <div style={{ padding: '12px 14px', background: bc.soft, display: 'grid', gap: 6 }}>
                {branch.items.map(function(item, ii) {
                  return (
                    <div key={ii} style={{
                      display: 'flex', gap: 8, alignItems: 'flex-start',
                      fontSize: 13, lineHeight: 1.5, color: 'oklch(0.28 0.02 280)',
                    }}>
                      <span style={{ color: bc.solid, flexShrink: 0, fontWeight: 700, marginTop: 1 }}>›</span>
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── ACRONYME ───────────────────────────────────────────────── */
function AcronymSection({ s, c }) {
  return (
    <div>
      <STypeLabel type="acronym" label={s.label} c={c} />
      <div style={{ display: 'grid', gap: 7 }}>
        {s.items.map((item, i) => (
          <div key={i} style={{
            display: 'flex', gap: 14, padding: '11px 14px',
            background: 'white', borderRadius: 12,
            border: '1.5px solid oklch(0.93 0.005 80)',
            alignItems: 'flex-start',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 11, flexShrink: 0,
              background: c.bg, color: c.solid,
              display: 'grid', placeItems: 'center',
              fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 20,
            }}>{item.letter}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: c.ink }}>{item.word}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: 'oklch(0.38 0.02 280)', marginTop: 3 }}>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── PYRAMIDE (Maslow) ──────────────────────────────────────── */
function PyramidSection({ s, c }) {
  var total = s.levels.length;
  // levels[0] = base (physiologiques), levels[n-1] = sommet (accomplissement)
  // On affiche de haut (sommet) en bas (base) → on inverse l'ordre d'affichage
  var displayed = s.levels.slice().reverse();
  return (
    <div>
      <STypeLabel type="pyramid" label={s.label} c={c} />
      {s.note && <div style={{ fontSize: 12, color: 'oklch(0.45 0.02 280)', fontStyle: 'italic', marginBottom: 14 }}>{s.note}</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' }}>
        {displayed.map(function(level, di) {
          // di=0 → sommet (narrow), di=n-1 → base (wide)
          var widthPct = 32 + (di / (total - 1)) * 68; // 32% en haut, 100% en bas
          var lc = ASPECT_COLORS[level.color] || c;
          return (
            <div key={di} style={{
              width: widthPct + '%',
              background: lc.bg,
              border: '1.5px solid color-mix(in oklch, ' + lc.solid + ' 28%, transparent)',
              borderRadius: 10, padding: '9px 16px', textAlign: 'center',
              transition: 'width .3s ease',
            }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: lc.ink }}>{level.label}</div>
              {level.note && <div style={{ fontSize: 11, color: 'oklch(0.45 0.02 280)', marginTop: 3, lineHeight: 1.4 }}>{level.note}</div>}
            </div>
          );
        })}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
          <div style={{ width: 16, height: 1, background: 'oklch(0.65 0.02 280)' }} />
          <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'oklch(0.50 0.02 280)', fontWeight: 600 }}>SATISFAIRE LA BASE EN PREMIER</div>
          <div style={{ width: 16, height: 1, background: 'oklch(0.65 0.02 280)' }} />
        </div>
      </div>
    </div>
  );
}

/* ── HIÉRARCHIE (normes, types de décision) ─────────────────── */
function HierarchySection({ s, c }) {
  return (
    <div>
      <STypeLabel type="hierarchy" label={s.label} c={c} />
      {s.note && <div style={{ fontSize: 12, color: 'oklch(0.45 0.02 280)', fontStyle: 'italic', marginBottom: 14, lineHeight: 1.5 }}>{s.note}</div>}
      <div style={{ display: 'grid', gap: 0 }}>
        {s.levels.map((level, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'stretch' }}>
            {/* Ligne verticale + icône */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 36 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                background: i === 0 ? c.solid : c.bg,
                color: i === 0 ? 'white' : c.solid,
                display: 'grid', placeItems: 'center', fontSize: 15, zIndex: 1,
                border: i === 0 ? 'none' : '1.5px solid color-mix(in oklch, ' + c.solid + ' 28%, transparent)',
              }}>{level.icon || (i + 1)}</div>
              {i < s.levels.length - 1 && (
                <div style={{ width: 2, flex: 1, background: 'color-mix(in oklch, ' + c.solid + ' 22%, transparent)', minHeight: 14, marginTop: 2 }} />
              )}
            </div>
            {/* Contenu */}
            <div style={{ padding: '5px 0 16px', flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: i === 0 ? c.ink : 'oklch(0.28 0.02 280)' }}>{level.label}</div>
              {level.note && <div style={{ fontSize: 12, color: 'oklch(0.48 0.02 280)', marginTop: 3, lineHeight: 1.45 }}>{level.note}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── FORMULE ────────────────────────────────────────────────── */
function FormulaSection({ s, c }) {
  return (
    <div>
      <STypeLabel type="formula" label={s.label} c={c} />
      <div style={{
        padding: '16px 20px',
        background: c.bg,
        borderRadius: 13,
        border: '1.5px solid color-mix(in oklch, ' + c.solid + ' 24%, transparent)',
        marginBottom: s.note ? 10 : 0,
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 13.5, fontWeight: 700,
          color: c.ink, lineHeight: 1.75,
          wordBreak: 'break-word',
        }}>{s.formula}</div>
      </div>
      {s.note && (
        <div style={{
          fontSize: 13, color: 'oklch(0.38 0.02 280)', lineHeight: 1.58,
          padding: '9px 14px', background: 'oklch(0.96 0.01 80)', borderRadius: 10,
        }}>{s.note}</div>
      )}
    </div>
  );
}

/* ── PROCESSUS ──────────────────────────────────────────────── */
function ProcessSection({ s, c }) {
  return (
    <div>
      <STypeLabel type="process" label={s.label} c={c} />
      <div style={{ display: 'flex', gap: 0, overflowX: 'auto', paddingBottom: 4 }}>
        {s.steps.map((step, i) => (
          <React.Fragment key={i}>
            <div style={{
              padding: '14px 14px', background: c.soft, borderRadius: 13,
              border: '1.5px solid color-mix(in oklch, ' + c.solid + ' 18%, transparent)',
              textAlign: 'center', minWidth: 110, flex: 1,
            }}>
              <div style={{ fontSize: 26, marginBottom: 8 }}>{step.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 12.5, color: c.ink, marginBottom: 5 }}>{step.label}</div>
              <div style={{ fontSize: 11, color: 'oklch(0.45 0.02 280)', lineHeight: 1.4 }}>{step.note}</div>
            </div>
            {i < s.steps.length - 1 && (
              <div style={{
                display: 'flex', alignItems: 'center',
                padding: '0 4px', color: c.solid,
                fontSize: 22, flexShrink: 0, fontWeight: 300,
              }}>→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ── SPECTRE (styles management) ────────────────────────────── */
function SpectrumSection({ s, c }) {
  var pal = [
    'oklch(0.60 0.18 15)',
    'oklch(0.65 0.14 45)',
    'oklch(0.55 0.14 200)',
    'oklch(0.50 0.15 145)',
  ];
  return (
    <div>
      <STypeLabel type="spectrum" label={s.label} c={c} />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(' + s.items.length + ', 1fr)',
        gap: 7,
      }}>
        {s.items.map((item, i) => {
          var isLast = i === s.items.length - 1;
          return (
            <div key={i} style={{
              padding: '12px 12px 14px',
              borderRadius: 13,
              background: isLast ? 'oklch(0.93 0.05 145)' : 'white',
              border: '2px solid ' + (isLast ? 'oklch(0.50 0.14 155)' : 'oklch(0.92 0.005 80)'),
            }}>
              <div style={{
                width: 26, height: 26, borderRadius: '50%',
                background: pal[i] || c.solid,
                display: 'grid', placeItems: 'center',
                fontSize: 11, color: 'white', fontWeight: 700,
                fontFamily: 'var(--font-mono)', margin: '0 auto 10px',
              }}>{i + 1}</div>
              <div style={{ fontWeight: 700, fontSize: 12.5, color: 'oklch(0.22 0.02 280)', textAlign: 'center', marginBottom: 6, lineHeight: 1.35 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: 'oklch(0.45 0.02 280)', lineHeight: 1.4, textAlign: 'center' }}>{item.note}</div>
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 7, fontSize: 11, color: 'oklch(0.50 0.02 280)', fontStyle: 'italic' }}>
        <span>← Plus directif</span>
        <span>Plus participatif →</span>
      </div>
    </div>
  );
}

/* ── Dispatch principal ─────────────────────────────────────── */
function SectionRenderer({ section, c }) {
  switch (section.type) {
    case 'definition':  return <DefSection s={section} c={c} />;
    case 'points':      return <PointsSection s={section} c={c} />;
    case 'table':       return <TableSection s={section} c={c} />;
    case 'comparison':  return <ComparisonSection s={section} c={c} />;
    case 'cards':       return <CardsSection s={section} c={c} />;
    case 'schema':      return <SchemaSection s={section} c={c} />;
    case 'acronym':     return <AcronymSection s={section} c={c} />;
    case 'pyramid':     return <PyramidSection s={section} c={c} />;
    case 'hierarchy':   return <HierarchySection s={section} c={c} />;
    case 'formula':     return <FormulaSection s={section} c={c} />;
    case 'process':     return <ProcessSection s={section} c={c} />;
    case 'spectrum':    return <SpectrumSection s={section} c={c} />;
    default:            return null;
  }
}

/* ── Nœud chapitre ──────────────────────────────────────────── */
function CejmChapterNode({ chapter, index, color }) {
  const [open, setOpen] = React.useState(index === 0);
  const sectionCount = chapter.sections ? chapter.sections.length : 0;

  return (
    <CejmPaperCard style={{ overflow: 'hidden' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', textAlign: 'left', background: 'none', border: 'none',
        cursor: 'pointer', padding: '18px 22px',
        display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'inherit',
      }}>
        {/* Badge numéro */}
        <div style={{
          width: 40, height: 40, borderRadius: 12, flexShrink: 0,
          background: open ? color.solid : color.bg,
          color: open ? 'white' : color.solid,
          display: 'grid', placeItems: 'center',
          fontWeight: 800, fontFamily: 'var(--font-mono)', fontSize: 17,
          transition: 'all .2s ease',
        }}>{index + 1}</div>

        {/* Titre et sous-infos */}
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'oklch(0.22 0.02 280)', lineHeight: 1.25 }}>
            {chapter.icon && <span style={{ marginRight: 8 }}>{chapter.icon}</span>}
            {chapter.title}
          </div>
          <div style={{ fontSize: 11.5, color: color.solid, marginTop: 4, fontWeight: 600 }}>
            {sectionCount} section{sectionCount > 1 ? 's' : ''}
          </div>
        </div>

        {/* Flèche */}
        <div style={{
          fontSize: 22, color: color.solid,
          transform: open ? 'rotate(90deg)' : 'rotate(0)',
          transition: 'transform .2s ease', flexShrink: 0,
        }}>›</div>
      </button>

      {open && (
        <div style={{ padding: '0 22px 24px 22px' }}>
          <div style={{ height: 1, background: 'oklch(0.94 0.005 80)', marginBottom: 22 }} />
          <div style={{ display: 'grid', gap: 22 }}>
            {chapter.sections.map((section, i) => (
              <SectionRenderer key={i} section={section} c={color} />
            ))}
          </div>
        </div>
      )}
    </CejmPaperCard>
  );
}

/* ── Vue principale ─────────────────────────────────────────── */
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

  const totalSections = current.chapters.reduce((acc, ch) => acc + (ch.sections ? ch.sections.length : 0), 0);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 20px 80px' }}>
      <CejmTopNav back={back} title="Cours & Thèmes" subtitle="Clique sur un chapitre pour le développer" />

      {/* Sélecteur d'aspect */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {data.aspects.map(a => {
          const ac = ASPECT_COLORS[a.color];
          const active = a.id === current.id;
          return (
            <button key={a.id} onClick={() => setAspect(a.id)} style={{
              padding: '10px 18px', borderRadius: 12, border: active ? 'none' : '1.5px solid oklch(0.92 0.005 80)',
              cursor: 'pointer', background: active ? ac.solid : 'white',
              color: active ? 'white' : ac.ink, fontWeight: 700, fontSize: 14,
              fontFamily: 'inherit',
              boxShadow: active ? '0 4px 14px -4px ' + ac.solid : '0 1px 4px rgba(0,0,0,0.05)',
              transition: 'all .15s ease',
            }}>
              <span style={{ marginRight: 7 }}>{a.icon}</span>
              <span style={{ fontFamily: 'var(--font-mono)', opacity: 0.75, fontSize: 11, marginRight: 6 }}>ASPECT {a.num}</span>
              {a.label}
            </button>
          );
        })}
      </div>

      {/* Question centrale */}
      <CejmPaperCard style={{
        padding: 26,
        background: c.bg,
        border: '1.5px solid color-mix(in oklch, ' + c.solid + ' 24%, transparent)',
        marginBottom: 18,
      }}>
        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, fontWeight: 700, letterSpacing: 1.8, color: c.solid, marginBottom: 10 }}>QUESTION CENTRALE</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(19px, 2.8vw, 28px)', fontWeight: 700, lineHeight: 1.22, color: c.ink }}>
              {current.question}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end', flexShrink: 0 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: c.solid, fontWeight: 600 }}>{current.chapters.length} chapitres</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: c.solid, fontWeight: 600 }}>{totalSections} sections</div>
            {state.visited[current.id] && (
              <div style={{ fontSize: 12, color: c.solid, fontWeight: 700, marginTop: 4 }}>✓ Visité</div>
            )}
          </div>
        </div>
      </CejmPaperCard>

      {/* Chapitres */}
      <div style={{ display: 'grid', gap: 12 }}>
        {current.chapters.map((chap, i) => (
          <CejmChapterNode key={i} chapter={chap} index={i} color={c} />
        ))}
      </div>
    </div>
  );
}

window.CejmThemesView = CejmThemesView;
