// Decorative SVG illustrations — abstract, geometric, no AI-slop
window.SVGIllu = {
  // Animal silhouettes — minimal, geometric
  elephant: (color = 'currentColor') => `<svg viewBox="0 0 100 80" fill="none"><path d="M15 60 Q15 30 35 25 Q60 18 75 30 Q88 38 85 55 L80 65 L70 65 L70 55 L60 55 L60 65 L50 65 L50 55 Q40 55 35 60 L30 65 L20 65 Z M75 35 Q85 38 88 30" stroke="${color}" stroke-width="2.5" fill="${color}" fill-opacity="0.08" stroke-linejoin="round"/><circle cx="68" cy="35" r="2" fill="${color}"/></svg>`,
  cat: (color = 'currentColor') => `<svg viewBox="0 0 100 80" fill="none"><path d="M25 60 Q25 35 40 30 L35 18 L48 28 Q55 26 60 28 L72 18 L68 30 Q80 35 80 55 Q80 65 70 68 L35 68 Q25 68 25 60 Z" stroke="${color}" stroke-width="2.5" fill="${color}" fill-opacity="0.08" stroke-linejoin="round"/><circle cx="44" cy="44" r="2" fill="${color}"/><circle cx="60" cy="44" r="2" fill="${color}"/><path d="M48 52 Q52 56 56 52" stroke="${color}" stroke-width="2" stroke-linecap="round"/></svg>`,
  bird: (color = 'currentColor') => `<svg viewBox="0 0 100 80" fill="none"><path d="M20 50 Q35 25 60 30 Q80 33 85 45 L75 50 L65 48 L72 60 L60 55 L55 65 L48 55 L40 60 L42 50 L25 55 Z" stroke="${color}" stroke-width="2.5" fill="${color}" fill-opacity="0.08" stroke-linejoin="round"/><circle cx="78" cy="42" r="1.8" fill="${color}"/></svg>`,
  fish: (color = 'currentColor') => `<svg viewBox="0 0 100 80" fill="none"><path d="M10 40 L25 25 L25 55 Z M25 40 Q40 22 65 30 Q85 38 85 45 Q85 52 65 55 Q40 60 25 45 Z" stroke="${color}" stroke-width="2.5" fill="${color}" fill-opacity="0.08" stroke-linejoin="round"/><circle cx="72" cy="40" r="2" fill="${color}"/></svg>`,
  wolf: (color = 'currentColor') => `<svg viewBox="0 0 100 80" fill="none"><path d="M22 60 L18 35 L28 28 L32 18 L40 28 L55 28 L62 18 L66 30 L78 38 Q82 50 78 60 Q70 68 50 68 Q30 68 22 60 Z" stroke="${color}" stroke-width="2.5" fill="${color}" fill-opacity="0.08" stroke-linejoin="round"/><circle cx="38" cy="46" r="1.8" fill="${color}"/><circle cx="58" cy="46" r="1.8" fill="${color}"/><path d="M44 56 L48 60 L52 56" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  butterfly: (color = 'currentColor') => `<svg viewBox="0 0 100 80" fill="none"><path d="M50 25 L50 65" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/><path d="M50 30 Q30 15 18 30 Q12 45 25 55 Q40 55 50 45 Z M50 30 Q70 15 82 30 Q88 45 75 55 Q60 55 50 45 Z M50 45 Q35 50 25 60 Q35 70 48 60 Z M50 45 Q65 50 75 60 Q65 70 52 60 Z" stroke="${color}" stroke-width="2.5" fill="${color}" fill-opacity="0.10" stroke-linejoin="round"/></svg>`,
  // Geometric ornaments
  sun: (color = 'currentColor') => `<svg viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="10" stroke="${color}" stroke-width="2" fill="${color}" fill-opacity="0.15"/>${[0,45,90,135,180,225,270,315].map(a => `<line x1="30" y1="30" x2="${30+22*Math.cos(a*Math.PI/180)}" y2="${30+22*Math.sin(a*Math.PI/180)}" stroke="${color}" stroke-width="2" stroke-linecap="round"/>`).join('')}</svg>`,
  spiral: (color = 'currentColor') => `<svg viewBox="0 0 60 60" fill="none"><path d="M30 30 Q30 18 42 18 Q54 18 54 30 Q54 48 30 48 Q12 48 12 24 Q12 6 36 6 Q60 6 60 36" stroke="${color}" stroke-width="2.5" stroke-linecap="round" fill="none"/></svg>`,
  arch: (color = 'currentColor') => `<svg viewBox="0 0 60 60" fill="none"><path d="M10 50 Q10 12 30 12 Q50 12 50 50" stroke="${color}" stroke-width="2.5" fill="${color}" fill-opacity="0.08" stroke-linecap="round"/><line x1="10" y1="50" x2="50" y2="50" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  // Decorative banner
  banner: (color = 'currentColor', text = '') => `<svg viewBox="0 0 200 60"><rect x="20" y="15" width="160" height="30" stroke="${color}" stroke-width="2" fill="${color}" fill-opacity="0.10"/><polygon points="0,30 20,15 20,45" fill="${color}" fill-opacity="0.10" stroke="${color}" stroke-width="2"/><polygon points="200,30 180,15 180,45" fill="${color}" fill-opacity="0.10" stroke="${color}" stroke-width="2"/></svg>`,
  // Patterns
  paw: (color = 'currentColor') => `<svg viewBox="0 0 60 60" fill="none"><circle cx="20" cy="40" r="6" fill="${color}" fill-opacity="0.20"/><circle cx="40" cy="40" r="6" fill="${color}" fill-opacity="0.20"/><circle cx="14" cy="22" r="4" fill="${color}" fill-opacity="0.20"/><circle cx="30" cy="16" r="4" fill="${color}" fill-opacity="0.20"/><circle cx="46" cy="22" r="4" fill="${color}" fill-opacity="0.20"/><ellipse cx="30" cy="46" rx="14" ry="10" fill="${color}" fill-opacity="0.20"/></svg>`,
  // Decorative axe glyphs
  axeGlyph1: (color = 'currentColor') => `<svg viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="50" stroke="${color}" stroke-width="2" fill="${color}" fill-opacity="0.06"/><circle cx="60" cy="60" r="35" stroke="${color}" stroke-width="1.5" fill="none" stroke-dasharray="3 4"/><path d="M60 30 L75 60 L60 90 L45 60 Z" fill="${color}" fill-opacity="0.20" stroke="${color}" stroke-width="2"/><circle cx="60" cy="60" r="6" fill="${color}"/></svg>`,
  axeGlyph2: (color = 'currentColor') => `<svg viewBox="0 0 120 120" fill="none"><polygon points="60,15 105,40 105,80 60,105 15,80 15,40" stroke="${color}" stroke-width="2" fill="${color}" fill-opacity="0.06"/><circle cx="60" cy="60" r="22" stroke="${color}" stroke-width="2" fill="${color}" fill-opacity="0.15"/><circle cx="60" cy="60" r="8" fill="${color}"/><line x1="60" y1="38" x2="60" y2="15" stroke="${color}" stroke-width="2"/><line x1="60" y1="82" x2="60" y2="105" stroke="${color}" stroke-width="2"/><line x1="38" y1="60" x2="15" y2="60" stroke="${color}" stroke-width="2"/><line x1="82" y1="60" x2="105" y2="60" stroke="${color}" stroke-width="2"/></svg>`,
  axeGlyph3: (color = 'currentColor') => `<svg viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="48" stroke="${color}" stroke-width="2" fill="${color}" fill-opacity="0.06"/>${[0,60,120,180,240,300].map(a => `<circle cx="${60+30*Math.cos(a*Math.PI/180)}" cy="${60+30*Math.sin(a*Math.PI/180)}" r="6" fill="${color}" fill-opacity="0.30" stroke="${color}" stroke-width="2"/>`).join('')}<circle cx="60" cy="60" r="10" fill="${color}"/>${[0,60,120,180,240,300].map(a => `<line x1="60" y1="60" x2="${60+30*Math.cos(a*Math.PI/180)}" y2="${60+30*Math.sin(a*Math.PI/180)}" stroke="${color}" stroke-width="1.5"/>`).join('')}</svg>`,
};

// Type-icon mapping for chronology entries
window.TYPE_ICON = {
  art: '🖼️',
  litterature: '📖',
  cinema: '🎬',
  science: '🔬',
  philo: '💭',
  droit: '⚖️',
  event: '⌛',
  culture: '🏛️',
};

// Decorative pattern background
window.PaperBg = ({ color, density = 0.05 }) => {
  return `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><circle cx='30' cy='30' r='1.5' fill='${color}' fill-opacity='${density}'/></svg>`)}`;
};
