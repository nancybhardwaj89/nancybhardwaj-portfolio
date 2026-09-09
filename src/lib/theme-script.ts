/**
 * Runs synchronously in <head>, before first paint.
 *
 * This has to be a blocking inline script: if the theme class were applied
 * from React after hydration, every dark-mode visitor would see a white flash
 * on load. Kept deliberately tiny, and wrapped in try/catch because reading
 * localStorage throws outright in some privacy modes.
 */
export const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var isDark = stored === 'dark' ||
      (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;
