// Fill-in-the-blank
function FillView({ state, updateState, back }) {
  const themes = window.REVISION_DATA.fillBlanks;
  const [themeIdx, setThemeIdx] = React.useState(0);
  const theme = themes[themeIdx];
  const [answers, setAnswers] = React.useState({});
  const [checked, setChecked] = React.useState(false);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => { setAnswers({}); setChecked(false); setScore(0); }, [themeIdx]);

  function normalize(s) { return (s || '').toLowerCase().trim().replace(/\s+/g, ' ').replace(/[.,!?]/g, ''); }
  function isCorrect(s, val) {
    const norm = normalize(val);
    if (normalize(s.answer) === norm) return true;
    if (s.alts) return s.alts.some(a => normalize(a) === norm);
    return false;
  }

  function check() {
    let s = 0;
    theme.sentences.forEach((sent, i) => { if (isCorrect(sent, answers[i])) s++; });
    setScore(s);
    setChecked(true);
    const xp = s * 2;
    const ns = { ...state, xp: state.xp + xp };
    if (s === theme.sentences.length && !ns.badges.includes('fill_perfect')) ns.badges = [...ns.badges, 'fill_perfect'];
    if (!ns.badges.includes('first')) ns.badges = [...ns.badges, 'first'];
    updateState(window.RevStore.bumpStreak(ns), `+${xp} XP — ${s}/${theme.sentences.length} bonnes réponses`);
  }

  return (
    <div style={{ maxWidth: 880, margin: '0 auto', padding: '24px 20px 80px' }}>
      <TopNav back={back} title="Texte à trous" />

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {themes.map((t, i) => (
          <button key={i} onClick={() => setThemeIdx(i)}
            style={{
              padding: '8px 14px', borderRadius: 999, border: 'none', cursor: 'pointer',
              background: i === themeIdx ? 'oklch(0.55 0.16 320)' : 'white',
              color: i === themeIdx ? 'white' : 'oklch(0.30 0.02 280)',
              fontWeight: 600, fontSize: 13, fontFamily: 'inherit',
              border: i === themeIdx ? 'none' : '1px solid oklch(0.92 0.005 80)',
            }}>{t.theme}</button>
        ))}
      </div>

      <PaperCard style={{ padding: 28 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: 'oklch(0.22 0.02 280)', marginBottom: 18 }}>
          {theme.theme}
        </div>
        <div style={{ display: 'grid', gap: 16 }}>
          {theme.sentences.map((s, i) => {
            const correct = checked && isCorrect(s, answers[i]);
            const wrong = checked && !correct;
            return (
              <div key={i} style={{
                padding: '14px 16px', borderRadius: 12,
                background: checked ? (correct ? 'oklch(0.96 0.05 145)' : 'oklch(0.96 0.05 28)') : 'oklch(0.97 0.005 80)',
                border: `1px solid ${checked ? (correct ? 'oklch(0.80 0.10 145)' : 'oklch(0.80 0.10 28)') : 'oklch(0.92 0.005 80)'}`,
              }}>
                <div style={{ fontSize: 15.5, lineHeight: 1.6, color: 'oklch(0.25 0.02 280)' }}
                  dangerouslySetInnerHTML={{
                    __html: s.text.replace('___',
                      `<input data-blank="${i}" placeholder="…" class="blank-input" />`)
                  }} />
                {checked && wrong && (
                  <div style={{ marginTop: 8, fontSize: 13, color: 'oklch(0.45 0.10 28)', fontWeight: 600 }}>
                    Réponse : <strong>{s.answer}</strong>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 22, display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          {!checked
            ? <Btn variant="solid" color="oklch(0.55 0.16 320)" onClick={check}>Vérifier mes réponses</Btn>
            : <>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: score === theme.sentences.length ? 'oklch(0.40 0.15 145)' : 'oklch(0.30 0.02 280)' }}>
                  {score}/{theme.sentences.length} {score === theme.sentences.length && '✨'}
                </div>
                <Btn variant="solid" color="oklch(0.55 0.14 150)" onClick={() => { setAnswers({}); setChecked(false); }}>Recommencer</Btn>
              </>}
        </div>
      </PaperCard>

      {/* Sync inputs via global handler since we used dangerouslySetInnerHTML */}
      <FillSync answers={answers} setAnswers={setAnswers} checked={checked} sentences={theme.sentences} isCorrect={isCorrect} />
    </div>
  );
}

function FillSync({ answers, setAnswers, checked, sentences, isCorrect }) {
  React.useEffect(() => {
    const inputs = document.querySelectorAll('input.blank-input');
    inputs.forEach(input => {
      const idx = parseInt(input.dataset.blank, 10);
      input.value = answers[idx] || '';
      input.disabled = checked;
      if (checked) {
        const c = isCorrect(sentences[idx], input.value);
        input.style.background = c ? 'oklch(0.92 0.10 145)' : 'oklch(0.92 0.10 28)';
        input.style.color = c ? 'oklch(0.25 0.10 145)' : 'oklch(0.30 0.10 28)';
      } else {
        input.style.background = '';
        input.style.color = '';
      }
      input.oninput = e => setAnswers(a => ({ ...a, [idx]: e.target.value }));
    });
  }, [answers, checked, sentences]);
  return null;
}

window.FillView = FillView;
