(function () {
  async function subscribe(email) {
    const cfg = window.TechHowToConfig?.newsletter;
    if (!cfg) throw new Error('Newsletter not configured');

    if (cfg.provider === 'demo') {
      await new Promise(r => setTimeout(r, 600));
      localStorage.setItem('techhowto-newsletter', email);
      return { ok: true, demo: true };
    }

    if (cfg.provider === 'mailchimp') {
      return submitHiddenForm(cfg.mailchimp.actionUrl, {
        [cfg.mailchimp.emailFieldName]: email,
        [cfg.mailchimp.honeypotField]: ''
      });
    }

    if (cfg.provider === 'brevo') {
      return submitHiddenForm(cfg.brevo.actionUrl, {
        [cfg.brevo.emailFieldName]: email
      });
    }

    if (cfg.provider === 'convertkit') {
      const res = await fetch(`https://api.convertkit.com/v3/forms/${cfg.convertkit.formId}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ api_key: cfg.convertkit.apiKey, email })
      });
      if (!res.ok) throw new Error('ConvertKit subscription failed');
      return { ok: true };
    }

    throw new Error('Unknown newsletter provider');
  }

  function submitHiddenForm(action, fields) {
    return new Promise((resolve, reject) => {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = action;
      form.target = 'newsletter-frame';
      form.style.display = 'none';

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      let frame = document.getElementById('newsletter-frame');
      if (!frame) {
        frame = document.createElement('iframe');
        frame.name = 'newsletter-frame';
        frame.id = 'newsletter-frame';
        frame.hidden = true;
        document.body.appendChild(frame);
      }

      frame.onload = () => {
        form.remove();
        resolve({ ok: true });
      };
      frame.onerror = () => {
        form.remove();
        reject(new Error('Form submission failed'));
      };

      document.body.appendChild(form);
      form.submit();
      setTimeout(() => resolve({ ok: true }), 1500);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.newsletter-form').forEach(form => {
      form.addEventListener('submit', async e => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const btn = form.querySelector('.fnl-btn');
        const email = input?.value?.trim();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          input?.focus();
          return;
        }

        const original = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Subscribing...';

        try {
          const result = await subscribe(email);
          btn.textContent = result.demo ? '✓ Saved (demo mode)' : '✓ Subscribed!';
          btn.style.background = 'linear-gradient(135deg,#10b981,#059669)';
          input.value = '';
        } catch (err) {
          btn.textContent = 'Try again';
          btn.disabled = false;
          console.error(err);
        }

        setTimeout(() => {
          btn.textContent = original;
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      });
    });
  });
})();
