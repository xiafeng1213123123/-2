const PREFERENCE = 'little-strengths:sound-muted:v1';
let muted = false, context, buffer, preparing, activeSource;
try { muted = localStorage.getItem(PREFERENCE) === 'true'; } catch {}

export function isSoundMuted() { return muted; }

export function setSoundMuted(value) {
  muted = Boolean(value);
  if (muted && activeSource) { try { activeSource.stop(); } catch {} }
  try { localStorage.setItem(PREFERENCE, String(muted)); } catch {}
}

export function prepareSelectionSound() {
  if (preparing) return preparing;
  preparing = (async () => {
    const response = await fetch(new URL('./assets/selection-click.wav', import.meta.url));
    if (!response.ok) throw new Error('selection sound');
    const data = await response.arrayBuffer();
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return; // Loading the file must not block browsers without Web Audio.
    context = new AudioContext();
    buffer = await context.decodeAudioData(data);
  })();
  return preparing;
}

export function playSelectionSound() {
  if (muted || !buffer || !context) return;
  // Called from the actual answer gesture; no autoplay or background music.
  const resumed = context.state === 'suspended' ? context.resume() : Promise.resolve();
  resumed.then(() => {
    if (muted) return;
    if (activeSource) { try { activeSource.stop(); } catch {} }
    const source = context.createBufferSource();
    const gain = context.createGain();
    source.buffer = buffer;
    gain.gain.value = 0.18;
    source.connect(gain).connect(context.destination);
    source.onended = () => { source.disconnect(); gain.disconnect(); if (activeSource === source) activeSource = null; };
    activeSource = source;
    source.start();
  }).catch(() => {}); // An audio restriction must never interrupt an answer.
}
