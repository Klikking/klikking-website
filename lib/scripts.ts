// Inline, blocking scripts. Kept as plain strings so they can run via
// next/script strategy="beforeInteractive" and avoid a flash of the wrong
// theme (must run before first paint, so it can't be a React effect).

export const THEME_INIT_JS = `
(function(){
  try {
    var saved = localStorage.getItem('klikking_theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {}
})();
`.trim();
