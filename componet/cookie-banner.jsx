'use client';

import { useEffect } from 'react';
import 'cookieconsent/build/cookieconsent.min.css';

export default function CookieBanner() {
  useEffect(() => {
    // Check if user has already consented
    const userConsent = document.cookie.split(';').some((item) =>
      item.trim().startsWith('cookie_consent=')
    );

    if (!userConsent) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js';
      script.async = true;

      script.onload = () => {
        if (window.cookieconsent) {
          window.cookieconsent.initialise({
            palette: {
              popup: { background: '#000' },
              button: { background: '#f1d600' },
            },
            theme: 'classic',
            type: 'opt-in',
            content: {
              message: 'We use cookies to ensure the best experience.',
              allow: 'Got it!',
              link: 'Learn more',
              href: '/privacy-policy',
            },
            onStatusChange: function (status) {
              if (this.hasConsented()) {
                document.cookie = 'cookie_consent=true; path=/; max-age=31536000';
                document.cookie = 'tracking_id=abc123; path=/; max-age=31536000';
              }
            },
          });
        }
      };

      document.body.appendChild(script);
    } else {
      console.log('User has already consented to cookies.');
    }
  }, []);

  return null;
}
