(() => {
  'use strict';
  const translations = window.PORTFOLIO_TRANSLATIONS;
  const page = document.body.dataset.page;
  const base = document.body.dataset.base || './';
  const prefix = {home: 'home', learnercue: 'lc', pisa2022: 'pisa', imprint: 'imprint', privacy: 'privacy'}[page];
  const storageKey = 'tony-willert-portfolio-language';
  let language = 'en';
  const query = new URL(location.href).searchParams.get('lang');
  let stored = null;
  try { stored = localStorage.getItem(storageKey); } catch (_) {}
  language = ['en', 'de'].includes(query) ? query : (['en', 'de'].includes(stored) ? stored : 'en');

  function setLanguage(next, updateURL) {
    if (!translations[next]) return;
    language = next;
    const strings = translations[next];
    document.documentElement.lang = next;
    document.title = strings[prefix + '.title'];
    document.querySelector('meta[name="description"]').content = strings[prefix + '.meta'];
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const value = strings[element.dataset.i18nHtml];
      if (typeof value === 'string') element.innerHTML = value.replaceAll('{{base}}', base);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
      element.alt = strings[element.dataset.i18nAlt];
    });
    document.querySelectorAll('[data-i18n-label]').forEach(element => {
      element.setAttribute('aria-label', strings[element.dataset.i18nLabel]);
    });
    document.querySelectorAll('[data-number]').forEach(element => {
      const digits = Number(element.dataset.digits);
      const options = {minimumFractionDigits: digits, maximumFractionDigits: digits};
      if (element.dataset.sign === 'true') options.signDisplay = 'always';
      element.textContent = new Intl.NumberFormat(next === 'de' ? 'de-DE' : 'en-GB', options).format(Number(element.dataset.number)) + element.dataset.unit;
    });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === next));
    });
    document.querySelectorAll('a[data-local]').forEach(link => {
      const url = new URL(base + link.dataset.local, location.href);
      url.searchParams.set('lang', next);
      link.href = url.href;
    });
    if (updateURL) {
      try { localStorage.setItem(storageKey, next); } catch (_) {}
      const url = new URL(location.href);
      url.searchParams.set('lang', next);
      history.replaceState(null, '', url);
    }
  }

  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language, true));
  });
  setLanguage(language, false);

  // Keep links to the previous one-page project sections useful.
  const legacyProjects = {'#learnercue': 'projects/learnercue/', '#pisa2022-gaming': 'projects/pisa2022/'};
  if (page === 'home' && legacyProjects[location.hash]) {
    const target = new URL(base + legacyProjects[location.hash], location.href);
    target.searchParams.set('lang', language);
    location.replace(target.href);
  }
})();
