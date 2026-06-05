(function () {
  /* Reveal on scroll */
  const revealEls = document.querySelectorAll(
    '.tool-card, .content-card, .faq-item, .section-title, .section-subtitle, .footer-wrap, .blog-card, .trend-card, .compare-table-wrap, .author-card'
  );
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  /* Ripple on primary buttons */
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-el');
      Object.assign(ripple.style, {
        width: size + 'px', height: size + 'px',
        left: (e.clientX - rect.left - size / 2) + 'px',
        top: (e.clientY - rect.top - size / 2) + 'px'
      });
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  /* Scroll to top */
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.addEventListener('scroll', () => scrollBtn.classList.toggle('show', window.scrollY > 400));
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* Mobile nav toggle */
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('header nav');
  navToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });

  /* Category filter tabs (AI tools page) */
  document.querySelectorAll('.category-tabs').forEach(tabBar => {
    const cards = document.querySelectorAll(tabBar.dataset.target + ' .tool-card');
    tabBar.querySelectorAll('.cat-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        tabBar.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.dataset.category;
        cards.forEach(card => {
          card.style.display = !cat || cat === 'all' || card.dataset.category === cat ? '' : 'none';
        });
      });
    });
  });

  /* Lazy load images */
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.addEventListener('load', () => img.classList.add('loaded'));
  });

  /* Active nav link */
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[data-nav]').forEach(a => {
    if (a.getAttribute('href') === current || (current === '' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* Footer stat animation */
  document.querySelectorAll('.fstat-num').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.style.transform = 'scale(1.18)';
          setTimeout(() => { el.style.transform = ''; el.style.transition = 'transform 0.4s ease'; }, 400);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    obs.observe(el);
  });

  /* Tool card tilt */
  document.querySelectorAll('.tool-card.tilt').forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const r = this.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      this.style.transform = `translateY(-8px) scale(1.02) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });
    card.addEventListener('mouseleave', function () { this.style.transform = ''; });
  });
})();
