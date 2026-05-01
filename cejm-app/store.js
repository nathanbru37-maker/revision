// LocalStorage store — CEJM
window.CejmStore = (() => {
  const KEY = 'revision_cejm_bts_v1';
  const defaults = {
    xp: 0,
    streak: 0,
    lastDay: null,
    badges: [],
    visited: { eco: false, droit: false, mgmt: false },
    quizBest: 0,
    flashSessions: 0,
    matchDone: false,
  };
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return { ...defaults };
      return { ...defaults, ...JSON.parse(raw) };
    } catch (e) { return { ...defaults }; }
  }
  function save(s) { localStorage.setItem(KEY, JSON.stringify(s)); }
  function reset() { localStorage.removeItem(KEY); }
  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  }
  function bumpStreak(s) {
    const today = todayStr();
    if (s.lastDay === today) return s;
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
    const yStr = `${yesterday.getFullYear()}-${yesterday.getMonth()+1}-${yesterday.getDate()}`;
    if (s.lastDay === yStr) s.streak += 1;
    else s.streak = 1;
    s.lastDay = today;
    return s;
  }
  return { load, save, reset, bumpStreak };
})();
