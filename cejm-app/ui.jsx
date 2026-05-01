// Shared UI — CEJM
const ASPECT_COLORS = {
  indigo: { bg: 'oklch(0.93 0.05 255)', solid: 'oklch(0.50 0.18 255)', ink: 'oklch(0.28 0.10 255)', soft: 'oklch(0.97 0.025 255)' },
  forest: { bg: 'oklch(0.93 0.05 155)', solid: 'oklch(0.50 0.14 155)', ink: 'oklch(0.28 0.08 155)', soft: 'oklch(0.97 0.022 155)' },
  amber:  { bg: 'oklch(0.94 0.07 70)',  solid: 'oklch(0.65 0.16 65)',  ink: 'oklch(0.35 0.10 60)',  soft: 'oklch(0.97 0.030 70)'  },
};

function CejmPaperCard({ children, style, onClick, className }) {
  return (
    <div onClick={onClick} className={className} style={{
      background: 'white', borderRadius: 18,
      boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 8px 24px -12px rgba(20,15,40,0.18)',
      border: '1px solid oklch(0.94 0.005 80)',
      ...style,
    }}>{children}</div>
  );
}

function CejmBtn({ children, onClick, variant = 'solid', color = 'oklch(0.22 0.02 280)', style, disabled }) {
  const base = {
    fontFamily: 'inherit', fontWeight: 600, fontSize: 15,
    padding: '10px 18px', borderRadius: 12, cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none', transition: 'transform .12s ease, box-shadow .12s ease',
    opacity: disabled ? 0.5 : 1,
  };
  const styles = {
    solid: { ...base, background: color, color: 'white', boxShadow: '0 2px 0 rgba(0,0,0,0.15)' },
    ghost: { ...base, background: 'transparent', color, boxShadow: 'inset 0 0 0 1.5px currentColor' },
    soft:  { ...base, background: `color-mix(in oklch, ${color} 12%, white)`, color },
  };
  return (
    <button disabled={disabled} onClick={onClick}
      onMouseDown={e => !disabled && (e.currentTarget.style.transform = 'translateY(1px)')}
      onMouseUp={e => (e.currentTarget.style.transform = 'translateY(0)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
      style={{ ...styles[variant], ...style }}>
      {children}
    </button>
  );
}

function CejmProgressBar({ value, max, color = 'oklch(0.50 0.18 255)' }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div style={{ height: 10, background: 'oklch(0.94 0.01 80)', borderRadius: 999, overflow: 'hidden' }}>
      <div style={{
        width: `${pct}%`, height: '100%',
        background: `linear-gradient(90deg, ${color}, color-mix(in oklch, ${color} 70%, white))`,
        borderRadius: 999, transition: 'width .4s cubic-bezier(.2,.8,.2,1)',
      }} />
    </div>
  );
}

function CejmToast({ msg, color = 'oklch(0.50 0.18 255)' }) {
  if (!msg) return null;
  return (
    <div style={{
      position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
      background: color, color: 'white', padding: '10px 18px', borderRadius: 999,
      fontWeight: 600, fontSize: 14, zIndex: 9999,
      boxShadow: '0 12px 30px -10px rgba(0,0,0,0.4)',
      animation: 'toastIn .35s ease', whiteSpace: 'nowrap',
    }}>{msg}</div>
  );
}

function CejmTopNav({ back, title, subtitle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid oklch(0.94 0.005 80)' }}>
      <button onClick={back} style={{
        background: 'oklch(0.94 0.01 80)', border: 'none', borderRadius: 10, padding: '8px 14px',
        cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, fontWeight: 600, color: 'oklch(0.40 0.02 280)',
        transition: 'background .15s',
      }} onMouseEnter={e => e.target.style.background = 'oklch(0.90 0.02 80)'}
         onMouseLeave={e => e.target.style.background = 'oklch(0.94 0.01 80)'}>
        ← Retour
      </button>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'oklch(0.22 0.02 280)' }}>{title}</div>
        {subtitle && <div style={{ fontSize: 12, color: 'oklch(0.50 0.02 280)', marginTop: 2 }}>{subtitle}</div>}
      </div>
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

function StatPill({ icon, label, value, suffix, color }) {
  return (
    <div style={{
      background: 'white', padding: '8px 14px', borderRadius: 999,
      border: '1px solid oklch(0.94 0.005 80)',
      display: 'flex', alignItems: 'center', gap: 8,
      boxShadow: '0 2px 6px -3px rgba(0,0,0,0.1)',
    }}>
      <span style={{ fontSize: 16, color }}>{icon}</span>
      <span style={{ fontWeight: 800, fontSize: 17, color: 'oklch(0.22 0.02 280)' }}>{value}{suffix || ''}</span>
      <span style={{ fontSize: 11, color: 'oklch(0.50 0.02 280)', textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 600 }}>{label}</span>
    </div>
  );
}

window.ASPECT_COLORS = ASPECT_COLORS;
window.CejmPaperCard = CejmPaperCard;
window.CejmBtn = CejmBtn;
window.CejmProgressBar = CejmProgressBar;
window.CejmToast = CejmToast;
window.CejmTopNav = CejmTopNav;
window.CejmSectionLabel = SectionLabel;
window.CejmStatPill = StatPill;
