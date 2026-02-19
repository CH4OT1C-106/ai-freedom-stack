// Netlify Function — proxies newsletter signup to beehiiv API
// API key stays server-side in Netlify env vars (BEEHIIV_API_KEY)
// Publication ID is public (embedded in forms anyway)

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { email } = JSON.parse(event.body);
    
    if (!email || !email.includes('@')) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Valid email required' }) };
    }

    const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
    const PUB_ID = 'pub_c271e2f6-3114-4e83-8301-73bfc9231fb6';

    const response = await fetch(`https://api.beehiiv.com/v2/publications/${PUB_ID}/subscriptions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: 'freedomstackai.com',
        utm_medium: 'website',
      }),
    });

    if (response.ok) {
      return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    } else {
      const err = await response.text();
      console.error('beehiiv error:', err);
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Subscription failed' }) };
    }
  } catch (e) {
    console.error('Function error:', e);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Server error' }) };
  }
};
