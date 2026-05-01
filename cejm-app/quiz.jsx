// Quiz QCM — CEJM
function CejmQuizView({ state, updateState, back }) {
  const allQ = window.CEJM_DATA.quiz;
  const questions = React.useMemo(() => [...allQ].sort(() => Math.random() - 0.5).slice(0, 12), []);

  const [idx, setIdx]       = React.useState(0);
  const [chosen, setChosen] = React.useState(null);
  const [score, setScore]   = React.useState(0);
  const [done, setDone]     = React.useState(false);
  const [showExpl, setExpl] = React.useState(false);

  function pick(i) {
    if (chosen !== null) return;
    setChosen(i);
    setExpl(true);
  }

  function next() {
    const correct = chosen === questions[idx].ans;
    const newScore = correct ? score + 1 : score;
    setExpl(false);
    if (idx + 1 >= questions.length) {
      const xp = newScore * 3;
      const ns = { ...state, xp: state.xp + xp, quizBest: Math.max(state.quizBest || 0, newScore) };
      if (!ns.badges.includes('first')) ns.badges = [...ns.badges, 'first'];
      if (newScore === questions.length && !ns.badges.includes('quiz10')) ns.badges = [...ns.badges, 'quiz10'];
      if (ns.xp >= 100 && !ns.badges.includes('century')) ns.badges = [...ns.badges, 'century'];
      updateState(window.CejmStore.bumpStreak(ns), `+${xp} XP — ${newScore}/${questions.length} !`);
      setScore(newScore);
      setDone(true);
    } else {
      setScore(newScore);
      setIdx(i => i + 1);
      setChosen(null);
    }
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '🎉' : pct >= 40 ? '👍' : '📚';
    return (
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '24px 20px 80px' }}>
        <CejmTopNav back={back} title="Quiz" />
        <CejmPaperCard style={{ padding: 40, textAlign: 'center' }}>
          <div style={{ fontSize: 56 }}>{emoji}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: 'oklch(0.22 0.02 280)', marginTop: 10 }}>
            {score} / {questions.length}
          </div>
          <div style={{ fontSize: 15, color: 'oklch(0.45 0.02 280)', marginTop: 6 }}>
            {pct >= 80 ? 'Excellent ! Tu maîtrises le sujet.' : pct >= 60 ? 'Bon résultat, continue !' : 'Encore un peu de révision…'}
          </div>
          <div style={{ margin: '20px 0', maxWidth: 360, marginLeft: 'auto', marginRight: 'auto' }}>
            <CejmProgressBar value={score} max={questions.length} color={pct >= 80 ? ASPECT_COLORS.forest.solid : pct >= 60 ? ASPECT_COLORS.amber.solid : 'oklch(0.55 0.18 28)'} />
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CejmBtn color={ASPECT_COLORS.indigo.solid} onClick={() => { setIdx(0); setChosen(null); setScore(0); setDone(false); }}>
              Recommencer ↺
            </CejmBtn>
            <CejmBtn variant="ghost" color={ASPECT_COLORS.indigo.solid} onClick={back}>Retour au hub</CejmBtn>
          </div>
        </CejmPaperCard>
      </div>
    );
  }

  const q = questions[idx];
  const correct = chosen !== null && chosen === q.ans;
  const wrong   = chosen !== null && chosen !== q.ans;
  const aspectColor = q.aspect === 'eco' ? ASPECT_COLORS.indigo : q.aspect === 'droit' ? ASPECT_COLORS.forest : ASPECT_COLORS.amber;
  const aspectLabel = { eco: '📈 Économie', droit: '⚖️ Droit', mgmt: '🎯 Management' }[q.aspect];

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '24px 20px 80px' }}>
      <CejmTopNav back={back} title="Quiz QCM" subtitle={`Question ${idx + 1} / ${questions.length}`} />

      <div style={{ marginBottom: 20 }}>
        <CejmProgressBar value={idx} max={questions.length} color={aspectColor.solid} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 12, color: 'oklch(0.50 0.02 280)' }}>
          <span style={{ fontFamily: 'var(--font-mono)' }}>{idx + 1} / {questions.length}</span>
          <span>Score : {score}</span>
        </div>
      </div>

      {/* Question card */}
      <CejmPaperCard style={{ padding: '24px 26px', marginBottom: 16, background: aspectColor.bg, border: `1.5px solid color-mix(in oklch, ${aspectColor.solid} 25%, transparent)` }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, color: aspectColor.solid, fontFamily: 'var(--font-mono)', marginBottom: 10 }}>
          {aspectLabel}
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.8vw, 22px)', fontWeight: 700, lineHeight: 1.3, color: aspectColor.ink }}>
          {q.q}
        </div>
      </CejmPaperCard>

      {/* Options */}
      <div style={{ display: 'grid', gap: 10, marginBottom: 20 }}>
        {q.opts.map((opt, i) => {
          const isChosen  = chosen === i;
          const isCorrect = i === q.ans;
          let bg    = 'white';
          let col   = 'oklch(0.25 0.02 280)';
          let bord  = '1.5px solid oklch(0.92 0.005 80)';
          let shadow = '0 2px 6px -3px rgba(0,0,0,0.08)';
          if (chosen !== null) {
            if (isCorrect)                 { bg = 'oklch(0.93 0.08 145)'; col = 'oklch(0.28 0.10 145)'; bord = '2px solid oklch(0.55 0.14 145)'; }
            else if (isChosen && !isCorrect) { bg = 'oklch(0.93 0.08 25)';  col = 'oklch(0.38 0.15 20)';  bord = '2px solid oklch(0.60 0.18 25)';  }
          } else if (!isChosen) {
            shadow = '0 2px 8px -4px rgba(0,0,0,0.08)';
          }
          return (
            <button key={i} onClick={() => pick(i)} disabled={chosen !== null}
              style={{
                width: '100%', textAlign: 'left', fontFamily: 'inherit', fontSize: 15,
                padding: '14px 18px', borderRadius: 14, cursor: chosen !== null ? 'default' : 'pointer',
                background: bg, color: col, border: bord,
                boxShadow: shadow, lineHeight: 1.4,
                transition: 'all .18s ease',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
              <span style={{
                width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                display: 'grid', placeItems: 'center',
                background: chosen !== null ? 'transparent' : 'oklch(0.94 0.01 80)',
                fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12, color: 'inherit',
              }}>
                {chosen !== null ? (isCorrect ? '✓' : isChosen ? '✗' : String.fromCharCode(65+i)) : String.fromCharCode(65+i)}
              </span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>

      {showExpl && chosen !== null && (
        <CejmPaperCard style={{ padding: 18, marginBottom: 20, background: correct ? 'oklch(0.95 0.06 145)' : 'oklch(0.97 0.04 255)', border: `1.5px solid ${correct ? 'oklch(0.70 0.12 145)' : 'oklch(0.75 0.10 255)'}` }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: correct ? 'oklch(0.30 0.10 145)' : ASPECT_COLORS.indigo.ink }}>
            {correct ? '✓ Bonne réponse !' : `✗ La bonne réponse était : ${q.opts[q.ans]}`}
          </div>
        </CejmPaperCard>
      )}

      {chosen !== null && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CejmBtn color={aspectColor.solid} onClick={next}>
            {idx + 1 < questions.length ? 'Question suivante →' : 'Voir mon score'}
          </CejmBtn>
        </div>
      )}
    </div>
  );
}

window.CejmQuizView = CejmQuizView;
