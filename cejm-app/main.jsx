// Entry point — CEJM App
function CejmApp() {
  const [state, setState] = React.useState(() => window.CejmStore.load());
  const [mode, setMode]   = React.useState('hub');
  const [aspect, setAspect] = React.useState('eco');
  const [toast, setToast] = React.useState(null);

  React.useEffect(() => { window.CejmStore.save(state); }, [state]);

  function updateState(ns, msg, color) {
    setState(ns);
    if (msg) {
      setToast({ msg, color });
      setTimeout(() => setToast(null), 2600);
    }
  }

  const back = () => setMode('hub');

  return (
    <>
      {mode === 'hub'      && <CejmHub      state={state} setMode={setMode} setAspect={setAspect} />}
      {mode === 'themes'   && <CejmThemesView state={state} updateState={updateState} aspect={aspect} setAspect={setAspect} back={back} />}
      {mode === 'flash'    && <CejmFlashView  state={state} updateState={updateState} back={back} />}
      {mode === 'quiz'     && <CejmQuizView   state={state} updateState={updateState} back={back} />}
      {mode === 'matching' && <CejmMatchingView state={state} updateState={updateState} back={back} />}
      {mode === 'essai'    && <CejmEssaiView  back={back} />}
      {mode === 'docs'     && <CejmDocsView   back={back} />}
      <CejmToast msg={toast?.msg} color={toast?.color} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CejmApp />);
