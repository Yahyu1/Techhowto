const { subscribeEmail } = require('../lib/subscribe');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    return res.status(204).set(corsHeaders).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).set(corsHeaders).json({ error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const result = await subscribeEmail(body?.email);
    return res.status(200).set(corsHeaders).json(result);
  } catch (err) {
    const status = err.statusCode || 500;
    return res.status(status).set(corsHeaders).json({ error: err.message || 'Subscription failed' });
  }
};
