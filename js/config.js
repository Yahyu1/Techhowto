/**
 * TechHowTo site configuration
 * Copy this file and fill in your newsletter provider details.
 */
window.TechHowToConfig = {
  siteUrl: 'https://techhowto.com',
  ogImage: 'https://techhowto.com/images/og-default.png',

  newsletter: {
    // Set to true when ready to launch newsletter signup
    enabled: false,

    // Options: 'demo' | 'serverless' | 'mailchimp' | 'brevo' | 'convertkit'
    provider: 'demo',

    // Use with Netlify or Vercel serverless (set provider to 'serverless')
    serverless: {
      // Vercel: '/api/subscribe'  |  Netlify: '/.netlify/functions/subscribe'
      endpoint: '/api/subscribe'
    },

    mailchimp: {
      actionUrl: 'https://YOUR_DC.list-manage.com/subscribe/post?u=YOUR_USER_ID&id=YOUR_LIST_ID',
      emailFieldName: 'EMAIL',
      honeypotField: 'b_YOUR_HONEYPOT'
    },

    brevo: {
      actionUrl: 'https://YOUR_BREVO_FORM_ACTION_URL',
      emailFieldName: 'email'
    },

    convertkit: {
      formId: 'YOUR_FORM_ID',
      apiKey: 'YOUR_PUBLIC_API_KEY'
    }
  },

  social: {
    twitter: 'https://twitter.com/techhowto',
    youtube: 'https://youtube.com/@techhowto',
    github: 'https://github.com/techhowto',
    discord: 'https://discord.gg/techhowto',
    rss: '/blog.html'
  },

  contactEmail: 'hello@techhowto.com'
};

if (window.TechHowToConfig.newsletter.enabled) {
  document.documentElement.classList.remove('newsletter-off');
} else {
  document.documentElement.classList.add('newsletter-off');
}
