/**
 * Shared newsletter subscription logic for Netlify/Vercel serverless functions.
 *
 * Environment variables:
 *   NEWSLETTER_PROVIDER  — mailchimp | brevo | convertkit
 *
 * Mailchimp:
 *   MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_SERVER (e.g. us21)
 *
 * Brevo:
 *   BREVO_API_KEY, BREVO_LIST_ID
 *
 * ConvertKit:
 *   CONVERTKIT_API_KEY, CONVERTKIT_FORM_ID
 */

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

async function subscribeWithMailchimp(email) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;
  const server = process.env.MAILCHIMP_SERVER;

  if (!apiKey || !listId || !server) {
    throw new Error('Mailchimp environment variables are not configured');
  }

  const res = await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`, {
    method: 'POST',
    headers: {
      Authorization: `apikey ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email_address: email, status: 'subscribed' })
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    if (data.title === 'Member Exists') return { ok: true, alreadySubscribed: true };
    throw new Error(data.detail || data.title || 'Mailchimp subscription failed');
  }

  return { ok: true };
}

async function subscribeWithBrevo(email) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    throw new Error('Brevo environment variables are not configured');
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      listIds: [Number(listId)],
      updateEnabled: true
    })
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.message || 'Brevo subscription failed');
  }

  return { ok: true };
}

async function subscribeWithConvertKit(email) {
  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    throw new Error('ConvertKit environment variables are not configured');
  }

  const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ api_key: apiKey, email })
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.error || data.message || 'ConvertKit subscription failed');
  }

  return { ok: true };
}

async function subscribeEmail(email) {
  const normalized = email.trim().toLowerCase();

  if (!isValidEmail(normalized)) {
    const err = new Error('Invalid email address');
    err.statusCode = 400;
    throw err;
  }

  const provider = (process.env.NEWSLETTER_PROVIDER || 'mailchimp').toLowerCase();

  switch (provider) {
    case 'mailchimp':
      return subscribeWithMailchimp(normalized);
    case 'brevo':
      return subscribeWithBrevo(normalized);
    case 'convertkit':
      return subscribeWithConvertKit(normalized);
    default:
      throw new Error(`Unknown newsletter provider: ${provider}`);
  }
}

module.exports = { subscribeEmail, isValidEmail };
