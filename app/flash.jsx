// Flashcards rapides + générateur d'essai
function FlashView({ state, updateState, back }) {
  const data = window.REVISION_DATA;
  // Build flashcard pool from chapters and citations
  const cards = React.useMemo(() => {
    const out = [];
    data.axes.forEach(a => {
      a.chapters.forEach(ch => {
        ch.points.forEach(pt => out.push({ front: ch.title, back: pt, axe: a.id, color: a.color }));
      });
    });
    data.citations.forEach(c => out.push({ front: 'Citation', back: `« ${c.text} » — ${c.author}`, axe: 'axe3', color: 'azure' }));
    return out.sort(() => Math.random() - 0.5).slice(0, 15);
  }, []);
  const [idx, setIdx] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [done, setDone] = React.useState(false);

  function next(known) {
    setFlipped(false);
    if (idx + 1 >= cards.length) {
      const xp = 10;
      const ns = { ...state, xp: state.xp + xp };
      if (!ns.badges.includes('first')) ns.badges = [...ns.badges, 'first'];
      updateState(window.RevStore.bumpStreak(ns), `+${xp} XP — Session terminée !`);
      setDone(true);
    } else {
      setIdx(i => i + 1);
    }
  }

  if (done) {
    return (
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 20px 80px' }}>
        <TopNav back={back} title="Révision rapide" />
        <PaperCard style={{ padding: 40, textAlign: 'center', background: 'linear-gradient(135deg, oklch(0.96 0.06 75), oklch(0.94 0.10 60))' }}>
          <div style={{ fontSize: 48 }}>✨</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'oklch(0.30 0.10 60)', marginTop: 8 }}>
            Bien joué !
          </div>
          <div style={{ marginTop: 8, color: 'oklch(0.40 0.05 60)', fontSize: 15 }}>
            Tu as révisé {cards.length} cartes.
          </div>
          <div style={{ marginTop: 18 }}>
            <Btn variant="solid" color="oklch(0.55 0.13 200)" onClick={back}>Retour au hub →</Btn>
          </div>
        </PaperCard>
      </div>
    );
  }

  const card = cards[idx];
  const c = AXE_COLORS[card.color];

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 20px 80px' }}>
      <TopNav back={back} title="Révision rapide" />
      <div style={{ marginBottom: 16 }}>
        <ProgressBar value={idx + 1} max={cards.length} color="oklch(0.65 0.16 75)" />
        <div style={{ fontSize: 12, marginTop: 6, color: 'oklch(0.50 0.02 280)', fontFamily: 'var(--font-mono)' }}>
          {idx + 1} / {cards.length}
        </div>
      </div>

      <div onClick={() => setFlipped(f => !f)}
        style={{
          height: 320, perspective: 1500, cursor: 'pointer', marginBottom: 20,
        }}>
        <div style={{
          width: '100%', height: '100%', position: 'relative',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
          transition: 'transform .6s cubic-bezier(.2,.8,.2,1)',
        }}>
          <CardFace style={{ background: c.bg, border: `2px solid ${c.solid}` }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, color: c.solid, letterSpacing: 1.5 }}>QUESTION</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: c.ink, marginTop: 12, textWrap: 'balance' }}>
              {card.front}
            </div>
            <div style={{ marginTop: 18, fontSize: 13, color: 'oklch(0.45 0.05 280)' }}>Touche pour révéler →</div>
          </CardFace>
          <CardFace flipped style={{ background: 'white', border: `2px solid ${c.solid}` }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, color: c.solid, letterSpacing: 1.5 }}>RÉPONSE</div>
            <div style={{ fontSize: 17, lineHeight: 1.5, color: 'oklch(0.25 0.02 280)', marginTop: 12 }}
              dangerouslySetInnerHTML={{ __html: card.back }} />
          </CardFace>
        </div>
      </div>

      {flipped && (
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <Btn variant="soft" color="oklch(0.55 0.13 200)" onClick={() => next(false)}>À revoir</Btn>
          <Btn variant="solid" color="oklch(0.55 0.14 150)" onClick={() => next(true)}>Je sais ✓</Btn>
        </div>
      )}
    </div>
  );
}

function CardFace({ children, style, flipped }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, borderRadius: 18,
      backfaceVisibility: 'hidden',
      transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
      padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      boxShadow: '0 12px 30px -12px rgba(20,15,40,0.2)',
      ...style,
    }}>
      {children}
    </div>
  );
}

window.FlashView = FlashView;
