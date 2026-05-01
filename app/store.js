// Storage + scoring utilities
window.RevStore = (() => {
  const KEY = 'revision_homme_animal_v1';
  const defaults = {
    xp: 0,
    streak: 0,
    lastDay: null,
    badges: [],
    visited: { axe1: false, axe2: false, axe3: false },
    bestMatching: {},
    fillStats: {},
    chronoStats: { played: 0, best: 0 }
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
  return { load, save, reset, bumpStreak, todayStr };
})();
