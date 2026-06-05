/**
 * TechHowTo site configuration
 * Copy this file and fill in your newsletter provider details.
 */
window.TechHowToConfig = {
  newsletter: {
    // Options: 'mailchimp' | 'brevo' | 'convertkit' | 'demo'
    provider: 'demo',

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
