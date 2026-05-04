// Main app — routing & state
function App() {
  const [state, setState] = React.useState(() => window.RevStore.load());
  const [mode, setMode] = React.useState('hub');
  const [axe, setAxe] = React.useState('axe1');
  const [toast, setToast] = React.useState(null);

  React.useEffect(() => { window.RevStore.save(state); }, [state]);

  function updateState(ns, msg, color) {
    setState(ns);
    if (msg) {
      setToast({ msg, color });
      setTimeout(() => setToast(null), 2400);
    }
  }

  const back = () => setMode('hub');

  return (
    <>
      {mode === 'hub'          && <Hub state={state} setMode={setMode} setAxe={setAxe} />}
      {mode === 'axes'         && <AxesView state={state} updateState={updateState} axe={axe} setAxe={setAxe} back={back} />}
      {mode === 'chrono'       && <ChronoView state={state} updateState={updateState} back={back} />}
      {mode === 'matching'     && <MatchingView state={state} updateState={updateState} back={back} />}
      {mode === 'fill'         && <FillView state={state} updateState={updateState} back={back} />}
      {mode === 'flash'        && <FlashView state={state} updateState={updateState} back={back} />}
      {mode === 'essai'        && <EssaiView back={back} />}
      {mode === 'resources'    && <ResourcesView back={back} />}
      {mode === 'cultureQuiz'  && <CultureQuizView state={state} updateState={updateState} back={back} />}
      {mode === 'methodo'      && <MethodoGameView state={state} updateState={updateState} back={back} />}
      <Toast msg={toast?.msg} color={toast?.color} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
