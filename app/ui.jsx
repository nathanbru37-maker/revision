// Shared UI helpers
const AXE_COLORS = {
  terracotta: { bg: 'oklch(0.94 0.06 80)', solid: 'oklch(0.65 0.13 75)', ink: 'oklch(0.34 0.08 75)', soft: 'oklch(0.97 0.025 80)' },
  forest:     { bg: 'oklch(0.93 0.05 165)', solid: 'oklch(0.55 0.13 165)', ink: 'oklch(0.30 0.07 165)', soft: 'oklch(0.97 0.022 165)' },
  azure:      { bg: 'oklch(0.92 0.05 270)', solid: 'oklch(0.52 0.14 275)', ink: 'oklch(0.30 0.08 275)', soft: 'oklch(0.96 0.025 270)' },
};

function PaperCard({ children, style, onClick, className }) {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        background: 'white',
        borderRadius: 18,
        boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 8px 24px -12px rgba(20,15,40,0.18)',
        border: '1px solid oklch(0.94 0.005 80)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Pill({ color = 'oklch(0.55 0.16 250)', children, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 999, fontSize: 12,
      background: 'oklch(0.97 0.005 80)',
      color, fontWeight: 600, letterSpacing: 0.2,
      border: `1px solid color-mix(in oklch, ${color} 25%, transparent)`,
      ...style,
    }}>{children}</span>
  );
}

function Btn({ children, onClick, variant = 'solid', color = 'oklch(0.22 0.02 280)', style, disabled }) {
  const base = {
    fontFamily: 'inherit', fontWeight: 600, fontSize: 15,
    padding: '12px 20px', borderRadius: 12, cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none', transition: 'transform .12s ease, box-shadow .12s ease',
    opacity: disabled ? 0.5 : 1,
  };
  const styles = {
    solid: { ...base, background: color, color: 'white', boxShadow: '0 2px 0 rgba(0,0,0,0.15)' },
    ghost: { ...base, background: 'transparent', color, boxShadow: 'inset 0 0 0 1.5px currentColor' },
    soft:  { ...base, background: `color-mix(in oklch, ${color} 12%, white)`, color },
  };
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseDown={e => !disabled && (e.currentTarget.style.transform = 'translateY(1px)')}
      onMouseUp={e => (e.currentTarget.style.transform = 'translateY(0)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
      style={{ ...styles[variant], ...style }}
    >
      {children}
    </button>
  );
}

function ProgressBar({ value, max, color = 'oklch(0.78 0.16 75)' }) {
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

// Toast
function Toast({ msg, color = 'oklch(0.55 0.18 145)' }) {
  if (!msg) return null;
  return (
    <div style={{
      position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
      background: color, color: 'white', padding: '10px 18px', borderRadius: 999,
      fontWeight: 600, fontSize: 14, zIndex: 9999,
      boxShadow: '0 12px 30px -10px rgba(0,0,0,0.4)',
      animation: 'toastIn .35s ease',
    }}>{msg}</div>
  );
}

window.PaperCard = PaperCard;
window.Pill = Pill;
window.Btn = Btn;
window.ProgressBar = ProgressBar;
window.Toast = Toast;
window.AXE_COLORS = AXE_COLORS;
