window.TechHowToData = {
  tools: [
    { id: 'chatgpt', name: 'ChatGPT', category: 'chatbots', icon: '💬', bestFor: 'General Use', free: true, rating: 9.6, url: 'https://chatgpt.com', page: 'ai-tools.html#chatgpt', tags: ['generalist', 'multimodal', 'coding'] },
    { id: 'claude', name: 'Claude', category: 'chatbots', icon: '📝', bestFor: 'Writing', free: true, rating: 9.5, url: 'https://claude.ai', page: 'ai-tools.html#claude4', tags: ['writing', 'coding', 'analysis'] },
    { id: 'grok', name: 'Grok', category: 'chatbots', icon: '🧠', bestFor: 'Reasoning', free: false, rating: 9.8, url: 'https://grok.com', page: 'ai-tools.html#grok4', tags: ['reasoning', 'research', 'math'] },
    { id: 'gemini', name: 'Gemini', category: 'chatbots', icon: '✨', bestFor: 'Google Ecosystem', free: true, rating: 9.4, url: 'https://gemini.google.com', page: 'ai-tools.html#gemini', tags: ['multimodal', 'search', 'productivity'] },
    { id: 'cursor', name: 'Cursor', category: 'coding', icon: '⌨️', bestFor: 'Coding', free: true, rating: 9.4, url: 'https://cursor.com', page: 'ai-tools.html#cursor', tags: ['ide', 'autocomplete', 'refactoring'] },
    { id: 'perplexity', name: 'Perplexity', category: 'chatbots', icon: '🔎', bestFor: 'Research', free: true, rating: 9.3, url: 'https://www.perplexity.ai', page: 'ai-tools.html#perplexity', tags: ['citations', 'web', 'research'] },
    { id: 'flux', name: 'Flux.1', category: 'image', icon: '🎨', bestFor: 'Photoreal Images', free: false, rating: 9.7, url: 'https://blackforestlabs.ai', page: 'ai-tools.html#flux1', tags: ['image', 'photoreal'] },
    { id: 'midjourney', name: 'Midjourney', category: 'image', icon: '🖼️', bestFor: 'Artistic Images', free: false, rating: 9.4, url: 'https://www.midjourney.com', page: 'ai-tools.html#midjourney', tags: ['art', 'creative'] },
    { id: 'runway', name: 'Runway', category: 'video', icon: '🎬', bestFor: 'AI Video', free: false, rating: 9.2, url: 'https://runwayml.com', page: 'ai-tools.html#runway', tags: ['video', 'editing'] },
    { id: 'elevenlabs', name: 'ElevenLabs', category: 'voice', icon: '🎙️', bestFor: 'Voice & TTS', free: true, rating: 9.3, url: 'https://elevenlabs.io', page: 'ai-tools.html#elevenlabs', tags: ['voice', 'tts', 'audio'] },
    { id: 'notion-ai', name: 'Notion AI', category: 'productivity', icon: '📋', bestFor: 'Notes & Docs', free: false, rating: 9.1, url: 'https://www.notion.so/product/ai', page: 'ai-tools.html#notion-ai', tags: ['notes', 'workspace'] },
    { id: 'copilot', name: 'Microsoft Copilot', category: 'productivity', icon: '🪟', bestFor: 'Office Work', free: true, rating: 9.0, url: 'https://copilot.microsoft.com', page: 'ai-tools.html#copilot', tags: ['office', 'windows'] }
  ],

  categories: [
    { id: 'chatbots', label: 'AI Chatbots', icon: '💬' },
    { id: 'image', label: 'AI Image Generators', icon: '🎨' },
    { id: 'video', label: 'AI Video Generators', icon: '🎬' },
    { id: 'coding', label: 'AI Coding Tools', icon: '⌨️' },
    { id: 'voice', label: 'AI Voice Tools', icon: '🎙️' },
    { id: 'productivity', label: 'AI Productivity Tools', icon: '📋' }
  ],

  articles: [
    { id: 'best-ai-tools-2026', title: 'Best AI Tools 2026', excerpt: 'Our top picks for chatbots, coding assistants, image generators, and research tools this year.', url: 'blog/best-ai-tools-2026.html', category: 'AI Tools', date: '2026-05-28', author: 'Alex Chen', readTime: '12 min' },
    { id: 'chatgpt-vs-claude', title: 'ChatGPT vs Claude', excerpt: 'Head-to-head comparison on writing, coding, reasoning, pricing, and which to choose.', url: 'blog/chatgpt-vs-claude.html', category: 'Comparisons', date: '2026-05-20', author: 'Alex Chen', readTime: '10 min' },
    { id: 'windows-11-fixes', title: 'Windows 11 Fixes', excerpt: 'Solve update errors, slow boot, disk space issues, and system file corruption.', url: 'blog/windows-11-fixes.html', category: 'Windows', date: '2026-05-15', author: 'Jordan Lee', readTime: '8 min' },
    { id: 'android-tips', title: 'Android Tips', excerpt: 'Battery life, storage cleanup, privacy settings, and performance tweaks.', url: 'blog/android-tips.html', category: 'Android', date: '2026-05-10', author: 'Jordan Lee', readTime: '7 min' },
    { id: 'ai-news', title: 'AI News Roundup', excerpt: 'Latest model releases, pricing changes, and what they mean for everyday users.', url: 'blog/ai-news.html', category: 'News', date: '2026-06-01', author: 'Alex Chen', readTime: '6 min' }
  ],

  tutorials: [
    { title: 'Fix Windows Update Stuck at 0%', url: 'windows-fixes.html#update-stuck', category: 'Windows', popular: true },
    { title: 'Repair Corrupted System Files', url: 'windows-fixes.html#sfc-dism', category: 'Windows', popular: true },
    { title: 'Improve Android Battery Life', url: 'android-guides.html#battery', category: 'Android', popular: true },
    { title: 'AI Prompting Tips', url: 'ai-tools.html#ai-tips', category: 'AI', popular: true },
    { title: 'Free Up Disk Space on Windows', url: 'windows-fixes.html#disk-space', category: 'Windows', popular: false },
    { title: 'Android Privacy Basics', url: 'android-guides.html#privacy', category: 'Android', popular: false }
  ],

  comparisonTable: [
    { tool: 'ChatGPT', bestFor: 'General Use', free: 'Yes', rating: 9.6, url: 'https://chatgpt.com' },
    { tool: 'Claude', bestFor: 'Writing', free: 'Yes', rating: 9.5, url: 'https://claude.ai' },
    { tool: 'Cursor', bestFor: 'Coding', free: 'Yes', rating: 9.4, url: 'https://cursor.com' },
    { tool: 'Grok', bestFor: 'Reasoning', free: 'Paid', rating: 9.8, url: 'https://grok.com' },
    { tool: 'Gemini', bestFor: 'Google Users', free: 'Yes', rating: 9.4, url: 'https://gemini.google.com' },
    { tool: 'Perplexity', bestFor: 'Research', free: 'Yes', rating: 9.3, url: 'https://www.perplexity.ai' }
  ],

  searchIndex() {
    const items = [];
    this.tools.forEach(t => items.push({ type: 'tool', title: t.name, excerpt: t.bestFor + ' — ' + t.tags.join(', '), url: t.page, keywords: [t.name, t.category, ...t.tags].join(' ') }));
    this.articles.forEach(a => items.push({ type: 'article', title: a.title, excerpt: a.excerpt, url: a.url, keywords: [a.title, a.category, a.author].join(' ') }));
    this.tutorials.forEach(t => items.push({ type: 'tutorial', title: t.title, excerpt: t.category + ' tutorial', url: t.url, keywords: [t.title, t.category, 'tutorial', 'guide'].join(' ') }));
    items.push({ type: 'page', title: 'Windows Fixes', excerpt: 'Step-by-step Windows troubleshooting guides', url: 'windows-fixes.html', keywords: 'windows fix update sfc dism boot disk' });
    items.push({ type: 'page', title: 'Android Guides', excerpt: 'Battery, storage, and privacy tips for Android', url: 'android-guides.html', keywords: 'android battery storage privacy' });
    items.push({ type: 'page', title: 'About TechHowTo', excerpt: 'Who we are and how we review tools', url: 'about.html', keywords: 'about author review methodology' });
    items.push({ type: 'page', title: 'Contact', excerpt: 'Get in touch with the TechHowTo team', url: 'contact.html', keywords: 'contact email support' });
    return items;
  }
};
