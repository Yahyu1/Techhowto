(function () {
  const placeholders = {
    home: 'Search AI tools, tutorials, articles...',
    'ai-tools': 'Search AI Tools...',
    blog: 'Search articles...',
    'windows-fixes': 'Search Windows Fixes...',
    'android-guides': 'Search Android Guides...',
    default: 'Search TechHowTo...'
  };

  function initSearch() {
    const wrap = document.querySelector('.search-wrap');
    if (!wrap) return;

    const input = wrap.querySelector('.search-input');
    const results = wrap.querySelector('.search-results');
    const page = document.body.dataset.page || 'default';

    input.placeholder = placeholders[page] || placeholders.default;
    const index = window.TechHowToData?.searchIndex() || [];

    let debounce;
    input.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => render(input.value.trim(), results, index), 120);
    });

    input.addEventListener('focus', () => {
      if (input.value.trim()) render(input.value.trim(), results, index);
    });

    document.addEventListener('click', e => {
      if (!wrap.contains(e.target)) results.hidden = true;
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        results.hidden = true;
        input.blur();
      }
    });
  }

  function render(query, container, index) {
    if (!query) {
      container.hidden = true;
      container.innerHTML = '';
      return;
    }

    const q = query.toLowerCase();
    const matches = index.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
    ).slice(0, 8);

    if (!matches.length) {
      container.innerHTML = '<div class="search-empty">No results found</div>';
      container.hidden = false;
      return;
    }

    const typeLabel = { tool: 'AI Tool', article: 'Article', tutorial: 'Tutorial', page: 'Page' };
    container.innerHTML = matches.map(m => `
      <a class="search-result" href="${m.url}">
        <span class="search-result-type">${typeLabel[m.type] || m.type}</span>
        <strong>${highlight(m.title, query)}</strong>
        <span class="search-result-excerpt">${m.excerpt}</span>
      </a>
    `).join('');
    container.hidden = false;
  }

  function highlight(text, query) {
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    return text.replace(re, '<mark>$1</mark>');
  }

  document.addEventListener('DOMContentLoaded', initSearch);
})();
